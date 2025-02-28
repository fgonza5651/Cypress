import homePage from "../../../pages/home/homePage";

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
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionaraFunerariaNI(this.datos.Url)
        homePage.PrecionarLogoParqueHome(this.datos.Url)
     });
})