import homePage from "../../../pages/home/homePage";

describe('Home descubre nuestros parques', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home descubre PAV', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
    });
    //
    it('Home descubre PCO', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
    });
    //
    it('Home descubre PPH', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
     });
})