import FunerariaFunnel from "../../../pages/funnel/funnelSepulturaPage";

describe ('' , () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
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

    it('Seleccionar capacidad PPH (4 capacidades) - precio economico - selccionar card', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
    })

    it.only('Link informacion de la compra- seccion ubicacion de la sepultura', () => {
        FunerariaFunnel.iniciarFunnel()
        FunerariaFunnel.seleccionarPPH()
        FunerariaFunnel.rellernarFormulario()
        FunerariaFunnel.seleccion4Capacidad()
        FunerariaFunnel.seleccionPrecioEconomico()
        FunerariaFunnel.seleccionCard()
        FunerariaFunnel.clickLinkComoEsElSector()
    })

})