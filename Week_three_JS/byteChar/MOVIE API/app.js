const URL = "http://localhost:3000/products";

// Read all products
fetch(URL)
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  })
  .then(data => console.log("📦 Products:", data))
  .catch(err => console.error("❌ Error:", err.message));

// Create a new product
function createProduct(name, price) {
  if (!name || isNaN(price)) {
    return console.error("❌ Invalid name or price");
  }

  const newProduct = { name, price: Number(price) };

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProduct)
  })
    .then(res => res.json())
    .then(data => console.log("✅ Product created:", data))
    .catch(err => console.error("❌ Create error:", err));
}

// Update a product
function updateProduct(id, updatedData) {
  fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  })
    .then(res => res.json())
    .then(data => console.log("✏️ Product updated:", data))
    .catch(err => console.error("❌ Update error:", err));
}

// Delete a product
function deleteProduct(id) {
  fetch(`${URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => console.log(`🗑️ Product ${id} deleted`))
    .catch(err => console.error("❌ Delete error:", err));
}

// 📌 Example usage:
// createProduct("T-shirt", 45);
// updateProduct(1, { name: "Shoes", price: 80 });
// deleteProduct(2);
