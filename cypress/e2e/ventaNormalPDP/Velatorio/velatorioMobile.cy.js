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


describe('test funeraria plan basico', () => {
    beforeEach(function()  {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });

        cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
    });
//---------------------------------------cremacion Basica Mobile----------------------------------------//
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio premium -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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

//----------------------------------------cremacion FULL Mobile------------------------------------------//
    //{nombre historia}
    it('Cremacion -Full -NI -Velatorio basico -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioBasico()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioEstandar()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio premium -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioPremium()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//---------------------------------------cremacion Premium Mobile----------------------------------------//    
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio basico -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio estandar -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Premium -NI -Velatorio premium -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//----------------------------------------funeraria Basico Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
//---------------------------------------funeraria Parvulo Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//-------------------------------------funeraria Parvulo Base Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio basico -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//----------------------------------funeraria Parvulo Destacado Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio basico -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//---------------------------------------funeraria Premium Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
                    }
                })
            }
        })
        */
    })

//----------------------------------funeraria Premium Destacado Mobile-----------------------------------------//
    
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarVelatorioResumen()
    })

//-------------------------------------funeraria Sustentable Mobile----------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })

//--------------------------------------funeraria Tradicion Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarVelatorioResumen()
    })
//---------------------------------funeraria Tradicion Destacado Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
})