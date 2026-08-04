const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  expose: { // since I have baseUrl, I do not need the Cypress.expose
   localUrl: "http://localhost:4000",
   prodUrl: "https://www.juliodelima.com.br",
},
  e2e: {
    reporter: 'cypress-mochawesome-reporter',

    baseUrl: 'http://localhost:4000',
    video: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
