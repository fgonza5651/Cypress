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
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarDescansoVidriado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3115 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso pared', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarDescansoParedSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3237 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarDescansoFloresPremiumSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
    //CEC-3111 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarDescansoFloresSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
        cremacionBasicoNI.agregarDescansoMemoriarSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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