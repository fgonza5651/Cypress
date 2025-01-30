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
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Ver mas', () => {

        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanBasico()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionPlanBasico()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.verMasMemorialDelRecuerdo()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionaMemorialDelRecuerdo()
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
    it('Comprar plan tradicion -Ver mas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanTradicional()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarPlanTradicional()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.verMasJardinFlores()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionarJardinFlores()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
    
    it('Comprar plan sustentable -Ver mas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanSustentable()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarPlanSustentable()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.verMasAnaforaCofrePremium()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaCofrePremium()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.verMasJardinFloresPremium()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarJardinFloresPremium()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
    
    it('Comprar plan tradicion Destacado -Ver mas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanTradicionalDestacado()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.verMasColumbarioPared()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarColumbarioPared()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
    
    it('Comprar plan homenaje premium -Ver mas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremium()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarPlanHomenajePremium()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
    })
    it('Comprar plan homenaje premium Descado -Ver mas', () => {
        
        FunnelCremacionNI.inicioFlujoCremacion()
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi()
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarVolverSidenav()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador()
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
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