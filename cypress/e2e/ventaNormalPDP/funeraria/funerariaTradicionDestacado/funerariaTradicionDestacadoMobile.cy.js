import funerariaTradicionDestacadoMobile from "../../../../pageMobile/funerariaMobile/funerariaTradicionDestacado/funerariaTradicionDestacadoMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan tradicion destacado Mobile', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarVelatorioResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarVelatorioResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion basico -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion Full -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion Premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso vidriado -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso pared -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaMastercard().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3Mobile.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                    }
                })
            }
        })
    })
})