import cremacionBasicoNI from "../../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-basico-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    ////CEC-2527
    it('Cremacion -Basico - NI  - Compra en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.compraEnLinea()
    })
    //CEC-1784
    it('Cremacion -Basico - NI  - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaHablar()
    })
    //CEC-2532
    it('Cremacion -Basico - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaOtraSolicitud()
    })
    //CEC-2603 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Velatorio basico', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-2604 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Velatorio estandar', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-2608 CEC-2993 CEC-3001 CEC-3028 CEC-3029 CEC-3032
    it('Cremacion - Basico -NI -Velatorio premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.precionarCarroCompra()
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-2662 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria basico', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-2660 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Funeraria tradicion', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-2658 CEC-2993 CEC-3001 CEC-3028 CEC-3029 CEC-3032
    it('Cremacion - Basico -NI -Funeraria tradicion destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-2658 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria sustentable', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-2656 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-3105 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria premium destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3114 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso vidriado', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.agregarDescansoVidriado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3115 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso pared', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.agregarDescansoPared()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3237 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.agregarDescansoFloresPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3111 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.agregarDescansoFlores()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-3112 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso memorial', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.agregarDescansoMemoriar()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-2523
    it('Cremacion - Basico -NI -Tour virtual', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.tourVirtual()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Caracteristicas y detalles', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.caracteristicasDetalles()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Llamanos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.llamanos()
    })
    //CEC-2530
    it('Cremacion - Basico -NI -Escribenos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.escribenos()
    })
    //CEC-2532
    it('Cremacion - Basico -NI -Cotiza', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.cotiza()
    })
});