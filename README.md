# BoomBang-Launcher-2022

Este proyecto es el launcher del juego BoomBang basado en los archivos del año 2011. 

El proyecto está compuesto por el laucher y el emulador.

BoomBang Game Emulator: https://github.com/GenRubio/boombang-2022-emulator

## Contenido

 - Systema de autologin
 - Socket.io integration
 - Node web socket connection - C# connection

## Pre Configuración
 - Para empezar la instalación primero debemos asegurarnos de tener instalados las siguientes aplicaciones
 - 1. PHP 7.4
 - 2. Composer
 - 3. Node v16.13.2
 - 4. NPM 8.1.2
 - 5. XAMPP u otro gestor de base de datos

El siguiente paso es unir el php con el Composer para ello al instalar el composer seleccionaremos el php.exe de la carpeta PHP 7.4

Una vez instalador en visual code podemos ejecutar el siguiente comando 
```sh
php -v
```
Este comando nos dirá que versión de php está instalada en composer debe aparecer 7.4 o superior.

Ahora en nuestro gestor de base de datos vamos a crear una nueva base de datos. La llamaremos "boombang"

## Configuración

Una vez terminada la pre configuración vamos a empezar a instalar todas las dependencias del proyecto.

En el siguiente proyecto se están usando varias tecnologías diferentes

- Electron
- Laravel
- Node

La carpeta principal de proyecto es Laravel dentro encontraremos las demás 2 carpetas node y electrón.

Dentro de la raíz del proyecto vamos a ejecutar los siguientes comandos para instalar las dependencias de composer y node sobre el Laravel

Ejecutamos los siguientes comandos

```sh
composer install
```

```sh
npm install
```

Al terminar de ejecutarse los comandos veremos que se no han creado 2 carpetas nuevas node_modules y vendor estas carpetas no se tocan hay de descargar todos los plugins
necesarios para el correcto funcionamiento de Laravel.

Ahora vamos a comprobar si en nuestra raíz del proyecto se encuentra en archivo .env.

En el caso de no tener ese archivo vamos a copiar el archivo .env.example y lo renombramos por .env

En la variable de DB_DATABASE= vamos a colocar el nombre de nuestra base de datos DB_DATABASE=boombang

Una vez hecho esta configuración vamos a guardar los cambios ejecutando el siguiente comando

```sh
php artisan config:cache
```

Ahora vamos a ejecutar el siguiente comando para arrancar el servidor de Laravel

```sh
php artisan serve
```

Si nos vamos al navegador y colocamos la url que nos proporciona Laravel http://127.0.0.1:8000 veremos que nos redireje a Google

No tengas miedo es correcto ya que dentro del proyecto hay una validación para que la web de Laravel solo pueda cargarse dentro de Electrón.

Ahora vamos a instalar las dependencias de electrón 

- Nos dirigiremos a la carpeta electrón y dentro abrimos nueva terminal
- Ejecutamos el siguiente comando

```sh
npm install
```

Como puedes observar se te creó nueva carpeta node_modules esta carpeta tiene el mismo funcionamiento que la de Laravel

Para iniciar el Electrón usaremos el siguiente comando 

```sh
npm start
```

Recuerda que Electrón carga dentro de él Laravel por ende tenemos que tener ejecutado el comando php artisan serve que inicia el Laravel

Si todo sale bien se nos abrirá ventana de Electrón mostrando un login 

Recuerda tener encendido el proyecto de Emulador.

Pero esto no es así ya que si intentas loguearte veras que se te va la conexion. La razón de este error es porque el login se produce a través de Sockets.

Hay que realizar un paso intermedio, una vez ejecutado el Emulador nos tenemos que dirigir a la carpeta node dentro de Laravel y abrir nueva terminal.

En la terminal ejecutaremos el siguiente comando

```sh
node server.js
```

Esto hará que se ejecute el servidor de Node que hace de intermediario entre Emulador y Web

Ahora si todo está configurado :)


