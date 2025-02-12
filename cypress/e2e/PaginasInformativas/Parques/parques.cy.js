import homePage from "../../../pages/home/homePage";
import PavHome from "../../../pages/parques/PAV";
import PcoHome from "../../../pages/parques/PCO";
import PphHome from "../../../pages/parques/PPH";


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
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionCotizaAqui()
    });

    //
    it('PAV -Seleccionar tour virtual', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTourVirtual()
    });

    //
    it('PAV -Ver plano del parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionPlanoParque()
    });

    //
    it('PAV -Calendario corte de pasto', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionCalendario()
    });

    //
    it('PAV -Comunicate con nosotros -Llamano', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionLlamanos()
    });

    //
    it('PAV -Comunicate con nosotros -Escribenos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionEscribenos()
    });

    //
    it('PAV -Comunicate con nosotros -Cotiza', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionCotiza()
    });

    //
    it('PAV -Nuestros servicios -Funeraria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PAV -Nuestros servicios -Velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PAV -Nuestros servicios -Cremacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PAV -Nuestros servicios -Sepultura', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PAV -Tambien te ofrecemos -Temploy velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PAV -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("despedida")
        PavHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("Recuerdo")
        PavHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Apoyo de coro', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Lapidas', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Floreria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("flores")
        PavHome.revisarFloreria()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Cafeterias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("multimedia")
        PavHome.revisarHablaEnLinea()
    });

    //
    it('PAV -Obituarios', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionObituarios()
    });

    //
    it('PAV -Ultimas noticias -ver todo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionVerTodoNoticias()
    });

    //
    it('PAV -Ultimas noticias -Actividades en nuestros parques', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionActividadesEnParques()
    });

    //
    it('PAV -Ultimas noticias -Articulos y noticias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionArticulosNoticias()
    });

    //
    it('PAV -Ultimas noticias -Sotenibilidad', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionSostenibilidad()
    });

    //
    it('PAV -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionMasParque()
    });

    //
    it('PAV -Flores Del Recuerdo ir al sitio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionFloresRecuerdoIr()
    });

    //
    it('PAV -Contigo en el recuerdo ir al sitio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionContigoRecuerdoIr()
    });
    





    //
    it('PCO -Cotiza aqui', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionCotizaAqui()
    });

    //
    it('PCO -Seleccionar tour virtual', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTourVirtual()
    });

    //
    it('PCO -Ver plano del parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionPlanoParque()
    });

    //
    it('PCO -Calendario corte de pasto', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionCalendario()
    });

    //
    it('PCO -Comunicate con nosotros -Llamano', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionLlamanos()
    });

    //
    it('PCO -Comunicate con nosotros -Escribenos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionEscribenos()
    });

    //
    it('PCO -Comunicate con nosotros -Cotiza', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionCotiza()
    });

    //
    it('PCO -Nuestros servicios -Funeraria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PCO -Nuestros servicios -Velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PCO -Nuestros servicios -Cremacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PCO -Nuestros servicios -Sepultura', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PCO -Tambien te ofrecemos -Temploy velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PCO -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("despedida")
        PcoHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("Recuerdo")
        PcoHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Apoyo de coro', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Lapidas', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Floreria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("flores")
        PcoHome.revisarFloreria()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Cafeterias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("multimedia")
        PcoHome.revisarHablaEnLinea()
    });

    //
    it('PCO -Obituarios', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionObituarios()
    });

    //
    it('PCO -Ultimas noticias -ver todo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionVerTodoNoticias()
    });

    //
    it('PCO -Ultimas noticias -Actividades en nuestros parques', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionActividadesEnParques()
    });

    //
    it('PCO -Ultimas noticias -Articulos y noticias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionArticulosNoticias()
    });

    //
    it('PCO -Ultimas noticias -Sotenibilidad', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionSostenibilidad()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionMasParque()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionFloresRecuerdoIr()
    });

    //
    it('PCO -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PcoHome.seleccionContigoRecuerdoIr()
    });







    //
    it('PPH -Cotiza aqui', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionCotizaAqui()
    });

    //
    it('PPH -Seleccionar tour virtual', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTourVirtual()
    });

    //
    it('PPH -Ver plano del parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionPlanoParque()
    });

    //
    it('PPH -Calendario corte de pasto', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionCalendario()
    });

    //
    it('PPH -Comunicate con nosotros -Llamano', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionLlamanos()
    });

    //
    it('PPH -Comunicate con nosotros -Escribenos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionEscribenos()
    });

    //
    it('PPH -Comunicate con nosotros -Cotiza', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionCotiza()
    });

    //
    it('PPH -Nuestros servicios -Funeraria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios("Funeraria")
    });

    //
    it('PPH -Nuestros servicios -Velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios("Velatorio")
    });

    //
    it('PPH -Nuestros servicios -Cremacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios("Cremacion")
    });

    //
    it('PPH -Nuestros servicios -Sepultura', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios("Sepultura")
    });

    //
    it('PPH -Tambien te ofrecemos -Temploy velatorio', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PPH -Tambien te ofrecemos -Ceremonia de despedida', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("despedida")
        PphHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Servicio de sepultacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Ceremonia del recuerdo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("Recuerdo")
        PphHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Apoyo de coro', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Lapidas', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Floreria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("flores")
        PphHome.revisarFloreria()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Cafeterias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("multimedia")
        PphHome.revisarHablaEnLinea()
    });

    //
    it('PPH -Obituarios', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionObituarios()
    });

    //
    it('PPH -Ultimas noticias -ver todo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionVerTodoNoticias()
    });

    //
    it('PPH -Ultimas noticias -Actividades en nuestros parques', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionActividadesEnParques()
    });

    //
    it('PPH -Ultimas noticias -Articulos y noticias', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionArticulosNoticias()
    });

    //
    it('PPH -Ultimas noticias -Sotenibilidad', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionSostenibilidad()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionMasParque()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionFloresRecuerdoIr()
    });

    //
    it('PPH -Ultimas noticias -Mas parque', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionContigoRecuerdoIr()
    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });

})