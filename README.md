# Projet

Création d'un site web présentant des recettes de cuisine tunisienne.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Installation

Clonez le projet puis installez les dépendances :

```bash
git clone <url-du-repository>
cd <nom-du-projet>
npm install
```

## Lancer l'API JSON

Les recettes sont stockées dans un fichier JSON (`db.json`). Il doit être lancé **avant** l'application, avec [json-server](https://github.com/typicode/json-server) :

```bash
npx json-server --watch db.json --port 3000
```

L'API sera disponible sur `http://localhost:3000/`.

## Development server

Dans un second terminal, lancez le serveur de développement :

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

> ⚠️ Le fichier JSON doit tourner en même temps que `ng serve`, sinon les recettes ne s'afficheront pas.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
