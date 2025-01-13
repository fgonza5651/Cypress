import funerariaPremiumDestacadaMobile from "../../../../pageMobile/funerariaMobile/funerariaPremiumDestacada/funerariaPremiumDestacadaMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan homenaje premium destacada Mobile', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Cremacion basico -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Cremacion Full -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Cremacion Premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso vidriado -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso pared -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso flores premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso flores -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso memorial -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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