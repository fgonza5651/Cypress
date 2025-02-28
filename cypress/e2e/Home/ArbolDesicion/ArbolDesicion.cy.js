import homePage from "../../../pages/home/homePage";

describe('Arbol de Desicion ', () => {

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
     it('Home Arbol de desiciones - Funeraria NI', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionaraFunerariaNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Velatorio NI', function()  {
         homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
         homePage.seleccionaraVelatorioNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Cremacion NI', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionaraCremacionNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Sepultura NI', function()  {
         homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
         homePage.seleccionaraSepulturaNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Funeraria NIF', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionFunerariaNIF(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Cremacion NIF', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionCremacionNIF(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Sepultura NIF', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionSepulturaNIF(this.datos.Url)
     });
})