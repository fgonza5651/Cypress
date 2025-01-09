import cremacionBasicoNIMobile from "../../../../pageMobile/cremacionMobile/cremacionBasicoNI/cremacionBasicoNIMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test cremacion-basico-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });   
   
   //{nombre historia}
    it('Cremacion - Basica - NI - Compra en linea - Mobile', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Cremacion - Basica - NI - Hablar en linea con una ejecutiva - Mobile', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Cremacion - Basica - NI - Realizar otra solicitud con ejecutiva en linea - Mobile', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaOtraSolicitud()
    })
    
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
    it('Cremacion - Basico -NI -Velatorio estandar -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
    it('Cremacion - Basico -NI -Funeraria basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarVelatorioResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarVelatorioResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.agregarDescansoVidriado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso pared -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.agregarDescansoPared()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.agregarDescansoFloresPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
    it('Cremacion - Basico -NI -Descanso flores -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.agregarDescansoFlores()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso memorial -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.agregarDescansoMemoriar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
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
                    //
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpayMobile.formularioTransbankAceptar()
                        checkoutReciboMobile.validarPaginaAprobada()
                        checkoutReciboMobile.revisarFunerariaResumen()
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Tour virtual -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.tourVirtual()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Caracteristicas y detalles -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.caracteristicasDetalles()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Llamanos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.llamanos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Escribenos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.escribenos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Cotiza -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.cotiza()
    })
})