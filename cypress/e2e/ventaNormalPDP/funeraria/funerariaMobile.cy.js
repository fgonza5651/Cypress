//Paginas base Mobile
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

describe('test funeraria plan basico Mobile', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
    });  
    //{nombre historia}
    it('Funeraria - Basico -Descanso memorial -Mobile', () =>{
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo -Descanso memorial -Mobile', () =>{
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Base -Descanso memorial -Mobile', () =>{
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.precionarCarroCompra()
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
    it('Funeraria - Parvulo - Destacado -Descanso memorial -Mobile', () =>{
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
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
    it('Funeraria - Premium -Descanso memorial -Mobile', () =>{
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.precionarCarroCompra()
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
    it('Funeraria - Premium Destacada -Mobile', () =>{
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
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
    it('Funeraria - Sustentable -Descanso memorial -Mobile', () =>{
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.precionarCarroCompra()
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
    it('Funeraria - Tradicion -Descanso memorial -Mobile', () =>{
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.precionarCarroCompra()
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
    it('Funeraria - Tradicion Destacado -Descanso memorial -Mobile', () =>{
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
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
})