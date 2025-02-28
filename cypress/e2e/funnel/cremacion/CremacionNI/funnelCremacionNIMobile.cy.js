import FunnelCremacionNIMobile from "../../../../pageMobile/funnelMobile/funnelCremacionNIPageMobile";
import ResumenPagoPageMobile from "../../../../pageMobile/funnelMobile/resumenPago/resumenPagoMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('', () =>  {
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
    it('Ingresar flujo cremacion NI Mobile', function()  {

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', function()  {

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionPlanBasico()
        FunnelCremacionNIMobile.seleccionarVelatorioBasico()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionaMemorialDelRecuerdo()
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
      
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionarPlanTradicional()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.selecionarJardinFlores()
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

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionarPlanSustentable()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIMobile.seleccionAnaforaCofrePremium()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.seleccionarJardinFloresPremium()
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

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaCofreFull()
        FunnelCremacionNIMobile.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIMobile.seleccionarColumbarioPared()
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

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionarPlanHomenajePremium()
        FunnelCremacionNIMobile.seleccionarVelatorioBasico()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIMobile.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIMobile.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNIMobile.seccionServicioCremacionBase()
        FunnelCremacionNIMobile.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIMobile.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIMobile.selecionEntregaCenizasEspecial()
        FunnelCremacionNIMobile.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan sustentable -Ver mas', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    
    it('Comprar plan tradicion Destacado -Ver mas', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Ver mas', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
        ResumenPagoPageMobile.formularioComprador(this.datos.Formulario)
        ResumenPagoPageMobile.checkTerminosCondiciones()
        webpay3Mobile.precionarTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarAprobacionFunnel()
        */
    })
    it('Comprar plan homenaje premium Descado -Seleccionar desde Ver mas', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
    it('Continuar sin servicio Funeraria', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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
    it('Continuar sin servicio Descanso cenizas', function()  {
        
        FunnelCremacionNIMobile.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIMobile.seleccionRegionComuna()
        FunnelCremacionNIMobile.formularioCuentanoDeTi(this.datos.Formulario)
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