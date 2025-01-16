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
    //{nombre historia}
    it('Cremacion -Basico - NI  - Compra en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.compraEnLinea()
    })
    //{nombre historia}
    it('Cremacion -Basico - NI  - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Cremacion -Basico - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaOtraSolicitud()
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
    //{nombre historia}
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
    //{nombre historia}
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
    //{nombre historia}
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
    //{nombre historia}
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
    //{nombre historia}
    it('Cremacion - Basico -NI -Tour virtual', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.tourVirtual()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Caracteristicas y detalles', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.caracteristicasDetalles()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Llamanos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.llamanos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Escribenos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.escribenos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Cotiza', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.cotiza()
    })
});