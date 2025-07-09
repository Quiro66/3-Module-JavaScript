export function init() {
    const form = document.getElementById("delete-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = document.getElementById("id").value;

        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
            .then(() => alert("Usuario eliminado"))
            .catch(err => console.error("Error al eliminar:", err));
    });
}
