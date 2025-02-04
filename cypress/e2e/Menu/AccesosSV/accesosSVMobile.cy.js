import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Pago express -Barra', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.RevisarNuevaUrl('2')

     });

     //
     it('Pago express -Ingreso cliente', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.RevisarNuevaUrl('3')

     });

})