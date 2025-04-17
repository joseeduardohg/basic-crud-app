Idiomas

[English](https://github.com/joseeduardohg/basic-crud-app/tree/main/.github/README.md)
| Español

# Aplicación CRUD Básica

Esto es un proyecto de una Aplicación de una Sola Página (_Single Page
Application_) para demostrar cómo conectar una aplicación frontend a una
aplicación backend.

En este ejemplo, estaré usando React Router para el frontend, Nest.js para el
backend y MySQL para la base de datos.

Estaré usando Docker porque es la manera más sencilla de configurar una red
interna solo para el frontend, backend e, incluso, la base de datos.

## Requisitos

Para poder usar el repositorio, necesitas tener instalado lo siguiente:

- git
- node
- pnpm
- docker (Docker Desktop si usas Windows o macOS)

## Instalación

Puedes clonar este repositorio directamente o puedes hacer un _fork_ en tu
cuenta y clonarlo.

### Hacer un _Fork_ del repositorio

1. Ve a la [página del repositorio en GitHub][repopage].
2. Haz clic en _Fork_.
3. Ingresa un nombre para el nuevo repositorio.
4. Haz clic en _Create fork_.
5. Puedes continuar con la
   [sección _Clonar el Repositorio_](#clonar-el-repositorio) para clonar el
   repositorio.

### Clonar el repositorio

Para instalar el proyecto en tu entorno local:

1. Abre una terminal (Windows Terminal, Git Bash...).
2. Navega al destino donde estará tu proyecto usando `cd`. Por ejemplo,
   `cd ~/code/practices/`.
3. Ve a la página de GitHub del repositorio (ya sea el [original][repopage] o al
   que hiciste _fork_).
4. Selecciona el botón _Code_ y copia el enlace _HTTPS_.
5. Clona el repositorio:

   ```bash
   git clone https://github.com/username/repository.git
   ```

   > **_NOTA:_** Deberás pegar la URL que copiaste en el paso anterior.

6. Entra al directorio del repositorio.

   ```bash
   cd basic-crud-app/
   ```

7. Entra al frontend e instala las dependencias:

   ```bash
   cd frontend/
   pnpm install
   ```

8. Entra a la api e instala las dependencias:

   ```bash
   cd ../api/
   pnpm install
   ```

## Uso

[repopage]: https://github.com/joseeduardohg/basic-crud-app
