import FunerariaFunnel from "../../../pages/funnel/funnelSepulturaPage";
import ResumenPagoPageSepultura from "../../../pages/funnel/resumenPago/resumenPagoSepultura";

describe ('' , () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
          cy.clearCookies();   
          cy.clearLocalStorage();
    });

    //
    it('Visualizar parques en funnel funeraria', () => {

        FunerariaFunnel.iniciarFunnel()
    })

    //
    it('Seleccionar parque Americo Vespucio', () => {

        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
    })

    it('Seleccionar parque Cordillera', () => {

        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
    })

    it('Seleccionar parque Padre Hurtado', () => {

        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
    })

    //
    it('rellenar formulario del funnel PAV', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
    })
    
    //
    it('rellenar formulario del funnel PCO', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
    })
    
    //
    it('rellenar formulario del funnel PPH', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
    })

    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (3 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionPrecioPremium()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (6 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion6Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PAV (6 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion6Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion8Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio medio - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion8Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV (8 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion8Capacidad()
        FunerariaFunnel.seleccionPrecioPremium()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio termino medio - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PPH (4 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioPremium()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PPH (8 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion8Capacidad()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio termino medio - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (4 capacidades) - precio premium - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioPremium()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (3 capacidades) - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionCard()
    })
    
    //
    it('Seleccionar capacidad PCO (3 capacidades) - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionCard()
    })

    //
    it('Seleccionar capacidad PAV - seleccionar mapa', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionSectorB9MapaPAV()
    })
    
    //
    it('Seleccionar capacidad PCO - seleccionar mapa', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionSectorC20MapaPCO()
    })
    
    //
    it('Seleccionar capacidad PPH - seleccionar mapa', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionSectorS24MapaPPH()
    })

    //
    it('Seleccionar capacidad PAV - revisar pop up card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPAV()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionImagenCard()
    })
    
    //
    it('Seleccionar capacidad PCO - revisar pop up card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionImagenCard()
    })
    
    //
    it('Seleccionar capacidad PPH - revisar pop up card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioMedio()
        FunerariaFunnel.seleccionImagenCard()
    })

    //
    it('Link informacion de la compra- seccion ubicacion de la sepultura', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.clickLinkComoEsElSector()
    })

    //
    it('Link editar financiamineto- seccion ubicacion de la sepultura -Credito', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.editarFinanciamientoCredito()
    })

    //
    it('Link editar financiamineto- seccion ubicacion de la sepultura -Contado', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.editarFinanciamientoContado()
    })

    //
    it('Credito completar pago', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.editarFinanciamientoCredito()
        FunerariaFunnel.irPagar()
        ResumenPagoPageSepultura.verDetallePago()
        ResumenPagoPageSepultura.continuarPago()
        ResumenPagoPageSepultura.formularioComprador()
        ResumenPagoPageSepultura.checkTerminosCondiciones()
    })

    //
    it('Contado completar pago', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.editarFinanciamientoContado()
        FunerariaFunnel.irPagar()
        ResumenPagoPageSepultura.verDetallePago()
        ResumenPagoPageSepultura.continuarPago()
        ResumenPagoPageSepultura.formularioComprador()
        ResumenPagoPageSepultura.checkTerminosCondiciones()
    })

    //
    it('Contado boton ver financiamiento', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.verFinanciamineto()
        FunerariaFunnel.editarFinanciamientoContado()
        FunerariaFunnel.irPagar()
        ResumenPagoPageSepultura.verDetallePago()
        ResumenPagoPageSepultura.continuarPago()
        ResumenPagoPageSepultura.formularioComprador()
        ResumenPagoPageSepultura.checkTerminosCondiciones()
    })

    //
    it('Cambiar parque', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.cambiarParque()
        FunerariaFunnel.seleccionarPCO()
        FunerariaFunnel.seleccion3Capacidad()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.verFinanciamineto()
        FunerariaFunnel.editarFinanciamientoContado()
    })


    afterEach(() =>{
        cy.clearCookies();   
        cy.clearLocalStorage();
    })

})