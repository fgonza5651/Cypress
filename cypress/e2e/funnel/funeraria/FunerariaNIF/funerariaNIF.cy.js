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
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIF.verMasAnaforaCofreFull()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionAnaforaContinuar()
        FunnelFunerariaNIF.verMasEntregaCenizasEspecial()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCenizasContinuar()
        FunnelFunerariaNIF.verMasMemorialDelRecuerdo()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan tradicion -Necesito cremacion', () => {
      
        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanTradicional()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionAnaforaContinuar()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCenizasContinuar()
        FunnelFunerariaNIF.verMasJardinFlores()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan sustentable -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanSustentable()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionAnaforaContinuar()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCenizasContinuar()
        FunnelFunerariaNIF.verMasJardinFloresPremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionDescansoCenizasContinuar()
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
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionAnaforaContinuar()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCenizasContinuar()
        FunnelFunerariaNIF.verMasColumbarioPared()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan premium -Necesito cremacion', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanSustentable()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoCremacion()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        FunnelFunerariaNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIF.verMasAnaforaCofrePremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionAnaforaContinuar()
        FunnelFunerariaNIF.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionCenizasContinuar()
        FunnelFunerariaNIF.verMasColumbarioVidriado()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionDescansoCenizasContinuar()
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
    it('Comprar plan tradicion Destacado -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
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
    it('Comprar plan homenaje premium -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanHomenajePremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
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
    it('Comprar plan homenaje premium destado -Necesito Sepultura', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
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
    it('Comprar plan basico -Continuar sin estos servicios', () => {

        FunnelFunerariaNIF.inicioFlujoCremacion()
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi()
        FunnelFunerariaNIF.verMasPlanBasico()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionContinuarSinEstosServicios()
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
})