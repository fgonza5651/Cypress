import homePage from "../../../pages/home/homePage";
import ArticulosNoticiasPage from "../../../pages/Comunidad/ArticulosNoticiasPage";
import TodoPage from "../../../pages/Comunidad/TodoPage";
import ActividadesParquePage from "../../../pages/Comunidad/ActividadesParquesPage";
import SostenibilidadPage from "../../../pages/Comunidad/SostenibilidadPage";
import SeccionMasParquePage from "../../../pages/Comunidad/SeccionMasParquePage";

describe('Comunidad ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Articulos y noticias -ver detalle', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        ArticulosNoticiasPage.SeleccionarDetalleNoticias()
        
    });
    
    //
    it('Todo -ver detalle', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        TodoPage.SeleccionarTodo()
        TodoPage.SeleccionarDetalleTodo()
        
    });
    
    //
    it('Actividades en nuestros parques -ver detalle', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        ActividadesParquePage.SeleccionarActividades()
        ActividadesParquePage.SeleccionarDetalleActividades()

     });
    
    //
    it('Sostenibilidad -ver detalle', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        SostenibilidadPage.SeleccionarSostenibilidad()
        SostenibilidadPage.SeleccionarDetalleSostenibilidad()

     });
    
    //
    it('Mas parque -ver detalle', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        SeccionMasParquePage.SeleccionarMasParque()
        SeccionMasParquePage.SeleccionarDetalleMasParque()

     });

})