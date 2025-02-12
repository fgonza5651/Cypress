import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import PavHomeMobile from "../../../pageMobile/parques/PAVMobile";
import PcoHomeMobile from "../../../pageMobile/parques/PCOMobile";
import PphHomeMobile from "../../../pageMobile/parques/PPHMobile";

describe('Home descubre nuestros parques', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

    //
    it('PAV -Cotiza aqui', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCotizaAqui()
    });

    //
    it('PAV -Seleccionar tour virtual', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTourVirtual()
    });

    //
    it('PAV -Ver plano del parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionPlanoParque()
    });

    //
    it('PAV -Calendario corte de pasto', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCalendario()
    });

    //
    it('PAV -Comunicate con nosotros -Llamano', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionLlamanos()
    });

    //
    it('PAV -Comunicate con nosotros -Escribenos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionEscribenos()
    });

    //
    it('PAV -Comunicate con nosotros -Cotiza', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCotiza()
    });

    //
    it('PAV -Nuestros servicios -Funeraria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PAV -Nuestros servicios -Velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PAV -Nuestros servicios -Cremacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PAV -Nuestros servicios -Sepultura', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PAV -Tambien te ofrecemos -Temploy velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PAV -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("despedida")
        PavHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PavHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Apoyo de coro', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Lapidas', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Floreria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("flores")
        PavHomeMobile.revisarFloreria()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Cafeterias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("multimedia")
        PavHomeMobile.revisarHablaEnLinea()
    });

    //
    it('PAV -Obituarios', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionObituarios()
    });

    //
    it('PAV -Ultimas noticias -ver todo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionVerTodoNoticias()
    });

    //
    it('PAV -Ultimas noticias -Actividades en nuestros parques', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionActividadesEnParques()
    });

    //
    it('PAV -Ultimas noticias -Articulos y noticias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionArticulosNoticias()
    });

    //
    it('PAV -Ultimas noticias -Sotenibilidad', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionSostenibilidad()
    });

    //
    it('PAV -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionMasParque()
    });

    //
    it('PAV -Flores Del Recuerdo ir al sitio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionFloresRecuerdoIr()
    });

    //
    it('PAV -Contigo en el recuerdo ir al sitio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionContigoRecuerdoIr()
    });
    





    //
    it('PCO -Cotiza aqui', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCotizaAqui()
    });

    //
    it('PCO -Seleccionar tour virtual', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTourVirtual()
    });

    //
    it('PCO -Ver plano del parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionPlanoParque()
    });

    //
    it('PCO -Calendario corte de pasto', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCalendario()
    });

    //
    it('PCO -Comunicate con nosotros -Llamano', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionLlamanos()
    });

    //
    it('PCO -Comunicate con nosotros -Escribenos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionEscribenos()
    });

    //
    it('PCO -Comunicate con nosotros -Cotiza', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCotiza()
    });

    //
    it('PCO -Nuestros servicios -Funeraria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PCO -Nuestros servicios -Velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PCO -Nuestros servicios -Cremacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PCO -Nuestros servicios -Sepultura', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PCO -Tambien te ofrecemos -Temploy velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PCO -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("despedida")
        PcoHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PcoHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Apoyo de coro', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Lapidas', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Floreria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("flores")
        PcoHomeMobile.revisarFloreria()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Cafeterias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("multimedia")
        PcoHomeMobile.revisarHablaEnLinea()
    });

    //
    it('PCO -Obituarios', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionObituarios()
    });

    //
    it('PCO -Ultimas noticias -ver todo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionVerTodoNoticias()
    });

    //
    it('PCO -Ultimas noticias -Actividades en nuestros parques', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionActividadesEnParques()
    });

    //
    it('PCO -Ultimas noticias -Articulos y noticias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionArticulosNoticias()
    });

    //
    it('PCO -Ultimas noticias -Sotenibilidad', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionSostenibilidad()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionMasParque()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionFloresRecuerdoIr()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionContigoRecuerdoIr()
    });







    //
    it('PPH -Cotiza aqui', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCotizaAqui()
    });

    //
    it('PPH -Seleccionar tour virtual', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTourVirtual()
    });

    //
    it('PPH -Ver plano del parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionPlanoParque()
    });

    //
    it('PPH -Calendario corte de pasto', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCalendario()
    });

    //
    it('PPH -Comunicate con nosotros -Llamano', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionLlamanos()
    });

    //
    it('PPH -Comunicate con nosotros -Escribenos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionEscribenos()
    });

    //
    it('PPH -Comunicate con nosotros -Cotiza', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCotiza()
    });

    //
    it('PPH -Nuestros servicios -Funeraria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PPH -Nuestros servicios -Velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PPH -Nuestros servicios -Cremacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PPH -Nuestros servicios -Sepultura', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PPH -Tambien te ofrecemos -Temploy velatorio', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PPH -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("despedida")
        PphHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PphHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Apoyo de coro', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Lapidas', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Floreria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("flores")
        PphHomeMobile.revisarFloreria()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Cafeterias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("multimedia")
        PphHomeMobile.revisarHablaEnLinea()
    });

    //
    it('PPH -Obituarios', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionObituarios()
    });

    //
    it('PPH -Ultimas noticias -ver todo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionVerTodoNoticias()
    });

    //
    it('PPH -Ultimas noticias -Actividades en nuestros parques', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionActividadesEnParques()
    });

    //
    it('PPH -Ultimas noticias -Articulos y noticias', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionArticulosNoticias()
    });

    //
    it('PPH -Ultimas noticias -Sotenibilidad', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionSostenibilidad()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionMasParque()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionFloresRecuerdoIr()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionContigoRecuerdoIr()
    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });

})