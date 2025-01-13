import funerariaTradicion from "../../../../pages/funeraria/funerariaTradicion/funerariaTradicion";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan tradicion', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio estandar', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Cremacion basico', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Cremacion tradicion', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Cremacion premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso vidriado', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso pared', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso flores premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso flores', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso memorial', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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