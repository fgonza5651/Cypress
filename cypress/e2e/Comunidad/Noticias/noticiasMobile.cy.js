import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import ArticulosNoticiasPageMobile from "../../../pageMobile/Comunidad/ArticulosNoticiasPageMobile";
import TodoPageMobile from "../../../pageMobile/Comunidad/TodoPageMobile";
import ActividadesParquePageMobile from "../../../pageMobile/Comunidad/ActividadesParquePageMobile";
import SostenibilidadPageMobile from "../../../pageMobile/Comunidad/SostenibilidadPageMobile";
import SeccionMasParquePageMobile from "../../../pageMobile/Comunidad/SeccionMasParquePageMobile";

describe('Comunidad ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Articulos y noticias -ver detalle', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        ArticulosNoticiasPageMobile.SeleccionarDetalleNoticias()
        
    });
    
    //
    it('Todo -ver detalle', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        TodoPageMobile.SeleccionarTodo()
        TodoPageMobile.SeleccionarDetalleTodo()
        
    });
    
    //
    it('Actividades en nuestros parques -ver detalle', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        ActividadesParquePageMobile.SeleccionarActividades()
        ActividadesParquePageMobile.SeleccionarDetalleActividades()

     });
    
    //
    it('Sostenibilidad -ver detalle', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        SostenibilidadPageMobile.SeleccionarSostenibilidad()
        SostenibilidadPageMobile.SeleccionarDetalleSostenibilidad()

     });
    
    //
    it('Mas parque -ver detalle', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        SeccionMasParquePageMobile.SeleccionarMasParque()
        SeccionMasParquePageMobile.SeleccionarDetalleMasParque()

     });

})