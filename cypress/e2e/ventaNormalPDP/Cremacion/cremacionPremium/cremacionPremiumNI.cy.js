import cremacionPremiumNI from "../../../../pages/cremacion/cremacionPremiumNI/cremacionPremiumNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-Premium-NI', () => {
    beforeEach(function()  {
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
    //{nombre historia}
    it('Cremacion -Premium -NI -Descanso vidriado', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarDescansoVidriado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Descanso pared', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarDescansoParedSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Descanso flores premium', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarDescansoFloresPremiumSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Descanso flores', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarDescansoFloresSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Descanso memorial', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarDescansoMemoriarSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarDescansoResumen()
    })
});