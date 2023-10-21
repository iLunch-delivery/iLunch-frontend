## Equipo

- Andrés Aparicio Mestre
- David Mateo García Vallejo
- José David Cardona Soto
- Manuel Alejandro Gallego Jiménez
- Maria Paula Duque Muñoz

## Sobre el trabajo

- **Descripción:** iLunch es una plataforma de delivery de pedidos de comida. En el presente repositorio se presenta la capa front end de la aplicación. En ella se podrá interactuar con las funcionalidades principales y que no depende de una API para su ejecución.
- **Funcionalidades implementadas:**

  - Inicio de sesión
  - Visualización de restaurantes
  - Visualización de platos
  - Edición y visualización de carrito de compras
  - Visualización de pedidos activos
  - Edición y visualización de perfil de usuario
  - Busqueda de restaurantes y platos por nombre, categoría o platillo popular
  - Visualización e interacción de ofertas laborales

- **Funcionalidades por implementadar con la aplicación de backend:**

  - Registro de usuario
  - Registro de aspirante a oferta laboral
  - Persistencia de datos
  - Mapa interactivo de restaurantes

- **Framework:** NextJS 13.5.4 con React 18.2.22
- **Librerías CSS:** TailwindCSS 3.3.3 y Flowbite 1.8.1 (Flowbite-React 0.6.4)
- **Lenguaje de scripting:** Typescript 5.2.2
- **A tener en cuenta:** La simulación de datos no es persistente, por lo que se recomienda no recargar la página mientras se interactúa con la aplicación para no perder la información de los contextos.

## Cómo ejecutar el trabajo

- **Versión Node:** 20.6.3

1. Ubicarse al interior del repositorio

2. Instalar los paquetes necesarios:

```bash
npm install
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

5. Para interactuar con la simulación de datos se debe acceder por la ruta [http://localhost:3000/login](http://localhost:3000/login) y acceder con el correo `admin@ilunch.com` y la contraseña `admin`.
