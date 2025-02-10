import FunnelCremacionNIF from "../../../../pages/funnel/funnelCremacionNIFPage";
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
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
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
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    it('Comprar plan homenaje premium', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanHomenajePremium()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionarColumbarioVidriado()
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

    it('Comprar plan homenaje premium destado', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionarColumbarioVidriado()
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

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Ver mas', () => {

        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanBasico()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofreFull()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasMemorialDelRecuerdo()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })
    //
    
    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion -Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanTradicional()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasJardinFlores()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
    
    it('Comprar plan sustentable -Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanSustentable()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofrePremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasJardinFloresPremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
    
    it('Comprar plan tradicion Destacado -Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanTradicionalDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofreFull()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioPared()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan homenaje premium -Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanHomenajePremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan homenaje premium Descado -Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan homenaje premium Descado -Seleccionar desde Ver mas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Funeraria', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.SeleccionarContinuarSinServicio()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', () => {
        
        FunnelCremacionNIF.inicioFlujoCremacion()
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi()
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.SeleccionarContinuarSinServicio()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
})