import homePage from "../../../pages/home/homePage";

describe('Landing cremacion NF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     it('Formulario cremacion necesidad futura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarCremacionNecesidadFutura()

     });
})