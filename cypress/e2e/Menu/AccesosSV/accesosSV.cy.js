import homePage from "../../../pages/home/homePage";

describe('Accesos y Rutas ', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

         cy.fixture('Datos').then((datos) =>{
            this.datos = datos
         })
     });

     //
     it('Pago express -Barra', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.RevisarNuevaUrl('1')

     });

     //
     it('Pago express -Ingreso cliente', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.RevisarNuevaUrl('2')

     });

})