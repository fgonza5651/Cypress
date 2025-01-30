//Paginas complementrias desktop
import CafeteriaVelatorioBasico from "../../../pages/CafeteriaVelatorio/CafeteriaVelatorioNI/cafeteriaVelatorioBasico";
import carroCompras from "../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../pages/carroCompras/recibo/checkoutRecibo";

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
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
    })

    it('Comprar Velatorio basico cafetaria', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.sinServicioPopup()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar -Pop up sin servicio ', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.servicioEstandarPopup()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria premium -Pop up sin servicio', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.agregarCarritoSinServicio()
        CafeteriaVelatorioBasico.servicioPremiumPopup()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico -cafetaria estandar', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.AgregarCafeteriaEstandar()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Comprar Velatorio basico - cafetaria Premium', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.AgregarCafeteriaPremium()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle estandar', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.verDetalleEstandar()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })
    it('Velatorio basico cafetaria ver detalle premium', () =>{
        CafeteriaVelatorioBasico.ingresoCafetariaVelatorioBasico()
        CafeteriaVelatorioBasico.verDetallePremium()
        CafeteriaVelatorioBasico.AgregarServicioDetalle()
        CafeteriaVelatorioBasico.precionarAgregarCarrito()
        CafeteriaVelatorioBasico.precionarCarroCompras()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
    })


})