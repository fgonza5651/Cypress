import FunnelFunerariaNIMobile from "../../../../pageMobile/funnelMobile/funnelFunerariaNIPageMobile";
import ResumenPagoPageMobile from "../../../../pageMobile/funnelMobile/resumenPago/resumenPagoMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

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
    it('Ingresar flujo funeraria NI Mobile', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanBasico()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioBasico()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIMobile.verMasCeremoniaDespeidaEspecial()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIMobile.verMasAnaforaCofreFull()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIMobile.verMasEntregaCenizasEspecial()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCenizasContinuar()
        FunnelFunerariaNIMobile.verMasMemorialDelRecuerdo()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionDescansoCenizasContinuar()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
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
    it('Comprar plan tradicion -Necesito cremacion', function()  {
      
        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanTradicional()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaEstandar()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIMobile.verMasCeremoniaDespedidaConCoro()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIMobile.verMasAnaforaMaderaBasicaIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCenizasContinuar()
        FunnelFunerariaNIMobile.verMasJardinFlores()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan sustentable -Necesito cremacion', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanSustentable()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCenizasContinuar()
        FunnelFunerariaNIMobile.verMasJardinFloresPremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion destacada -Necesito cremacion', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIMobile.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCenizasContinuar()
        FunnelFunerariaNIMobile.verMasColumbarioPared()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionDescansoCenizasContinuar()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan premium -Necesito cremacion', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanSustentable()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoCremacion()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        FunnelFunerariaNIMobile.verMasCermmoniaDeDespedidaIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCeremoniaDespedidaContinuar()
        FunnelFunerariaNIMobile.verMasAnaforaCofrePremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionAnaforaContinuar()
        FunnelFunerariaNIMobile.verMasEntregaCenizasIncluida()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionCenizasContinuar()
        FunnelFunerariaNIMobile.verMasColumbarioVidriado()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionDescansoCenizasContinuar()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion Destacado -Necesito Sepultura', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaPremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium -Necesito Sepultura', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanHomenajePremium()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioBasico()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium destado -Necesito Sepultura', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioCafeteriaEstandar()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionNecesitoSepultura()
        FunnelFunerariaNIMobile.seccionServicioCremacionBase()
        /*
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan basico -Continuar sin estos servicios', function()  {

        FunnelFunerariaNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIMobile.seleccionRegionComuna()
        FunnelFunerariaNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIMobile.verMasPlanBasico()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionFunerariaContinuar()
        FunnelFunerariaNIMobile.verMasVelatorioBasico()
        FunnelFunerariaNIMobile.SeleccionarServiciosSidenav()
        FunnelFunerariaNIMobile.seccionVelatorioContinuar()
        FunnelFunerariaNIMobile.seleccionContinuarSinEstosServicios()
        ResumenPagoPageMobile.completarDatos()
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
})