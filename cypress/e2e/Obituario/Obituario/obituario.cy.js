import homePage from "../../../pages/home/homePage";
import ObituarioPage from "../../../pages/Obituario/ObituarioPage";

describe('Obituario ', () => {

    beforeEach(function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

         cy.fixture('Datos').then((datos) =>{
            this.datos = datos
         })
     });

     //
     it('Obituario -Revisar cards informativas', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()

     });

     //
     it('Obituario -Seleccionar 12 diciembre 2024 PAV', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar12Dic2024()
        ObituarioPage.RevisarCardObituarioPAV()

     });

     //
     it('Obituario -Seleccionar 8 enero 2025 PCO', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar8Ene2025()
        ObituarioPage.RevisarCardObituarioPCO()

     });

     //
     it('Obituario -Seleccionar 21 junio 2024 PPH', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar21Jun2024()
        ObituarioPage.RevisarCardObituarioPPH()

     });
})