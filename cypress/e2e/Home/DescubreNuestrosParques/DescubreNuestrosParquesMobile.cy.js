import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Home descubre nuestros parques Mobile', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home descubre PAV', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
    });
    //
    it('Home descubre PCO', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
    });
    //
    it('Home descubre PPH', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
     });
})