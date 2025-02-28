import cremacionPremiumNIMobile from "../../../../pageMobile/cremacionMobile/cremacionPremiumNI/cremacionPremiumNIMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

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
    it('Cremacion - Premium -NI -Descanso vidriado -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarDescansoVidriado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso pared -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarDescansoPared()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso flores premium -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarDescansoFloresPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso flores -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarDescansoFlores()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso memorial -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarDescansoMemoriar()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarDescansoResumen()
    })
})