//Paginas complementrias desktop
import CafeteriaVelatorioBasicoMobile from "../../../pageMobile/CafeteriaVelatorioNI/cafeteriaVelatorioBasicoMobile";
import carroComprasMobile from "../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan basico', ()  =>{
    beforeEach(function () {
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

    it('Ingreso Velatorio basico cafetaria', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
    })

    it('Comprar Velatorio basico cafetaria', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.sinServicioPopup()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar -Pop up sin servicio ', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.servicioEstandarPopup()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria premium -Pop up sin servicio', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.servicioPremiumPopup()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.AgregarCafeteriaEstandar()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico - cafetaria Premium', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.AgregarCafeteriaPremium()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle estandar', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.verDetalleEstandar()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle premium', function() {
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico(this.datos.Url)
        CafeteriaVelatorioBasicoMobile.verDetallePremium()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })

})