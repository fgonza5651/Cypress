import homePage from "../../pages/home/homePage";
import landingFunerariaNI from "../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";
import homePageMobile from "../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIMobile from "../../pageMobile/funerariaMobile/landingFunerariaNiMobile/landingFunerariaNIMobile";
describe('Formulario landing de funeraria NI', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Funeraria - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.empiezaAqui()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.encontrarTitulo1()
        landingFunerariaNI.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.empiezaAqui()

    })
    //{nombre historia}
    it('Landing Funeraria - NI - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.ejecutivaEnlineaHablar()

    })
    //{nombre historia}
    it('Landing Funeraria - NI - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.ejecutivaEnlineaOtraSolicitud()

    })
    //{nombre historia}
    it('Landing Funeraria - NI -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.encontrarTitulo1()
        landingFunerariaNIMobile.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNIMobile()
        landingFunerariaNIMobile.iniciarUnaCotizacion()
    })

})