import homePage from "../../../pages/home/homePage";
import landingFunerariaNI from "../../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNIMobile/landingFunerariaNIMobile";

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