import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import BuscarSepulturaMobile from "../../../pageMobile/Obituario/BuscarSepulturaPageMobile";


describe('Obituario ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Buscar sepultura -Revisar cards informativas', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.RevisarCard()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Sector', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarTodosParques()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Sector', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPAV()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Sector', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPCO()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Sector', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPPH()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Ver mapa', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarTodosParques()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Ver mapa', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPAV()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Ver mapa', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPCO()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Ver mapa', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPPH()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Ver mas Floreria', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasFloreria()

     });

     //
     it('Buscar sepultura -Ver mas Lapidas', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasLapidas()

     });

     //
     it('Buscar sepultura -Ver mas Ceremonia', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasCeremonia()

     });

     //
     it('Buscar sepultura -Ver mas Apoyo', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasApoyo()

     });

     //
     it('Buscar sepultura -Habla en linea', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasApoyoHablaLinea()
        
    });
    
    //
    it('Buscar sepultura -Ir a flores', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionVerMasFloresIr()

     });
    
    //
    it('Buscar sepultura -Revisar ceremonia del recuerdo', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.revisarCeremoniasRecuerdo()

     });
})