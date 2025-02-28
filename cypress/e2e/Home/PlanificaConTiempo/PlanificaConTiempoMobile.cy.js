import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Icono del home', () => {

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
        homePageMobile.seleccionPlanificaConTiempo(this.datos.Url)
     });
})