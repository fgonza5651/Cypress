import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Home Explora nuestros Servicios Mobile', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Explora nuestros servicios -Funeraria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionarCardFuneraria()
    });
     //
     it('Home Explora nuestros servicios -Velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionarCardVelatorio()
    });
     //
     it('Home Explora nuestros servicios -Cremacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionarCardCremacion()
    });
     //
     it('Home Explora nuestros servicios -Sepultura', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionarCardSepultura()
    });
})