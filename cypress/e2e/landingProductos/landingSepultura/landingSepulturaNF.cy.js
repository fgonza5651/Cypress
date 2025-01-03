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
    //CEC-5060
    it('Landing Sepultura - NF - Compra en linea', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.compraEnLinea()
    })
    //CEC-5066
    it('Landing Sepultura - NF - Solicitar asesoria correo mal formato', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCorreroMalFormato()
    })
    //CEC-5066
    it('Landing Sepultura - NF - Solicitar asesoria close Pop up', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaCierrePopup()
    })
    //CEC-5067
    it('Landing Sepultura - NF - Solicitar asesoria Go home', ()=> {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaGoHome()
    })
    //CEC-5059
    it('Landing Sepultura - NF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.ejecutivaEnlineaHablar()
    })
    //CEC-5063
    it('Landing Sepultura - NF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-3419
    it('Landing Sepultura - NF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.encontrarTitulo()
    })
    //CEC-4589
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.iniciarCotizacion()
    })

    //CEC-4589
    it('Landing Sepultura - NF - Solicitar asesoria final de pagina', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNFProductosServicios()
        landingSepulturaNF.solicitarAsesoriaFinalPagina()
    })
    //CEC-4588
    it('Landing Sepultura - NF - Telefonos  -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iconoTelefonosTitulo()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCorreroMalFormato()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria close Pop up -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaCierrePopup()
    })
    //CEC-5067
    it('Landing Funeraria - NF - Solicitar asesoria Go home -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaGoHome()
    })
    //CEC-5059
    it('Landing Funeraria - NF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.ejecutivaEnlineaHablar()
    })
    //CEC-5063
    it('Landing Funeraria - NF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-3419
    it('Landing Funeraria - NF - Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.encontrarTitulo()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.iniciarCotizacion()
    })
    //CEC-4589
    it('Landing Funeraria - NF - Solicitar asesoria final de pagina -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNFProductosServiciosMobile()
        landingSepulturaNFMobile.solicitarAsesoriaFinalPagina()
    })
    
});