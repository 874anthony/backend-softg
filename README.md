# Back-end repository for Soft-G Test.

## Breve explicación del repositorio.

Este es el repositorio del back-end que está hecho con `Node.js` y tipado con el superset de `TypeScript`. La base de datos que usé para guardar la información es un _cluster_ que está en **AWS de MongoDB**, en el `Control Access List` ya permití conexiones de todas partes **(0.0.0.0/0)**, por ende no debería presentarles ningún problema. En caso tal, hacermelo saber por favor.

Para correrlo debes hacer lo siguiente:

- Ya que el desarrollo está en el entorno de desarrollo, instalar los **node_modules** con `npm i`
- Luego correr la aplicación con el comando `npm run serve`

##### Note: La aplicación escucha en el puerto **3000** por defecto.

## Breve explicación de la estructuración de folders

| Folder      | Explicación                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| Controllers | Los controladores que ejecutan las acciones de la aplicación                                           |
| Models      | Los modelos en base de datos o donde plasmo un poco la lógica de negocios relacionada al proyecto      |
| Routes      | Las rutas de la aplicación                                                                             |
| Src         | Este es el código fuente principal (ya compilado a JavaScript), este iría en un servidor de producción |
| Utils       | Utilidades o funciones que puedo llamar en cualquier sitio y me servirían de ayuda                     |

### Aquí tengo el enlace a la [documentation](https://documenter.getpostman.com/view/8559278/UzBmNStU) de los endpoints que se crearon.
