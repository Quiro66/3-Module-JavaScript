# 📡 Introducción a las APIs con API Key

Este documento explica cómo funcionan las APIs, qué es una API Key, cómo estructurar correctamente las peticiones HTTP, y qué significan elementos como los headers (`Authorization`, `Content-Type`) y el `body`.

---

## 🚀 ¿Qué es una API?

Una **API** (Application Programming Interface) es un conjunto de reglas y protocolos que permiten que una aplicación se comunique con otra. Por ejemplo, una API te permite obtener datos del clima, noticias, fotos de la NASA, etc.

---

## 🔐 ¿Qué es una API Key?

Una **API Key** (clave de API) es una cadena única (por ejemplo: `DEMO_KEY_123456`) que se utiliza para autenticar solicitudes a una API. Sirve para:

- Identificar al usuario o aplicación que hace la petición.
- Controlar el uso y el acceso a la API.
- Evitar abusos (por ejemplo, muchas peticiones por segundo).

> ⚠️ Muchas APIs requieren que la API Key se envíe en el **header** de la petición, usualmente con el formato `Authorization: Bearer TU_API_KEY`.

---

## 🧱 Estructura de una petición HTTP

Cuando se hace una petición a una API, se estructura así:

```http
GET /ruta-o-endpoint HTTP/1.1
Host: api.ejemplo.com
Authorization: Bearer TU_API_KEY
Content-Type: application/json
Y si estás enviando datos (por ejemplo, en una petición POST), también se incluye un body:
{
  "nombre": "Juan",
  "email": "juan@example.com"
}
```

## 🧩 Partes de una petición
1. Método HTTP
   
- GET: Obtener información.
- POST: Enviar nuevos datos.
- PUT: Actualizar datos.
- DELETE: Eliminar datos.

2. Header
Los headers son metadatos que acompañan a la petición. Los más comunes son:

## 🛡️ Authorization
Usado para enviar la API Key. Hay diferentes formatos, pero uno de los más comunes es:

```
Authorization: Bearer TU_API_KEY
Bearer significa "portador", y se usa para indicar que estás enviando un token de acceso o clave.
```
Después de Bearer se coloca la clave de la API.

## 📦 Content-Type
Especifica el formato de los datos que se envían en el cuerpo. El más común es:

```
Content-Type: application/json
```

Esto indica que los datos están en formato JSON.

1. Body (Cuerpo)
El cuerpo de la petición solo se envía en métodos como POST, PUT o PATCH.

Ejemplo:
```
{
  "titulo": "Mi primera noticia",
  "contenido": "Este es el contenido de prueba"
}
```
## 🧪 Ejemplo con Fetch en JavaScript

```
fetch('https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  ```

## 💡 Buenas prácticas al usar APIs
Nunca expongas tu API Key en el frontend si no es pública.

Usa variables de entorno para almacenar claves (.env).

Lee la documentación oficial de cada API para conocer los endpoints, límites y parámetros.