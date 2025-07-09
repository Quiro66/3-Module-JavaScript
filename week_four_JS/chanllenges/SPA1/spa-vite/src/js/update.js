export function init() {
    const form = document.getElementById("update-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        })
            .then(() => alert("Usuario actualizado"))
            .catch(err => console.error("Error al actualizar:", err));
    });
}
