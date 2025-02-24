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
   
    //CEC-2527
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarDescansoVidriado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //CEC-3115 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso pared -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarDescansoPared()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
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
    //CEC-3237 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarDescansoFloresPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
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
    //CEC-3111 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarDescansoFlores()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
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
    //CEC-3112 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso memorial -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarDescansoMemoriar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //CEC-2523
    it('Cremacion - Basico -NI -Tour virtual -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.tourVirtual()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Caracteristicas y detalles -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.caracteristicasDetalles()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Llamanos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.llamanos()
    })
    //CEC-2530
    it('Cremacion - Basico -NI -Escribenos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.escribenos()
    })
    //CEC-2532
    it('Cremacion - Basico -NI -Cotiza -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.cotiza()
    })
})