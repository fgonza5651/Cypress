import FunnelFunerariaNIF from "../../../../pages/funnel/funnelFunerariaNIFPage";
import ResumenPagoPage from "../../../../pages/funnel/resumenPago/resumenPago";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });

    //
    it('Ingresar flujo funeraria NI', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanBasico()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionPlanBasico()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionCeremoniaDespeidaEspecial()
        FunnelFunerariaNIF.verMasAnaforaCofreFull()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionAnaforaCofreFull()
        FunnelFunerariaNIF.verMasEntregaCenizasEspecial()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.selecionEntregaCenizasEspecial()
        FunnelFunerariaNIF.verMasMemorialDelRecuerdo()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionaMemorialDelRecuerdo()
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
    it('Comprar plan tradicion -Necesito cremacion', () => {
      
        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanTradicional()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanTradicional()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.selecionCeremoniaDespedidaConCoro()
        FunnelFunerariaNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIF.verMasJardinFlores()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.selecionarJardinFlores()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan sustentable -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanSustentable()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanSustentable()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIF.verMasJardinFloresPremium()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarJardinFloresPremium()
        /*
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion destacada -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanTradicionalDestacado()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIF.verMasColumbarioPared()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarColumbarioPared()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan premium -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanSustentable()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanSustentable()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIF.verMasColumbarioVidriado()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarColumbarioVidriado()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan tradicion Destacado -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanTradicionalDestacado()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan homenaje premium -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanHomenajePremium()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanHomenajePremium()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan homenaje premium destado -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionarPlanHomenajePremiumDestacado()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //
    it('Comprar plan basico -Continuar sin estos servicios', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanBasico()
        FunnelFunerariaNIF.SeleccionarVolverSidenav()
        FunnelFunerariaNIF.seleccionPlanBasico()
        FunnelFunerariaNIF.seleccionContinuarSinEstosServicios()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
})