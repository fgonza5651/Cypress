import FunnelCremacionNIF from "../../../pages/funnel/funnelCremacionNIFPage";

describe('', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });

    //
    it('Ingresar flujo cremacion NIF', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()

    })

    //
    it.only('relleno formulario', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionPlanBasico()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIF.seleccionAnaforaCofreFull()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionaMemorialDelRecuerdo()
    })
})