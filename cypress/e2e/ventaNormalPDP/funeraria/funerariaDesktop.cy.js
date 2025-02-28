//Paginas bases desktop
import funerariaBasico from "../../../pages/funeraria/funerariaBasico/funerariaBasico";
import funerariaParvulo from "../../../pages/funeraria/funerariaParvulo/funerariaParvulo";
import funerariaParvuloBase from "../../../pages/funeraria/funerariaParvuloBase/funerariaParvuloBase";
import funerariaParvuloDestacado from "../../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import funerariaPremium from "../../../pages/funeraria/funerariaPremium/funerariaPremium";
import funerariaPremiumDestacada from "../../../pages/funeraria/funerariaPremiumDestacada/funerariaPremiumDestacada";
import funerariaSustentable from "../../../pages/funeraria/funerariaSustentable/funerariaSustentable";
import funerariaTradicion from "../../../pages/funeraria/funerariaTradicion/funerariaTradicion";
import funerariaTradicionDestacado from "../../../pages/funeraria/funerariaTradicionDestacado/funerariaTradicionDestacado";
import carroCompras from "../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan basico', () => {
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
    it('Funeraria - Basico', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso memorial', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo - Base -Descanso memorial', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso memorial', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso memorial', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable ', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso memorial', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso memorial', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.precionarCarroCompra()
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

});