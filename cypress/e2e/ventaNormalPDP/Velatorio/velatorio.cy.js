//Paginas bases desktop
import cremacionBasicoNI from "../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import cremacionFullNI from "../../../pages/cremacion/cremacionFullNI/cremacionFullNI";
import cremacionPremiumNI from "../../../pages/cremacion/cremacionPremiumNI/cremacionPremiumNI";
import funerariaBasico from "../../../pages/funeraria/funerariaBasico/funerariaBasico";
import funerariaParvulo from "../../../pages/funeraria/funerariaParvulo/funerariaParvulo";
import funerariaParvuloBase from "../../../pages/funeraria/funerariaParvuloBase/funerariaParvuloBase";
import funerariaParvuloDestacado from "../../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import funerariaPremium from "../../../pages/funeraria/funerariaPremium/funerariaPremium";
import funerariaPremiumDestacada from "../../../pages/funeraria/funerariaPremiumDestacada/funerariaPremiumDestacada";
import funerariaSustentable from "../../../pages/funeraria/funerariaSustentable/funerariaSustentable";
import funerariaTradicion from "../../../pages/funeraria/funerariaTradicion/funerariaTradicion";
import funerariaTradicionDestacado from "../../../pages/funeraria/funerariaTradicionDestacado/funerariaTradicionDestacado";
//Paginas complementrias desktop
import carroCompras from "../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan basico', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
//-------------------------------------------cremacion Basica-------------------------------------------//
    //{nombre historia}
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
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
        */
    })
    //{nombre historia}
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
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada() 
        */
    })
    //{nombre historia}
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
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
//-------------------------------------------cremacion FULL---------------------------------------------//  

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
                    }
                })
            }
        })
        */
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
                    }
                })
            }
        })
        */
    })

//------------------------------------------cremacion Premium-------------------------------------------//
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
                    }
                })
            }
        })
        */
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
                    }
                })
            }
        })
        */
    })

//-------------------------------------------funeraria Basico---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.precionarCarroCompra()
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
        */
    })
//-------------------------------------------funeraria Parvulo---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Velatorio premium', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.precionarCarroCompra()
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
        */
    })
//---------------------------------------funeraria Parvulo Base-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
    it('Funeraria - Parvulo base -Velatorio premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.precionarCarroCompra()
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
        */
    })

//--------------------------------------funeraria Parvulo Destacado ---------------------------------------//
     //{nombre historia}
     it('Funeraria - Parvulo destacado -Velatorio basico', () =>{
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar', () =>{
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
    it('Funeraria - Parvulo destacado -Velatorio premium', () =>{
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
                    }
                })
            }
        })
        */
    })

//-------------------------------------------funeraria Premium--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
    it('Funeraria - Premium -Velatorio premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.precionarCarroCompra()
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
        */
    })

//--------------------------------------funeraria Premium Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.precionarCarroCompra()
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
        */
    })
//----------------------------------------funeraria Sustentable-------------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio estandar', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.precionarCarroCompra()
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

//------------------------------------------funeraria Tradicion--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio estandar', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.precionarCarroCompra()
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

//-------------------------------------funeraria Tradicion Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio estandar', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.precionarCarroCompra()
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


})