# Facebok login clon

## Descripción
Este programa es un clon del login de facebook, ocupa astro que a su vez ocupa node.js; que las credenciales se mandarán a un archivo en la carpeta server

## El proyecto se divide en dos carpetas

### Carpeta de facebook-clon
Contiene la página web clon, incluye dos posibles rutas:
1. El formulario de login (index.astro)
2. Página 404 (404.astro)

Una vez sea clonado el repositorio debemos descargar los node_modules con el siguiente comando:

```
npm i
```

**Nota: Este comando unicamente debe ser ejecutado para el proyecto facebook-clon.**

Ejecutar el servidor de prueba:

```
npm run dev
```

### Carpeta Server
Contiene el servidor que recibe las credenciales recolectadas por la página web.
Para ejecutar el servidor ejecutamos el siguiente comando:

```
npm run dev
```

## Instrucciones de Uso

1. **Requisitos:**
   - Sistema operativo Linux.
   - Tener instalado node.js

   1.1 **Para Instalar node y dependencias de astro**
       Tener instalado curl, en el caos de no tenerlo se instala con el siguiente comando
   
       sudo apt install curl
   
   Luego, añade el repositorio NodeSource e instala Node.js:
   
       curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
       sudo apt install -y nodejs
   
   También instalar las dependencias de Astro en las dos carpetas del proyecto.
   
       npm install

3. **Ejecutar el siguiente comando en cada carpeta(servidor y facebook clon)**

    ```
    npm run dev
    ```

    Esperar a que aparezca en la terminal de la carpeta servidor

    ```
    Listening on http://localhost:8080/
    ```

    Esperar a que aparezca en la terminal de la carpeta facebook-clon

    ```
    watching for file changes...
    ```

4. **Entrar a http://localhost:8080/**
    - Ingresar credenciales
    - Darle al boton de iniciar sesion

5. **Revisar la carpeta server/bd**
    - Se creo un archivo.txt con el nombre del correo, que tiene sus credenciales
    - Esto se verá tambien en la terminal de la carpeta server

## Vector inicial
El usuario ingresaria a la pagina por medio de google, pagando por publicidad para que aparezca en los primeros resultados y al querer ingresar sus credenciales las manda a un servidor

## Casos de uso
   1. Registro de credenciales en un archivo.txt
      - Caso: El usuario pone sus credenciales en la pagina login facebook clon y darle al boton Iniciar sesion
      - Resultado: Mandará una alerta y lo redireccionará a otra pagina, guardando las credenciales ingresadas en un archivo.txt en sl servidor 
## Notas
Este proyecto se hizo para una tarea de hacer una pagina de phishing, de la materia de seguridad informatica en FES Aragon
