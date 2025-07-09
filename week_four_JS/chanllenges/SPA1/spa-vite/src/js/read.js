export function init() {
    fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(users => {
            const tbody = document.getElementById("user-table-body");
            tbody.innerHTML = users.map(user => `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        </tr>
      `).join("");
        });
}
