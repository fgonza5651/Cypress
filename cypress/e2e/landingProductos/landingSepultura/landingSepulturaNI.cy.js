import homePage from "../../../pages/home/homePage";
import landingSepulturaNI from "../../../pages/sepultura/landingSepulturaNI/landingSepulturaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNIMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNIMobile/landingSepulturaNIMobile";

describe('Formulario landing de Sepultura NI', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.llamanos()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - chat whatsapp', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.chatWhatsapp()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.encontrarTitulo1()
        landingSepulturaNI.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque americo vespucio', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque cordillera', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePPH()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Selecciona tu necesidad', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.seleccionarNecesidad()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Llamanos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.llamanos()
    })
    it('Landing Sepultura - NI - Chat whatsapp -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.chatWhatsapp()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NI -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.encontrarTitulo1()
        landingSepulturaNIMobile.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque americo vespucio -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque cordillera -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque padre hurtado -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePPH()
    })
    //{nombre historia}
    it.only('Landing Sepultura - NI - Selecciona tu necesidad -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.seleccionarNecesidad()
    })
    
})