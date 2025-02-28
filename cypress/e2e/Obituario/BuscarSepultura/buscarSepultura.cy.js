import homePage from "../../../pages/home/homePage";
import BuscarSepultura from "../../../pages/Obituario/BuscarSepulturaPage";

describe('Obituario ', () =>  {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
          cy.clearCookies(); 
          cy.clearLocalStorage();

         cy.fixture('Datos').then((datos) =>{
            this.datos = datos
         })
     });

     //
     it('Buscar sepultura -Revisar cards informativas', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.RevisarCard()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Sector', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarTodosParques()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Sector', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPAV()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Sector', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPCO()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Sector', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPPH()
        BuscarSepultura.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Ver mapa', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarTodosParques()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Ver mapa', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPAV()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Ver mapa', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPCO()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Ver mapa', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.SeleccionarPPH()
        BuscarSepultura.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Ver mas Floreria', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasFloreria()

     });

     //
     it('Buscar sepultura -Ver mas Lapidas', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasLapidas()

     });

     //
     it('Buscar sepultura -Ver mas Ceremonia', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasCeremonia()

     });

     //
     it('Buscar sepultura -Ver mas Apoyo', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasApoyo()

     });

     //
     it('Buscar sepultura -Habla en linea', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionarVerMasApoyoHablaLinea()
        
    });
    
    //
    it('Buscar sepultura -Ir a flores', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.seleccionVerMasFloresIr(this.datos.Url)

     });
    
    //
    it('Buscar sepultura -Revisar ceremonia del recuerdo', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        BuscarSepultura.revisarCeremoniasRecuerdo()

     });
})