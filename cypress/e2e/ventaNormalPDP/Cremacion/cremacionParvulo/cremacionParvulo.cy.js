import cremacionParvulo from "../../../../pages/cremacion/cremacionParvulo/cremacionParvulo";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

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
    it('Cremacion - Parvulo -Velatorio basico', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Velatorio estandar', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Velatorio premium', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Funeraria Parvulo', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Funeraria Parvulo destacado', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso vidriado', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.agregarDescansoVidriado()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Descanso pared', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioBasico()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoPared()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso flores premium', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoFloresPremium()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Descanso flores', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioEstandar()
        cremacionParvulo.agregarFunerariaParvuloDestacado()
        cremacionParvulo.agregarDescansoFlores()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso memorial', () =>{
        cremacionParvulo.ingresoCremacionParvulo()
        cremacionParvulo.agregarVelatorioPremium()
        cremacionParvulo.agregarFunerariaParvulo()
        cremacionParvulo.agregarDescansoMemoriar()
        cremacionParvulo.revisarAgregarCarrito()
        cremacionParvulo.revisarPreciosVelatorio()
        cremacionParvulo.revisarPreciosFuneraria()
        cremacionParvulo.revisarPreciosDescanso()
        cremacionParvulo.precionarCarroCompra()
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