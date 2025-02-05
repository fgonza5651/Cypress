import cremacionParvuloMobile from "../../../../pageMobile/cremacionMobile/cremacionParvulo/cremacionParvuloMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test cremacion -Parvulo', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    
    //{nombre historia}
    it('Cremacion - Parvulo -Velatorio basico -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Velatorio estandar -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Velatorio premium -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Funeraria Parvulo -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Funeraria Parvulo destacado -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso vidriado -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoVidriado()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Descanso pared -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.agregarDescansoPared()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso flores premium -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoFloresPremium()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Descanso flores -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.agregarDescansoFlores()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso memorial -Mobile', () =>{
        cremacionParvuloMobile.ingresoCremacionParvuloMobile()
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoMemoriar()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
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