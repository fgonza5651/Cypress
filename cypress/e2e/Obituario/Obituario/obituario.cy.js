import homePage from "../../../pages/home/homePage";
import ObituarioPage from "../../../pages/Obituario/ObituarioPage";

describe('Obituario ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Obituario -Revisar cards informativas', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()

     });

     //
     it('Obituario -Seleccionar 12 diciembre 2024 PAV', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar12Dic2024()
        ObituarioPage.RevisarCardObituarioPAV()

     });

     //
     it('Obituario -Seleccionar 8 enero 2025 PCO', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar8Ene2025()
        ObituarioPage.RevisarCardObituarioPCO()

     });

     //
     it('Obituario -Seleccionar 21 junio 2024 PPH', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        ObituarioPage.RevisarCard()
        ObituarioPage.Seleccionar21Jun2024()
        ObituarioPage.RevisarCardObituarioPPH()

     });
})