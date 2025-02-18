import homePage from "../../../pages/home/homePage";
import BuscarSepultura from "../../../pages/Obituario/BuscarSepulturaPage";

describe('Obituario ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
          cy.clearCookies(); 
          cy.clearLocalStorage();
     });

     //
     it('Buscar sepultura -Revisar cards informativas', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.RevisarCard()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Sector', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarTodosParques()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Sector', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPAV()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Sector', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPCO()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Sector', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPPH()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Ver mapa', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarTodosParques()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Ver mapa', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPAV()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Ver mapa', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPCO()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Ver mapa', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPPH()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Ver mas Floreria', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasFloreria()

     });

     //
     it('Buscar sepultura -Ver mas Lapidas', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasLapidas()

     });

     //
     it('Buscar sepultura -Ver mas Ceremonia', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasCeremonia()

     });

     //
     it('Buscar sepultura -Ver mas Apoyo', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasApoyo()

     });

     //
     it('Buscar sepultura -Habla en linea', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasApoyoHablaLinea()
        
    });
    
    //
    it('Buscar sepultura -Ir a flores', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionVerMasFloresIr()

     });
    
    //
    it('Buscar sepultura -Revisar ceremonia del recuerdo', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.revisarCeremoniasRecuerdo()

     });
})