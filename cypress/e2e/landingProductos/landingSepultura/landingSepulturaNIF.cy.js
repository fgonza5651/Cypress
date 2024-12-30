import homePage from "../../../pages/home/homePage";
import landingSepulturaNIF from "../../../pages/sepultura/landingSepulturaNIF/landingSepulturaNIF";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNIFMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNIFMobile/landingSepulturaNIFMobile";

describe('Formulario landing de Sepultura NIF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //CEC-2861
    it('Landing Sepultura - NIF - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.compraEnLinea()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.llamanos()
    })
    //CEC-2714
    it('Landing Sepultura - NIF - Chat whatsapp', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.chatWhatsapp()
    })
    //CEC-3419
    it('Landing Sepultura - NIF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.ejecutivaEnlineaHablar()
    })
    //CEC-2861
    it('Landing Sepultura - NIF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.encontrarTitulo1()
        landingSepulturaNIF.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NIF - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NIF - Descubre parque americo vespucio', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Descubre parque cordillera', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NIF - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Selecciona tu necesidad', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.seleccionarNecesidad()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iconoTelefonosTitulo()
    })
    //CEC-2870
    it('Landing Sepultura - NIF - Llamanos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.llamanos()
    })
    it('Landing Sepultura - NIF - Chat whatsapp -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.chatWhatsapp()
    })
    //CEC-2714
    it('Landing Sepultura - NIF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.ejecutivaEnlineaHablar()
    })
    //CEC-3419
    it('Landing Sepultura - NIF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-2861
    it('Landing Sepultura - NIF -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.encontrarTitulo1()
        landingSepulturaNIFMobile.encontrarTitulo2()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iniciarUnaCotizacion()
    })
    //CEC-5060
    it('Landing Sepultura - NIF - Descubre parque americo vespucio -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePAV()
    })
    //CEC-5056
    it('Landing Sepultura - NIF - Descubre parque cordillera -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePCO()
    })
    //CEC-5068
    it('Landing Sepultura - NIF - Descubre parque padre hurtado -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePPH()
    })
    //CEC-5057
    it('Landing Sepultura - NIF - Selecciona tu necesidad -Mobile ', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.seleccionarNecesidad()
    })
    
})