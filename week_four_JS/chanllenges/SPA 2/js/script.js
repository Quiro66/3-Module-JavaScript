import { get, post, update, deletes } from './services';

const urlUsers = "http://localhost:3001/Users";

const routes = {
  "/": "./pages/login.html",
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

  updateNavbarForRole(); // <-- Agrega esto aquí

  // Llama a setupLogin si es la ruta de login
  if (pathname === "/") {
    setupLogin();
  }

  if (pathname == "/users") {
    renderUsers();
  }

  if (pathname == "/newuser") {
    const form = document.getElementById("form-new-user");
    if (form) {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      if (!loggedUser || loggedUser.role !== "Admin") {
        form.innerHTML = "<p style='color:red'>Solo el administrador puede crear usuarios.</p>";
        return;
      }
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          enrollNumber: document.getElementById("enrollNumber").value,
          dateOfAdmission: document.getElementById("dateOfAdmission").value,
          password: document.getElementById("password").value,
          role: "user",
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

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

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
          ${
            loggedUser && loggedUser.role === "Admin"
              ? `<a class="btn-edit" data-link href="/edit/${user.id}">Editar</a>
                <a class="btn-delete" data-link href="/delete/${user.id}">Eliminar</a>`
              : ""
          }
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
        password: document.getElementById("password").value,
        role: "user",

      };
      await createUser(userData);
      form.reset();
    });
  }

  // Navega a la ruta actual o al login si es la primera carga
  if (location.pathname === "/" || location.pathname === "/index.html") {
    navigate("/");
  } else {
    navigate(location.pathname);
  }
  updateNavbarForRole();
});

function updateNavbarForRole() {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const newUserLink = document.querySelector('a[href="/newuser"]');
  if (newUserLink) {
    if (!loggedUser || loggedUser.role !== "Admin") {
      newUserLink.style.display = "none";
    } else {
      newUserLink.style.display = "";
    }
  }
}

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

async function setupLogin() {
  const form = document.getElementById("login-form");
  const msg = document.getElementById("login-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Cambia la URL al puerto correcto y mayúscula correcta
    const users = await get("http://localhost:3001/Users");

    const found = users.find(
      user => user.email === email && user.password === password
    );

    if (found) {
      localStorage.setItem("loggedUser", JSON.stringify(found));
      navigate("/users");
    } else {
      msg.textContent = "Correo o contraseña incorrectos";
      console.log(msg.textContent)
    }
  });
}