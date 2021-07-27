# JustinMarotta

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

**Simple, Fast, Full Stack Development**

##  Setup:

Download Node.js
> https://nodejs.org/en/download/

<br>

Run the following with sudo privileges:
-  `npm install -g yarn`
-  `npm install -g @angular/cli`
-  `npm install -g @nrwl/cli`

- `npx create-nx-workspace@latest`
  - Root folder name
  - Angular & Nest
  - App Name
  - SASS - .scss
  - No linter
  - No cloud

<br>

## Starting your App:

In two separate terminal tabs:

- `nx serve api`
- `yarn start`

<br>

## Adding Libraries:
- [Angular Material](https://material.angular.io/) - [Instructions](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/6-angular-material)
  - `npm install @angular/material @angular/cdk @angular/flex-layout @angular/animations --save`
  - `nx generate @nrwl/angular:lib material`
