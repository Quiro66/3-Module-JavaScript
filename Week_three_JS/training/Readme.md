# Gestión de Productos con JSON Server y Fetch API

Este proyecto es una aplicación web simple que demuestra cómo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una API simulada utilizando JSON Server y la Fetch API de JavaScript. La interfaz de usuario se construye con HTML y se manipula dinámicamente con JavaScript para mostrar los datos y permitir la interacción.

## Contenido del Proyecto

* `db.json`: Archivo que actúa como una base de datos simulada para almacenar la colección de productos. JSON Server utiliza este archivo para servir los datos.
* `index.html`: El archivo HTML principal que proporciona la estructura de la interfaz de usuario, incluyendo la sección para mostrar los productos y los formularios para las operaciones CRUD.
* `gestion_api.js`: El archivo JavaScript que contiene toda la lógica de la aplicación. Se encarga de:
    * Realizar solicitudes HTTP (GET, POST, PUT, DELETE) a la API simulada.
    * Manipular el DOM para mostrar los productos y actualizar la interfaz.
    * Manejar la validación de datos básica antes de enviar la información al servidor.
    * Gestionar y mostrar mensajes de éxito o error al usuario.

## Características

* **Listado de Productos (GET)**: Muestra todos los productos disponibles cargados desde `db.json`.
* **Creación de Productos (POST)**: Permite añadir nuevos productos a la base de datos.
* **Actualización de Productos (PUT)**: Permite modificar el nombre y/o precio de un producto existente.
* **Eliminación de Productos (DELETE)**: Permite borrar productos de la base de datos.
* **Validación de Datos**: Incluye una función para validar que los datos del producto (nombre y precio) sean correctos antes de enviarlos.
* **Manejo de Errores**: Utiliza bloques `try-catch` y la propiedad `response.ok` para capturar y reportar errores en las solicitudes de red.
* **Interfaz Dinámica**: La lista de productos se actualiza automáticamente en la interfaz después de cada operación CRUD exitosa.

## Requisitos

* **Node.js**: Necesario para instalar y ejecutar JSON Server.
* **npm** (Node Package Manager): Viene incluido con Node.js.

## Configuración y Ejecución

Sigue estos pasos para poner en marcha la aplicación en tu entorno local:

### 1. Clona o Descarga el Proyecto

Asegúrate de tener los tres archivos (`db.json`, `index.html`, `gestion_api.js`) en la misma carpeta.

### 2. Instala JSON Server

Si no lo tienes instalado globalmente, abre tu terminal y ejecuta:

```bash
npm install -g json-server