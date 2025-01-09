import cremacionPremiumNIMobile from "../../../../pageMobile/cremacionMobile/cremacionPremiumNI/cremacionPremiumNIMobile";
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
    it('Cremacion - Premium -NI -Velatorio basico -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
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
    it('Cremacion - Premium -NI -Velatorio estandar -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
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
    it('Cremacion - Premium -NI -Velatorio premium -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
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
    it('Cremacion - Premium -NI -Funeraria basico -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Funeraria tradicion -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Funeraria sustentable -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso vidriado -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.agregarDescansoVidriado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso pared -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.agregarDescansoPared()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Descanso flores premium -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.agregarDescansoFloresPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Descanso flores -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.agregarDescansoFlores()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Descanso memorial -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.agregarDescansoMemoriar()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.revisarPreciosDescanso()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
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