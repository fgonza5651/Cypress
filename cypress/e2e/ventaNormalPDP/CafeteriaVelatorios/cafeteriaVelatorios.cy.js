//Paginas complementrias desktop
import CafeteriaVelatorioBasico from "../../../pages/CafeteriaVelatorio/CafeteriaVelatorioNI/cafeteriaVelatorioBasico";
import carroCompras from "../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan basico',  () => {
    beforeEach( function()  {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

        cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });

    it('Ingreso Velatorio basico cafetaria',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
    })

    it('Comprar Velatorio basico cafetaria',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.sinServicioPopup()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar -Pop up sin servicio ',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.servicioEstandarPopup()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria premium -Pop up sin servicio',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.servicioPremiumPopup()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.AgregarCafeteriaEstandar()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico - cafetaria Premium',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.AgregarCafeteriaPremium()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle estandar',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.verDetalleEstandar()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle premium',  function() {
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico(this.datos.Url.urlCafeteriaVelatorioBasico)
        CafeteriaVelatorioBasico.verDetallePremium()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })

    afterEach(function(){
        cy.clearCookies();   
        cy.clearLocalStorage()
    })

})