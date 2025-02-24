import homePage from "../../../pages/home/homePage";
import landingFunerariaNIF from "../../../pages/funeraria/landingFunerariaNIF/landingFunerariaNIF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIFMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNIFMobile/landingFunerariaNIFMobile";
describe('Formulario landing de funeraria NIF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //CEC-3914
    it('Landing Funeraria - NIF - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.compraEnLinea()
    })

    //CEC-3913
    it('Landing Funeraria - NIF - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.empiezaAqui()
    })
    //CEC-3914
    it('Landing Funeraria - NIF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.encontrarTitulo1()
        landingFunerariaNIF.encontrarTitulo2()
    })
    //CEC-4354
    it('Landing Funeraria - NIF - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.iniciarUnaCotizacion()
    })
    //CEC-3914
    it('Landing Funeraria - NIF - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iconoTelefonosTitulo()
    })
    //CEC-3913
    it('Landing Funeraria - NIF - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.empiezaAqui()

    })
    //CEC-3914
    it('Landing Funeraria - NIF -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.encontrarTitulo1()
        landingFunerariaNIFMobile.encontrarTitulo2()
    })
    //CEC-4354
    it('Landing Funeraria - NIF - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iniciarUnaCotizacion()
    })

})