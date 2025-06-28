// Product storage
const products = {
    1: { id: 1, name: "Laptop", price: 1500 },
    2: { id: 2, name: "Mouse", price: 25 },
    3: { id: 3, name: "Keyboard", price: 50 }
};
let currentId = 4;

const setProducts = new Set(Object.values(products).map(p => p.name));
const mapProduct = new Map([
    ["Electronic", "Laptop"],
    ["Accessory", "Mouse"],
    ["Accessory", "Laptop"]
]);

function addProduct() {
    const name = document.getElementById("productName").value;
    const price = parseFloat(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value;
    const option = document.getElementById("storageOption").value;

    if (!name || isNaN(price)) {
        alert("Please enter a valid product name and price.");
        return;
    }

    if (option === "object") {
        products[currentId] = { id: currentId, name, price };
        currentId++;
        alert("Product added to object.");
    } else if (option === "set") {
        setProducts.add(name);
        alert("Product name added to Set.");
    } else if (option === "map") {
        if (!category) {
            alert("Please enter a category to use the Map.");
            return;
        }
        mapProduct.set(category, name);
        alert("Product added to Map.");
    }

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}

function showProducts() {
    const output = document.getElementById("output");
    output.innerText = "";

    output.innerText += "🔸 Products (Object):\n";
    for (const id in products) {
        output.innerText += `ID: ${id}, Name: ${products[id].name}, Price: $${products[id].price}\n`;
    }

    output.innerText += "\n🔸 Product Names (Set):\n";
    for (const name of setProducts) {
        output.innerText += `- ${name}\n`;
    }

    output.innerText += "\n🔸 Category Map:\n";
    for (const [cat, prod] of mapProduct.entries()) {
        output.innerText += `${cat} => ${prod}\n`;
    }
}

// // start of de proyect
// console.log("data management with objects, sets, and maps");

// // we define the products of the objects
// const products = {
//     1: {id: 1, name: "Laptop",  price: 1500 },
//     2: {id: 2, name: "Mouse",  price: 25 },
//     3: {id: 3, name: "keyboard",  price: 50 }
// }

// // create a set with the names of the products
// const setProducts = new Set(Object.values(products).map(product => product.name))
// console.log("Set of the products only:", setProducts);

// // create a map for add category at the products
// const mapProduct = new Map([
//     ["Eletronic", "Laptop"],
//     ["Acesory", "Mouse"],
//     ["Acesory", "Laptop"],
// ]);
// console.log("Map of the products and categories:", mapProduct);

// // loop through the products object
// for(const id in products) {
//     console.log(`Products ID: ${id}, Details:`, products[id]);
// }

// // loop through the products Set
// for(const product of setProducts){
//     console.log("Product only:", product)
// }

// console.log("Data management testing completed");
// console.log("List Product (Object)", products);
// console.log("List Products only (Sets)", setProducts);
// console.log("Categories and products (Map):", mapProduct);


