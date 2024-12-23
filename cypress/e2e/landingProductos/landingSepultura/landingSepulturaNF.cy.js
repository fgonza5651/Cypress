import homePage from "../../../pages/home/homePage";
import landingSepulturaNF from "../../../pages/sepultura/landingSepuluraNF/landingSepulturaNF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNFMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNFMobile/landingSepulturaNFMobile";

describe('Formulario landing de funeraria NF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Sepultura - NF - Compra en linea', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Solicitar asesoria correo mal formato', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCorreroMalFormato()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Solicitar asesoria close Pop up', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCierrePopup()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Solicitar asesoria Go home', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaGoHome()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.encontrarTitulo()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.iniciarCotizacion()
    })
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaFinalPagina()
    })
    //{nombre historia}
    it('Landing Sepultura - NF - Telefonos  -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCorreroMalFormato()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCierrePopup()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaGoHome()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.encontrarTitulo()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iniciarCotizacion()
    })
    //{nombre historia}
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});