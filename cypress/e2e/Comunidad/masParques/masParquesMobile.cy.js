import MasparquesPageMobile from "../../../pageMobile/Comunidad/MasParquesPageMobile";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";

describe('Comunidad ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Comunidad -Revisar titulos', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('1')
        MasparquesPageMobile.RevisarTitulos()

     });

     //
     it('Comunidad -Calendario actividades ver detalle', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('1')
        MasparquesPageMobile.SeleccionarDetalleCalendario()

     });

     //
     it('Comunidad -Noticias y actividades ver detalle', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('1')
        MasparquesPageMobile.SeleccionarDetalleNoticias()

     });

})