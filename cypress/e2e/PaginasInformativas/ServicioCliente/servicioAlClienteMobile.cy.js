import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import servicioClientePageMobile from "../../../pageMobile/servicioCliente/servicioAlClientePageMobile";

describe('Servicio al cliente', () => {

    beforeEach(function() {
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
    it('Servicio al cliente -boton nuestros parques y oficinas', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('2')
        servicioClientePageMobile.seleccionarNuestrosParques()
    });

    //
    it('Servicio al cliente -boton Preguntas frecuentes', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
    });
    
    //
    it('Servicio al cliente -boton terminos y condiciones', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
    });
    
    //
    it('Nuestros parques y oficinas -PPH', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas(this.datos.Url, 'PPH')
    });
    
    //
    it('Nuestros parques y oficinas -PCO', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas(this.datos.Url, 'PCO')
    });
    
    //
    it('Nuestros parques y oficinas -PAV', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas(this.datos.Url, 'PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PAV', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PCO', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'PCO')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PPH', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'PPH')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Estacion central', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'EstacionCentral')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Providencia', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'Providencia')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas La Reina', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas(this.datos.Url, 'LaReina')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de cremacion', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes(this.datos.Url, 'Cremacion')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de sepultura', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes(this.datos.Url, 'Sepultura')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de funeraria', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes(this.datos.Url, 'Funeraria')
    });

    //
    it('Preguntas Frecuentes -Primera pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(0)
    });

    //
    it('Preguntas Frecuentes -Segunda pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(1)
    });

    //
    it('Preguntas Frecuentes -Tercera pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(2)
    });

    //
    it('Preguntas Frecuentes -Cuarta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(3)
    });

    //
    it('Preguntas Frecuentes -Quinta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(4)
    });

    //
    it('Preguntas Frecuentes -Sexta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(5)
    });

    //
    it('Preguntas Frecuentes -Septima pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(6)
    });

    //
    it('Preguntas Frecuentes -Octava pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(7)
    });

    //
    it('Preguntas Frecuentes -Novena pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(8)
    });

    //
    it('Preguntas Frecuentes -Decima pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(9)
    });

    //
    it('Preguntas Frecuentes -Decimaprimera pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(10)
    });

    //
    it('Preguntas Frecuentes -Decimasegunda pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(11)
    });

    //
    it('Preguntas Frecuentes -Decimatercera pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(12)
    });

    //
    it('Preguntas Frecuentes -Decimacuarta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(13)
    });

    //
    it('Preguntas Frecuentes -Decimoquinta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(14)
    });

    //
    it('Preguntas Frecuentes -DecimoSexta pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(15)
    });

    //
    it('Preguntas Frecuentes -DecimoSeptima pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(16)
    });
    //
    it('Preguntas Frecuentes -DecimoOctava pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(17)
    });
    //
    it('Preguntas Frecuentes -DecimoNovena pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(18)
    });
    //
    it('Preguntas Frecuentes -Vigesima pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(19)
    });
    //
    it('Preguntas Frecuentes -Vigesimaprimera pregunta', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(20)
    });

    //
    it('Terminos y condiciones -Primer termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(1)
    });

    //
    it('Terminos y condiciones -Segundo termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(2)
    });

    //
    it('Terminos y condiciones -Tercer termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(3)
    });

    //
    it('Terminos y condiciones -Cuarto termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(4)
    });

    //
    it('Terminos y condiciones -Quinto termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(5)
    });

    //
    it('Terminos y condiciones -Sexto termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(6)
    });

    //
    it('Terminos y condiciones -Septimo termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(7)
    });

    //
    it('Terminos y condiciones -Octavo termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(8)
    });

    //
    it('Terminos y condiciones -Noveno termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(9)
    });

    //
    it('Terminos y condiciones -Decimo termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(10)
    });

    //
    it('Terminos y condiciones -Decimoprimer termino', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(11)
    });

    afterEach(function() {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });
})