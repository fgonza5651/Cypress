//Paginas base Mobile
import funerariaBasicoMobile from "../../../pageMobile/funerariaMobile/funerariaBasico/funerariaBasicoMobile";
import funerariaParvuloMobile from "../../../pageMobile/funerariaMobile/funerariaParvulo/funerariaParvuloMobile";
import funerariaParvuloBaseMobile from "../../../pageMobile/funerariaMobile/funerariaParvuloBase/funerariaParvuloBaseMobile";
import funerariaParvuloDestacadoMobile from "../../../pageMobile/funerariaMobile/funerariaParvuloDestacado/funerariaParvuloDestacadoMobile";
import funerariaPremiumMobile from "../../../pageMobile/funerariaMobile/funerariaPremium/funerariaPremiumMobile";
import funerariaPremiumDestacadaMobile from "../../../pageMobile/funerariaMobile/funerariaPremiumDestacada/funerariaPremiumDestacadaMobile";
import funerariaSustentableMobile from "../../../pageMobile/funerariaMobile/funerariaSustentable/funerariaSustentableMobile";
import funerariaTradicionMobile from "../../../pageMobile/funerariaMobile/funerariaTradicion/funerariaTradicionMobile";
import funerariaTradicionDestacadoMobile from "../../../pageMobile/funerariaMobile/funerariaTradicionDestacado/funerariaTradicionDestacadoMobile";
//Paginas complementarias Mobile
import carroComprasMobile from "../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan basico Mobile', () => {
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
    it('Funeraria - Basico -Descanso memorial -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo - Base -Descanso memorial -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso memorial -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium -Descanso memorial -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso memorial -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso memorial -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso memorial -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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