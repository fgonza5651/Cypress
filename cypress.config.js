const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      //Tarea para limpiar la carpeta de descargas
      on("task", {
        clearDownloadsFolder() {
          const downloadsFolder = path.join(__dirname, "cypress", "downloads");
          
          if (fs.existsSync(downloadsFolder)) {
            // Elimina todos los archivos dentro de la carpeta de descargas
            fs.readdirSync(downloadsFolder).forEach((file) => {
              const filePath = path.join(downloadsFolder, file);
              fs.unlinkSync(filePath); // Elimina el archivo
            });
          }
          
          return null; // Cypress espera que las tareas devuelvan null o un valor
        },
        
      });
      
      // implement node event listeners here
    },
    projectId: "suzrxt",
    experimentalMemoryManagement: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://ic.parquedelrecuerdo.cl/", // Cambia según tu proyecto
    browser: 'chrome',
    chromeWebSecurity: false,
    args: ['--disable-features=PrivacySandbox'],
    supportFile: false,
    downloadsFolder: "cypress/downloads",
  },
});
