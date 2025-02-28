import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import PavHomeMobile from "../../../pageMobile/parques/PAVMobile";
import PcoHomeMobile from "../../../pageMobile/parques/PCOMobile";
import PphHomeMobile from "../../../pageMobile/parques/PPHMobile";

describe('Home descubre nuestros parques', () => {

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
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PAV -Seleccionar tour virtual', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTourVirtual()
    });

    //
    it('PAV -Ver plano del parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionPlanoParque()
    });

    //
    it('PAV -Calendario corte de pasto', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCalendario()
    });

    //
    it('PAV -Comunicate con nosotros -Llamano', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PAV -Comunicate con nosotros -Escribenos', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PAV -Comunicate con nosotros -Cotiza', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionCotiza(this.datos.Url)
    });

    //
    it('PAV -Nuestros servicios -Funeraria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios(this.datos.Url,"Funeraria")
    });

    //
    it('PAV -Nuestros servicios -Velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Velatorio")
    });

    //
    it('PAV -Nuestros servicios -Cremacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Cremacion")
    });

    //
    it('PAV -Nuestros servicios -Sepultura', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Sepultura")
    });

    //
    it('PAV -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PAV -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("despedida")
        PavHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PavHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PAV -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Lapidas', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Floreria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("flores")
        PavHomeMobile.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PAV -Tambien te ofrecemos -Cafeterias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PAV -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionTambienOfrecemos("multimedia")
        PavHomeMobile.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PAV -Obituarios', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionObituarios(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -ver todo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Articulos y noticias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Sotenibilidad', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PAV -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionMasParque(this.datos.Url)
    });

    //
    it('PAV -Flores Del Recuerdo ir al sitio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PAV -Contigo en el recuerdo ir al sitio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPAV()
        PavHomeMobile.seleccionContigoRecuerdoIr(this.datos.Url)
    });
    





    //
    it('PCO -Cotiza aqui', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PCO -Seleccionar tour virtual', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTourVirtual()
    });

    //
    it('PCO -Ver plano del parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionPlanoParque()
    });

    //
    it('PCO -Calendario corte de pasto', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCalendario()
    });

    //
    it('PCO -Comunicate con nosotros -Llamano', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PCO -Comunicate con nosotros -Escribenos', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PCO -Comunicate con nosotros -Cotiza', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionCotiza(this.datos.Url)
    });

    //
    it('PCO -Nuestros servicios -Funeraria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Funeraria")
    });

    //
    it('PCO -Nuestros servicios -Velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Velatorio")
    });

    //
    it('PCO -Nuestros servicios -Cremacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Cremacion")
    });

    //
    it('PCO -Nuestros servicios -Sepultura', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Sepultura")
    });

    //
    it('PCO -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PCO -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("despedida")
        PcoHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PcoHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PCO -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Lapidas', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Floreria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("flores")
        PcoHomeMobile.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PCO -Tambien te ofrecemos -Cafeterias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PCO -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionTambienOfrecemos("multimedia")
        PcoHomeMobile.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PCO -Obituarios', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionObituarios(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -ver todo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Articulos y noticias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Sotenibilidad', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionMasParque(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PCO -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresarPCO()
        PcoHomeMobile.seleccionContigoRecuerdoIr(this.datos.Url)
    });







    //
    it('PPH -Cotiza aqui', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCotizaAqui(this.datos.Url)
    });

    //
    it('PPH -Seleccionar tour virtual', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTourVirtual()
    });

    //
    it('PPH -Ver plano del parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionPlanoParque()
    });

    //
    it('PPH -Calendario corte de pasto', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCalendario()
    });

    //
    it('PPH -Comunicate con nosotros -Llamano', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionLlamanos(this.datos.Formulario)
    });

    //
    it('PPH -Comunicate con nosotros -Escribenos', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionEscribenos(this.datos.Url,this.datos.Formulario)
    });

    //
    it('PPH -Comunicate con nosotros -Cotiza', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionCotiza(this.datos.Url)
    });

    //
    it('PPH -Nuestros servicios -Funeraria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Funeraria")
    });

    //
    it('PPH -Nuestros servicios -Velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Velatorio")
    });

    //
    it('PPH -Nuestros servicios -Cremacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Cremacion")
    });

    //
    it('PPH -Nuestros servicios -Sepultura', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionNuestrosServicios(this.datos.Url, "Sepultura")
    });

    //
    it('PPH -Tambien te ofrecemos -Temploy velatorio', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("Templo")
    });

    //
    it('PPH -Tambien te ofrecemos -Ceremonia de despedida', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("despedida")
        PphHomeMobile.revisarCeremoniaDespedida()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Servicio de sepultacion', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("sepultación")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Ceremonia del recuerdo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("Recuerdo")
        PphHomeMobile.revisarCeremoniasRecuerdo()
    });
    
    //
    it('PPH -Tambien te ofrecemos -Apoyo de coro', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("coros")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Lapidas', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("lápida")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Floreria', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("flores")
        PphHomeMobile.revisarFloreria(this.datos.Url)
    });
    
    //
    it('PPH -Tambien te ofrecemos -Cafeterias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("cafeterías")
    });
    
    //
    it('PPH -Tambien te ofrecemos -Streaming de la ceremonia -Revisar habalr en linea', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionTambienOfrecemos("multimedia")
        PphHomeMobile.revisarHablaEnLinea(this.datos.Url)
    });

    //
    it('PPH -Obituarios', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionObituarios(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -ver todo', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionVerTodoNoticias(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Actividades en nuestros parques', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionActividadesEnParques(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Articulos y noticias', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionArticulosNoticias(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Sotenibilidad', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionSostenibilidad(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionMasParque(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionFloresRecuerdoIr(this.datos.Url)
    });

    //
    it('PPH -Ultimas noticias -Mas parque', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresaPPH()
        PphHomeMobile.seleccionContigoRecuerdoIr(this.datos.Url)
    });

    afterEach(function()  {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });

})