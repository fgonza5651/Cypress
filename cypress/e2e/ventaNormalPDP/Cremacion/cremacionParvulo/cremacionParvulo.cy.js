import cremacionParvulo from "../../../../pages/cremacion/cremacionParvulo/cremacionParvulo";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion -Parvulo', () => {
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
    it('Cremacion - Parvulo -Velatorio basico', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Velatorio estandar', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaRechazada() 
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Velatorio premium', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Funeraria Parvulo', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Funeraria Parvulo destacado', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso vidriado', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.agregarDescansoVidriado()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso pared', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoPared()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarFunerariaResumen()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso flores premium', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoFloresPremium()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso flores', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.agregarDescansoFlores()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso memorial', function() {
        cremacionParvulo.ingresoCremacionParvulo(this.datos.Url)
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoMemoriar()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
});