import homePage from "../../../pages/home/homePage";
import landingSepulturaNIF from "../../../pages/sepultura/landingSepulturaNIF/landingSepulturaNIF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNIFMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNIFMobile/landingSepulturaNIFMobile";

describe('Formulario landing de Sepultura NIF', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
    //CEC-2861
    it('Landing Sepultura - NIF - Compra en linea', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.compraEnLinea(this.datos.Formulario)
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.llamanos(this.datos.Formulario)
    })
    //CEC-2714
    it('Landing Sepultura - NIF - Chat whatsapp', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.chatWhatsapp(this.datos.Formulario)
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Revisar titulos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.encontrarTitulo1()
        landingSepulturaNIF.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NIF - Iniciar una cotizacion', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NIF - Descubre parque americo vespucio', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Descubre parque cordillera', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NIF - Descubre parque padre hurtado', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Selecciona tu necesidad', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.seleccionarNecesidad()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Telefonos -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iconoTelefonosTitulo()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Llamanos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.llamanos(this.datos.Formulario)
    })
    it('Landing Sepultura - NIF - Chat whatsapp -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.chatWhatsapp(this.datos.Formulario)
    })
    //CEC-2861
    it('Landing Sepultura - NIF -Revisar titulos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.encontrarTitulo1()
        landingSepulturaNIFMobile.encontrarTitulo2()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Iniciar una cotizacion -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iniciarUnaCotizacion()
    })
    //CEC-5060
    it('Landing Sepultura - NIF - Descubre parque americo vespucio -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePAV()
    })
    //CEC-5056
    it('Landing Sepultura - NIF - Descubre parque cordillera -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePCO()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Descubre parque padre hurtado -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePPH()
    })
    //CEC-5057
    it('Landing Sepultura - NIF - Selecciona tu necesidad -Mobile ', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.seleccionarNecesidad()
    })
    
})