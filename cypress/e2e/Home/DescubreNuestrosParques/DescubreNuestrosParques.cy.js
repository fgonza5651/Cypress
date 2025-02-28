import homePage from "../../../pages/home/homePage";

describe('Home descubre nuestros parques', () => {

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
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
    });
    //
    it('Home descubre PCO', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
    });
    //
    it('Home descubre PPH', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
     });
})