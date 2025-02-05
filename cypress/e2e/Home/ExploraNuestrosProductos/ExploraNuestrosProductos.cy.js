import homePage from "../../../pages/home/homePage";

describe('Home Explora nuestros Servicios', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Explora nuestros servicios -Funeraria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionarCardFuneraria()
    });
     //
     it('Home Explora nuestros servicios -Velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionarCardVelatorio()
    });
     //
     it('Home Explora nuestros servicios -Cremacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionarCardCremacion()
    });
     //
     it('Home Explora nuestros servicios -Sepultura', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionarCardSepultura()
    });
})