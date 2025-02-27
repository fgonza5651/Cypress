import FunnelFunerariaNI from "../../../../pages/funnel/funnelFuneriaNIPage";
import ResumenPagoPage from "../../../../pages/funnel/resumenPago/resumenPago";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('', () => {
    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });

    //
    it('Ingresar flujo funeraria NI', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
    })
    //

    //Con servicio de plan tradicion - cremacion base - despedida con coro- anafora madera bascia incluida - entrega cenizas inclida - jarin de flores
    it('Comprar plan tradicion -Necesito cremacion', function()  {
      
        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan sustentable -Necesito cremacion', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion destacada -Necesito cremacion', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan premium -Necesito cremacion', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion Destacado -Necesito Sepultura', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium -Necesito Sepultura', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNI.verMasPlanHomenajePremium()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionNecesitoSepultura()
        FunnelFunerariaNI.seccionServicioCremacionBase()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium destado -Necesito Sepultura', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan basico -Continuar sin estos servicios', function()  {

        FunnelFunerariaNI.inicioFlujoFunerariaNI(this.datos.Url)
        FunnelFunerariaNI.seleccionRegionComuna()
        FunnelFunerariaNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNI.verMasPlanBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionFunerariaContinuar()
        FunnelFunerariaNI.verMasVelatorioBasico()
        FunnelFunerariaNI.SeleccionarServiciosSidenav()
        FunnelFunerariaNI.seccionVelatorioContinuar()
        FunnelFunerariaNI.seleccionContinuarSinEstosServicios()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarAprobacionFunnel()
        */
    })
})