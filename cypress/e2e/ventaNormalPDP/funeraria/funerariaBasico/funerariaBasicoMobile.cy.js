import funerariaBasicoMobile from "../../../../pageMobile/funerariaMobile/funerariaBasico/funerariaBasicoMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test cremacion-Premium-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio estandar -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion basico -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion Full -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Cremacion Premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso vidriado -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso pared -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso flores premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso flores -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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