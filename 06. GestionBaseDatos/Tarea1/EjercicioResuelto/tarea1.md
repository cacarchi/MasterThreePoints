# Gestión de bases de datos

**Nombre:** César Augusto Carchi Ludeña

## Tarea 1: Despliegue y gestión de bases de datos relacionales

### 1. Instala MySQL server en un entorno local. Se recomienda el uso de un cliente de virtualización como VMware o VirtualBox y de un sistema operativo basado en Linux como Ubuntu.
```sql
sudo apt update
sudo apt get install
sudo apt install mysql-server
sudo systemctl status mysql
sudo mysql_secure_installation
```
**Nota:** En caso de que no permita cambiar root, entramos a mysql (***sudo mysql***) y ejecutamos el siguiente comando:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword';
```
---
### 2. Descarga e instala ***[Sakila](https://dev.mysql.com/doc/sakila/en/sakila-installation.html)***. Adjunta una captura de pantalla del resultado de ejecutar las siguientes consultas SQL:

  Abrimos una terminal, nos posicionamos en donde tenemos los archivos de sakila y ejecutamos mysql:
  ```sql
  mysql -u root -p    --ingresamos contraseña de root
  source sakila-schema.sql; --esto para ejecutar el esquema y crear las tablas.
  source sakila-data.sql; -- esto para cargar los datos.
  ```

  **a. Accedemos a Sakila:** 
  
  `mysql> USE sakila;`

  ![Acceso a base de datos Sakila](./img/accederSakila.png "Sakila Database")

  **b. Mostrar tablas de Sakila:** 
  
  `mysql> SHOW FULL TABLES;`

  ![Mostrar tablas de Sakila](./img/show_full_tables.png "FULL Tables - Sakila Database")

  **c. Mostrar número de registros de la tabla "film":** 
  
  `mysql> SELECT COUNT(*) FROM film;`

  ![Mostrar número de registros de la tabla "film"](./img/select_count_film.png "Count from film - Sakila Database")

  **d. Mostrar número de registros de la tabla "film_text":** 
  
  `mysql> SELECT COUNT(*) FROM film_text;`

  ![Mostrar número de registros de la tabla "film_text"](./img/select_count_film_text.png "Count from film_text - Sakila Database")

### 3. MySQL Workbench es una herramienta visual para arquitectos de bases de datos, desarrolladores y DBAs. MySQL Workbench proporciona modelado de datos, desarrollo de SQL y herramientas de administración completas para la configuración del servidor de base de datos, la administración de usuarios, las copias de seguridad y mucho más. Descarga e instala MySQL Workbench y visualiza la base de datos Sakila. Adjunta una captura de pantalla de las siguientes consultas realizadas en MySQL Workbench:

  * **Descargar workbench:**

    `sudo snap install mysql-workbench-community`

  * **Configurar conexión ssh y password manager para workbench:**

    `snap connect mysql-workbench-community:password-manager-service`

    `snap connect mysql-workbench-community:ssh-keys`


  * **Ingresar a workbench e ingresar consultas:**

    a. `select * from sakila.film;`

    ![Sakila desde Workbench - Mostrar registros tabla film](./img/workbench_primera_consulta.png "Mostrar registros tabla film")


    b. `select rental_id from sakila.rental where inventory_id = 1;`

    ![Sakila desde Workbench - Mostrar registros tabla film](./img/workbench_segunda_consulta.png "Mostrar registros filtrados por inventory_id=1 de la tabla rental")

---

### 4. Hasta ahora hemos visto algunas formas de acceder a la base de datos de manera manual. En esta sección vamos a explorar el concepto de [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping).  ***Implementa un breve programa que acceda a la base de datos Sakila y realice la siguiente consulta utilizando una librería que aplique el concepto de ORM. Adjunta una captura de pantalla con el resultado de la ejecución del programa. a. SELECT country_id, country from sakila.country;***

#### ORM a utilizar (Prisma)

Prisma es un ORM de codigo abierto y consta de las siguientes partes:
  1. Prisma Client: es un generador de consultas automàticas para Node y Typescript.
  2. Prisma Migrate: es el sistema de migración.
  3. Prisma Studio: es la interfaz gráfica del usuario para editar gráficamente los datos

* **Instalar prisma.**

  * Creamos una carpeta para iniciar un proyecto con prisma:

    `> mkdir prismaORM`

  * Iniciamos node:

    `> npm init -y`

  * Instalamos prisma:

    `> npm install prisma --save -dev`

  * Para utilizar el cliente de prisma ejecutamos:

    `> npx prisma`

    `> npx prisma init`

  **Nota:** El comando *"NPX PRISMA INIT"* lo que hace es crear las variables de entorno (.env), adicionalmente crea la carpeta prisma y el archivo schema.prisma

* **Conectar Prisma con Sakila.**

  * Para conectar con la base de datos "Sakila". Accedemos al archivo *"./prisma/schema.prisma"*. Por defecto viene provider "postgress", se lo cambia por "mysql".

    ![Configurar archivo schema.prisma](./img/configurar_schema_prisma_mysql.png "Configurar archivo schema.prisma")

  * Seguido, se configura las variables de entorno (el archivo ".env") y ahi ponemos los datos de nuestra base de datos:

    ```sakila
    DATABASE_URL="mysql://root:root@localhost:3306/sakila?schema=public"
    ```
    ![Configurar archivo .env](./img/configurar_variables_entorno_msql_sakila.png "Configurar variables de entorno")

  * Ahora se procede a crear los modelos en el archivo "schema.prisma". Para este ejercicio describimos el modelo "country" el cual representa la tabla "country" de la base de datos Sakila:

    ```typescript
    model country { // nombre del modelo
      country_id Int @id @default(autoincrement()) // id de la tabla
      country String // atributo nombre de tipo string
      last_update DateTime // atributo fecha de actualización de tipo DateTime
    }
    ```

  * Para que prisma migre todos los modelos creados, se ejecuta el siguiente comando:
 
    `prisma migrate`

  * Una vez configuradas las variables de entorno y creado los modelos, se procede a instalar prisma client.

    `npm install @prisma/client`

* **Crear app para consumir la base de datos con el ORM Prisma.**

  * En la raiz del proyecto creamos "app.js". En este archivo ingresaremos las consultas a la base de datos sakila utilizando el ORM Prisma.

    `touch app.js`

  * Dentro del app.js ingresamos el siguiente código:
    ```javascript
    //importamos el constructor prisma/client
    const {PrismaClient} = require ('@prisma/client')
    //creamos una instancia de PrismaClient
    const prisma = new PrismaClient()
    //funcion asincrona para enviar consultas a la BD
    async function main () {
        //mostrar todos los registros
        //const countries = await prisma.country.findMany()
        //console.log(countries)
        //mostrar un registro
        const country = await prisma.country.findUnique ({
            where: {
              country_id:10
            }
        })
        console.log(country)
    }
    //Llamamos a la funcion principal
    main()
        //errores posibles
        .catch( (e) => {
            throw e
        })
        //al final se cierra la conexiòn con la base de datos cuando finalice el script
        .finally(async () => {
            await prisma.$disconnect()
        })
    ```
  * Finalmente para ejecutar el programa ponemos en la consola el siguiente comando:

    `node app`

    ![Ejecutar app.js](./img/app_contry_consulta.png "Ejecutar app.js")

    Se puede observar como se obtiene la información del país con id *"10"*.