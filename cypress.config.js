const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "suzrxt",
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://ic.parquedelrecuerdo.cl/", // Cambia según tu proyecto
    chromeWebSecurity: false,
    supportFile: false,
  },
});
