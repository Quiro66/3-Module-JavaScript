export function init() {
    const form = document.getElementById("create-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        })
            .then(() => alert("Usuario creado"))
            .catch(err => console.error("Error al crear usuario:", err));
    });
}
