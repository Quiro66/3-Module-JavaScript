const productListDiv = document.getElementById('productList');
const messageDiv = document.getElementById('message');

// Función para mostrar mensajes al usuario
function showMessage(msg, type = 'success') {
    messageDiv.textContent = msg;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

// Función para validar datos del producto
function validarProducto(producto) {
    if (!producto.nombre && !producto.precio) {
        showMessage("Debe proporcionar al menos un nombre o un precio.", "error");
        return false;
    }
    if (producto.nombre && typeof producto.nombre !== "string") {
        showMessage("El nombre del producto no es válido.", "error");
        return false;
    }
    if (producto.precio && typeof producto.precio !== "number") {
        showMessage("El precio del producto debe ser un número válido.", "error");
        return false;
    }
    return true;
}

// Función para renderizar los productos en el HTML
function renderProducts(products) {
    productListDiv.innerHTML = ''; // Limpiar la lista actual
    if (products.length === 0) {
        productListDiv.innerHTML = '<p>No hay productos disponibles.</p>';
        return;
    }
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>ID: ${product.id}</p>
            <p>Precio: $${product.precio}</p>
            <button class="edit" onclick="editProduct(${product.id}, '${product.nombre}', ${product.precio})">Editar</button>
            <button onclick="deleteProduct(${product.id})">Eliminar</button>
        `;
        productListDiv.appendChild(productItem);
    });
}

// 1. Lectura de Datos (GET): Obtener todos los productos y mostrarlos
async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/productos');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Productos disponibles:", data);
        renderProducts(data);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        showMessage("Error al cargar los productos.", "error");
    }
}

// 2. Creación de Nuevos Datos (POST): Añadir un nuevo producto
async function handleAddProduct() {
    const newProductNameInput = document.getElementById('newProductName');
    const newProductPriceInput = document.getElementById('newProductPrice');

    const nombre = newProductNameInput.value.trim();
    const precio = parseFloat(newProductPriceInput.value);

    // Obtener el último ID y sumar 1 para el nuevo producto
    // Esto es una forma simple para JSON Server; en un backend real, la DB gestionaría IDs
    const currentProducts = await (await fetch('http://localhost:3000/productos')).json();
    const newId = currentProducts.length > 0 ? Math.max(...currentProducts.map(p => p.id)) + 1 : 1;

    const nuevoProducto = { id: newId, nombre, precio };

    if (!validarProducto(nuevoProducto)) {
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Producto agregado:", data);
        showMessage(`Producto "${data.nombre}" agregado exitosamente.`);
        newProductNameInput.value = '';
        newProductPriceInput.value = '';
        getProducts(); // Refrescar la lista de productos
    } catch (error) {
        console.error("Error al agregar producto:", error);
        showMessage("Error al agregar el producto.", "error");
    }
}

// 3. Actualización de Datos (PUT): Modificar un producto existente
async function handleUpdateProduct() {
    const updateProductIdInput = document.getElementById('updateProductId');
    const updateProductNameInput = document.getElementById('updateProductName');
    const updateProductPriceInput = document.getElementById('updateProductPrice');

    const id = parseInt(updateProductIdInput.value);
    const nombre = updateProductNameInput.value.trim();
    const precio = parseFloat(updateProductPriceInput.value);

    // Crear un objeto con solo los campos que tienen valor
    const productoActualizado = {};
    if (nombre) productoActualizado.nombre = nombre;
    if (!isNaN(precio)) productoActualizado.precio = precio;

    if (Object.keys(productoActualizado).length === 0) {
        showMessage("Debe ingresar al menos un nombre o precio para actualizar.", "error");
        return;
    }

    // Validar solo los campos que se van a actualizar
    if (!validarProducto(productoActualizado)) {
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productoActualizado)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Producto actualizado:", data);
        showMessage(`Producto con ID ${data.id} actualizado exitosamente.`);
        updateProductIdInput.value = '';
        updateProductNameInput.value = '';
        updateProductPriceInput.value = '';
        getProducts(); // Refrescar la lista de productos
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        showMessage("Error al actualizar el producto.", "error");
    }
}

// Función para precargar los campos de actualización cuando se hace clic en "Editar"
function editProduct(id, nombre, precio) {
    document.getElementById('updateProductId').value = id;
    document.getElementById('updateProductName').value = nombre;
    document.getElementById('updateProductPrice').value = precio;
}


// 4. Eliminación de Datos (DELETE): Eliminar un producto
async function deleteProduct(id) { // Función llamada desde el botón de cada producto
    const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar el producto con ID ${id}?`);
    if (!confirmDelete) {
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("Producto eliminado");
        showMessage(`Producto con ID ${id} eliminado exitosamente.`);
        getProducts(); // Refrescar la lista de productos
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        showMessage("Error al eliminar el producto.", "error");
    }
}

// Función para manejar la eliminación desde el formulario
async function handleDeleteProduct() {
    const deleteProductIdInput = document.getElementById('deleteProductId');
    const id = parseInt(deleteProductIdInput.value);

    if (isNaN(id)) {
        showMessage("Por favor, introduce un ID de producto válido para eliminar.", "error");
        return;
    }
    await deleteProduct(id);
    deleteProductIdInput.value = '';
}

// Cargar productos cuando la página se carga
document.addEventListener('DOMContentLoaded', getProducts);