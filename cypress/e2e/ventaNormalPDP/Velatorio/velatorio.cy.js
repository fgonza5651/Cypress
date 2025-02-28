//Paginas bases desktop
import cremacionBasicoNI from "../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import cremacionFullNI from "../../../pages/cremacion/cremacionFullNI/cremacionFullNI";
import cremacionPremiumNI from "../../../pages/cremacion/cremacionPremiumNI/cremacionPremiumNI";
import funerariaBasico from "../../../pages/funeraria/funerariaBasico/funerariaBasico";
import funerariaParvulo from "../../../pages/funeraria/funerariaParvulo/funerariaParvulo";
import funerariaParvuloBase from "../../../pages/funeraria/funerariaParvuloBase/funerariaParvuloBase";
import funerariaParvuloDestacado from "../../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import funerariaPremium from "../../../pages/funeraria/funerariaPremium/funerariaPremium";
import funerariaPremiumDestacada from "../../../pages/funeraria/funerariaPremiumDestacada/funerariaPremiumDestacada";
import funerariaSustentable from "../../../pages/funeraria/funerariaSustentable/funerariaSustentable";
import funerariaTradicion from "../../../pages/funeraria/funerariaTradicion/funerariaTradicion";
import funerariaTradicionDestacado from "../../../pages/funeraria/funerariaTradicionDestacado/funerariaTradicionDestacado";
//Paginas complementrias desktop
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
//-------------------------------------------cremacion Basica-------------------------------------------//
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada() 
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
//-------------------------------------------cremacion FULL---------------------------------------------//  

    //{nombre historia}
    it('Cremacion - Full -NI -Velatorio basico', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Velatorio estandar', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio premium', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })

//------------------------------------------cremacion Premium-------------------------------------------//
    //{nombre historia}
    it('Cremacion -Premium -NI -Velatorio basico', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Velatorio estandar', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Velatorio premium', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })

//-------------------------------------------funeraria Basico---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
//-------------------------------------------funeraria Parvulo---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Velatorio premium', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
//---------------------------------------funeraria Parvulo Base-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
    it('Funeraria - Parvulo base -Velatorio premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })

//--------------------------------------funeraria Parvulo Destacado ---------------------------------------//
     //{nombre historia}
     it('Funeraria - Parvulo destacado -Velatorio basico', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })

//-------------------------------------------funeraria Premium--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })

//--------------------------------------funeraria Premium Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                    }
                })
            }
        })
        */
    })
//----------------------------------------funeraria Sustentable-------------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio estandar', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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

//------------------------------------------funeraria Tradicion--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio estandar', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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

//-------------------------------------funeraria Tradicion Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio estandar', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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


})