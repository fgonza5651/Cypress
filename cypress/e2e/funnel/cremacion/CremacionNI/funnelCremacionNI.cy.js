import FunnelCremacionNI from "../../../../pages/funnel/funnelCremacionNIPage";
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
    it('Ingresar flujo cremacion NI', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionPlanBasico()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionaMemorialDelRecuerdo()
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
    it('Comprar plan tradicion', function()  {
      
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionarPlanTradicional()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.selecionarJardinFlores()
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

    it('Comprar plan sustentable', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionarPlanSustentable()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.seleccionAnaforaCofrePremium()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.seleccionarJardinFloresPremium()
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

    it('Comprar plan tradicion Destacado', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.seleccionAnaforaCofreFull()
        FunnelCremacionNI.seleccionEntregaCenizasIncluida()
        FunnelCremacionNI.seleccionarColumbarioPared()
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

    it('Comprar plan homenaje premium', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionarPlanHomenajePremium()
        FunnelCremacionNI.seleccionarVelatorioBasico()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
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

    it('Comprar plan homenaje premium destado', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNI.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.selecionEntregaCenizasEspecial()
        FunnelCremacionNI.seleccionarColumbarioVidriado()
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

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico -Ver mas', function()  {

        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasMemorialDelRecuerdo()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    it('Comprar plan tradicion -Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanTradicional()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasJardinFlores()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    
    it('Comprar plan sustentable -Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanSustentable()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofrePremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasJardinFloresPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    
    it('Comprar plan tradicion Destacado -Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanTradicionalDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaEstandar()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaCofreFull()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioPared()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    
    it('Comprar plan homenaje premium -Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanHomenajePremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioBasico()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    it('Comprar plan homenaje premium Descado -Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
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
    it('Comprar plan homenaje premium Descado -Seleccionar desde Ver mas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.verMasVelatorioCafeteriaPremium()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionVelatorioContinuar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Funeraria', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.SeleccionarContinuarSinServicio()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaEstandar()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.verMasColumbarioVidriado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', function()  {
        
        FunnelCremacionNI.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNI.seleccionRegionComuna()
        FunnelCremacionNI.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNI.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionFunerariaContinuar()
        FunnelCremacionNI.seleccionarVelatorioCafeteriaPremium()
        FunnelCremacionNI.seccionServicioCremacionBase()
        FunnelCremacionNI.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNI.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionAnaforaContinuar()
        FunnelCremacionNI.verMasEntregaCenizasEspecial()
        FunnelCremacionNI.SeleccionarServiciosSidenav()
        FunnelCremacionNI.seccionCenizasContinuar()
        FunnelCremacionNI.SeleccionarContinuarSinServicio()
        FunnelCremacionNI.seccionDescansoCenizasContinuar()
    })
})