# DOM Storage App

Este proyecto es una pequeña aplicación web para practicar el manejo del DOM, almacenamiento en el navegador (sessionStorage) y consumo de una API REST simulada con JSON Server.

---

## 🚀 ¿Qué hace esta app?

- Permite registrar usuarios con nombre y edad.
- Muestra los usuarios almacenados en una tabla.
- Permite limpiar todos los usuarios almacenados.
- Cuenta las interacciones del usuario en la sesión usando `sessionStorage`.

---

## 🛠️ Tecnologías utilizadas

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **[Vite](https://vitejs.dev/)** (servidor de desarrollo)
- **[JSON Server](https://github.com/typicode/json-server)** (API REST fake)

---

## 📦 Estructura del proyecto

```
dom-storage-app/
├── index.html
├── package.json
├── db.json
├── src/
│   ├── main.js
│   └── style.css
└── public/
```

---

## ⚡ Cómo ejecutar el proyecto

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia JSON Server en otro terminal:**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre la app en tu navegador:**
   ```
   http://localhost:5173
   ```

---

## 📝 Notas

- Los datos de usuario se almacenan en `db.json` usando JSON Server.
- El contador de interacciones se guarda en `sessionStorage` y se reinicia al cerrar el navegador.
- Puedes limpiar todos los usuarios con el botón "Limpiar Datos".

---

¡Explora, experimenta y aprende sobre el manejo del DOM y almacenamiento en