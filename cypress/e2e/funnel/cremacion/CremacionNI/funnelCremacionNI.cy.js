import FunnelCremacionNI from "../../../../pages/funnel/funnelCremacionNIPage";
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
    it('Ingresar flujo cremacion NI', () => {

        FunnelCremacionNI.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', () => {

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionPlanBasico()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionaMemorialDelRecuerdo()
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
      
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionarPlanTradicional()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.selecionarJardinFlores()
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

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionarPlanSustentable()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.seleccionAnaforaCofrePremium()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.seleccionarJardinFloresPremium()
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

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.seleccionarColumbarioPared()
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

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionarPlanHomenajePremium()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
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

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
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

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasMemorialDelRecuerdo()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanTradicional()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasJardinFlores()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanSustentable()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofrePremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasJardinFloresPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanTradicionalDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioPared()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Funeraria', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.SeleccionarContinuarSinServicio()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.SeleccionarContinuarSinServicio()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
})