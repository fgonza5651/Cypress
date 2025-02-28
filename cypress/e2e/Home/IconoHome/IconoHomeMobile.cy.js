import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Icono del home Mobile', function()  {

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
     it('Home Icono del Home', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionaraFunerariaNI(this.datos.Url)
        homePageMobile.PrecionarLogoParqueHome(this.datos.Url)
     });
})