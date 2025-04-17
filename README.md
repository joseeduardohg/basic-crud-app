# Basic CRUD APP

This is sample Single Page Application project to demonstrate how to connect a
Frontend Application to a Backend Application.

In this example, I'll be using React Router for the Frontend, Nest.js for the
backend, and MySQL for the database.

I'll be using Docker because is the fastest way to setup an internal network for
just frontend, backend, and even the database.

## Requirements

In order to use this repository, you need to have installed the following:

- git
- node
- pnpm
- docker (Docker Desktop if your using Windows or macOS)

## Installation

You can clone this repository directly or you can fork this repository to your
account, and then clone it.

### Fork the Repository

1. Go to the
   [repository page in GitHub](https://github.com/joseeduardohg/basic-crud-app).
2. Click on _Fork_ button.
3. Enter the name of your new repository.
4. Click on _Create fork_ button.
5. You can follow the [Clone the Repository section](#clone-the-repository) to
   clone the repository.

```

```

### [Clone the Repository](#clone-the-repository)

To install the project in your local environment:

1. Open a terminal (Windows Terminal, Git Bash...).
2. Navigate to the desired location for the project using `cd`. For example,
   `cd ~/code/practices/`.
3. Go to the GitHub page of repository (either the original or the one you
   forked).
4. Select the _Code_ button and copy the _HTTPS_ link.
5. Clone the repository as follows:

   ```bash
   git clone https://github.com/username/repository.git
   ```

   > **_NOTE:_** You should paste the copied URL from previous step.

6. Enter the directory of the repository.

   ```bash
   cd basic-crud-app/
   ```

7. Enter the frontend and install dependencies:

   ```bash
   cd frontend/
   pnpm install
   ```

8. Enter the api and install dependencies:

   ```bash
   cd ../api/
   pnpm install
   ```

## Usage
