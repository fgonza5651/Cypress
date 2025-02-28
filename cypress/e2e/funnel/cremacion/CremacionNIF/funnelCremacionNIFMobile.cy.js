import FunnelCremacionNIFMobile from "../../../../pageMobile/funnelMobile/funnelCremacionNIFPageMobile";
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
          cy.clearCookies();   
          cy.clearLocalStorage();
    });

    //
    it('Ingresar flujo cremacion NIF Mobile', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionPlanBasico()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIFMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionaMemorialDelRecuerdo()
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
    it('Comprar plan tradicion', function()  {
      
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionarPlanTradicional()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.selecionarJardinFlores()
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

    it('Comprar plan sustentable', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionarPlanSustentable()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIFMobile.seleccionAnaforaCofrePremium()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.seleccionarJardinFloresPremium()
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

    it('Comprar plan tradicion Destacado', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIFMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIFMobile.seleccionarColumbarioPared()
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

    it('Comprar plan homenaje premium', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionarPlanHomenajePremium()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionarColumbarioVidriado()
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

    it('Comprar plan homenaje premium destado', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIFMobile.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIFMobile.seccionServicioCremacionBase()
        FunnelCremacionNIFMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIFMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIFMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIFMobile.seleccionarColumbarioVidriado()
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

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Ver mas', function()  {

        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
    it('Comprar plan tradicion -Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan sustentable -Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan tradicion Destacado -Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan homenaje premium -Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Seleccionar desde Ver mas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        /*
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Continuar sin servicio Funeraria', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
    it('Continuar sin servicio Descanso cenizas', function()  {
        
        FunnelCremacionNIFMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIFMobile.seleccionRegion()
        FunnelCremacionNIFMobile.formularioCuentanoDeTi(this.datos.Formulario)
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