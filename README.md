# CodingChallenge

## Link to [Live Example](http://cbrmax.ddns.net)

## Prerequisites

- `Node.js`(version 14+) and `npm package manager`:

  https://nodejs.org/

- Angular CLI
  ```
  npm install -g @angular/cli
  ```

## Development server

- Clone repository
  ```bash
  git clone https://github.com/MaxCBR/solid-spoon.git
  ```
- Install dependencies
  ```bash
  cd solid-spoon
  npm install
  ```
- Start dev server:

  ```bash
  ng serve
  ```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Build the project. The build artifacts will be stored in the `dist/` directory.

```bash
ng build
```

## Running unit tests

execute the unit tests

```bash
ng test
```

## Running end-to-end tests

Firstly keep dev server running, then

```bash
npx cypress open
```

Select browser

Select `*.spec.js` files to run tests
