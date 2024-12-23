import homePage from "../../../pages/home/homePage";
import landingSepulturaNI from "../../../pages/sepultura/landingSepulturaNI/landingSepulturaNI";
import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import landingSepulturaNIMobile from "../../../pageMobile/sepulturaMobile/landingSepulturaNIMobile/landingSepulturaNIMobile";
describe('Formulario landing de funeraria NI', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.llamanos()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.chatWhatsapp()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.encontrarTitulo1()
        landingSepulturaNI.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque americo vespucio', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque cordillera', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.descubrePPH()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIFProductosServicios()
        landingSepulturaNI.seleccionarNecesidad()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.llamanos()
    })
    it('Landing Sepultura - NI - Empieza aqui -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.chatWhatsapp()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Sepultura - NI -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.encontrarTitulo1()
        landingSepulturaNIMobile.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.iniciarUnaCotizacion()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque americo vespucio', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePAV()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque cordillera', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePCO()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePPH()
    })
    //{nombre historia}
    it.only('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIFProductosServiciosMobile()
        landingSepulturaNIMobile.seleccionarNecesidad()
    })
    
})