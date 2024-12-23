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
    //{nombre historia}
    it('Landing Funeraria - NIF - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.compraEnLinea()
    })

    //{nombre historia}
    it('Landing Funeraria - NIF - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.empiezaAqui()
    })

    //{nombre historia}
    it('Landing Funeraria - NIF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.encontrarTitulo1()
        landingFunerariaNIF.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.empiezaAqui()

    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.ejecutivaEnlineaHablar()

    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.ejecutivaEnlineaOtraSolicitud()

    })
    //{nombre historia}
    it('Landing Funeraria - NIF -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.encontrarTitulo1()
        landingFunerariaNIFMobile.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Funeraria - NIF - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iniciarUnaCotizacion()
    })

})