import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Icono del home Mobile', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Icono del Home', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionaraFunerariaNI()
        homePageMobile.PrecionarLogoParqueHome()
     });
})