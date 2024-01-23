Pasos para ejecutar el proyecto:

1. Subida de la imgen docker de la db y del backend (se deben posicionar en la ruta back/src) (ejecutar el comando de abajo)

docker compose -f docker-compose.yml up -d --build

Al momento de subir la imagen del  codigo del backend, esta me falla, no sé cual sea el error, por lo que recomiendo ejecutrar el codigo en forma local.

2. Al momento de crear la Base de datos, conectarse a ella y crear las tablas que se encuentran en el archivo de la ruta "back/src/sqlscrips"

3. una vez creadas las tablas, se pueden consumir los servicos del back, de forma correcta, en caso de que el contenedor del back fallase, correr de forma local
sobre la caparta "back/src" los siguientes comandos:

npm install
npm run dev

4. Crear en postman, un usuario con la ruta "http://localhost:3000/usuarios/actualizar_agregar" esta peticion es de tipo "post" y cuenta con el body:
"        {
            "id": 0,
            "nombre": "nombre",
            "usuario": "usuario",
            "password": "password",
            "activo": 1 o 0 "true o false"
        }
"
5. Ejecutar el front.

ir a la carpeta "front/app" y ejecutar los siguientes comandos:

npm install
npm run dev

6. una vez inicializado el servidor, este estará en una pagina de login. Iniciar sesión con el usuario creado anteriormente en postman.

7. este llevará a una pagina "home" donde se vera una barra a la izquierda de la pagina, con un icono de usuario y un apartado de "clientes", ingresar a clientes.

8. allí, se pueden crear, elimiar y mirar los clientes que se desean.


Notas:
- El front no tiene validaciones de control de error en caso de una respuesta http fallida, aún así, por debajo, se tiene la seguridad de que no se pueden mostrar datos si la respuesta fallan.

- En el front, en el apartado de clientes, falta el "editar", por temas de tiempo, este no fue posible hacerlo, sin embargo, en la parte del codigo del back, se encuetra disponible. En caso de querer actualziar un cliente, lo unico que requerimos es meternos a psotman, y utilizar la siguiente url
"http://localhost:3000/usuarios/actualizar_agregar" esta peticion es de tipo post y va con el siguiente body:
"        {
            "id": id que se quiere cambiar (tipo num),
            "nombre": "nombre",
            "usuario": "usuario",
            "password": "password",
            "activo": 1 o 0 "true o false"
        }
"
- Para poder utilziar este servicio, es necesario aclarar que se necesita estar logueado primero para poder realizar la actualziación del usuario, por lo que se necesita un parametro en el header que es el "Authorization" con un valor de Bearer + token (el token se retorna al momento que hacemos el login).

- Para hacer el login por medio de postman, solo se necesita entrar a la siguinete url: "http://localhost:3000/auth/login",esta peticion es de tipo "post" donde se pide el siguinete body:
"
{
            "usuario": "usuario",
            "password": "password"
}
"

- El back cuenta con encriptacion para las contraseñas y un comparador al momento de hacer el login con respecto a la contraseña encriptada en la base de datos.
- 

- Siempre que se quiera crear un usuario, se debe poner en el body, en el parametro de "id", el valor 0, y para actulizar el valor de un usuario, se pone el mismo body con el valor en el id necesario a actualizar.

- IMPORTANTE: En mi local, funcionaron los comandos para los contenedores, sin embargo, al momento de montarlos en docker, solo me funciona el de la base de datos. por  lo que esta es la razón por la cual dejo los pasos para ejecutar el proyecto.


MUCHAS GRACIAS