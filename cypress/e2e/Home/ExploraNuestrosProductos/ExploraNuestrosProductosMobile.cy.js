import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Home Explora nuestros Servicios Mobile', () => {

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
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionarCardFuneraria(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionarCardVelatorio(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Cremacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionarCardCremacion(this.datos.Url)
    });
     //
     it('Home Explora nuestros servicios -Sepultura', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionarCardSepultura(this.datos.Url)
    });
})