import homePage from "../../../pages/home/homePage";
import landingFunerariaNI from "../../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNiMobile/landingFunerariaNIMobile";

describe('Formulario landing de funeraria NI', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //CEC-2842
    it('Landing Funeraria - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.compraEnLinea()
    })
    //CEC-2842
    it('Landing Funeraria - NI - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.empiezaAqui()
    })
    //CEC-2843
    it('Landing Funeraria - NI - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaHablar()
    })
    //CEC-2822
    it('Landing Funeraria - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-3966
    it('Landing Funeraria - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.encontrarTitulo1()
        landingFunerariaNI.encontrarTitulo2()
    })
    //CEC-3914
    it('Landing Funeraria - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.iniciarUnaCotizacion()
    })
    //CEC-2842
    it('Landing Funeraria - NI - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.iconoTelefonosTitulo()
    })
    //CEC-2842
    it('Landing Funeraria - NI - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.empiezaAqui()

    })
    //CEC-2843
    it('Landing Funeraria - NI - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.ejecutivaEnlineaHablar()

    })
    //CEC-2822
    it('Landing Funeraria - NI - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.ejecutivaEnlineaOtraSolicitud()

    })
    //CEC-3966
    it('Landing Funeraria - NI -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.encontrarTitulo1()
        landingFunerariaNIMobile.encontrarTitulo2()
    })
    //CEC-3914
    it('Landing Funeraria - NI - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.iniciarUnaCotizacion()
    })

})