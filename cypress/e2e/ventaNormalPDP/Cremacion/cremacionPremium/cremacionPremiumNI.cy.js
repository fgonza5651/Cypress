import cremacionPremiumNI from "../../../../pages/cremacion/cremacionPremiumNI/cremacionPremiumNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

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
    it('Cremacion -Premium -NI -Velatorio basico', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Velatorio estandar', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Velatorio premium', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria basico', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.agregarFunerariaBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria tradicion', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.agregarFunerariaTradicion()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria tradicion destacada', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaTradicionDestacado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria sustentable', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaSustentable()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria premium', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremium()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Funeraria premium destacada', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremiumDestacado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Descanso vidriado', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremiumDestacado()
        cremacionPremiumNI.agregarDescansoVidriado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Descanso pared', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.agregarFunerariaTradicion()
        cremacionPremiumNI.agregarDescansoPared()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Descanso flores premium', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaTradicionDestacado()
        cremacionPremiumNI.agregarDescansoFloresPremium()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Descanso flores', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaSustentable()
        cremacionPremiumNI.agregarDescansoFlores()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
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
    it('Cremacion -Premium -NI -Descanso memorial', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremium()
        cremacionPremiumNI.agregarDescansoMemoriar()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.revisarPreciosDescanso()
        cremacionPremiumNI.precionarCarroCompra()
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