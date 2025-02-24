import homePage from "../../../pages/home/homePage";
import LandingCremacionNF from "../../../pages/cremacion/landingCremacionNF/landingCremacionNF";

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