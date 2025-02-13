import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import servicioClientePageMobile from "../../../pageMobile/servicioCliente/servicioAlClientePageMobile";

describe('Servicio al cliente', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

    //
    it('Servicio al cliente -boton nuestros parques y oficinas', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('2')
        servicioClientePageMobile.seleccionarNuestrosParques()
    });

    //
    it('Servicio al cliente -boton Preguntas frecuentes', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
    });
    
    //
    it('Servicio al cliente -boton terminos y condiciones', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
    });
    
    //
    it('Nuestros parques y oficinas -PPH', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas('PPH')
    });
    
    //
    it('Nuestros parques y oficinas -PCO', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas('PCO')
    });
    
    //
    it('Nuestros parques y oficinas -PAV', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.parquesContenidoNuestrasOficinas('PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PAV', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PCO', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('PCO')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PPH', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('PPH')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Estacion central', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('EstacionCentral')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Providencia', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('Providencia')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas La Reina', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.verMasParquesOficinas('LaReina')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de cremacion', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes('Cremacion')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de sepultura', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes('Sepultura')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de funeraria', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.serviciosPreguntasFrecunetes('Funeraria')
    });

    //
    it('Preguntas Frecuentes -Primera pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(0)
    });

    //
    it('Preguntas Frecuentes -Segunda pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(1)
    });

    //
    it('Preguntas Frecuentes -Tercera pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(2)
    });

    //
    it('Preguntas Frecuentes -Cuarta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(3)
    });

    //
    it('Preguntas Frecuentes -Quinta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(4)
    });

    //
    it('Preguntas Frecuentes -Sexta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(5)
    });

    //
    it('Preguntas Frecuentes -Septima pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(6)
    });

    //
    it('Preguntas Frecuentes -Octava pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(7)
    });

    //
    it('Preguntas Frecuentes -Novena pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(8)
    });

    //
    it('Preguntas Frecuentes -Decima pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(9)
    });

    //
    it('Preguntas Frecuentes -Decimaprimera pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(10)
    });

    //
    it('Preguntas Frecuentes -Decimasegunda pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(11)
    });

    //
    it('Preguntas Frecuentes -Decimatercera pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(12)
    });

    //
    it('Preguntas Frecuentes -Decimacuarta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(13)
    });

    //
    it('Preguntas Frecuentes -Decimoquinta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(14)
    });

    //
    it('Preguntas Frecuentes -DecimoSexta pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(15)
    });

    //
    it('Preguntas Frecuentes -DecimoSeptima pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(16)
    });
    //
    it('Preguntas Frecuentes -DecimoOctava pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(17)
    });
    //
    it('Preguntas Frecuentes -DecimoNovena pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(18)
    });
    //
    it('Preguntas Frecuentes -Vigesima pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(19)
    });
    //
    it('Preguntas Frecuentes -Vigesimaprimera pregunta', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarPreguntasFrecuentes()
        servicioClientePageMobile.btnPreguntas(20)
    });

    //
    it('Terminos y condiciones -Primer termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(1)
    });

    //
    it('Terminos y condiciones -Segundo termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(2)
    });

    //
    it('Terminos y condiciones -Tercer termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(3)
    });

    //
    it('Terminos y condiciones -Cuarto termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(4)
    });

    //
    it('Terminos y condiciones -Quinto termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(5)
    });

    //
    it('Terminos y condiciones -Sexto termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(6)
    });

    //
    it('Terminos y condiciones -Septimo termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(7)
    });

    //
    it('Terminos y condiciones -Octavo termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(8)
    });

    //
    it('Terminos y condiciones -Noveno termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(9)
    });

    //
    it('Terminos y condiciones -Decimo termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(10)
    });

    //
    it('Terminos y condiciones -Decimoprimer termino', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        servicioClientePageMobile.seleccionarTerminosCondiciones()
        servicioClientePageMobile.btnDesplegableTerminosCondiciones(11)
    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });
})