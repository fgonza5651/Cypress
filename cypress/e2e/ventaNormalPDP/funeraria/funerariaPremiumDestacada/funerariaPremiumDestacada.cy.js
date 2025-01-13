import funerariaPremiumDestacada from "../../../../pages/funeraria/funerariaPremiumDestacada/funerariaPremiumDestacada";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan homenaje premium destacada', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion tradicion', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso vidriado', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso pared', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso memorial', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
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
    })
});