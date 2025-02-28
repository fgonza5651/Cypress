import cremacionFullNI from "../../../../pages/cremacion/cremacionFullNI/cremacionFullNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-Full-NI', () => {
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
    it('Cremacion - Full -NI -Descanso vidriado', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarDescansoVidriado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Descanso pared', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarDescansoParedSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Descanso flores premium', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarDescansoFloresPremiumSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Descanso flores', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarDescansoFloresSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Descanso memorial', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarDescansoMemoriarSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
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
    
    afterEach(function(){
        cy.clearCookies();   
        cy.clearLocalStorage()
    })
});