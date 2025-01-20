import FunnelCremacionNIF from "../../../pages/funnel/funnelCremacionNIFPage";
import ResumenPagoPage from "../../../pages/funnel/resumenPago/resumenPago";
import webpay3 from "../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../pages/carroCompras/recibo/checkoutRecibo";

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

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionPlanBasico()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIF.seleccionAnaforaCofreFull()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionaMemorialDelRecuerdo()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
    //

    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion', () => {
      
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanTradicional()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.selecionarJardinFlores()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    it('Comprar plan sustentable', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanSustentable()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.seleccionAnaforaCofrePremium()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.seleccionarJardinFloresPremium()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    it('Comprar plan tradicion Destacado', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIF.seleccionAnaforaCofreFull()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.seleccionarColumbarioPared()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    it.only('Comprar plan homenaje premium', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanHomenajePremium()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionarColumbarioVidriado()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
})