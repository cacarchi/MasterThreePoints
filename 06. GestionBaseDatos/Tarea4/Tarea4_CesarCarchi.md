# Alojamiento de Web Estática en AWS S3

César Augusto Carchi Ludeña

## Creación de un bucket en Amazon S3

* ***Acceder al servicio S3:*** Para ello se busca "S3" y se selecciona el primer resultado.
![Servicio S3 desde consola](./img/s3_servicio.png)
* ***Crear Bucket:*** En el panel de S3, pulsa sobre “Crear bucket”. Ten en cuenta que en Amazon S3 el nombre del bucket debe ser único a nivel global. Esto quiere decir que una vez creado el bucket, su nombre no podrá ser utilizado por ninguna otra cuenta de AWS en ninguna región.
![Crear bucket](./img/crear_bucket.png)
* ***Ingresar nombre del bucket único:*** Ingresar como nombre del bucket "staticweb-1994".
![Ingresar nombre del bucket](./img/nombre_bucket.png)
* ***Seleccionar región AWS:*** Seleccionar la región "UE (Irlanda) eu-west-1"
![Seleccionar región AWS](./img/seleccionar_region_aws.png)
* ***Seleccionar propiedad de objetos:*** selecciona la opción “ACL habilitadas”
![Seleccionar propiedad de objetos](./img/propiedad_de_objetos.png)
* ***Cambiar la configuración del bucket a pública:*** Se debe desactivar la opción “Bloquear todo el acceso público”.
    * ***Aceptar condiciones de cambiar a público:*** Selecciona la opción “Reconozco que la configuración actual pude provocar que este bucket y los objetos que contiene se vuelvan públicos”
![Cambiar la configuración del bucket a pública](./img/bucket_publico.png)
* ***Crear Bucket:*** Se pulsa sobre “Crear bucket”.
![Crear Bucket](./img/crear_bucket_final.png)
* ***Así se visualiza al final de la creación del bucket:***
![Así se visualiza al final de la creación del bucket](./img/bucket_creado.png)

----

## Configuración del bucket para alojar una web estática

* ***Accedemos al bucket creado:*** Para ello seda clic en el nombre del bucket.
![Acceder al bucket](./img/acceder_al_bucket.png)
* ***Acceder a las propiedades***
![Acceder a las propiedades](./img/propiedades_bucket.png)
* ***Editar alojamientos de sitios web estáticos:*** Dentro del panel de “Propiedades” bajamos hasta encontrar la sección “Alojamiento de sitios web estáticos” y pulsamos el botón “Editar”
![Editar alojamiento de sitios web estáticos](./img/alojamiento_sitios_web_estaticos.png)
    * ***Seleccionar la opción "Habilitar"***
    * ***Seleccionar el tipo de alojamiento:*** Se debe seleccionar la opción “Alojar un sitio web estático”
    * ***Ingresar “Documento Índice”:*** En este campo de texto debemos introducir la página predeterminada de inicio del sitio web, en este caso “index.html”. 
    * ***Guardamos los cambios:*** Finalmente, se debe hacer clic en el botón "Guardar Cambios"
![Editar sitio web estático](./img/editar_alojamiento_sitio_web_estatico.png)

* ***Copiar URL del nuevo sitio web generado:"*** En la pestaña "Propiedades”, en la sección “Alojamiento de sitios web estáticos” copia la nueva url que se ha generado para tu sitio web e introducela en el navegador.
![Nueva url bucket](./img/nueva_url_bucket.png)
* ***Error 403:*** Este error se muestra ya que los recursos de tu web estática todavía no están en S3
![Error 403](./img/error_403.png)

----

## Publicación de la página web estática en S3

* ***Acceder a la pestaña "Objetos":*** Para cargar la página estática, se hace clic en la pestaña "Objetos" y se hace clic en el botón "Cargar"
![Cargar objeto](./img/bucket_pestana_objetos.png)
* ***Agregar archivos:*** Pulsamos sobre “Agregar archivos” y seleccionamos todos los ficheros de la aplicación web estática.
![Agregar archivos](./img/agregar_archivos.png)
* ***Cargar los archivos agregados previamente:*** Se pulsa sobre “Cargar” y una vez que el proceso termine se hace clic en cerrar.
![Cargar archivos](./img/cargar_archivos.png)

----

## Configuración del acceso a los objetos

* ***Cambiar la configuración de los objetos a "Publicos"*** Desde la consola de administración de S3, pulsa en el bucket “staticweb-1234” y en la pestaña “Objetos”
![Cambiar la configuración de los objetos a "Publicos"](./img/objetos_bucket_para_cambiar_publico.png)
* ***Seleccionar todos los objetos cargados***
![Seleccionar todos los objetos cargados](./img/seleccionar_los_objetos.png)
* ***Acceder a las acciones y hacer publicos los objetos:*** Se pulsa sobre “Acciones” y seleccionamos "Hacer públicos a través de ACL".
![Hacer publico mediante ACL](./img/hacer_publico_ACL1.png)
* ***Página web estática en AWS S3***
![Página web estática en AWS S3](./img/pantalla_final.png)


----

## Limpieza del laboratorio

* Para limpiar este laboratorio, en el panel de administración de S3 se pulsa sobre el bucket que se ha creado y sobre el botón “Eliminar”
![Clic en eliminar bucket](./img/eliminar_bucket1.png)
![Clic en vaciar bucket](./img/vaciar_bucket1.png)
![Clic en vaciar bucket - Confirmación](./img/vaciar_bucket2.png)
![Clic en eliminar bucket - Confirmación](./img/eliminar_bucket1.png)