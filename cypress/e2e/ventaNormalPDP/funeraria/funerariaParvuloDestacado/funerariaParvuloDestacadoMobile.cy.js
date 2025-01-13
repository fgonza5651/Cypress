import funerariaParvuloDestacadoMobile from "../../../../pageMobile/funerariaMobile/funerariaParvuloDestacado/funerariaParvuloDestacadoMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test funeraria plan parvulo destacado Mobile', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Velatorio basico -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Velatorio estandar -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Velatorio premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Cremacion basico -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso vidriado -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso pared -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso flores premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso flores -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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