import homePage from "../../../pages/home/homePage";
import landingSepulturaNF from "../../../pages/sepultura/landingSepuluraNF/landingSepulturaNF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNFMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNFMobile/landingSepulturaNFMobile";

describe('Formulario landing de funeraria NF', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
    //CEC-5060
    it('Landing Sepultura - NF - Compra en linea', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.compraEnLinea(this.datos.Formulario)
    })
    //CEC-5066
    it('Landing Sepultura - NF - Solicitar asesoria correo mal formato', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCorreroMalFormato(this.datos.Formulario)
    })
    //CEC-5066
    it('Landing Sepultura - NF - Solicitar asesoria close Pop up', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCierrePopup(this.datos.Formulario)
    })
    //CEC-5067
    it('Landing Sepultura - NF - Solicitar asesoria Go home', function()  {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaGoHome(this.datos.Url,this.datos.Formulario)
    })
    //CEC-3419
    it('Landing Sepultura - NF - Revisar titulos', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.encontrarTitulo()
    })
    //CEC-4589
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.iniciarCotizacion()
    })

    //CEC-4589
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaFinalPagina()
    })
    //CEC-4588
    it('Landing Sepultura - NF - Telefonos  -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iconoTelefonosTitulo()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCorreroMalFormato(this.datos.Formulario)
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCierrePopup(this.datos.Formulario)
    })
    //CEC-5067
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', function()  {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaGoHome(this.datos.Url, this.datos.Formulario)
    })
    //CEC-3419
    it('Landing Funeraria - NF - Revisar titulos -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.encontrarTitulo()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iniciarCotizacion()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', function() {
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});