import FunnelFunerariaNI from "../../../../pages/funnel/funnelFuneriaNIPage";
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

        FunnelFunerariaNI.inicioFlujoCremacion()

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', () => {

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoCremacion()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        FunnelFunerariaNI.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNI.verMasAnaforaCofreFull()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionAnaforaContinuar()
        FunnelFunerariaNI.verMasEntregaCenizasEspecial()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCenizasContinuar()
        FunnelFunerariaNI.verMasMemorialDelRecuerdo()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionDescansoCenizasContinuar()
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
      
        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanTradicional()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaEstandar()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoCremacion()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        FunnelFunerariaNI.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionAnaforaContinuar()
        FunnelFunerariaNI.verMasEntregaCenizasIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCenizasContinuar()
        FunnelFunerariaNI.verMasJardinFlores()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionDescansoCenizasContinuar()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanSustentable()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoCremacion()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        FunnelFunerariaNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNI.verMasAnaforaCofrePremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionAnaforaContinuar()
        FunnelFunerariaNI.verMasEntregaCenizasIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCenizasContinuar()
        FunnelFunerariaNI.verMasJardinFloresPremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionDescansoCenizasContinuar()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanTradicionalDestacado()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoCremacion()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        FunnelFunerariaNI.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNI.verMasAnaforaCofrePremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionAnaforaContinuar()
        FunnelFunerariaNI.verMasEntregaCenizasIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCenizasContinuar()
        FunnelFunerariaNI.verMasColumbarioPared()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionDescansoCenizasContinuar()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanSustentable()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoCremacion()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        FunnelFunerariaNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNI.verMasAnaforaCofrePremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionAnaforaContinuar()
        FunnelFunerariaNI.verMasEntregaCenizasIncluida()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionCenizasContinuar()
        FunnelFunerariaNI.verMasColumbarioVidriado()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionDescansoCenizasContinuar()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanTradicionalDestacado()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoSepultura()
        FunnelFunerariaNI.seccionServicioCremacionBase()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanHomenajePremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoSepultura()
        FunnelFunerariaNI.seccionServicioCremacionBase()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioCafeteriaEstandar()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoSepultura()
        FunnelFunerariaNI.seccionServicioCremacionBase()
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

        FunnelFunerariaNI.inicioFlujoCremacion()
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi()
        FunnelFunerariaNI.verMasPlanBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionContinuarSinEstosServicios()
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