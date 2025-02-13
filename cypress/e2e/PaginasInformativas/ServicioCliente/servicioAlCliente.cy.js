import homePage from "../../../pages/home/homePage";
import servicioClientePage from "../../../pages/servicioCliente/servicioAlClientePage";

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
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('2')
        servicioClientePage.seleccionarNuestrosParques()
    });

    //
    it('Servicio al cliente -boton Preguntas frecuentes', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
    });
    
    //
    it('Servicio al cliente -boton terminos y condiciones', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
    });
    
    //
    it('Nuestros parques y oficinas -PPH', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas('PPH')
    });
    
    //
    it('Nuestros parques y oficinas -PCO', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas('PCO')
    });
    
    //
    it('Nuestros parques y oficinas -PAV', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas('PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PAV', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PCO', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('PCO')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PPH', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('PPH')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Estacion central', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('EstacionCentral')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Providencia', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('Providencia')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas La Reina', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas('LaReina')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de cremacion', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes('Cremacion')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de sepultura', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes('Sepultura')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de funeraria', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes('Funeraria')
    });

    //
    it('Preguntas Frecuentes -Primera pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(0)
    });

    //
    it('Preguntas Frecuentes -Segunda pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(1)
    });

    //
    it('Preguntas Frecuentes -Tercera pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(2)
    });

    //
    it('Preguntas Frecuentes -Cuarta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(3)
    });

    //
    it('Preguntas Frecuentes -Quinta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(4)
    });

    //
    it('Preguntas Frecuentes -Sexta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(5)
    });

    //
    it('Preguntas Frecuentes -Septima pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(6)
    });

    //
    it('Preguntas Frecuentes -Octava pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(7)
    });

    //
    it('Preguntas Frecuentes -Novena pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(8)
    });

    //
    it('Preguntas Frecuentes -Decima pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(9)
    });

    //
    it('Preguntas Frecuentes -Decimaprimera pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(10)
    });

    //
    it('Preguntas Frecuentes -Decimasegunda pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(11)
    });

    //
    it('Preguntas Frecuentes -Decimatercera pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(12)
    });

    //
    it('Preguntas Frecuentes -Decimacuarta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(13)
    });

    //
    it('Preguntas Frecuentes -Decimoquinta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(14)
    });

    //
    it('Preguntas Frecuentes -DecimoSexta pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(15)
    });

    //
    it('Preguntas Frecuentes -DecimoSeptima pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(16)
    });
    //
    it('Preguntas Frecuentes -DecimoOctava pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(17)
    });
    //
    it('Preguntas Frecuentes -DecimoNovena pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(18)
    });
    //
    it('Preguntas Frecuentes -Vigesima pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(19)
    });
    //
    it('Preguntas Frecuentes -Vigesimaprimera pregunta', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(20)
    });

    //
    it('Terminos y condiciones -Primer termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(1)
    });

    //
    it('Terminos y condiciones -Segundo termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(2)
    });

    //
    it('Terminos y condiciones -Tercer termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(3)
    });

    //
    it('Terminos y condiciones -Cuarto termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(4)
    });

    //
    it('Terminos y condiciones -Quinto termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(5)
    });

    //
    it('Terminos y condiciones -Sexto termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(6)
    });

    //
    it('Terminos y condiciones -Septimo termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(7)
    });

    //
    it('Terminos y condiciones -Octavo termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(8)
    });

    //
    it('Terminos y condiciones -Noveno termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(9)
    });

    //
    it('Terminos y condiciones -Decimo termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(10)
    });

    //
    it('Terminos y condiciones -Decimoprimer termino', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(11)
    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });
})