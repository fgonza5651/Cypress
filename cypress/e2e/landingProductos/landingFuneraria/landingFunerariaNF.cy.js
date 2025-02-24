import homePage from "../../../pages/home/homePage";
import landingFunerariaNF from "../../../pages/funeraria/landingFunerariaNF/landingFunerariaNF"
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNFMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNFMobile/landingFunerariaNFMobile";

describe('Formulario landing de funeraria NF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //CEC-2842
    it('Landing Funeraria - NF - Compra en linea', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.compraEnLinea()
    })
    //CEC-4200
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaCierrePopup()
    })
    //CEC-2842
    it('Landing Funeraria - NF - Solicitar asesoria Go home', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaGoHome()
    })
    //CEC-4291
    it('Landing Funeraria - NF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.encontrarTitulo()
    })
    //CEC-4369
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaFinalPagina()
    })
    //CEC-2842
    it('Landing Funeraria - NF - Compra en linea -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.iconoTelefonosTitulo()
    })
    //CEC-4200
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaCierrePopup()
    })
    //CEC-2842
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaGoHome()
    })
    //CEC-4291
    it('Landing Funeraria - NF - Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.encontrarTitulo()
    })
    //CEC-4369
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});