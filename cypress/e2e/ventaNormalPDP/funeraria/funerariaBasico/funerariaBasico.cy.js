import funerariaBasico from "../../../../pages/funeraria/funerariaBasico/funerariaBasico";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan basico', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio estandar', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion basico', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion tradicion', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso vidriado', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso pared', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso flores premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso flores', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso memorial', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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