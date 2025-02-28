import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Home descubre nuestros parques Mobile', () => {

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
     it('Home descubre PAV', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
    });
    //
    it('Home descubre PCO', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
    });
    //
    it('Home descubre PPH', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
     });
})