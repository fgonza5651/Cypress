import funerariaTradicionDestacado from "../../../../pages/funeraria/funerariaTradicionDestacado/funerariaTradicionDestacado";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan tradicion destacado', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio estandar', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Cremacion basico', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Cremacion tradicion', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Cremacion premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso vidriado', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso pared', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso flores premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso flores', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso memorial', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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