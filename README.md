# Torneos de Lanzamiento de Aceitunas - Backend

Este proyecto de backend está diseñado para gestionar una base de datos ficticia de torneos de lanzamientos de aceitunas. A continuación, se detallan los pasos necesarios para configurar el proyecto.

## Instalación

Antes de ejecutar la aplicación, asegúrate de realizar los siguientes pasos:

1. Ejecuta `npm install` para instalar las dependencias del proyecto. Esto generará los archivos `package-lock.json` y `node_modules`.

2. Modifica el archivo `package.json` y agregale la siguiente línea:
```
"type": "module"
```
    

3. En la sección de scripts del archivo `package.json`, asegúrate de tener la siguiente configuración:

```json
"scripts": {
  "start": "nodemon src/index.js"
}
```
```
npm install nodemon
npm install express
npm start
