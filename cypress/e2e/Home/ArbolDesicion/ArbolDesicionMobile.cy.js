import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Arbol de Desicion Mobile', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Home Arbol de desiciones - Funeraria NI', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionaraFunerariaNI()
     });

     //
     it('Home Arbol de desiciones - Velatorio NI', () => {
         homePageMobile.ingresoHomeMobile()
         homePageMobile.seleccionaraVelatorioNI()
     });

     //
     it('Home Arbol de desiciones - Cremacion NI', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionaraCremacionNI()
     });

     //
     it('Home Arbol de desiciones - Sepultura NI', () => {
         homePageMobile.ingresoHomeMobile()
         homePageMobile.seleccionaraSepulturaNI()
     });

     //
     it('Home Arbol de desiciones - Funeraria NIF', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionFunerariaNIF()
     });

     //
     it('Home Arbol de desiciones - Cremacion NIF', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionCremacionNIF()
     });

     //
     it('Home Arbol de desiciones - Sepultura NIF', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.seleccionSepulturaNIF()
     });
})