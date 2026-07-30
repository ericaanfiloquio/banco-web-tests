const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  expose: { 
   localUrl: "http://localhost:4000",
   prodUrl: "https://www.juliodelima.com.br",
},
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
