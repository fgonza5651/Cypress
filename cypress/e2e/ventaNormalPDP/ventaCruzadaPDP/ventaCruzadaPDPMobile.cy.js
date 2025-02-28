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
    it('Cremacion - Basico -NI -Funeraria basico -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        authenticatorWebpayMobile.formularioTransbankRechazar()
                        checkoutReciboMobile.validarPaginaRechazada()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria basico -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria tradicion -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria sustentable -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio Premium -Funeraria premium -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium destacada -Mobile', function() {
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile(this.datos.Url)
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria basico -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaBasico()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria tradicion -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaTradicionSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria tradicion destacada -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaTradicionDestacadoSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria sustentable -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaSustentableSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Funeraria premium -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaPremiumSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Full -NI -Funeraria premium destacada -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarFunerariaPremiumDestacadoSola()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Full -NI -Velatorio basico -Funeraria basico -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioBasico()
        cremacionFullNIMobile.agregarFunerariaBasico()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio basico -Funeraria tradicion -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioBasico()
        cremacionFullNIMobile.agregarFunerariaTradicion()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioEstandar()
        cremacionFullNIMobile.agregarFunerariaTradicionDestacado()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria sustentable -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioEstandar()
        cremacionFullNIMobile.agregarFunerariaSustentable()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio premium -Funeraria premium -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioPremium()
        cremacionFullNIMobile.agregarFunerariaPremium()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio premium -Funeraria premium destacada -Mobile', function() {
        cremacionFullNIMobile.ingresoCremacionFullNIMobile(this.datos.Url)
        cremacionFullNIMobile.agregarVelatorioPremium()
        cremacionFullNIMobile.agregarFunerariaPremiumDestacado()
        cremacionFullNIMobile.revisarAgregarCarrito()
        cremacionFullNIMobile.revisarPreciosVelatorio()
        cremacionFullNIMobile.revisarPreciosFuneraria()
        cremacionFullNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
//---------------------------------------cremacion Premium Mobile----------------------------------------//    
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria basico -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Funeraria tradicion -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Funeraria tradicion destacada -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
    it('Cremacion - Premium -NI -Funeraria sustentable -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Funeraria premium destacada -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarFunerariaResumen()
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
                        checkoutReciboMobile.revisarFunerariaResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio basico -Funeraria basico -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaBasico()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Premium -NI -Velatorio basico-Funeraria tradicion -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioBasico()
        cremacionPremiumNIMobile.agregarFunerariaTradicion()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Premium -NI -Velatorio estandar -Funeraria tradicion destacada -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaTradicionDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Premium -NI -Velatorio estandar -Funeraria sustentable -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioEstandar()
        cremacionPremiumNIMobile.agregarFunerariaSustentable()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Premium -NI -Velatorio premium -Funeraria premium -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremium()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Cremacion - Premium -NI -Velatorio premium -Funeraria premium destacada -Mobile', function() {
        cremacionPremiumNIMobile.ingresoCremacionPremiumNIMobile(this.datos.Url)
        cremacionPremiumNIMobile.agregarVelatorioPremium()
        cremacionPremiumNIMobile.agregarFunerariaPremiumDestacado()
        cremacionPremiumNIMobile.revisarAgregarCarrito()
        cremacionPremiumNIMobile.revisarPreciosVelatorio()
        cremacionPremiumNIMobile.revisarPreciosFuneraria()
        cremacionPremiumNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion basico -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Basico -Cremacion Full -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion Premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Basico -Descanso vidriado -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso pared -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso flores premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso flores -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso memorial -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion Full -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Cremacion Premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionFull()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Basico -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionBasico()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Basico -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarCremacionPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosCremacion()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarDescansoVidriado()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioBasico()
        funerariaBasicoMobile.agregarDescansoPared()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Basico -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarDescansoFloresPremium()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioEstandar()
        funerariaBasicoMobile.agregarDescansoFlores()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Basico -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
        funerariaBasicoMobile.agregarVelatorioPremium()
        funerariaBasicoMobile.agregarDescansoMemoriar()
        funerariaBasicoMobile.revisarAgregarCarrito()
        funerariaBasicoMobile.revisarPreciosVelatorio()
        funerariaBasicoMobile.revisarPreciosDescanso()
        funerariaBasicoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaBasicoMobile.ingresoFunerariaBasicoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
//---------------------------------------funeraria Parvulo Mobile-----------------------------------------//
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Parvulo -Descanso vidriado -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso pared -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso flores premium -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso flores -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso vidriado -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso pared -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores premium -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarCremacionParvulo()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosCremacion()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarDescansoVidriado()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioBasico()
        funerariaParvuloMobile.agregarDescansoPared()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarDescansoFloresPremium()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioEstandar()
        funerariaParvuloMobile.agregarDescansoFlores()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
        funerariaParvuloMobile.agregarVelatorioPremium()
        funerariaParvuloMobile.agregarDescansoMemoriar()
        funerariaParvuloMobile.revisarAgregarCarrito()
        funerariaParvuloMobile.revisarPreciosVelatorio()
        funerariaParvuloMobile.revisarPreciosDescanso()
        funerariaParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio Premium -Cremacion parvulo -Descanso vidriado -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Descanso pared -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores premium -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloMobile.ingresoFunerariaParvuloMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion basico -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion Full -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Parvulo base -Cremacion premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Parvulo base -Descanso vidriado -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso pared -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso flores premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso flores -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso memorial -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion full -Descanso pared -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionFull()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionBasico()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarCremacionPremium()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosCremacion()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarDescansoVidriado()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioBasico()
        funerariaParvuloBaseMobile.agregarDescansoPared()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarDescansoFloresPremium()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioEstandar()
        funerariaParvuloBaseMobile.agregarDescansoFlores()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo base -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
        funerariaParvuloBaseMobile.agregarVelatorioPremium()
        funerariaParvuloBaseMobile.agregarDescansoMemoriar()
        funerariaParvuloBaseMobile.revisarAgregarCarrito()
        funerariaParvuloBaseMobile.revisarPreciosVelatorio()
        funerariaParvuloBaseMobile.revisarPreciosDescanso()
        funerariaParvuloBaseMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaParvuloBaseMobile.ingresoFunerariaParvuloBaseMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Parvulo destacado -Descanso vidriado -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Descanso pared -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso flores premium -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso flores -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo - Destacado -Descanso memorial -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso vidriado -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso pared -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Cremacion prevulo -Descanso flores premium -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarCremacionParvulo()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosCremacion()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarDescansoVidriado()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioBasico()
        funerariaParvuloDestacadoMobile.agregarDescansoPared()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarDescansoFloresPremium()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioEstandar()
        funerariaParvuloDestacadoMobile.agregarDescansoFlores()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
        funerariaParvuloDestacadoMobile.agregarVelatorioPremium()
        funerariaParvuloDestacadoMobile.agregarDescansoMemoriar()
        funerariaParvuloDestacadoMobile.revisarAgregarCarrito()
        funerariaParvuloDestacadoMobile.revisarPreciosVelatorio()
        funerariaParvuloDestacadoMobile.revisarPreciosDescanso()
        funerariaParvuloDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso vidriado -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo -Descanso pared -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores premium -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso memorial -Mobile', function() {
        funerariaParvuloDestacadoMobile.ingresoFunerariaParvuloDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion basico -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium -Cremacion Full -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion Premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso pared -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso flores premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium -Descanso flores -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso memorial -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion full -Descanso pared -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionFull()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarCremacionResumen()
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionBasico()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarCremacionPremium()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosCremacion()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarDescansoVidriado()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioBasico()
        funerariaPremiumMobile.agregarDescansoPared()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarDescansoFloresPremium()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                        checkoutReciboMobile.revisarDescansoResumen()
                    }
                })
            }
        })
        */
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioEstandar()
        funerariaPremiumMobile.agregarDescansoFlores()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
        funerariaPremiumMobile.agregarVelatorioPremium()
        funerariaPremiumMobile.agregarDescansoMemoriar()
        funerariaPremiumMobile.revisarAgregarCarrito()
        funerariaPremiumMobile.revisarPreciosVelatorio()
        funerariaPremiumMobile.revisarPreciosDescanso()
        funerariaPremiumMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
                    }
                })
            }
        })
        */
    })    
    //{nombre historia}
    it('Funeraria - Premium -Velatorio premium -Cremacion premium  -Descanso vidriado -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaPremiumMobile.ingresoFunerariaPremiumMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    }) 
//----------------------------------funeraria Premium Destacado Mobile-----------------------------------------//

    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Cremacion Full -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Cremacion Premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Premium Destacada -Descanso vidriado -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso pared -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso flores -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso memorial -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion full -Descanso pared -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionFull()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarCremacionPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosCremacion()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoVidriado()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioBasico()
        funerariaPremiumDestacadaMobile.agregarDescansoPared()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarDescansoFloresPremium()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioEstandar()
        funerariaPremiumDestacadaMobile.agregarDescansoFlores()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
        funerariaPremiumDestacadaMobile.agregarVelatorioPremium()
        funerariaPremiumDestacadaMobile.agregarDescansoMemoriar()
        funerariaPremiumDestacadaMobile.revisarAgregarCarrito()
        funerariaPremiumDestacadaMobile.revisarPreciosVelatorio()
        funerariaPremiumDestacadaMobile.revisarPreciosDescanso()
        funerariaPremiumDestacadaMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaPremiumDestacadaMobile.ingresoFunerariaPremiumDestacadaMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
//-------------------------------------funeraria Sustentable Mobile----------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Cremacion Full -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Cremacion Premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Sustentable -Descanso vidriado -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso pared -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso memorial -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion full -Descanso pared -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionFull()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionBasico()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarCremacionPremium()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosCremacion()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarDescansoVidriado()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioBasico()
        funerariaSustentableMobile.agregarDescansoPared()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarDescansoFloresPremium()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioEstandar()
        funerariaSustentableMobile.agregarDescansoFlores()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
        funerariaSustentableMobile.agregarVelatorioPremium()
        funerariaSustentableMobile.agregarDescansoMemoriar()
        funerariaSustentableMobile.revisarAgregarCarrito()
        funerariaSustentableMobile.revisarPreciosVelatorio()
        funerariaSustentableMobile.revisarPreciosDescanso()
        funerariaSustentableMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Sustentable -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaSustentableMobile.ingresoFunerariaSustentableMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
//--------------------------------------funeraria Tradicion Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Cremacion Full -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Cremacion Premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion -Descanso vidriado -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso pared -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso memorial -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion full -Descanso pared -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionFull()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        wwebpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionBasico()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarCremacionPremium()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosCremacion()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarDescansoVidriado()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioBasico()
        funerariaTradicionMobile.agregarDescansoPared()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarDescansoFloresPremium()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioEstandar()
        funerariaTradicionMobile.agregarDescansoFlores()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
        funerariaTradicionMobile.agregarVelatorioPremium()
        funerariaTradicionMobile.agregarDescansoMemoriar()
        funerariaTradicionMobile.revisarAgregarCarrito()
        funerariaTradicionMobile.revisarPreciosVelatorio()
        funerariaTradicionMobile.revisarPreciosDescanso()
        funerariaTradicionMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Crematorio basico -Descanso flores premium -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaTradicionMobile.ingresoFunerariaTradicionMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
//---------------------------------funeraria Tradicion Destacado Mobile---------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion basico -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion Full -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion Premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
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
    it('Funeraria - Tradicion Destacado -Descanso vidriado -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        wwebpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso pared -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso flores -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Descanso memorial -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion basico -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion Full -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion Premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion full -Descanso pared -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionFull()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Cremacion basico -Descanso memorial -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarCremacionPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosCremacion()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarCremacionResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoVidriado()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio basico -Descanso pared -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioBasico()
        funerariaTradicionDestacadoMobile.agregarDescansoPared()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Descanso flores premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarDescansoFloresPremium()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Descanso flores -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioEstandar()
        funerariaTradicionDestacadoMobile.agregarDescansoFlores()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio premium -Descanso memorial -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
        funerariaTradicionDestacadoMobile.agregarVelatorioPremium()
        funerariaTradicionDestacadoMobile.agregarDescansoMemoriar()
        funerariaTradicionDestacadoMobile.revisarAgregarCarrito()
        funerariaTradicionDestacadoMobile.revisarPreciosVelatorio()
        funerariaTradicionDestacadoMobile.revisarPreciosDescanso()
        funerariaTradicionDestacadoMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarDescansoResumen()
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
    it('Funeraria - Tradicion Destacado -Velatorio premium -Cremacion premium -Descanso vidriado -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio basico -Cremacion full -Descanso pared -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion basico -Descanso flores premium -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio estandar -Cremacion basico -Descanso flores -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Funeraria - Tradicion Destacado -Velatorio premium -Cremacion premium -Descanso memorial -Mobile', function() {
        funerariaTradicionDestacadoMobile.ingresoFunerariaTradicionDestacadoMobile(this.datos.Url)
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
        carroComprasMobile.formularioDatosPersonales(this.datos.Formulario)
        carroComprasMobile.formularioContacto(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroComprasMobile.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.selectTarjetas()
        webpay3Mobile.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpayMobile.formularioTransbankAceptar(this.datos.Formulario)
        checkoutReciboMobile.validarPaginaAprobada()
    })
})