import homePage from "../../../pages/home/homePage";
import landingFunerariaNF from "../../../pages/funeraria/landingFunerariaNF/landingFunerariaNF"
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNFMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNFMobile/landingFunerariaNFMobile";

describe('Formulario landing de funeraria NF', () => {

    beforeEach(function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
    //CEC-2842
    it('Landing Funeraria - NF - Compra en linea', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.compraEnLinea(this.datos.Formulario)
    })
    //CEC-4200
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaCierrePopup(this.datos.Formulario)
    })
    //CEC-2842
    it('Landing Funeraria - NF - Solicitar asesoria Go home', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaGoHome(this.datos.Url,this.datos.Formulario)
    })
    //CEC-4291
    it('Landing Funeraria - NF - Revisar titulos', function(){
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.encontrarTitulo()
    })
    //CEC-4369
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina', function(){
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNFProductosServicios()
        landingFunerariaNF.solicitarAsesoriaFinalPagina()
    })
    //CEC-2842
    it('Landing Funeraria - NF - Compra en linea -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.iconoTelefonosTitulo()
    })
    //CEC-4200
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaCierrePopup(this.datos.Formulario)
    })
    //CEC-2842
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaGoHome(this.datos.Url,this.datos.Formulario)
    })
    //CEC-4291
    it('Landing Funeraria - NF - Revisar titulos -Mobile', function(){
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.encontrarTitulo()
    })
    //CEC-4369
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', function(){
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNFProductosServiciosMobile()
        landingFunerariaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});