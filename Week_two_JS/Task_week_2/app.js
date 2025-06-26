// we create array with five products
        const products = [
            {
                name: "Camiseta Deportiva",
                price: 45000,
                category: "Ropa"
            },
            {
                name: "Auriculares Bluetooth",
                price: 120000,
                category: "Tecnología"
            },
            {
                name: "Zapatos de Cuero",
                price: 99000,
                category: "Calzado"
            },
            {
                name: "Termo de Agua",
                price: 25000,
                category: "Accesorios"
            },
            {
                name: "Libro de JavaScript",
                price: 60000,
                category: "Libros"
            }
        ];

        // We call id to be able to make the button event and show products
        const btnShow = document.getElementById('mostrar-productos');
        const contPro = document.getElementById('contenedor-productos');

        // We add an event to display products in the html when the display button is clicked
        btnShow.addEventListener('click', () => {

            contPro.innerHTML = ``; // Clean container

            products.forEach(product => {
                const div = document.createElement('div');
                div.classList.add('producto');
                div.innerHTML = ` 
                    <h3>${product.name}</h3>
                    <p><strong>Precio:</strong> $${product.price}</p>
                    <p><strong>Categoría:</strong> ${product.category}</p>
                `;
                contPro.appendChild(div);
            });
        });