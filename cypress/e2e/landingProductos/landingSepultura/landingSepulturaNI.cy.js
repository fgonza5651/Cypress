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
    //CEC-2861
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.compraEnLinea()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Llamanos', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.llamanos()
    })
    //CEC-2714
    it('Landing Sepultura - NI - chat whatsapp', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.chatWhatsapp()
    })
    //CEC-5068
    it('Landing Sepultura - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.encontrarTitulo1()
        landingSepulturaNI.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NI - Descubre parque americo vespucio', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NI - Descubre parque cordillera', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NI - Descubre parque padre hurtado', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Selecciona tu necesidad', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoSepulturaNIProductosServicios()
        landingSepulturaNI.seleccionarNecesidad()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Telefonos -Mobile', ()=> {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iconoTelefonosTitulo()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Llamanos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.llamanos()
    })
    //CEC-2714
    it('Landing Sepultura - NI - Chat whatsapp -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.chatWhatsapp()
    })
    //CEC-5068
    it('Landing Sepultura - NI -Revisar titulos -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.encontrarTitulo1()
        landingSepulturaNIMobile.encontrarTitulo2()
    })
    //CEC-5060
    it('Landing Sepultura - NI - Iniciar una cotizacion -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.iniciarUnaCotizacion()
    })
    //CEC-5056
    it('Landing Sepultura - NI - Descubre parque americo vespucio -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePAV()
    })
    //CEC-5068
    it('Landing Sepultura - NI - Descubre parque cordillera -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePCO()
    })
    //CEC-5057
    it('Landing Sepultura - NI - Descubre parque padre hurtado -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.descubrePPH()
    })
    //CEC-2870
    it('Landing Sepultura - NI - Selecciona tu necesidad -Mobile', ()=>{
        homePageMobile.ingresoHomeMobile()
        homePageMobile.ingresoSepulturaNIProductosServiciosMobile()
        landingSepulturaNIMobile.seleccionarNecesidad()
    })
    
})