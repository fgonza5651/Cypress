import ChatPage from "../../pages/Chat/ChatPage";
import homePage from "../../pages/home/homePage";
import CafeteriaVelatorioBasico from "../../pages/CafeteriaVelatorio/CafeteriaVelatorioNI/cafeteriaVelatorioBasico";
import carroCompras from "../../pages/carroCompras/carroCompras/carroCompras";
import ActividadesParquePage from "../../pages/Comunidad/ActividadesParquesPage";
import ArticulosNoticiasPage from "../../pages/Comunidad/ArticulosNoticiasPage";
import MasparquesPage from "../../pages/Comunidad/MasParquesPage";
import SeccionMasParquePage from "../../pages/Comunidad/SeccionMasParquePage";
import SostenibilidadPage from "../../pages/Comunidad/SostenibilidadPage";
import TodoPage from "../../pages/Comunidad/TodoPage";
import cremacionBasicoNI from "../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import cremacionFullNI from "../../pages/cremacion/cremacionFullNI/cremacionFullNI";
import cremacionParvulo from "../../pages/cremacion/cremacionParvulo/cremacionParvulo";
import cremacionPremiumNI from "../../pages/cremacion/cremacionPremiumNI/cremacionPremiumNI";
import LandingCremacionNF from "../../pages/cremacion/landingCremacionNF/landingCremacionNF";
import landingCremacionNi from "../../pages/cremacion/landingCremacionNI/cremacionNIPage";
import CrenacionNIFF from "../../pages/cremacion/landingCremacionNIF/cremacionNIFPage";
import funerariaBasico from "../../pages/funeraria/funerariaBasico/funerariaBasico";
import funerariaParvulo from "../../pages/funeraria/funerariaParvulo/funerariaParvulo";
import funerariaParvuloBase from "../../pages/funeraria/funerariaParvuloBase/funerariaParvuloBase";
import funerariaParvuloDestacado from "../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import funerariaPremium from "../../pages/funeraria/funerariaPremium/funerariaPremium";
import funerariaPremiumDestacada from "../../pages/funeraria/funerariaPremiumDestacada/funerariaPremiumDestacada";
import funerariaSustentable from "../../pages/funeraria/funerariaSustentable/funerariaSustentable";
import funerariaTradicion from "../../pages/funeraria/funerariaTradicion/funerariaTradicion";
import funerariaTradicionDestacado from "../../pages/funeraria/funerariaTradicionDestacado/funerariaTradicionDestacado";
import landingFunerariaNF from "../../pages/funeraria/landingFunerariaNF/landingFunerariaNF";
import landingFunerariaNI from "../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";
import landingFunerariaNIF from "../../pages/funeraria/landingFunerariaNIF/landingFunerariaNIF";
import BuscarSepultura from "../../pages/Obituario/BuscarSepulturaPage";
import ObituarioPage from "../../pages/Obituario/ObituarioPage";
import PavHome from "../../pages/parques/PAV";
import PcoHome from "../../pages/parques/PCO";
import PphHome from "../../pages/parques/PPH";
import PortalConocenosPage from "../../pages/portalConocenos/portalConocenosPage.cy";
import segurosPage from "../../pages/seguros/SegurosPage";
import landingSepulturaNI from "../../pages/sepultura/landingSepulturaNI/landingSepulturaNI";
import landingSepulturaNIF from "../../pages/sepultura/landingSepulturaNIF/landingSepulturaNIF";
import landingSepulturaNF from "../../pages/sepultura/landingSepuluraNF/landingSepulturaNF";
import servicioClientePage from "../../pages/servicioCliente/servicioAlClientePage";

describe('Chat en linea', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
          cy.clearCookies();   
          cy.clearLocalStorage();
    });

    //
    it('home -Seleccionar Hablar con una Asesora', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('home -Seleccionar Otra Solicitud', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Cafeteria Velatorio Basico -Seleccionar Hablar con una Asesora', () => {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Cafeteria Velatorio Basico -Seleccionar Otra Solicitud', () => {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('carro Compras -Seleccionar Hablar con una Asesora', () => {
        carroCompras.ingresarCarroCompras()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('carro Compras -Seleccionar Otra Solicitud', () => {
        carroCompras.ingresarCarroCompras()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Actividades Parque -Seleccionar Hablar con una Asesora', () => {
        ActividadesParquePage.ingresarActividadesParque()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Actividades Parque -Seleccionar Otra Solicitud', () => {
        ActividadesParquePage.ingresarActividadesParque()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Actividades Parque -Detalle actividad -Seleccionar Hablar con una Asesora', () => {
        ActividadesParquePage.ingresarActividadesParque()
        ActividadesParquePage.SeleccionarDetalleActividades()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Actividades Parque -Detalle actividad -Seleccionar Otra Solicitud', () => {
        ActividadesParquePage.ingresarActividadesParque()
        ActividadesParquePage.SeleccionarDetalleActividades()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Articulos Noticias -Seleccionar Hablar con una Asesora', () => {
        ArticulosNoticiasPage.ingresarArticulosNoticias()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Articulos Noticias -Seleccionar Otra Solicitud', () => {
        ArticulosNoticiasPage.ingresarArticulosNoticias()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Articulos Noticias -Detalle noticias -Seleccionar Hablar con una Asesora', () => {
        ArticulosNoticiasPage.ingresarArticulosNoticias()
        ArticulosNoticiasPage.SeleccionarDetalleNoticias()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Articulos Noticias -Detalle noticias -Seleccionar Otra Solicitud', () => {
        ArticulosNoticiasPage.ingresarArticulosNoticias()
        ArticulosNoticiasPage.SeleccionarDetalleNoticias()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Mas parques -Seleccionar Hablar con una Asesora', () => {
        MasparquesPage.IngresarMasParques()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Seleccionar Otra Solicitud', () => {
        MasparquesPage.IngresarMasParques()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Mas parques -Detalle calendario -Seleccionar Hablar con una Asesora', () => {
        MasparquesPage.IngresarMasParques()
        MasparquesPage.SeleccionarDetalleCalendario()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Detalle calendario -Seleccionar Otra Solicitud', () => {
        MasparquesPage.IngresarMasParques()
        MasparquesPage.SeleccionarDetalleCalendario()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Mas Parque -Detalle noticias -Seleccionar Hablar con una Asesora', () => {
        MasparquesPage.IngresarMasParques()
        MasparquesPage.SeleccionarDetalleNoticias()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Detalle noticias -Seleccionar Otra Solicitud', () => {
        MasparquesPage.IngresarMasParques()
        MasparquesPage.SeleccionarDetalleNoticias()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Seccion Mas Parque -Seleccionar Hablar con una Asesora', () => {
        SeccionMasParquePage.ingresarSeccionMasParques()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Seccion Mas Parque -Seleccionar Otra Solicitud', () => {
        SeccionMasParquePage.ingresarSeccionMasParques()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Seccion Mas Parque -Detalle mas parque -Seleccionar Hablar con una Asesora', () => {
        SeccionMasParquePage.ingresarSeccionMasParques()
        SeccionMasParquePage.SeleccionarDetalleMasParque()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Seccion Mas Parque -Detalle mas parque -Seleccionar Otra Solicitud', () => {
        SeccionMasParquePage.ingresarSeccionMasParques()
        SeccionMasParquePage.SeleccionarDetalleMasParque()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Sostenibilidad -Seleccionar Hablar con una Asesora', () => {
        SostenibilidadPage.ingresarSostenibilidad()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Sostenibilidad -Seleccionar Otra Solicitud', () => {
        SostenibilidadPage.ingresarSostenibilidad()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Sostenibilidad -Detalle sostenibilidad -Seleccionar Hablar con una Asesora', () => {
        SostenibilidadPage.ingresarSostenibilidad()
        SostenibilidadPage.SeleccionarDetalleSostenibilidad()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Sostenibilidad -Detalle sostenibilidad -Seleccionar Otra Solicitud', () => {
        SostenibilidadPage.ingresarSostenibilidad()
        SostenibilidadPage.SeleccionarDetalleSostenibilidad()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('todo -Seleccionar Hablar con una Asesora', () => {
        TodoPage.ingresarTodo()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('todo -Seleccionar Otra Solicitud', () => {
        TodoPage.ingresarTodo()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Todo -Detalle todo -Seleccionar Hablar con una Asesora', () => {
        TodoPage.ingresarTodo()
        TodoPage.SeleccionarDetalleTodo()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('todo -Detalle todo -Seleccionar Otra Solicitud', () => {
        TodoPage.ingresarTodo()
        TodoPage.SeleccionarDetalleTodo()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-1784
    it('cremacion Basico NI -Seleccionar Hablar con una Asesora', () => {
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2532
    it('cremacion Basico NI -Seleccionar Otra Solicitud', () => {
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        ChatPage.seleccionarOtroSolicitud()
        
    })

    //
    it('cremacion Full NI -Seleccionar Hablar con una Asesora', () => {
        cremacionFullNI.ingresoCremacionFullNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('cremacion Full NI -Seleccionar Otra Solicitud', () => {
        cremacionFullNI.ingresoCremacionFullNI()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('cremacion Parvulo -Seleccionar Hablar con una Asesora', () => {
        cremacionParvulo.ingresoCremacionParvulo()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('cremacion Parvulo -Seleccionar Otra Solicitud', () => {
        cremacionParvulo.ingresoCremacionParvulo()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('cremacion Premium NI -Seleccionar Hablar con una Asesora', () => {
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('cremacion Premium NI -Seleccionar Otra Solicitud', () => {
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('landing Cremacion NF -Seleccionar Hablar con una Asesora', () => {
        LandingCremacionNF.ingresoLandingCremacionNF()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('landing Cremacion NF -Seleccionar Otra Solicitud', () => {
        LandingCremacionNF.ingresoLandingCremacionNF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-2732
    it('landing Cremacion Ni -Seleccionar Hablar con una Asesora', () => {
        landingCremacionNi.ingresarLandingCremacionNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('landing Cremacion Ni -Seleccionar Otra Solicitud', () => {
        landingCremacionNi.ingresarLandingCremacionNI()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('landing Crenacion NIF -Seleccionar Hablar con una Asesora', () => {
        CrenacionNIFF.ingresarCremacionNIF()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('landing Crenacion NIF -Seleccionar Otra Solicitud', () => {
        CrenacionNIFF.ingresarCremacionNIF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Basico -Seleccionar Hablar con una Asesora', () => {
        funerariaBasico.ingresarFunerariaBasico()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Basico -Seleccionar Otra Solicitud', () => {
        funerariaBasico.ingresarFunerariaBasico()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo -Seleccionar Hablar con una Asesora', () => {
        funerariaParvulo.ingresarFunerariaParvulo()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo -Seleccionar Otra Solicitud', () => {
        funerariaParvulo.ingresarFunerariaParvulo()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo Base -Seleccionar Hablar con una Asesora', () => {
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo Base -Seleccionar Otra Solicitud', () => {
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo Destacado -Seleccionar Hablar con una Asesora', () => {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo Destacado -Seleccionar Otra Solicitud', () => {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Premium -Seleccionar Hablar con una Asesora', () => {
        funerariaPremium.ingresarFunerariaPremium()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Premium -Seleccionar Otra Solicitud', () => {
        funerariaPremium.ingresarFunerariaPremium()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Premium Destacada -Seleccionar Hablar con una Asesora', () => {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Premium Destacada -Seleccionar Otra Solicitud', () => {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Sustentable -Seleccionar Hablar con una Asesora', () => {
        funerariaSustentable.ingresarFunerariaSustentable()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Sustentable -Seleccionar Otra Solicitud', () => {
        funerariaSustentable.ingresarFunerariaSustentable()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Tradicion -Seleccionar Hablar con una Asesora', () => {
        funerariaTradicion.ingresarFunerariaTradicion()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Tradicion -Seleccionar Otra Solicitud', () => {
        funerariaTradicion.ingresarFunerariaTradicion()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Tradicion Destacado -Seleccionar Hablar con una Asesora', () => {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('funeraria Tradicion Destacado -Seleccionar Otra Solicitud', () => {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-2843
    it('landing Funeraria NF -Seleccionar Hablar con una Asesora', () => {
        landingFunerariaNF.ingresoLandingFunerariaNF()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2822
    it('landing Funeraria NF -Seleccionar Otra Solicitud', () => {
        landingFunerariaNF.ingresoLandingFunerariaNF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-2843
    it('landing Funeraria NI -Seleccionar Hablar con una Asesora', () => {
        landingFunerariaNI.ingresoLandingFunerariaNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2822
    it('landing Funeraria NI -Seleccionar Otra Solicitud', () => {
        landingFunerariaNI.ingresoLandingFunerariaNI()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-2842
    it('landing Funeraria NIF -Seleccionar Hablar con una Asesora', () => {
        landingFunerariaNIF.ingresoLandingFunerariaNIF()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2843
    it('landing Funeraria NIF -Seleccionar Otra Solicitud', () => {
        landingFunerariaNIF.ingresoLandingFunerariaNIF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Buscar Sepultura -Seleccionar Hablar con una Asesora', () => {
        BuscarSepultura.ingresoBusquedaSepultura()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Buscar Sepultura -Seleccionar Otra Solicitud', () => {
        BuscarSepultura.ingresoBusquedaSepultura()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Obituario -Seleccionar Hablar con una Asesora', () => {
        ObituarioPage.ingresoObituario()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Obituario -Seleccionar Otra Solicitud', () => {
        ObituarioPage.ingresoObituario()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Pav -Seleccionar Hablar con una Asesora', () => {
        PavHome.ingresoPavHome()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Pav -Seleccionar Otra Solicitud', () => {
        PavHome.ingresoPavHome()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Poc -Seleccionar Hablar con una Asesora', () => {
        PcoHome.ingresoPcoHome()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Poc -Seleccionar Otra Solicitud', () => {
        PcoHome.ingresoPcoHome()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('home -Seleccionar Hablar con una Asesora', () => {
        PphHome.ingresoPphHome()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('home -Seleccionar Otra Solicitud', () => {
        PphHome.ingresoPphHome()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -Reglamento -Seleccionar Hablar con una Asesora', () => {
        PortalConocenosPage.ingresoPortalConocenos('reglas')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -Reglamento -Seleccionar Otra Solicitud', () => {
        PortalConocenosPage.ingresoPortalConocenos('reglas')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -Contratos -Seleccionar Hablar con una Asesora', () => {
        PortalConocenosPage.ingresoPortalConocenos('contratos')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -contratos -Seleccionar Otra Solicitud', () => {
        PortalConocenosPage.ingresoPortalConocenos('contratos')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -informacion -Seleccionar Hablar con una Asesora', () => {
        PortalConocenosPage.ingresoPortalConocenos('informacion')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -informacion -Seleccionar Otra Solicitud', () => {
        PortalConocenosPage.ingresoPortalConocenos('informacion')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -proveedores -Seleccionar Hablar con una Asesora', () => {
        PortalConocenosPage.ingresoPortalConocenos('proveedores')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -proveedores -Seleccionar Otra Solicitud', () => {
        PortalConocenosPage.ingresoPortalConocenos('proveedores')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -gestion -Seleccionar Hablar con una Asesora', () => {
        PortalConocenosPage.ingresoPortalConocenos('gestion')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -gestion -Seleccionar Otra Solicitud', () => {
        PortalConocenosPage.ingresoPortalConocenos('gestion')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('Seguros -Seleccionar Hablar con una Asesora', () => {
        segurosPage.ingresoSeguros()
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('Seguros -Seleccionar Otra Solicitud', () => {
        segurosPage.ingresoSeguros()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-3419
    it('landing Sepultura NI -Seleccionar Hablar con una Asesora', () => {
        landingSepulturaNI.ingresoLandingSepulturaNI()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2861
    it('landing Sepultura NI -Seleccionar Otra Solicitud', () => {
        landingSepulturaNI.ingresoLandingSepulturaNI()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-3419
    it('landing Sepultura NIF -Seleccionar Hablar con una Asesora', () => {
        landingSepulturaNIF.ingresoLandingSepulturaNIF()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-2861
    it('landing Sepultura NIF -Seleccionar Otra Solicitud', () => {
        landingSepulturaNIF.ingresoLandingSepulturaNIF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //CEC-5059
    it('landing Sepultura NF -Seleccionar Hablar con una Asesora', () => {
        landingSepulturaNF.ingresoLandingSepulturaNF()
        ChatPage.seleccionarHablarAsesora()

    })

    //CEC-5063
    it('landing Sepultura NF -Seleccionar Otra Solicitud', () => {
        landingSepulturaNF.ingresoLandingSepulturaNF()
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -Nuestros parques -Seleccionar Hablar con una Asesora', () => {
        servicioClientePage.ingresoServicioCliente('nuestrosParques')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -Nuestros parques -Seleccionar Otra Solicitud', () => {
        servicioClientePage.ingresoServicioCliente('nuestrosParques')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -Preguntas frecuentes -Seleccionar Hablar con una Asesora', () => {
        servicioClientePage.ingresoServicioCliente('preguntas')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -Preguntas frecuentes -Seleccionar Otra Solicitud', () => {
        servicioClientePage.ingresoServicioCliente('preguntas')
        ChatPage.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -terminos y condiciones -Seleccionar Hablar con una Asesora', () => {
        servicioClientePage.ingresoServicioCliente('terminos')
        ChatPage.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -terminos y condiciones -Seleccionar Otra Solicitud', () => {
        servicioClientePage.ingresoServicioCliente('terminos')
        ChatPage.seleccionarOtroSolicitud()

    })






    afterEach(() =>{
        cy.clearCookies();   
        cy.clearLocalStorage();
    })

})