# Prueba comedor

## Instalación

El proyecto se divide en 2 partes

Backend (Raíz del proyeco)

Frontend (/client/)
Ambas carpetas tienen un package.json para poder separar ambos proyectos en cualquier momento
para tener una instalacion correcta basta con ejecutar:

`npm i` (en la raíz del proyecto)
`npm i` (en la carpeta client) esto es opcional sino quiere correr el proyecto frontend en modo dev

## Uso

La lista de comando se divide en 2 bacend y frontend para ejecutar los comando de frontend es necesario estar a nivel de la carpeta client

### Comandos a nivel Backend

`npm run deployment`

Esto ejecutara el proyecto en htpp://localhost:8080 con el frontend compilado

Correr el proyecto en modo dev

`npm run start`

Esto compilara el frontend y lo movera a la carpeta public de la raiz del proyecto, ademas montara el servidor para backend

`npm run dev`

Esto ejecutara el servidor backend en modo de desarrollo

### Comandos a nivel Backend

Estos comandos deben ser ejecutados con el prompt a nivel de la carpeta client

`npm run dev`

Esto montara un servidor con el frontend.

`npm run export`

Esto compilara el frontend y lo movera a la carpeta public del proyecto

`npm run build`

Esto construira y compilara el proyecto fronted

## Tecnologías

1. Express
2. Node js
3. neat-csv
4. React js
5. Next js
6. Bootstrap
