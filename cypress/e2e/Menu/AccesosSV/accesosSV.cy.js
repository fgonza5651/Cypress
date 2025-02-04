import homePage from "../../../pages/home/homePage";

describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Pago express -Barra', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.RevisarNuevaUrl('1')

     });

     //
     it('Pago express -Ingreso cliente', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.RevisarNuevaUrl('2')

     });

})