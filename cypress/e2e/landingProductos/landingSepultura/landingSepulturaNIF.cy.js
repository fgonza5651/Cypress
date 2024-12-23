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
    //{nombre historia}
    it('Landing Sepultura - NIF - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.llamanos()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Chat whatsapp', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.chatWhatsapp()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.encontrarTitulo1()
        landingSepulturaNIF.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque americo vespucio', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque cordillera', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.descubrePPH()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Selecciona tu necesidad', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNIF.seleccionarNecesidad()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
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
    //{nombre historia}
    it('Landing Sepultura - NIF - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.encontrarTitulo1()
        landingSepulturaNIFMobile.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque americo vespucio -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque cordillera -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Descubre parque padre hurtado -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.descubrePPH()
    })
    //{nombre historia}
    it('Landing Sepultura - NIF - Selecciona tu necesidad -Mobile ', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIFMobile.seleccionarNecesidad()
    })
    
})