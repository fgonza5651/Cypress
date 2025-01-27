//Paginas base Mobile
import cremacionBasicoNIMobile from "../../../pageMobile/cremacionMobile/cremacionBasicoNI/cremacionBasicoNIMobile";
import cremacionFullNIMobile from "../../../pageMobile/cremacionMobile/cremacionFullNI/cremacionFullNIMobile";
import cremacionPremiumNIMobile from "../../../pageMobile/cremacionMobile/cremacionPremiumNI/cremacionPremiumNIMobile";
import funerariaBasicoMobile from "../../../pageMobile/funerariaMobile/funerariaBasico/funerariaBasicoMobile";
import funerariaParvuloMobile from "../../../pageMobile/funerariaMobile/funerariaParvulo/funerariaParvuloMobile";
import funerariaParvuloBaseMobile from "../../../pageMobile/funerariaMobile/funerariaParvuloBase/funerariaParvuloBaseMobile";
import funerariaParvuloDestacadoMobile from "../../../pageMobile/funerariaMobile/funerariaParvuloDestacado/funerariaParvuloDestacadoMobile";
import funerariaPremiumMobile from "../../../pageMobile/funerariaMobile/funerariaPremium/funerariaPremiumMobile";
import funerariaPremiumDestacadaMobile from "../../../pageMobile/funerariaMobile/funerariaPremiumDestacada/funerariaPremiumDestacadaMobile";
import funerariaSustentableMobile from "../../../pageMobile/funerariaMobile/funerariaSustentable/funerariaSustentableMobile";
import funerariaTradicionMobile from "../../../pageMobile/funerariaMobile/funerariaTradicion/funerariaTradicionMobile";
import funerariaTradicionDestacadoMobile from "../../../pageMobile/funerariaMobile/funerariaTradicionDestacado/funerariaTradicionDestacadoMobile";
//Paginas complementarias Mobile
import carroComprasMobile from "../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";


describe('test funeraria plan basico', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
//---------------------------------------cremacion Basica Mobile----------------------------------------//
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria basico -Mobile', () =>{
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria tradicion -Mobile', () =>{
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', () =>{
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria sustentable -Mobile', () =>{
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
    it('Cremacion - Basico -NI -Velatorio Premium -Funeraria premium -Mobile', () =>{
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
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium destacada -Mobile', () =>{
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
        /*
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
        */
    })
//----------------------------------------cremacion FULL Mobile------------------------------------------//
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria basico -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaBasico()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaTradicionSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaTradicionDestacadoSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaSustentableSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaPremiumSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarFunerariaPremiumDestacadoSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria basico -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioBasico()
        cremacionFullNIMobile.agregarFunerariaBasico()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria tradicion -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioBasico()
        cremacionFullNIMobile.agregarFunerariaTradicion()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioEstandar()
        cremacionFullNIMobile.agregarFunerariaTradicionDestacado()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria sustentable -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioEstandar()
        cremacionFullNIMobile.agregarFunerariaSustentable()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioPremium()
        cremacionFullNIMobile.agregarFunerariaPremium()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium destacada -Mobile', () =>{
        cremacionFullNIMobile.ingresoCremacionFullNIMobile()
        cremacionFullNIMobile.agregarVelatorioPremium()
        cremacionFullNIMobile.agregarFunerariaPremiumDestacado()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
//---------------------------------------cremacion Premium Mobile----------------------------------------//    
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria basico -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria tradicion -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria sustentable -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio basico -Funeraria basico -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio basico-Funeraria tradicion -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio estandar -Funeraria sustentable -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio premium -Funeraria premium -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio premium -Funeraria premium destacada -Mobile', () =>{
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile()
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
//----------------------------------------funeraria Basico Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion Full -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion Premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
            */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso vidriado -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Basico -Descanso pared -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso flores premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso flores -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Cremacion Full -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion Premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Basico -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Basico -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    })
//---------------------------------------funeraria Parvulo Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Parvulo -Descanso vidriado -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso pared -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso flores premium -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso flores -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso vidriado -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso pared -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores premium -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio Premium -Cremacion parvulo -Descanso vidriado -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Descanso pared -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores premium -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
//-------------------------------------funeraria Parvulo Base Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion Full -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    it('Funeraria - Parvulo base -Descanso vidriado -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso pared -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso flores premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso flores -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso memorial -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })
//----------------------------------funeraria Parvulo Destacado Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso vidriado -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso pared -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso flores premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso flores -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso vidriado -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso pared -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion prevulo -Descanso flores premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso vidriado -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo -Descanso pared -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores premium -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    }) 
//---------------------------------------funeraria Premium Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion Full -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion Premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso pared -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso flores premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium -Descanso flores -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Cremacion premium  -Descanso vidriado -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        /*
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
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    }) 
//----------------------------------funeraria Premium Destacado Mobile-----------------------------------------//

    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Cremacion Full -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion Premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Descanso vidriado -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso pared -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso memorial -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    })
//-------------------------------------funeraria Sustentable Mobile----------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Cremacion Full -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion Premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Descanso vidriado -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso pared -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso memorial -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    })
//--------------------------------------funeraria Tradicion Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Cremacion Full -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion Premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Descanso vidriado -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso pared -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso memorial -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Velatorio estandar -Crematorio basico -Descanso flores premium -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    })
//---------------------------------funeraria Tradicion Destacado Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion basico -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion Full -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion Premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Descanso vidriado -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso pared -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion basico -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion Full -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion Premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Descanso pared -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Descanso flores premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Descanso flores -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio premium -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion full -Descanso pared -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarVelatorioResumen()
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
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
                    }
                })
            }
        })
    })
})