import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Arbol de Desicion Mobile', () => {

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
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionaraFunerariaNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Velatorio NI', function()  {
         homePageMobile.ingresoHomeMobile(this.datos.Url)
         homePageMobile.seleccionaraVelatorioNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Cremacion NI', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionaraCremacionNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Sepultura NI', function()  {
         homePageMobile.ingresoHomeMobile(this.datos.Url)
         homePageMobile.seleccionaraSepulturaNI(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Funeraria NIF', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionFunerariaNIF(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Cremacion NIF', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionCremacionNIF(this.datos.Url)
     });

     //
     it('Home Arbol de desiciones - Sepultura NIF', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.seleccionSepulturaNIF(this.datos.Url)
     });
})