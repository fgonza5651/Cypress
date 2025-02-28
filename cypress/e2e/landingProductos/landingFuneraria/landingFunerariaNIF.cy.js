import homePage from "../../../pages/home/homePage";
import landingFunerariaNIF from "../../../pages/funeraria/landingFunerariaNIF/landingFunerariaNIF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIFMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNIFMobile/landingFunerariaNIFMobile";

describe('Formulario landing de funeraria NIF', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
    //CEC-3914
    it('Landing Funeraria - NIF - Compra en linea', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.compraEnLinea(this.datos.Formulario)
    })

    //CEC-3913
    it('Landing Funeraria - NIF - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.empiezaAqui(this.datos.Url)
    })
    //CEC-3914
    it('Landing Funeraria - NIF - Revisar titulos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.encontrarTitulo1()
        landingFunerariaNIF.encontrarTitulo2()
    })
    //CEC-4354
    it('Landing Funeraria - NIF - Iniciar una cotizacion', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIFProductosServicios()
        landingFunerariaNIF.iniciarUnaCotizacion(this.datos.Url)
    })
    //CEC-3914
    it('Landing Funeraria - NIF - Telefonos -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iconoTelefonosTitulo()
    })
    //CEC-3913
    it('Landing Funeraria - NIF - Empieza aqui -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.empiezaAqui(this.datos.Url)

    })
    //CEC-3914
    it('Landing Funeraria - NIF -Revisar titulos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.encontrarTitulo1()
        landingFunerariaNIFMobile.encontrarTitulo2()
    })
    //CEC-4354
    it('Landing Funeraria - NIF - Iniciar una cotizacion -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIFProductosServiciosMobile()
        landingFunerariaNIFMobile.iniciarUnaCotizacion(this.datos.Url)
    })

})