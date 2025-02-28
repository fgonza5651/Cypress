import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

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

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.RevisarNuevaUrl('2')

     });

     //
     it('Pago express -Ingreso cliente', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.RevisarNuevaUrl('3')

     });

})