# Banco Web Tests

This project is a collection of automated web tests for the banking application using Cypress with JavaScript. It was created as part of my study journey in automation testing with Cypress during the mentoring sessions of Julio de Lima.

## Project Objective

The main goal of this repository is to demonstrate my learning and practice in automated testing, covering user flows such as login and money transfers in a web application. The project focuses on building stable, readable, and maintainable end-to-end tests with Cypress.

## Project Components

This repository is composed of the following main parts:

- Cypress end-to-end tests located in the cypress/e2e folder
- Custom commands implemented in the cypress/support/commands folder
- Test data stored in the cypress/fixtures folder
- Cypress configuration in cypress.config.js
- Test reports generated through cypress-mochawesome-reporter

## Test Coverage

The automated tests currently cover:

- Login with valid credentials
- Login with invalid credentials
- Successful money transfer
- Transfer attempt above the allowed limit without authentication

## Installation

Before running the tests, make sure the following applications are running:

- The banking API: banco-api
- The web application: banco-web

### Prerequisites

- Node.js and npm installed
- Access to the local application and API environments

### Install dependencies

Run the following command in the project root:

```bash
npm install
```

## Running the Tests

### Open Cypress Test Runner

```bash
npm run cy:open
```

### Run tests in headless mode

```bash
npm run test
```

### Run tests in headed mode

```bash
npm run cy:headed
```

## Custom Commands

The project uses custom Cypress commands to keep the tests cleaner and more reusable.

### Available commands

- loginValidCredentials(): fills in valid login credentials and submits the form
- loginInvalidCredentials(): fills in invalid login credentials and submits the form
- realizarTransferencias(contaOrigem, contaDestino, valor): performs a transfer using the provided account data and amount
- verifyToastMessage(mensagem): validates the toast message shown in the UI
- selectOptionCombobox(fieldLabel, opcao): selects an option from a combobox based on its label

## Test Reports

Test execution reports are generated with cypress-mochawesome-reporter. After running the tests, the HTML report can be found in the cypress/reports/html folder.

## Project Structure

```text
cypress/
  e2e/
    login.cy.js
    transferencia.cy.js
  fixtures/
    credenciais.json
  support/
    commands/
      common.js
      login.js
      transferencia.js
cypress.config.js
package.json
```

## Notes

This repository is intended for learning and practicing automation testing with Cypress in a realistic web application context.
