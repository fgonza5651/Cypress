import homePage from "../../../pages/home/homePage";
import landingFunerariaNI from "../../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingFunerariaNIMobile from "../../../pageMobile/funerariaMobile/landingFunerariaNIMobile/landingFunerariaNIMobile";

describe('Formulario landing de funeraria NI', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
    //CEC-2842
    it('Landing Funeraria - NI - Compra en linea', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.compraEnLinea(this.datos.Formulario)
    })
    //CEC-2842
    it('Landing Funeraria - NI - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.empiezaAqui(this.datos.Url)
    })
    //CEC-3966
    it('Landing Funeraria - NI - Revisar titulos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.encontrarTitulo1()
        landingFunerariaNI.encontrarTitulo2()
    })
    //CEC-3914
    it('Landing Funeraria - NI - Iniciar una cotizacion', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.iniciarUnaCotizacion(this.datos.Url)
    })
    //CEC-2842
    it('Landing Funeraria - NI - Telefonos -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.iconoTelefonosTitulo()
    })
    //CEC-2842
    it('Landing Funeraria - NI - Empieza aqui -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.empiezaAqui(this.datos.Url)

    })
    //CEC-3966
    it('Landing Funeraria - NI -Revisar titulos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.encontrarTitulo1()
        landingFunerariaNIMobile.encontrarTitulo2()
    })
    //CEC-3914
    it('Landing Funeraria - NI - Iniciar una cotizacion -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoFunerariaNIProductosServiciosMobile()
        landingFunerariaNIMobile.iniciarUnaCotizacion(this.datos.Url)
    })

})