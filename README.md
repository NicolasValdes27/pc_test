# People Change -Challenge-

## Instalación

Clona este repositorio: `git clone https://github.com/NicolasValdes27/pc_test.git`
Instala las dependencias: `npm i`
Para correr el proyecto: `npm run dev`
Generar carpeta dist: `npm run build`

## Caso ENV

Por diversos motivos no pude configurar un ambiente para que el backend y la base de datos vivan en la nube, dejare el env que yo utilice para correrlo en local.

DB_HOST: "localhost"
DB_USERNAME: "postgres"
DB_PASSWORD: "pgpass"
DB_NAME: "pc_test"
PORT: 3000

Se puede crear el archivo .env o directamente poner los datos en el archivo `db.ts`, se ocupa una db por defecto en postgres, pero el DB_PASSWORD y DB_NAME va dependiendo del usuario.

## Stress testing

Utilice la libreria de JAG TESTER, para correr el stress testing se debe ingresar `npx jagtester` en la consola y luego ingresar las apis.

## API's

Para crear un estudiante (POST): `http://localhost:{PORT}/students` y su estructura es:
{
    "firstname": "string",
    "lastname": "string",
    "studentProgram": "string"
}

Para obtener todos los estudiantes (GET): `http://localhost:{PORT}/students`

Para obtener un estudiante (GET): `http://localhost:{PORT}/students/:id`

Para actualizar un estudiante (PUT): `http://localhost:{PORT}/students/:id` y el body se llevar los campos que se quieran actualizar.

Para eliminar un estudiante (DELETE): `http://localhost:{PORT}/students/:id`

Esto yo lo probaba con la extension Thunder Client de VSCODE

También dejo los comandos por el CMD de Widnows

`curl -X POST http://localhost:{PORT}/students -H "Content-Type: application/json" -d "{\"firstname\": \"Nicolas\",\"lastname\": \"Valdes\",\"studentProgram\": \"Carrera 23\"}"`

`curl -X DELETE http://localhost:{PORT}/students/:id -H "Content-Type: application/json"`

`curl -X GET http://localhost:{PORT}/students/:id -H "Content-Type: application/json"`

`curl -X GET http://localhost:{PORT}/students -H "Content-Type: application/json"`

`curl -X PUT http://localhost:{PORT}/students/:id -H "Content-Type: application/json" -d "{\"firstname\": \"Nombre nuevo\",\"lastname\": \"Apellido nuevo\",\"studentProgram\": \"Carrera nueva\"}"`

