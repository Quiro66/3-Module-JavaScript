import { get, post, update, deletes } from './services';

const urlUsers = "http://localhost:3001/Users";

const routes = {
  "/": "./pages/users.html",
  "/users": "./pages/users.html",
  "/newuser": "./pages/newuser.html",
  "/about": "./pages/about.html",
  "/edit": "./pages/edit.html",
  "/delete": "./pages/delete.html",
};

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

async function navigate(pathname) {
  // Soporte para rutas dinámicas
  let route = routes[pathname];
  if (!route) {
    if (pathname.startsWith("/edit/")) {
      route = routes["/edit"];
    } else if (pathname.startsWith("/delete/")) {
      route = routes["/delete"];
    }
  }
  if (!route) return;

  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);

  if (pathname == "/users") {
    renderUsers();
  }

  if (pathname == "/newuser") {
    const form = document.getElementById("form-new-user");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          enrollNumber: document.getElementById("enrollNumber").value,
          dateOfAdmission: document.getElementById("dateOfAdmission").value,
        };
        await createUser(userData);
        form.reset();
      });
    }
  }

  if (pathname.startsWith("/edit/")) {
    const id = pathname.split("/edit/")[1];
    const user = await get(`${urlUsers}/${id}`);
    document.getElementById("edit-id").value = user.id;
    document.getElementById("edit-name").value = user.name;
    document.getElementById("edit-email").value = user.email;
    document.getElementById("edit-phone").value = user.phone;
    document.getElementById("edit-enrollNumber").value = user.enrollNumber;
    document.getElementById("edit-dateOfAdmission").value = user.dateOfAdmission;

    const form = document.getElementById("form-edit-user");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const updatedUser = {
        name: document.getElementById("edit-name").value,
        email: document.getElementById("edit-email").value,
        phone: document.getElementById("edit-phone").value,
        enrollNumber: document.getElementById("edit-enrollNumber").value,
        dateOfAdmission: document.getElementById("edit-dateOfAdmission").value,
      };
      await update(urlUsers, id, updatedUser);
      navigate("/users");
    });
  }

  if (pathname.startsWith("/delete/")) {
    const id = pathname.split("/delete/")[1];
    document.getElementById("confirm-delete").onclick = async () => {
      await deletes(urlUsers, id);
      navigate("/users");
    };
    document.getElementById("cancel-delete").onclick = () => {
      navigate("/users");
    };
  }
}

window.addEventListener("popstate", () =>
  navigate(location.pathname)
);

async function renderUsers(){
  const containeUsers = document.getElementById("container-users");
  containeUsers.innerHTML = ""; // Limpia antes de renderizar

  let usersData = await get(urlUsers);
  usersData.forEach(user => {
    containeUsers.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.enrollNumber}</td>
        <td>${user.dateOfAdmission}</td>
        <td class="actions">
          <a class="btn-edit" data-link href="/edit/${user.id}">Editar</a>
          <a class="btn-delete" data-link href="/delete/${user.id}">Eliminar</a>
        </td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-new-user");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        enrollNumber: document.getElementById("enrollNumber").value,
        dateOfAdmission: document.getElementById("dateOfAdmission").value,
      };
      await createUser(userData);
      form.reset();
    });
  }
});

async function createUser(userData) {
  try {
    // Elimina el campo id si existe
    if ('id' in userData) delete userData.id;
    const newUser = await post(urlUsers, userData);
    console.log("Usuario creado:", newUser);
    // Puedes recargar la lista de usuarios si quieres:
    // renderUsers();
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
}