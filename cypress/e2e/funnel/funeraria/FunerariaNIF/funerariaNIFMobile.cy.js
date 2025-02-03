import FunnelFunerariaNIFMobile from "../../../../pageMobile/funnelMobile/funnelFunerariaNIFPageMobile";
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
    it('Ingresar flujo funeraria NIF', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanBasico()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionPlanBasico()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionCeremoniaDespeidaEspecial()
        FunnelFunerariaNIFMobile.verMasAnaforaCofreFull()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionAnaforaCofreFull()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasEspecial()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.selecionEntregaCenizasEspecial()
        FunnelFunerariaNIFMobile.verMasMemorialDelRecuerdo()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionaMemorialDelRecuerdo()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })
    //

    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion -Necesito cremacion', () => {
      
        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanTradicional()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanTradicional()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelFunerariaNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.verMasJardinFlores()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.selecionarJardinFlores()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan sustentable -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanSustentable()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanSustentable()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.verMasJardinFloresPremium()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarJardinFloresPremium()
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

    //
    it('Comprar plan tradicion destacada -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanTradicionalDestacado()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.verMasColumbarioPared()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarColumbarioPared()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan premium -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanSustentable()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanSustentable()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.verMasColumbarioVidriado()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarColumbarioVidriado()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan tradicion Destacado -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanTradicionalDestacado()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan homenaje premium -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanHomenajePremium()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanHomenajePremium()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan homenaje premium destado -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionarPlanHomenajePremiumDestacado()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })

    //
    it('Comprar plan basico -Continuar sin estos servicios', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanBasico()
        FunnelFunerariaNIFMobile.SeleccionarVolverSidenav()
        FunnelFunerariaNIFMobile.seleccionPlanBasico()
        FunnelFunerariaNIFMobile.seleccionContinuarSinEstosServicios()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador()
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
    })
})