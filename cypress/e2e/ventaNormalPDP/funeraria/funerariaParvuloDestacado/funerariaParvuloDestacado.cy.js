import funerariaParvuloDestacado from "../../../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan parvulo destacado', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Velatorio basico', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Velatorio estandar', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Velatorio premium', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Cremacion parvulo', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo - Destacado -Descanso vidriado', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo - Destacado -Descanso pared', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso flores premium', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso flores', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo - Destacado -Descanso memorial', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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