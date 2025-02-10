import FunnelCremacionNIFMobile from "../../../../pageMobile/funnelMobile/funnelCremacionNIFPageMobile";
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
          cy.clearCookies();   
          cy.clearLocalStorage();
    });

    //
    it('Ingresar flujo cremacion NIF Mobile', () => {

        FunnelCremacionNIFMobile.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', () => {

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionPlanBasico()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIFMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionaMemorialDelRecuerdo()
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
      
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionarPlanTradicional()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.selecionarJardinFlores()
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

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionarPlanSustentable()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.seleccionAnaforaCofrePremium()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.seleccionarJardinFloresPremium()
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

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.seleccionarColumbarioPared()
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

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionarPlanHomenajePremium()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanBasico()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaCofreFull()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasMemorialDelRecuerdo()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanTradicional()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasJardinFlores()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanSustentable()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaCofrePremium()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasJardinFloresPremium()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanTradicionalDestacado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaCofreFull()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasColumbarioPared()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanHomenajePremium()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasColumbarioVidriado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasColumbarioVidriado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasColumbarioVidriado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
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
    it('Continuar sin servicio Funeraria', () => {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.SeleccionarContinuarSinServicio()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.verMasColumbarioVidriado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', () => {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion()
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi()
        FunnelCremacionNIFMobile.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionFunerariaContinuar()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionAnaforaContinuar()
        FunnelCremacionNIFMobile.verMasEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.SeleccionarServiciosSidenav()
        FunnelCremacionNIFMobile.seccionCenizasContinuar()
        FunnelCremacionNIFMobile.SeleccionarContinuarSinServicio()
        FunnelCremacionNIFMobile.seccionDescansoCenizasContinuar()
    })
})