import FunnelCremacionNIF from "../../../../pages/funnel/funnelCremacionNIFPage";
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
    it('Ingresar flujo cremacion NIF', function()  {

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)

    })

    //Con servicio de cremacion base - ceremonia despedida especial - anafora cofres full- descanzo de cnizas especial - memorial del recuerdo
    it('Comprar plan basico', function()  {

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionPlanBasico()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCeremoniaDespeidaEspecial()
        FunnelCremacionNIF.seleccionAnaforaCofreFull()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionaMemorialDelRecuerdo()
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
      
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionarPlanTradicional()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.selecionarJardinFlores()
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

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionarPlanSustentable()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.seleccionAnaforaCofrePremium()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.seleccionarJardinFloresPremium()
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

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionarPlanTradicionalDestacado()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.seleccionCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIF.seleccionAnaforaCofreFull()
        FunnelCremacionNIF.seleccionEntregaCenizasIncluida()
        FunnelCremacionNIF.seleccionarColumbarioPared()
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

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionarPlanHomenajePremium()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.seleccionarPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.selecionCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.seleccionAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.selecionEntregaCenizasEspecial()
        FunnelCremacionNIF.seleccionarColumbarioVidriado()
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

        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanBasico()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespeidaEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofreFull()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasMemorialDelRecuerdo()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanTradicional()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasJardinFlores()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanSustentable()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofrePremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasJardinFloresPremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanTradicionalDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaEspecialConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaCofreFull()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioPared()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanHomenajePremium()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCeremoniaDespedidaConCoro()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
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
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Funeraria', function()  {
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.SeleccionarContinuarSinServicio()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.verMasColumbarioVidriado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
    it('Continuar sin servicio Descanso cenizas', function()  {
        
        FunnelCremacionNIF.inicioFlujoCremacion(this.datos.Url)
        FunnelCremacionNIF.seleccionRegion()
        FunnelCremacionNIF.formularioCuentanoDeTi(this.datos.Formulario)
        FunnelCremacionNIF.verMasPlanHomenajePremiumDestacado()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionFunerariaContinuar()
        FunnelCremacionNIF.seccionServicioCremacionBase()
        FunnelCremacionNIF.verMasCermmoniaDeDespedidaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCeremoniaDespedidaContinuar()
        FunnelCremacionNIF.verMasAnaforaMaderaBasicaIncluida()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionAnaforaContinuar()
        FunnelCremacionNIF.verMasEntregaCenizasEspecial()
        FunnelCremacionNIF.SeleccionarServiciosSidenav()
        FunnelCremacionNIF.seccionCenizasContinuar()
        FunnelCremacionNIF.SeleccionarContinuarSinServicio()
        FunnelCremacionNIF.seccionDescansoCenizasContinuar()
    })
})