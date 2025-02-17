import homePage from "../../../pages/home/homePage";
import MasparquesPage from "../../../pages/Comunidad/MasParquesPage";

describe('Comunidad ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Mas Parques -Revisar titulos', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        MasparquesPage.RevisarTitulos()

     });

     //
     it('Mas parques -Calendario actividades ver detalle', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        MasparquesPage.SeleccionarDetalleCalendario()

     });

     //
     it('Mas parques -Noticias y actividades ver detalle', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        MasparquesPage.SeleccionarDetalleNoticias()

     });

})