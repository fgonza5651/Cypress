import homePage from "../../../pages/home/homePage";
import servicioClientePage from "../../../pages/servicioCliente/servicioAlClientePage";

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
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('2')
        servicioClientePage.seleccionarNuestrosParques()
    });

    //
    it('Servicio al cliente -boton Preguntas frecuentes', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
    });
    
    //
    it('Servicio al cliente -boton terminos y condiciones', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
    });
    
    //
    it('Nuestros parques y oficinas -PPH', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas(this.datos.Url,'PPH')
    });
    
    //
    it('Nuestros parques y oficinas -PCO', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas(this.datos.Url,'PCO')
    });
    
    //
    it('Nuestros parques y oficinas -PAV', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.parquesContenidoNuestrasOficinas(this.datos.Url,'PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PAV', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'PAV')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PCO', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'PCO')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas PPH', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'PPH')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Estacion central', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'EstacionCentral')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas Providencia', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'Providencia')
    });
    
    //
    it('Nuestros parques y oficinas -Ver mas La Reina', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.verMasParquesOficinas(this.datos.Url,'LaReina')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de cremacion', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes(this.datos.Url, 'Cremacion')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de sepultura', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes(this.datos.Url, 'Sepultura')
    });
    
    //
    it('Preguntas Frecuentes -Servicio de funeraria', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.serviciosPreguntasFrecunetes(this.datos.Url, 'Funeraria')
    });

    //
    it('Preguntas Frecuentes -Primera pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(0)
    });

    //
    it('Preguntas Frecuentes -Segunda pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(1)
    });

    //
    it('Preguntas Frecuentes -Tercera pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(2)
    });

    //
    it('Preguntas Frecuentes -Cuarta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(3)
    });

    //
    it('Preguntas Frecuentes -Quinta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(4)
    });

    //
    it('Preguntas Frecuentes -Sexta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(5)
    });

    //
    it('Preguntas Frecuentes -Septima pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(6)
    });

    //
    it('Preguntas Frecuentes -Octava pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(7)
    });

    //
    it('Preguntas Frecuentes -Novena pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(8)
    });

    //
    it('Preguntas Frecuentes -Decima pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(9)
    });

    //
    it('Preguntas Frecuentes -Decimaprimera pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(10)
    });

    //
    it('Preguntas Frecuentes -Decimasegunda pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(11)
    });

    //
    it('Preguntas Frecuentes -Decimatercera pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(12)
    });

    //
    it('Preguntas Frecuentes -Decimacuarta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(13)
    });

    //
    it('Preguntas Frecuentes -Decimoquinta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(14)
    });

    //
    it('Preguntas Frecuentes -DecimoSexta pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(15)
    });

    //
    it('Preguntas Frecuentes -DecimoSeptima pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(16)
    });
    //
    it('Preguntas Frecuentes -DecimoOctava pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(17)
    });
    //
    it('Preguntas Frecuentes -DecimoNovena pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(18)
    });
    //
    it('Preguntas Frecuentes -Vigesima pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(19)
    });
    //
    it('Preguntas Frecuentes -Vigesimaprimera pregunta', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarPreguntasFrecuentes()
        servicioClientePage.btnPreguntas(20)
    });

    //
    it('Terminos y condiciones -Primer termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(1)
    });

    //
    it('Terminos y condiciones -Segundo termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(2)
    });

    //
    it('Terminos y condiciones -Tercer termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(3)
    });

    //
    it('Terminos y condiciones -Cuarto termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(4)
    });

    //
    it('Terminos y condiciones -Quinto termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(5)
    });

    //
    it('Terminos y condiciones -Sexto termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(6)
    });

    //
    it('Terminos y condiciones -Septimo termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(7)
    });

    //
    it('Terminos y condiciones -Octavo termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(8)
    });

    //
    it('Terminos y condiciones -Noveno termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(9)
    });

    //
    it('Terminos y condiciones -Decimo termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(10)
    });

    //
    it('Terminos y condiciones -Decimoprimer termino', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterServicioCliente('1')
        servicioClientePage.seleccionarTerminosCondiciones()
        servicioClientePage.btnDesplegableTerminosCondiciones(11)
    });

    afterEach(function() {
        cy.clearCookies();  
        cy.clearLocalStorage();
    });
})