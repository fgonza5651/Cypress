import ChatPageMobile from "../../pageMobile/Chat/ChatPageMobile";
import homePageMobile from "../../pageMobile/homeMobile/homePageMobile";
import CafeteriaVelatorioBasicoMobile from "../../pageMobile/CafeteriaVelatorioNI/cafeteriaVelatorioBasicoMobile";
import carroComprasMobile from "../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import ActividadesParquePageMobile from "../../pageMobile/Comunidad/ActividadesParquePageMobile";
import ArticulosNoticiasPageMobile from "../../pageMobile/Comunidad/ArticulosNoticiasPageMobile";
import MasparquesPageMobile from "../../pageMobile/Comunidad/MasParquesPageMobile";
import SeccionMasParquePageMobile from "../../pageMobile/Comunidad/SeccionMasParquePageMobile";
import SostenibilidadPageMobile from "../../pageMobile/Comunidad/SostenibilidadPageMobile";
import TodoPageMobile from "../../pageMobile/Comunidad/TodoPageMobile";
import cremacionBasicoNIMobile from "../../pageMobile/cremacionMobile/cremacionBasicoNI/cremacionBasicoNIMobile";
import cremacionFullNIMobile from "../../pageMobile/cremacionMobile/cremacionFullNI/cremacionFullNIMobile";
import cremacionParvuloMobile from "../../pageMobile/cremacionMobile/cremacionParvulo/cremacionParvuloMobile";
import cremacionPremiumNIMobile from "../../pageMobile/cremacionMobile/cremacionPremiumNI/cremacionPremiumNIMobile";
import LandingCremacionNFMobile from "../../pageMobile/cremacionMobile/landingCremacionNF/landingCremacionNFMobile.cy";
import landingCremacionNiMobile from "../../pageMobile/cremacionMobile/landingCremacionNIMobile/landingCremacionNIMobile";
import CrenacionNIFFMobile from "../../pageMobile/cremacionMobile/landingCremacionNIF/landingCremacionNIFMobile";
import funerariaBasicoMobile from "../../pageMobile/funerariaMobile/funerariaBasico/funerariaBasicoMobile";
import funerariaParvuloMobile from "../../pageMobile/funerariaMobile/funerariaParvulo/funerariaParvuloMobile";
import funerariaParvuloBaseMobile from "../../pageMobile/funerariaMobile/funerariaParvuloBase/funerariaParvuloBaseMobile";
import funerariaParvuloDestacadoMobile from "../../pageMobile/funerariaMobile/funerariaParvuloDestacado/funerariaParvuloDestacadoMobile";
import funerariaPremiumMobile from "../../pageMobile/funerariaMobile/funerariaPremium/funerariaPremiumMobile";
import funerariaPremiumDestacadaMobile from "../../pageMobile/funerariaMobile/funerariaPremiumDestacada/funerariaPremiumDestacadaMobile";
import funerariaSustentableMobile from "../../pageMobile/funerariaMobile/funerariaSustentable/funerariaSustentableMobile";
import funerariaTradicionMobile from "../../pageMobile/funerariaMobile/funerariaTradicion/funerariaTradicionMobile";
import funerariaTradicionDestacadoMobile from "../../pageMobile/funerariaMobile/funerariaTradicionDestacado/funerariaTradicionDestacadoMobile";
import landingFunerariaNFMobile from "../../pageMobile/funerariaMobile/landingFunerariaNFMobile/landingFunerariaNFMobile";
import landingFunerariaNIMobile from "../../pageMobile/funerariaMobile/landingFunerariaNIMobile/landingFunerariaNIMobile";
import landingFunerariaNIFMobile from "../../pageMobile/funerariaMobile/landingFunerariaNIFMobile/landingFunerariaNIFMobile";
import BuscarSepulturaMobile from "../../pageMobile/Obituario/BuscarSepulturaPageMobile";
import ObituarioPageMobile from "../../pageMobile/Obituario/ObituarioPageMobile";
import PavHomeMobile from "../../pageMobile/parques/PAVMobile";
import PcoHomeMobile from "../../pageMobile/parques/PCOMobile";
import PphHomeMobile from "../../pageMobile/parques/PPHMobile";
import PortalConocenosPageMobile from "../../pageMobile/portalConocenos/portalConocenosPageMobile";
import segurosPageMobile from "../../pageMobile/seguros/SegurosPageMobile";
import landingSepulturaNIMobile from "../../pageMobile/sepulturaMobile/landingSepulturaNIMobile/landingSepulturaNIMobile";
import landingSepulturaNIFMobile from "../../pageMobile/sepulturaMobile/landingSepulturaNIFMobile/landingSepulturaNIFMobile";
import landingSepulturaNFMobile from "../../pageMobile/sepulturaMobile/landingSepulturaNFMobile/landingSepulturaNFMobile";
import servicioClientePageMobile from "../../pageMobile/servicioCliente/servicioAlClientePageMobile";


describe('Chat en linea -Mobile', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
          cy.clearCookies();   
          cy.clearLocalStorage();
    });

    //
    it('home -Seleccionar Hablar con una Asesora -Mobile', () => {
        homePageMobile.ingresoHomeMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('home -Seleccionar Otra Solicitud -Mobile', () => {
        homePageMobile.ingresoHomeMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Cafeteria Velatorio Basico -Seleccionar Hablar con una Asesora -Mobile', () => {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Cafeteria Velatorio Basico -Seleccionar Otra Solicitud -Mobile', () => {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('carro Compras -Seleccionar Hablar con una Asesora -Mobile', () => {
        carroComprasMobile.ingresarCarroCompras()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('carro Compras -Seleccionar Otra Solicitud -Mobile', () => {
        carroComprasMobile.ingresarCarroCompras()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Actividades Parque -Seleccionar Hablar con una Asesora -Mobile', () => {
        ActividadesParquePageMobile.ingresarActividadesParque()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Actividades Parque -Seleccionar Otra Solicitud -Mobile', () => {
        ActividadesParquePageMobile.ingresarActividadesParque()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Actividades Parque -Detalle actividad -Seleccionar Hablar con una Asesora -Mobile', () => {
        ActividadesParquePageMobile.ingresarActividadesParque()
        ActividadesParquePageMobile.SeleccionarDetalleActividades()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Actividades Parque -Detalle actividad -Seleccionar Otra Solicitud -Mobile', () => {
        ActividadesParquePageMobile.ingresarActividadesParque()
        ActividadesParquePageMobile.SeleccionarDetalleActividades()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Articulos Noticias -Seleccionar Hablar con una Asesora -Mobile', () => {
        ArticulosNoticiasPageMobile.ingresarArticulosNoticias()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Articulos Noticias -Seleccionar Otra Solicitud -Mobile', () => {
        ArticulosNoticiasPageMobile.ingresarArticulosNoticias()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Articulos Noticias -Detalle noticias -Seleccionar Hablar con una Asesora -Mobile', () => {
        ArticulosNoticiasPageMobile.ingresarArticulosNoticias()
        ArticulosNoticiasPageMobile.SeleccionarDetalleNoticias()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Articulos Noticias -Detalle noticias -Seleccionar Otra Solicitud -Mobile', () => {
        ArticulosNoticiasPageMobile.ingresarArticulosNoticias()
        ArticulosNoticiasPageMobile.SeleccionarDetalleNoticias()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Mas parques -Seleccionar Hablar con una Asesora -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Seleccionar Otra Solicitud -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Mas parques -Detalle calendario -Seleccionar Hablar con una Asesora -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        MasparquesPageMobile.SeleccionarDetalleCalendario()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Detalle calendario -Seleccionar Otra Solicitud -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        MasparquesPageMobile.SeleccionarDetalleCalendario()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Mas Parque -Detalle noticias -Seleccionar Hablar con una Asesora -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        MasparquesPageMobile.SeleccionarDetalleNoticias()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Mas parques -Detalle noticias -Seleccionar Otra Solicitud -Mobile', () => {
        MasparquesPageMobile.IngresarMasParques()
        MasparquesPageMobile.SeleccionarDetalleNoticias()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Seccion Mas Parque -Seleccionar Hablar con una Asesora -Mobile', () => {
        SeccionMasParquePageMobile.ingresarSeccionMasParques()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Seccion Mas Parque -Seleccionar Otra Solicitud -Mobile', () => {
        SeccionMasParquePageMobile.ingresarSeccionMasParques()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Seccion Mas Parque -Detalle mas parque -Seleccionar Hablar con una Asesora -Mobile', () => {
        SeccionMasParquePageMobile.ingresarSeccionMasParques()
        SeccionMasParquePageMobile.SeleccionarDetalleMasParque()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Seccion Mas Parque -Detalle mas parque -Seleccionar Otra Solicitud -Mobile', () => {
        SeccionMasParquePageMobile.ingresarSeccionMasParques()
        SeccionMasParquePageMobile.SeleccionarDetalleMasParque()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Sostenibilidad -Seleccionar Hablar con una Asesora -Mobile', () => {
        SostenibilidadPageMobile.ingresarSostenibilidad()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Sostenibilidad -Seleccionar Otra Solicitud -Mobile', () => {
        SostenibilidadPageMobile.ingresarSostenibilidad()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Sostenibilidad -Detalle sostenibilidad -Seleccionar Hablar con una Asesora -Mobile', () => {
        SostenibilidadPageMobile.ingresarSostenibilidad()
        SostenibilidadPageMobile.SeleccionarDetalleSostenibilidad()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Sostenibilidad -Detalle sostenibilidad -Seleccionar Otra Solicitud -Mobile', () => {
        SostenibilidadPageMobile.ingresarSostenibilidad()
        SostenibilidadPageMobile.SeleccionarDetalleSostenibilidad()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('todo -Seleccionar Hablar con una Asesora -Mobile', () => {
        TodoPageMobile.ingresarTodo()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('todo -Seleccionar Otra Solicitud -Mobile', () => {
        TodoPageMobile.ingresarTodo()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Todo -Detalle todo -Seleccionar Hablar con una Asesora -Mobile', () => {
        TodoPageMobile.ingresarTodo()
        TodoPageMobile.SeleccionarDetalleTodo()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('todo -Detalle todo -Seleccionar Otra Solicitud -Mobile', () => {
        TodoPageMobile.ingresarTodo()
        TodoPageMobile.SeleccionarDetalleTodo()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-1784
    it('cremacion Basico NI -Seleccionar Hablar con una Asesora -Mobile', () => {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2532
    it('cremacion Basico NI -Seleccionar Otra Solicitud -Mobile', () => {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        ChatPageMobile.seleccionarOtroSolicitud()
        
    })

    //
    it('cremacion Full NI -Seleccionar Hablar con una Asesora -Mobile', () => {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('cremacion Full NI -Seleccionar Otra Solicitud -Mobile', () => {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('cremacion Parvulo -Seleccionar Hablar con una Asesora -Mobile', () => {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('cremacion Parvulo -Seleccionar Otra Solicitud -Mobile', () => {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('cremacion Premium NI -Seleccionar Hablar con una Asesora -Mobile', () => {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('cremacion Premium NI -Seleccionar Otra Solicitud -Mobile', () => {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('landing Cremacion NF -Seleccionar Hablar con una Asesora -Mobile', () => {
        LandingCremacionNFMobile.ingresoLandingCremacionNF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('landing Cremacion NF -Seleccionar Otra Solicitud -Mobile', () => {
        LandingCremacionNFMobile.ingresoLandingCremacionNF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('landing Cremacion Ni -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingCremacionNiMobile.ingresarLandingCremacionNI()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('landing Cremacion Ni -Seleccionar Otra Solicitud -Mobile', () => {
        landingCremacionNiMobile.ingresarLandingCremacionNI()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('landing Crenacion NIF -Seleccionar Hablar con una Asesora -Mobile', () => {
        CrenacionNIFFMobile.ingresarCremacionNIF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('landing Crenacion NIF -Seleccionar Otra Solicitud -Mobile', () => {
        CrenacionNIFFMobile.ingresarCremacionNIF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Basico -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Basico -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo Base -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo Base -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Parvulo Destacado -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Parvulo Destacado -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Premium -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Premium -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Premium Destacada -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Premium Destacada -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Sustentable -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Sustentable -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Tradicion -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Tradicion -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('funeraria Tradicion Destacado -Seleccionar Hablar con una Asesora -Mobile', () => {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('funeraria Tradicion Destacado -Seleccionar Otra Solicitud -Mobile', () => {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-2843
    it('landing Funeraria NF -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingFunerariaNFMobile.ingresoLandingFunerariaNF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2822
    it('landing Funeraria NF -Seleccionar Otra Solicitud -Mobile', () => {
        landingFunerariaNFMobile.ingresoLandingFunerariaNF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-2843
    it('landing Funeraria NI -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingFunerariaNIMobile.ingresoLandingFunerariaNI()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2822
    it('landing Funeraria NI -Seleccionar Otra Solicitud -Mobile', () => {
        landingFunerariaNIMobile.ingresoLandingFunerariaNI()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-2842
    it('landing Funeraria NIF -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingFunerariaNIFMobile.ingresoLandingFunerariaNIF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2843
    it('landing Funeraria NIF -Seleccionar Otra Solicitud -Mobile', () => {
        landingFunerariaNIFMobile.ingresoLandingFunerariaNIF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Buscar Sepultura -Seleccionar Hablar con una Asesora -Mobile', () => {
        BuscarSepulturaMobile.ingresoBusquedaSepultura()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Buscar Sepultura -Seleccionar Otra Solicitud -Mobile', () => {
        BuscarSepulturaMobile.ingresoBusquedaSepultura()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Obituario -Seleccionar Hablar con una Asesora -Mobile', () => {
        ObituarioPageMobile.ingresoObituario()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Obituario -Seleccionar Otra Solicitud -Mobile', () => {
        ObituarioPageMobile.ingresoObituario()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Pav -Seleccionar Hablar con una Asesora -Mobile', () => {
        PavHomeMobile.ingresoPavHome()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Pav -Seleccionar Otra Solicitud -Mobile', () => {
        PavHomeMobile.ingresoPavHome()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Poc -Seleccionar Hablar con una Asesora -Mobile', () => {
        PcoHomeMobile.ingresoPcoHome()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Poc -Seleccionar Otra Solicitud -Mobile', () => {
        PcoHomeMobile.ingresoPcoHome()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('home -Seleccionar Hablar con una Asesora -Mobile', () => {
        PphHomeMobile.ingresoPphHome()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('home -Seleccionar Otra Solicitud -Mobile', () => {
        PphHomeMobile.ingresoPphHome()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -Reglamento -Seleccionar Hablar con una Asesora -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('reglas')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -Reglamento -Seleccionar Otra Solicitud -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('reglas')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -Contratos -Seleccionar Hablar con una Asesora -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('contratos')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -contratos -Seleccionar Otra Solicitud -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('contratos')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -informacion -Seleccionar Hablar con una Asesora -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('informacion')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -informacion -Seleccionar Otra Solicitud -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('informacion')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -proveedores -Seleccionar Hablar con una Asesora -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('proveedores')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -proveedores -Seleccionar Otra Solicitud -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('proveedores')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Portal Conocenos -gestion -Seleccionar Hablar con una Asesora -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('gestion')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Portal Conocenos -gestion -Seleccionar Otra Solicitud -Mobile', () => {
        PortalConocenosPageMobile.ingresoPortalConocenos('gestion')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('Seguros -Seleccionar Hablar con una Asesora -Mobile', () => {
        segurosPageMobile.ingresoSeguros()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('Seguros -Seleccionar Otra Solicitud -Mobile', () => {
        segurosPageMobile.ingresoSeguros()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-3419
    it('landing Sepultura NI -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingSepulturaNIMobile.ingresoLandingSepulturaNI()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2861
    it('landing Sepultura NI -Seleccionar Otra Solicitud -Mobile', () => {
        landingSepulturaNIMobile.ingresoLandingSepulturaNI()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-3419
    it('landing Sepultura NIF -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingSepulturaNIFMobile.ingresoLandingSepulturaNIF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-2861
    it('landing Sepultura NIF -Seleccionar Otra Solicitud -Mobile', () => {
        landingSepulturaNIFMobile.ingresoLandingSepulturaNIF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //CEC-5059
    it('landing Sepultura NF -Seleccionar Hablar con una Asesora -Mobile', () => {
        landingSepulturaNFMobile.ingresoLandingSepulturaNF()
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //CEC-5063
    it('landing Sepultura NF -Seleccionar Otra Solicitud -Mobile', () => {
        landingSepulturaNFMobile.ingresoLandingSepulturaNF()
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -Nuestros parques -Seleccionar Hablar con una Asesora -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('nuestrosParques')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -Nuestros parques -Seleccionar Otra Solicitud -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('nuestrosParques')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -Preguntas frecuentes -Seleccionar Hablar con una Asesora -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('preguntas')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -Preguntas frecuentes -Seleccionar Otra Solicitud -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('preguntas')
        ChatPageMobile.seleccionarOtroSolicitud()

    })

    //
    it('servicio Cliente -terminos y condiciones -Seleccionar Hablar con una Asesora -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('terminos')
        ChatPageMobile.seleccionarHablarAsesora()

    })

    //
    it('servicio Cliente -terminos y condiciones -Seleccionar Otra Solicitud -Mobile', () => {
        servicioClientePageMobile.ingresoServicioCliente('terminos')
        ChatPageMobile.seleccionarOtroSolicitud()

    })






    afterEach(() =>{
        cy.clearCookies();   
        cy.clearLocalStorage();
    })

})