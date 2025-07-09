const routes = {
  "/": "./src/pages/read.html",
  "/read": "./src/pages/read.html",
  "/create": "./src/pages/create.html",
  "/update": "./src/pages/update.html",
  "/delete": "./src/pages/delete.html",
};

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

async function navigate(pathname) {
  const route = routes[pathname];
  const html = await fetch(route).then(res => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);

  // Cargar JS correspondiente
  const name = pathname.replace("/", "") || "read";
  import(`./${name}.js`).then(mod => mod.init && mod.init());
}

window.addEventListener("popstate", () => {
  navigate(location.pathname);
});

navigate(location.pathname); // Cargar ruta al inicio
