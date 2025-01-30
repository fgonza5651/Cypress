//Paginas complementrias desktop
import CafeteriaVelatorioBasicoMobile from "../../../pageMobile/CafeteriaVelatorioNI/cafeteriaVelatorioBasicoMobile";
import carroComprasMobile from "../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan basico', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });

    it('Ingreso Velatorio basico cafetaria', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
    })

    it('Comprar Velatorio basico cafetaria', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.sinServicioPopup()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar -Pop up sin servicio ', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.servicioEstandarPopup()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria premium -Pop up sin servicio', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.agregarCarritoSinServicio()
        CafeteriaVelatorioBasicoMobile.servicioPremiumPopup()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.AgregarCafeteriaEstandar()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico - cafetaria Premium', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.AgregarCafeteriaPremium()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle estandar', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.verDetalleEstandar()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle premium', () =>{
        CafeteriaVelatorioBasicoMobile.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasicoMobile.verDetallePremium()
        CafeteriaVelatorioBasicoMobile.AgregarServicioDetalle()
        CafeteriaVelatorioBasicoMobile.precionarAgregarCarrito()
        CafeteriaVelatorioBasicoMobile.precionarCarroCompras()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito()
        authenticatorWebpayMobile.formularioTransbankAceptar()
        checkoutReciboMobile.validarPaginaAprobada()
    })

})