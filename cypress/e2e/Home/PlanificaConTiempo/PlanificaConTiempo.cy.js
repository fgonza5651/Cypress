import homePage from "../../../pages/home/homePage";

describe('Icono del home', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Icono del Home', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionPlanificaConTiempo()
     });
})