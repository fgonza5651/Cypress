import homePage from "../../../pages/home/homePage";
import landingSepulturaNI from "../../../pages/sepultura/landingSepulturaNI/landingSepulturaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNIMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNIMobile/landingSepulturaNIMobile";

describe('Formulario landing de Sepultura NI', () => {

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
    it('Landing Sepultura - NI - Compra en linea', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.compraEnLinea(this.datos.Formulario)
    })
    //CEC-2870
    it('Landing Sepultura - NI - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.llamanos(this.datos.Formulario)
    })
    //CEC-2714
    it('Landing Sepultura - NI - chat whatsapp', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.chatWhatsapp(this.datos.Formulario)
    })
    //CEC-5068
    it('Landing Sepultura - NI - Revisar titulos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.encontrarTitulo1()
        landingSepulturaNI.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NI - Iniciar una cotizacion', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NI - Descubre parque americo vespucio', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NI - Descubre parque cordillera', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NI - Descubre parque padre hurtado', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Selecciona tu necesidad', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.seleccionarNecesidad()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Telefonos -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iconoTelefonosTitulo()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Llamanos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.llamanos(this.datos.Formulario)
    })
    //CEC-2714
    it('Landing Sepultura - NI - Chat whatsapp -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.chatWhatsapp(this.datos.Formulario)
    })
    //CEC-5068
    it('Landing Sepultura - NI -Revisar titulos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.encontrarTitulo1()
        landingSepulturaNIMobile.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NI - Iniciar una cotizacion -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NI - Descubre parque americo vespucio -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NI - Descubre parque cordillera -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NI - Descubre parque padre hurtado -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Selecciona tu necesidad -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.seleccionarNecesidad()
    })
    
})