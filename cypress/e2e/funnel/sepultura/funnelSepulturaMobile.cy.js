import FunerariaFunnelMobile from "../../../pageMobile/funnelMobile/funnelSepulturaPageMobile";

describe ('' , () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });

    //
    it('Visualizar parques en funnel funeraria', () => {

        FunerariaFunnelMobile.iniciarFunnel()
    })

    //
    it('Seleccionar parque Americo Vespucio', () => {

        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
    })

    it('Seleccionar parque Cordillera', () => {

        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
    })

    it('Seleccionar parque Padre Hurtado', () => {

        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
    })

    //
    it('rellenar formulario del funnel PAV', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
    })
    
    //
    it('rellenar formulario del funnel PCO', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
    })
    
    //
    it('rellenar formulario del funnel PPH', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
    })

    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion3Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion3Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion3Capacidad()
        FunerariaFunnelMobile.seleccionPrecioPremium()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (6 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion6Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PAV (6 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion6Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionPrecioPremium()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio termino medio - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioPremium()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (8 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio termino medio - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioPremium()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (8 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (8 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion8Capacidad()
        FunerariaFunnelMobile.seleccionPrecioPremium()
        FunerariaFunnelMobile.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV - seleccionar mapa', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion3Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionSectorB1MapaPAV()
    })
    
    //
    it('Seleccionar capacidad PCO - seleccionar mapa', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionSectorC32MapaPCO()
    })
    
    //
    it('Seleccionar capacidad PPH - seleccionar mapa', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionSectorS24MapaPPH()
    })

    //
    it('Seleccionar capacidad PAV - revisar pop up card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPAV()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion3Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionImagenCard()
    })
    
    //
    it('Seleccionar capacidad PCO - revisar pop up card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPCO()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionImagenCard()
    })
    
    //
    it('Seleccionar capacidad PPH - revisar pop up card', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioMedio()
        FunerariaFunnelMobile.seleccionImagenCard()
    })

    //
    it('Link informacion de la compra- seccion ubicacion de la sepultura', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
        FunerariaFunnelMobile.clickLinkComoEsElSector()
    })

    //
    it('Link editar financiamineto- seccion ubicacion de la sepultura -Credito', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
        FunerariaFunnelMobile.editarFinanciamientoCredito()
    })

    //
    it('Link editar financiamineto- seccion ubicacion de la sepultura -Contado', () => {
        FunerariaFunnelMobile.iniciarFunnel()
        FunerariaFunnelMobile.seleccionarPPH()
        FunerariaFunnelMobile.rellernarFormulario()
        FunerariaFunnelMobile.seleccion4Capacidad()
        FunerariaFunnelMobile.seleccionPrecioEconomico()
        FunerariaFunnelMobile.seleccionCard()
        FunerariaFunnelMobile.editarFinanciamientoContado()
    })

})