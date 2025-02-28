import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import BuscarSepulturaMobile from "../../../pageMobile/Obituario/BuscarSepulturaPageMobile";


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
     it('Buscar sepultura -Revisar cards informativas', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.RevisarCard()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Sector', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarTodosParques()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Sector', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPAV()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Sector', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPCO()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Sector', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPPH()
        BuscarSepulturaMobile.RevisarPersonaSector()

     });

     //
     it('Buscar sepultura -Revisar todos los parques -Ver mapa', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarTodosParques()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque americo vespucio -Ver mapa', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPAV()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque cordillera -Ver mapa', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPCO()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Revisar parque padre hurtado -Ver mapa', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.SeleccionarPPH()
        BuscarSepulturaMobile.RevisarPersonaVerMapa()

     });

     //
     it('Buscar sepultura -Ver mas Floreria', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasFloreria()

     });

     //
     it('Buscar sepultura -Ver mas Lapidas', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasLapidas()

     });

     //
     it('Buscar sepultura -Ver mas Ceremonia', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasCeremonia()

     });

     //
     it('Buscar sepultura -Ver mas Apoyo', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasApoyo()

     });

     //
     it('Buscar sepultura -Habla en linea', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionarVerMasApoyoHablaLinea()
        
    });
    
    //
    it('Buscar sepultura -Ir a flores', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.seleccionVerMasFloresIr(this.datos.Url)

     });
    
    //
    it('Buscar sepultura -Revisar ceremonia del recuerdo', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        BuscarSepulturaMobile.revisarCeremoniasRecuerdo()

     });
})