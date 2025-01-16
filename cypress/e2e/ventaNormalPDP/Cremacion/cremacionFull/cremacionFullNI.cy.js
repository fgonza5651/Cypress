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
    it('Cremacion - Full -NI -Descanso vidriado', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarDescansoVidriado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
        cremacionFullNI.agregarDescansoParedSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Descanso flores premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarDescansoFloresPremiumSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Descanso flores', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarDescansoFloresSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
        cremacionFullNI.agregarDescansoMemoriarSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosDescanso()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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