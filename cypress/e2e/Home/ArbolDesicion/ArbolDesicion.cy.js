import homePage from "../../../pages/home/homePage";

describe('Arbol de Desicion ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Arbol de desiciones - Funeraria NI', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionaraFunerariaNI()
     });

     //
     it('Home Arbol de desiciones - Velatorio NI', () => {
         homePage.ingresoHomeParqueDelRecuerdo()
         homePage.seleccionaraVelatorioNI()
     });

     //
     it('Home Arbol de desiciones - Cremacion NI', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionaraCremacionNI()
     });

     //
     it('Home Arbol de desiciones - Sepultura NI', () => {
         homePage.ingresoHomeParqueDelRecuerdo()
         homePage.seleccionaraSepulturaNI()
     });

     //
     it('Home Arbol de desiciones - Funeraria NIF', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionFunerariaNIF()
     });

     //
     it('Home Arbol de desiciones - Cremacion NIF', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionCremacionNIF()
     });

     //
     it('Home Arbol de desiciones - Sepultura NIF', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionSepulturaNIF()
     });
})