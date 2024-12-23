import homePage from "../../pages/home/homePage";
import landingFunerariaNF from "../../pages/funeraria/landingFunerariaNF/landingFunerariaNF";
import homePageMobile from "../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNFMobile from "../../pageMobile/funerariaMobile/landingFunerariaNFMobile/landingFunerariaNFMobile";

describe('Formulario landing de funeraria NF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Funeraria - NF - Compra en linea', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaCierrePopup()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria Go home', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaGoHome()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.encontrarTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaFinalPagina()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Compra en linea -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaCierrePopup()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaGoHome()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.encontrarTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});