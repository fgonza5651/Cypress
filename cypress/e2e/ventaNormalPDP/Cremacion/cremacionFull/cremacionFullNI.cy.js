import cremacionFullNI from "../../../../pages/cremacion/cremacionFullNI/cremacionFullNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-Full-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Cremacion - Full -NI -Velatorio basico', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio estandar', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Funeraria basico', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria tradicion', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaTradicion()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria tradicion destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaTradicionDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria sustentable', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaSustentable()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria premium destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremiumDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Descanso vidriado', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremiumDestacado()
        cremacionFullNI.agregarDescansoVidriado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Descanso pared', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaTradicion()
        cremacionFullNI.agregarDescansoPared()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Descanso flores premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaTradicionDestacado()
        cremacionFullNI.agregarDescansoFloresPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Descanso flores', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaSustentable()
        cremacionFullNI.agregarDescansoFlores()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Descanso memorial', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremium()
        cremacionFullNI.agregarDescansoMemoriar()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
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