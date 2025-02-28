import homePage from "../../../pages/home/homePage";

describe('Home Explora nuestros Servicios', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');

        cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
     });

     //
     it('Home Explora nuestros servicios -Funeraria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionarCardFuneraria(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionarCardVelatorio(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Cremacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionarCardCremacion(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Sepultura', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionarCardSepultura(this.datos.Url)
    });
})