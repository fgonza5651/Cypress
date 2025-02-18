import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import ObituarioPageMobile from "../../../pageMobile/Obituario/ObituarioPageMobile";

describe('Obituario ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Obituario -Revisar cards informativas', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        ObituarioPageMobile.RevisarCard()

     });

     //
     it('Obituario -Seleccionar 12 diciembre 2024 PAV', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        ObituarioPageMobile.RevisarCard()
        ObituarioPageMobile.Seleccionar12Dic2024()
        ObituarioPageMobile.RevisarCardObituarioPAV()

     });

     //
     it('Obituario -Seleccionar 8 enero 2025 PCO', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        ObituarioPageMobile.RevisarCard()
        ObituarioPageMobile.Seleccionar8Ene2025()
        ObituarioPageMobile.RevisarCardObituarioPCO()

     });

     //
     it('Obituario -Seleccionar 21 junio 2024 PPH', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        ObituarioPageMobile.RevisarCard()
        ObituarioPageMobile.Seleccionar21Jun2024()
        ObituarioPageMobile.RevisarCardObituarioPPH()

     });
})