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
    it('Cremacion - Basico -NI -Funeraria basico', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria tradicion', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaTradicionSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
        checkoutRecibo.revisarFunerariaResumen()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaTradicionDestacadoSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaSustentableSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaPremiumSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria premium destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarFunerariaPremiumDestacadoSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria basico', () =>{
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
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria tradicion', () =>{
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
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria tradicion destacada', () =>{
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria sustentable', () =>{
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
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium', () =>{
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
                        authenticatorWebpay.formularioTransbankRechazar()
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium destacada', () =>{
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
//-------------------------------------------cremacion FULL---------------------------------------------//
    
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria basico', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria tradicion', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaTradicionSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria tradicion destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaTradicionDestacadoSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria sustentable', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaSustentableSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaPremiumSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria premium destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarFunerariaPremiumDestacadoSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Velatorio basico -Funeraria basico', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio basico -Funeraria tradicion', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaTradicion()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria tradicion destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaTradicionDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria sustentable', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaSustentable()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio Premium -Funeraria premium', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
    it('Cremacion - Full -NI -Velatorio Premium -Funeraria premium destacada', () =>{
        cremacionFullNI.ingresoCremacionFullNI()
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremiumDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
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
//------------------------------------------cremacion Premium-------------------------------------------//
    //{nombre historia}
    it('Cremacion -Premium -NI -Funeraria basico', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion -Premium -NI -Funeraria tradicion', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaTradicionSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Funeraria tradicion destacada', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaTradicionDestacadoSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Funeraria sustentable', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaSustentableSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
    it('Cremacion -Premium -NI -Funeraria premium', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaPremiumSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Funeraria premium destacada', () =>{
        cremacionPremiumNI.ingresoCremacionPremiumNI()
        cremacionPremiumNI.agregarFunerariaPremiumDestacadoSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
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
                        checkoutRecibo.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Velatorio basico -Funeraria basico', () =>{
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
    it('Cremacion -Premium -NI -Velatorio basico -Funeraria tradicion', () =>{
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
    it('Cremacion -Premium -NI -Velatorio estandar -Funeraria tradicion destacada', () =>{
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
    it('Cremacion -Premium -NI -Velatorio estandar -Funeraria sustentable', () =>{
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
    it('Cremacion -Premium -NI -Velatorio premium -Funeraria premium', () =>{
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
    it('Cremacion -Premium -NI -Velatorio premium -Funeraria premium destacada', () =>{
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
//-------------------------------------------funeraria Basico---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Basico -Cremacion full', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso vidriado', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Basico -Descanso pared', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Descanso flores premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso flores', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Basico -Descanso memorial', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Basico -Velatorio basico -Cremacion basico', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion Full', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico -Descanso vidriado', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Basico -Cremacion full -Descanso pared', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion premium -Descanso flores premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion tradicion -Descanso flores', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion premium -Descanso Memorial', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Descanso vidriado', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Basico -Velatorio estandar -Descanso pared', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Descanso flores premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Descanso flores', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Descanso Memorial', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico  -Descanso flores', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
    it('Funeraria - Basico -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaBasico.ingresarFunerariaBasico()
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
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
//-------------------------------------------funeraria Parvulo---------------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo -Descanso vidriado', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo -Descanso pared', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso flores premium', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso flores', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Descanso memorial', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso vidriado', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso pared', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores premium', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso memorial', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio premium -Descanso vidriado', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio basico -Descanso pared', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores premium', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio premium -Descanso memorial', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso vidriado', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Descanso pared', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores premium', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso memorial', () =>{
        funerariaParvulo.ingresarFunerariaParvulo()
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
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
//---------------------------------------funeraria Parvulo Base-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo base -Cremacion Full', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso vidriado', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
    it('Funeraria - Parvulo base -Descanso pared', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso flores premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso flores', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo base -Descanso memoriar', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion basico', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion Full', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium -Descanso vidriado', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Cremacion full -Descanso pared', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium -Descanso flores premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Cremacion basico -Descanso memoriar', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio premium -Descanso vidriado', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioPremium()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio basico -Descanso pared', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso memoriar', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioPremium()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso memoriar', () =>{
        funerariaParvuloBase.ingresarFunerariaParvuloBase()
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
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
//--------------------------------------funeraria Parvulo Destacado ---------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Parvulo destacado -Descanso vidriado', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo destacado -Descanso pared', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso flores premium', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso flores', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo destacado -Descanso memorial', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo', () =>{
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso vidriado', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Descanso pared', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores premium', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso memorial', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso vidriado', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso pared', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores premium', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso memorial', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso vidriado', () =>{
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo -Descanso pared', () =>{
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores premium', () =>{
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores', () =>{
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso memorial', () =>{
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
//-------------------------------------------funeraria Premium--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Premium -Cremacion tradicion', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso vidriado', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Premium -Descanso pared', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso flores premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso flores', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Premium -Descanso memorial', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Premium -Velatorio basico -Cremacion basico', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
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
    it('Funeraria - Premium -Velatorio basico -Cremacion tradicion', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Cremacion full -Descanso pared', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion premium -Descanso flores premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico -Descanso flores', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Cremacion basico -Descanso memorial', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio premium -Descanso vidriado', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio basico -Descanso pared', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Descanso flores premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Descanso flores', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio premium -Descanso memorial', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
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
    it('Funeraria - Premium -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
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
    it('Funeraria - Premium -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaPremium.ingresarFunerariaPremium()
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
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
//--------------------------------------funeraria Premium Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Cremacion tradicion', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso vidriado', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
    it('Funeraria - Premium Destacada -Descanso pared', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Descanso memorial', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion basico', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion tradicion', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso vidriado', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion full -Descanso pared', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso flores premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso memorial', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso vidriado', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Descanso pared', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso memorial', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacon premium -Descanso vidriado', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada()
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
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
//-----------------------------------------funeraria Sustentable-------------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Cremacion tradicion', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso vidriado', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Descanso pared', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Descanso flores premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Descanso flores', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Descanso memorial', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio basico -Cremacion basico', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio basico -Cremacion tradicion', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium -Descanso vidriado', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion full -Descanso pared', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium -Descanso flores premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion basico -Descanso memorial', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Descanso vidriado', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio basico -Descanso pared', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Descanso memorial', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Cremacion prmeium -Descanso vidriado', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaSustentable.ingresarFunerariaSustentable()
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
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
//------------------------------------------funeraria Tradicion--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Cremacion tradicion', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso vidriado', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso pared', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso flores premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso flores', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso memorial', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio basico -Cremacion basico', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio basico -Cremacion tradicion', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium -Descanso vidriado', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion full -Descanso pared', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium -Descanso flores premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion basico -Descanso memorial', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Descanso vidriado', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio basico -Descanso pared', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estantar -Descanso flores premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Descanso memorial', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaTradicion.ingresarFunerariaTradicion()
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
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
//-------------------------------------funeraria Tradicion Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion basico', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
    it('Funeraria - tradicion destacado -Cremacion tradicion', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso vidriado', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso pared', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso flores premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso flores', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Descanso memorial', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion basico', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion tradicion', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
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
                webpay3.formularioTarjetaRedcompra().then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar()
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarVelatorioResumen()
                        checkoutRecibo.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremaicion premium -Descanso vidriado', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Cremacion premium -Descanso pared', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion premium -Descanso flores premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarCremacionResumen()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion basico -Descanso flores', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Cremacion basico -Descanso memorial', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Velatorio premium -Descanso vidriado', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Velatorio basico -Descanso pared', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Descanso flores premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Descanso flores', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Velatorio premium -Descanso memorial', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
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
    it('Funeraria - tradicion destacado -Velatorio premium -Cremacion premium -Descanso vidriado', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion full -Descanso pared', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion premium -Descanso flores premium', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion basico -Descanso flores', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
    it('Funeraria - tradicion destacado -Velatorio premium -Cremacion basico -Descanso memorial', () =>{
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado()
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
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
})