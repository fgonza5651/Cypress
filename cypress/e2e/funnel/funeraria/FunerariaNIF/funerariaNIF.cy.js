import FunnelFunerariaNIF from "../../../../pages/funnel/funnelFunerariaNIFPage";
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

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Necesito cremacion', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
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
    it('Comprar plan tradicion -Necesito cremacion', function()  {
      
        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan sustentable -Necesito cremacion', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion destacada -Necesito cremacion', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan premium -Necesito cremacion', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan tradicion Destacado -Necesito Sepultura', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIF.verMasPlanTradicionalDestacado()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        /*
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium -Necesito Sepultura', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIF.verMasPlanHomenajePremium()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan homenaje premium destado -Necesito Sepultura', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIF.verMasPlanHomenajePremiumDestacado()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionNecesitoSepultura()
        FunnelFunerariaNIF.seccionServicioCremacionBase()
        /*
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })

    //
    it('Comprar plan basico -Continuar sin estos servicios', function()  {

        FunnelFunerariaNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelFunerariaNIF.seleccionRegion()
        FunnelFunerariaNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelFunerariaNIF.verMasPlanBasico()
        FunnelFunerariaNIF.SeleccionarServiciosSidenav()
        FunnelFunerariaNIF.seccionFunerariaContinuar()
        FunnelFunerariaNIF.seleccionContinuarSinEstosServicios()
        ResumenPagoPage.completarDatos()
        ResumenPagoPage.formularioComprador(this.datos.Formulario)
        ResumenPagoPage.checkTerminosCondiciones()
        /*
        webpay3.precionarTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarAprobacionFunnel()
        */
    })
})