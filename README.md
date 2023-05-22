# People Change -Challenge-

## Instalación

Clona este repositorio: `git clone https://github.com/NicolasValdes27/pc_test.git`
Instala las dependencias: `npm i`
Para ejecutar el proyecto: `npm run dev`
Generar carpeta dist: `npm run build`

## Caso ENV

Por diversos motivos, no pude configurar un ambiente en la nube para el backend y la base de datos. A continuación, se muestra el archivo .env que utilicé para ejecutarlo localmente.

DB_HOST: "localhost"
DB_USERNAME: "postgres"
DB_PASSWORD: "pgpass"
DB_NAME: "pc_test"
PORT: 3000

Puedes crear el archivo .env y establecer los valores mencionados anteriormente, o puedes agregar directamente los datos en el archivo `db.ts`. Se utiliza una base de datos por defecto en PostgreSQL, pero el valor de DB_PASSWORD y DB_NAME puede variar según el usuario.

## Pruebas de estrés (Stress testing)

Utilicé la biblioteca JAG TESTER para realizar las pruebas de estrés. Para ejecutar las pruebas, ingresa `npx jagtester` en la consola y luego proporciona las API correspondientes.

## API's

Para crear un estudiante (POST): `http://localhost:{PORT}/students`. La estructura del cuerpo es la siguiente:
{
    "firstname": "string",
    "lastname": "string",
    "studentProgram": "string"
}

Para obtener todos los estudiantes (GET): `http://localhost:{PORT}/students`

Para obtener un estudiante específico (GET): `http://localhost:{PORT}/students/:id`

Para actualizar un estudiante (PUT): `http://localhost:{PORT}/students/:id`. El cuerpo de la solicitud debe contener los campos que se desean actualizar.

Para eliminar un estudiante (DELETE): `http://localhost:{PORT}/students/:id`

Yo probaba estas API con la extensión Thunder Client de Visual Studio Code.

También dejo los siguientes comandos para utilizar en la terminal de Windows (CMD):

`curl -X POST http://localhost:{PORT}/students -H "Content-Type: application/json" -d "{\"firstname\": \"Nicolas\",\"lastname\": \"Valdes\",\"studentProgram\": \"Carrera 23\"}"`

`curl -X DELETE http://localhost:{PORT}/students/:id -H "Content-Type: application/json"`

`curl -X GET http://localhost:{PORT}/students/:id -H "Content-Type: application/json"`

`curl -X GET http://localhost:{PORT}/students -H "Content-Type: application/json"`

`curl -X PUT http://localhost:{PORT}/students/:id -H "Content-Type: application/json" -d "{\"firstname\": \"Nombre nuevo\",\"lastname\": \"Apellido nuevo\",\"studentProgram\": \"Carrera nueva\"}"`

