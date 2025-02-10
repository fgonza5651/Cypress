import FunnelCremacionNIMobile from "../../../../pageMobile/funnelMobile/funnelCremacionNIPageMobile";
import ResumenPagoPageMobile from "../../../../pageMobile/funnelMobile/resumenPago/resumenPagoMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });

    //
    it('Ingresar flujo cremacion NI Mobile', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionPlanBasico()
        FunnelCremacionNIMobile.seleccionarVelatorioBasico()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionaMemorialDelRecuerdo()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    //

    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion', () => {
      
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionarPlanTradicional()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.selecionarJardinFlores()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    it('Comprar plan sustentable', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionarPlanSustentable()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.seleccionAnaforaCofrePremium()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.seleccionarJardinFloresPremium()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    it('Comprar plan tradicion Destacado', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.seleccionarColumbarioPared()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    it('Comprar plan homenaje premium', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionarPlanHomenajePremium()
        FunnelCremacionNIMobile.seleccionarVelatorioBasico()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionarColumbarioVidriado()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    it('Comprar plan homenaje premium destado', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionarColumbarioVidriado()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Ver mas', () => {

        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanBasico()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioBasico()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaCofreFull()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasMemorialDelRecuerdo()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    //
    
    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion -Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanTradicional()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasJardinFlores()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan sustentable -Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanSustentable()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaCofrePremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasJardinFloresPremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan tradicion Destacado -Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanTradicionalDestacado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaCofreFull()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasColumbarioPared()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan homenaje premium -Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanHomenajePremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioBasico()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasColumbarioVidriado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasColumbarioVidriado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Seleccionar desde Ver mas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionVelatorioContinuar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasColumbarioVidriado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Funeraria', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.SeleccionarContinuarSinServicio()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.verMasColumbarioVidriado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', () => {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion()
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi()
        FunnelCremacionNIMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionFunerariaContinuar()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionAnaforaContinuar()
        FunnelCremacionNIMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIMobile.seccionCenizasContinuar()
        FunnelCremacionNIMobile.SeleccionarContinuarSinServicio()
        FunnelCremacionNIMobile.seccionDescansoCenizasContinuar()
    })
})