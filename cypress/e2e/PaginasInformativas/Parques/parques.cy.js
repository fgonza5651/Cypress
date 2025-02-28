import homePage from "../../../pages/home/homePage";
import PavHome from "../../../pages/parques/PAV";
import PcoHome from "../../../pages/parques/PCO";
import PphHome from "../../../pages/parques/PPH";


describe('Home descubre nuestros parques', () =>  {

    beforeEach(function()  {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');

        cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
     });

    //
    it('PAV -Cotiza aqui', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PAV -Seleccionar tour virtual', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTourVirtual()
    });

    //
    it('PAV -Ver plano del parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionPlanoParque()
    });

    //
    it('PAV -Calendario corte de pasto', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionCalendario()
    });

    //
    it('PAV -Comunicate con nosotros -Llamano', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PAV -Comunicate con nosotros -Escribenos', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PAV -Comunicate con nosotros -Cotiza', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionCotiza(this.datos.Url)
    });

    //
    it('PAV -Nuestros servicios -Funeraria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios(this.datos.Url,"Funeraria")
    });

    //
    it('PAV -Nuestros servicios -Velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios(this.datos.Url,"Velatorio")
    });

    //
    it('PAV -Nuestros servicios -Cremacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios(this.datos.Url,"Cremacion")
    });

    //
    it('PAV -Nuestros servicios -Sepultura', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios(this.datos.Url,"Sepultura")
    });

    //
    it('PAV -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PAV -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("despedida")
        PavHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("Recuerdo")
        PavHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Lapidas', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Floreria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("flores")
        PavHome.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PAV -Tambien te ofrecemos -Cafeterias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionTambienOfrecemos("multimedia")
        PavHome.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PAV -Obituarios', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionObituarios(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -ver todo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Articulos y noticias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Sotenibilidad', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionMasParque(this.datos.Url)
    });

    //
    it('PAV -Flores Del Recuerdo ir al sitio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PAV -Contigo en el recuerdo ir al sitio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionContigoRecuerdoIr(this.datos.Url)
    });
    





    //
    it('PCO -Cotiza aqui', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PCO -Seleccionar tour virtual', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTourVirtual()
    });

    //
    it('PCO -Ver plano del parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionPlanoParque()
    });

    //
    it('PCO -Calendario corte de pasto', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionCalendario()
    });

    //
    it('PCO -Comunicate con nosotros -Llamano', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PCO -Comunicate con nosotros -Escribenos', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PCO -Comunicate con nosotros -Cotiza', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionCotiza(this.datos.Url)
    });

    //
    it('PCO -Nuestros servicios -Funeraria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios(this.datos.Url,"Funeraria")
    });

    //
    it('PCO -Nuestros servicios -Velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios(this.datos.Url,"Velatorio")
    });

    //
    it('PCO -Nuestros servicios -Cremacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios(this.datos.Url,"Cremacion")
    });

    //
    it('PCO -Nuestros servicios -Sepultura', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionNuestrosServicios(this.datos.Url,"Sepultura")
    });

    //
    it('PCO -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PCO -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("despedida")
        PcoHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("Recuerdo")
        PcoHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Lapidas', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Floreria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("flores")
        PcoHome.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PCO -Tambien te ofrecemos -Cafeterias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionTambienOfrecemos("multimedia")
        PcoHome.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PCO -Obituarios', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionObituarios(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -ver todo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Articulos y noticias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Sotenibilidad', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionMasParque(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PcoHome.seleccionContigoRecuerdoIr(this.datos.Url)
    });







    //
    it('PPH -Cotiza aqui', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PPH -Seleccionar tour virtual', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTourVirtual()
    });

    //
    it('PPH -Ver plano del parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionPlanoParque()
    });

    //
    it('PPH -Calendario corte de pasto', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionCalendario()
    });

    //
    it('PPH -Comunicate con nosotros -Llamano', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PPH -Comunicate con nosotros -Escribenos', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PPH -Comunicate con nosotros -Cotiza', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionCotiza(this.datos.Url)
    });

    //
    it('PPH -Nuestros servicios -Funeraria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios(this.datos.Url,"Funeraria")
    });

    //
    it('PPH -Nuestros servicios -Velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios(this.datos.Url,"Velatorio")
    });

    //
    it('PPH -Nuestros servicios -Cremacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios(this.datos.Url,"Cremacion")
    });

    //
    it('PPH -Nuestros servicios -Sepultura', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios(this.datos.Url,"Sepultura")
    });

    //
    it('PPH -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PPH -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("despedida")
        PphHome.revisarCeremoniaDespedida()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("Recuerdo")
        PphHome.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Lapidas', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Floreria', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("flores")
        PphHome.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PPH -Tambien te ofrecemos -Cafeterias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionTambienOfrecemos("multimedia")
        PphHome.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PPH -Obituarios', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionObituarios(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -ver todo', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Articulos y noticias', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Sotenibilidad', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionMasParque(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionContigoRecuerdoIr(this.datos.Url)
    });

    afterEach(function()  {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });

})