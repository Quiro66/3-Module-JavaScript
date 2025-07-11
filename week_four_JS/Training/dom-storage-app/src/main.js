const API_URL = "http://localhost:3000/users";
const form = document.getElementById("user-form");
const output = document.getElementById("output");
const contador = document.getElementById("contador");

let clicks = parseInt(sessionStorage.getItem("interacciones")) || 0;
contador.textContent = clicks;

// Mostrar datos almacenados
async function cargarDatos() {
  const res = await fetch(API_URL);
  const users = await res.json();

  output.innerHTML = users.length
    ? users.map(user => `<p>${user.name}, ${user.age} años</p>`).join("")
    : "<p>No hay información almacenada.</p>";
}
cargarDatos();

// Guardar datos
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  if (!name || !age) return alert("Campos vacíos");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age })
  });

  sessionStorage.setItem("interacciones", ++clicks);
  contador.textContent = clicks;
  cargarDatos();
  form.reset();
});

// Limpiar datos
document.getElementById("clear").addEventListener("click", async () => {
  const res = await fetch(API_URL);
  const users = await res.json();

  for (const user of users) {
    await fetch(`${API_URL}/${user.id}`, { method: "DELETE" });
  }

  sessionStorage.setItem("interacciones", ++clicks);
  contador.textContent = clicks;
  cargarDatos();
});
