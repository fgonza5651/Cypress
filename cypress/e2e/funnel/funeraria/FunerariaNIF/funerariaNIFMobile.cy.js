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
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIFMobile.verMasAnaforaCofreFull()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasEspecial()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCenizasContinuar()
        FunnelFunerariaNIFMobile.verMasMemorialDelRecuerdo()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionDescansoCenizasContinuar()
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
    it('Comprar plan tradicion -Necesito cremacion', () => {
      
        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanTradicional()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIFMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCenizasContinuar()
        FunnelFunerariaNIFMobile.verMasJardinFlores()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionDescansoCenizasContinuar()
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
    it('Comprar plan sustentable -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanSustentable()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCenizasContinuar()
        FunnelFunerariaNIFMobile.verMasJardinFloresPremium()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionDescansoCenizasContinuar()
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
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCenizasContinuar()
        FunnelFunerariaNIFMobile.verMasColumbarioPared()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionDescansoCenizasContinuar()
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
    it('Comprar plan premium -Necesito cremacion', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanSustentable()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIFMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIFMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIFMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionCenizasContinuar()
        FunnelFunerariaNIFMobile.verMasColumbarioVidriado()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionDescansoCenizasContinuar()
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
    it('Comprar plan tradicion Destacado -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
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
    it('Comprar plan homenaje premium -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanHomenajePremium()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
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
    it('Comprar plan homenaje premium destado -Necesito Sepultura', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIFMobile.seccionServicioCremacionBase()
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
    it('Comprar plan basico -Continuar sin estos servicios', () => {

        FunnelFunerariaNIFMobile.inicioFlujoCremacion()
        FunnelFunerariaNIFMobile.seleccionRegion()
        FunnelFunerariaNIFMobile.formularioCuentanoDeTi()
        FunnelFunerariaNIFMobile.verMasPlanBasico()
        FunnelFunerariaNIFMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIFMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIFMobile.seleccionContinuarSinEstosServicios()
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
})