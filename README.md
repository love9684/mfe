# MonoWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Create application
    ng new mono-workspace --create-application=false
    cd mono-workspace
    ng g application container-app --routing --style=scss
    ng g application insurance-details --routing --style=scss
    ng g application premium-payment --routing --style=scss

To run the applications
    ng s container-app -o
    ng s insurance-details -o
    ng s premium-payment -o

Adding Module federation to each application
    Note - Our angular version is 16 so thats why we are using module-federation version 16
    ng add @angular-architects/module-federation@16.0.4 --project container-app --port 4200
    ng add @angular-architects/module-federation@16.0.4 --project insurance-details --port 4201
    ng add @angular-architects/module-federation@16.0.4 --project premium-payment --port 4202