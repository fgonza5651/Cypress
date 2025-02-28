import homePage from "../../../pages/home/homePage";
import LandingCremacionNF from "../../../pages/cremacion/landingCremacionNF/landingCremacionNF";

describe('Landing cremacion NF', () => {

    beforeEach(function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
     });

     it('Formulario cremacion necesidad futura', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarCremacionNecesidadFutura()

     });
})