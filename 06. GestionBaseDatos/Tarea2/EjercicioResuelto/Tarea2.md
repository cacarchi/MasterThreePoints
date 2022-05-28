# Tarea 2: Creación de una cuenta de AWS

Nombre: César Augusto Carchi Ludeña

## 1. Creación de la cuenta de AWS

* Accedemos a la página de [AWS](https://aws.amazon.com/es/) y pulsamos sobre **Cree una cuenta de AWS**.

    ![Crear cuenta AWS](./img/crear_cuenta_aws.png)

* Completamos el formulario de registro. Asegúrate de elegir el tipo de **cuenta personal y el gratuito**.

    ![Crear cuenta AWS](./img/tipo_cuenta_personal_support_plan_gratuito.png)

    ![Crear cuenta AWS segundo paso](./img/plan_soporte.png)

    ![Crear cuenta AWS finalización](./img/finalizar_creaci%C3%B3n_cuenta.png)

* Iniciar sesión y acceder a los detalles de la cuenta AWS:

    ![Iniciar sesión](./img/iniciar_sesion.png)

    ![Detalles cuenta AWS](./img/detalles_cuenta_aws.png)

* Restringir uso de cuenta ROOT unicamente a operaciones críticas. Para ello accedemos a la opción "Cuenta" y nos ubicamos en la opción "Acceso de los usuarios y roles IAM a la información de facturación. Seguido hacemos clic en Editar y marcamos la casilla "Active el acceso de IAM" y pulsamos "Actualizar"

    ![Cuenta IAM](./img/acceso_roles_IAM_cambiar_root.png)

    ![Activar IAM](./img/activar_IAM_actualizar.png)

## Seguridad de lacuenta de AWS

* **Acceder a IAM**: Para ello en la barra de búsqueda escribimos IAM y pulsamos sobre el servicio sugerido.

    ![Buscar IAM](./img/buscar_IAM.png)

* **Lo primero que vemos al acceder al panel de IAM es una alerta de seguridad que nos indica que no tenemos activado el múltiple factor de autenticación (MFA). Pulsamos sobre “Agregar MFA”** .

    ![Panel IAM](./img/panel_IAM.png)

* **Activamos MFA**:

    ![Activar MFA](./img/activar_mfa.png)

* **Como podemos observar, AWS soporta diferentes tipos de autenticación de múltiple factor, en nuestro caso seleccionamos “Dispositivo MFA virtual” y pulsamos en “continuar”**

    ![Activar MFA](./img/dispositivo_mfa_virtual.png)

    ![Ingresar código MFA](./img/ingresar_codigo_mfa.png)

    ![Activar MFA correctamente](./img/asignado_mfa_correctamente.png)

## Creación usuario de AWS

Se va a crear un nuevo usuario para realizar acciones específicas en AWS. Con este usuario accederemos normalmente y root solo utilizaremos para acciones de seguridad de la cuenta y facturación.

* **Agregar nuevo usuario**: Dentro del panel de IAM seleccionamos "Usuarios" y "Agregar usuarios"

    ![Agregar usuario](./img/agregar_usuarios.png)

* **Configuración nuevo usuario**: Introducimos un nombre para el usuario, por ejemplo “TESTUSER” y activamos la opción "Contraseña: acceso a la consola de administración de AWS” y “Contraseña personalizada”

    Introducimos una contraseña robusta y desactivamos la opción “Requerir el restablecimiento de contraseña” . Pulsamos en “Siguiente: Permisos”.

    ![Configuración usuario 1](./img/configuracion_usuario.png)

* **Seguido, creamos un nuevo grupo**:

    ![Configuración usuario 2](./img/configuracion_usuario_2.png)

    Ingresamos el nombre del grupo "Console-Admin" y seleccionamos el permiso "AdministratorAccess", finalmente, clic en "Crear grupo" y continuamos con la configuración del usuario "Etiquetas".

    ![Crear Grupo](./img/crear_grupo.png)

    ![Crear Grupo 2](./img/crear_grupo_2.png)

* Seleccionamos "console-Admin" y clic en "Siguiente: Etiquetas"

    ![Etiquetas](./img/seguir_con_etiquetas.png)

    Pulsamos “Siguiente: Revisar” sin añadir ninguna etiqueta. Finalmente, revisamos que todos los datos son correctos y pulsamos sobre “Crear un usuario”.

    ![Etiquetas vacias](./img/etiquetas_vacias_siguiente.png)

* **Validar información**:

    ![Validar información](./img/validar_informacion.png)

## Configurar Alias para la cuenta de AWS

* En el panel de IAM, pulsamos sobre “Crear” en la esquina superior derecha.

    ![Crear alias](./img/crear_alias.png)

* Ingresamos el nuevo alias y una vez creado cerramos la sesión.

    ![Crear alias testuser](./img/alias_testuser.png)

* Ahora ingresamos con la cuenta "Alias". Para ello seleccionamos "Usuario de IAM" e introducimos el alias de la cuenta y pulsamos sobre "Iniciar sesión".

    ![Iniciar sesión con alias](./img/iniciar_sesion_alias.png)

* Adicionalmente, se puede agregar a este usuario MFA.

    ![TestUser MFA](./img/testuser_mfa.png)