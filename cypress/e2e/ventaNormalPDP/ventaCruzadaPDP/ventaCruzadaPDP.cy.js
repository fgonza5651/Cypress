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
//-------------------------------------------cremacion Basica-------------------------------------------//
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria basico', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaTradicionSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Funeraria tradicion destacada', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaTradicionDestacadoSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaSustentableSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaPremiumSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarFunerariaPremiumDestacadoSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankAceptar()
        checkoutRecibo.validarPaginaAprobada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria basico', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        /*
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito()
        authenticatorWebpay.formularioTransbankRechazar()
        checkoutRecibo.validarPaginaRechazada()
        */
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Funeraria tradicion', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria tradicion destacada', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio estandar -Funeraria sustentable', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Basico -NI -Velatorio premium -Funeraria premium destacada', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria basico', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria tradicion', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaTradicionSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria tradicion destacada', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaTradicionDestacadoSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria sustentable', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaSustentableSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria premium', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaPremiumSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Funeraria premium destacada', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarFunerariaPremiumDestacadoSola()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio basico -Funeraria basico', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaBasico()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio basico -Funeraria tradicion', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioBasico()
        cremacionFullNI.agregarFunerariaTradicion()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria tradicion destacada', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaTradicionDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio estandar -Funeraria sustentable', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioEstandar()
        cremacionFullNI.agregarFunerariaSustentable()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio Premium -Funeraria premium', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremium()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion - Full -NI -Velatorio Premium -Funeraria premium destacada', function() {
        cremacionFullNI.ingresoCremacionFullNI(this.datos.Url)
        cremacionFullNI.agregarVelatorioPremium()
        cremacionFullNI.agregarFunerariaPremiumDestacado()
        cremacionFullNI.revisarAgregarCarrito()
        cremacionFullNI.revisarPreciosVelatorio()
        cremacionFullNI.revisarPreciosFuneraria()
        cremacionFullNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Funeraria basico', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Funeraria tradicion', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaTradicionSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Funeraria tradicion destacada', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaTradicionDestacadoSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion -Premium -NI -Funeraria sustentable', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaSustentableSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Funeraria premium', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaPremiumSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Funeraria premium destacada', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarFunerariaPremiumDestacadoSola()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio basico -Funeraria basico', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.agregarFunerariaBasico()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio basico -Funeraria tradicion', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioBasico()
        cremacionPremiumNI.agregarFunerariaTradicion()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio estandar -Funeraria tradicion destacada', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaTradicionDestacado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio estandar -Funeraria sustentable', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioEstandar()
        cremacionPremiumNI.agregarFunerariaSustentable()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio premium -Funeraria premium', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremium()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Cremacion -Premium -NI -Velatorio premium -Funeraria premium destacada', function() {
        cremacionPremiumNI.ingresoCremacionPremiumNI(this.datos.Url)
        cremacionPremiumNI.agregarVelatorioPremium()
        cremacionPremiumNI.agregarFunerariaPremiumDestacado()
        cremacionPremiumNI.revisarAgregarCarrito()
        cremacionPremiumNI.revisarPreciosVelatorio()
        cremacionPremiumNI.revisarPreciosFuneraria()
        cremacionPremiumNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion basico', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion full', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso vidriado', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso pared', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Basico -Descanso flores premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso flores', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Descanso memorial', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Cremacion basico', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion Full', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Cremacion premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion basico -Descanso vidriado', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionBasico()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Basico -Cremacion full -Descanso pared', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion premium -Descanso flores premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion tradicion -Descanso flores', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionFull()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Cremacion premium -Descanso Memorial', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarCremacionPremium()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosCremacion()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Descanso vidriado', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarDescansoVidriado()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio estandar -Descanso pared', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioEstandar()
        funerariaBasico.agregarDescansoPared()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Descanso flores premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarDescansoFloresPremium()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Descanso flores', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioBasico()
        funerariaBasico.agregarDescansoFlores()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Descanso Memorial', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
        funerariaBasico.agregarVelatorioPremium()
        funerariaBasico.agregarDescansoMemoriar()
        funerariaBasico.revisarAgregarCarrito()
        funerariaBasico.revisarPreciosVelatorio()
        funerariaBasico.revisarPreciosDescanso()
        funerariaBasico.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio premium -Cremacion premium -Descanso vidriado', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Basico -Velatorio estandar -Cremacion basico  -Descanso flores', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Basico -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaBasico.ingresarFunerariaBasico(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso vidriado', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso pared', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso flores premium', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Descanso flores', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Descanso memorial', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso vidriado', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso pared', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores premium', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso flores', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Cremacion parvulo -Descanso memorial', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarCremacionParvulo()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosCremacion()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Descanso vidriado', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarDescansoVidriado()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio basico -Descanso pared', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioBasico()
        funerariaParvulo.agregarDescansoPared()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores premium', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarDescansoFloresPremium()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio estandar -Descanso flores', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioEstandar()
        funerariaParvulo.agregarDescansoFlores()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Descanso memorial', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
        funerariaParvulo.agregarVelatorioPremium()
        funerariaParvulo.agregarDescansoMemoriar()
        funerariaParvulo.revisarAgregarCarrito()
        funerariaParvulo.revisarPreciosVelatorio()
        funerariaParvulo.revisarPreciosDescanso()
        funerariaParvulo.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso vidriado', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio basico -Cremacion parvulo -Descanso pared', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
        checkoutRecibo.revisarVelatorioResumen()
        checkoutRecibo.revisarCremacionResumen()
        checkoutRecibo.revisarDescansoResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores premium', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio estandar -Cremacion parvulo -Descanso flores', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo -Velatorio premium -Cremacion parvulo -Descanso memorial', function() {
        funerariaParvulo.ingresarFunerariaParvulo(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion basico', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion Full', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso vidriado', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Descanso pared', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso flores premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso flores', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Descanso memoriar', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion basico', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion Full', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion premium -Descanso vidriado', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion full -Descanso pared', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionFull()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion premium -Descanso flores premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionPremium()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion basico -Descanso flores', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Cremacion basico -Descanso memoriar', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarCremacionBasico()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosCremacion()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio premium -Descanso vidriado', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioPremium()
        funerariaParvuloBase.agregarDescansoVidriado()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Descanso pared', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioBasico()
        funerariaParvuloBase.agregarDescansoPared()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoFloresPremium()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso flores', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoFlores()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Descanso memoriar', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
        funerariaParvuloBase.agregarVelatorioEstandar()
        funerariaParvuloBase.agregarDescansoMemoriar()
        funerariaParvuloBase.revisarAgregarCarrito()
        funerariaParvuloBase.revisarPreciosVelatorio()
        funerariaParvuloBase.revisarPreciosDescanso()
        funerariaParvuloBase.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio premium -Cremacion premium -Descanso vidriado', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo base -Velatorio estandar -Cremacion basico -Descanso memoriar', function() {
        funerariaParvuloBase.ingresarFunerariaParvuloBase(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso vidriado', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso pared', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso flores premium', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso flores', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Descanso memorial', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso vidriado', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio basico -Descanso pared', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioBasico()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores premium', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Descanso flores', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioEstandar()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Descanso memorial', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarVelatorioPremium()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosVelatorio()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso vidriado', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoVidriado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso pared', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoPared()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores premium', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFloresPremium()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso flores', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoFlores()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Cremacion parvulo -Descanso memorial', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
        funerariaParvuloDestacado.agregarCremacionParvulo()
        funerariaParvuloDestacado.agregarDescansoMemoriar()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.revisarPreciosCremacion()
        funerariaParvuloDestacado.revisarPreciosDescanso()
        funerariaParvuloDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso vidriado', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio basico -Cremacion parvulo -Descanso pared', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores premium', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Parvulo destacado -Velatorio estandar -Cremacion parvulo -Descanso flores', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Parvulo destacado -Velatorio premium -Cremacion parvulo -Descanso memorial', function() {
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion basico', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion tradicion', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso vidriado', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso pared', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso flores premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso flores', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Descanso memorial', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio basico -Cremacion basico', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()

    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Cremacion tradicion', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion premium -Descanso vidriado', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion full -Descanso pared', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionFull()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion premium -Descanso flores premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionPremium()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion basico -Descanso flores', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Cremacion basico -Descanso memorial', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarCremacionBasico()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosCremacion()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Descanso vidriado', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarDescansoVidriado()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium -Velatorio basico -Descanso pared', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioBasico()
        funerariaPremium.agregarDescansoPared()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Descanso flores premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarDescansoFloresPremium()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Descanso flores', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioEstandar()
        funerariaPremium.agregarDescansoFlores()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Descanso memorial', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
        funerariaPremium.agregarVelatorioPremium()
        funerariaPremium.agregarDescansoMemoriar()
        funerariaPremium.revisarAgregarCarrito()
        funerariaPremium.revisarPreciosVelatorio()
        funerariaPremium.revisarPreciosDescanso()
        funerariaPremium.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Cremacion premium -Descanso vidriado', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
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
    it('Funeraria - Premium -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaPremium.ingresarFunerariaPremium(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })   
//--------------------------------------funeraria Premium Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Cremacion tradicion', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Cremacion premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Descanso vidriado', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Descanso pared', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Descanso flores premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
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
    it('Funeraria - Premium Destacada -Descanso flores', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Descanso memorial', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion basico', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion tradicion', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
        checkoutRecibo.revisarCremacionResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso vidriado', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion full -Descanso pared', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionFull()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion premium -Descanso flores premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionPremium()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso flores', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Cremacion basico -Descanso memorial', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarCremacionBasico()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosCremacion()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso vidriado', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarDescansoVidriado()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Descanso pared', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioBasico()
        funerariaPremiumDestacada.agregarDescansoPared()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarDescansoFloresPremium()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Descanso flores', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioEstandar()
        funerariaPremiumDestacada.agregarDescansoFlores()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Descanso memorial', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
        funerariaPremiumDestacada.agregarVelatorioPremium()
        funerariaPremiumDestacada.agregarDescansoMemoriar()
        funerariaPremiumDestacada.revisarAgregarCarrito()
        funerariaPremiumDestacada.revisarPreciosVelatorio()
        funerariaPremiumDestacada.revisarPreciosDescanso()
        funerariaPremiumDestacada.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacon premium -Descanso vidriado', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Premium Destacada -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaPremiumDestacada.ingresarFunerariaPremiumDestacada(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
//-----------------------------------------funeraria Sustentable-------------------------------------------//
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion tradicion', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso vidriado', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso pared', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso flores', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Descanso memorial', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion basico', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion tradicion', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium -Descanso vidriado', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion full -Descanso pared', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionFull()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion premium -Descanso flores premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionPremium()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Descanso flores', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Cremacion basico -Descanso memorial', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarCremacionBasico()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosCremacion()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Descanso vidriado', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarDescansoVidriado()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Descanso pared', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioBasico()
        funerariaSustentable.agregarDescansoPared()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarDescansoFloresPremium()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Descanso flores', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioEstandar()
        funerariaSustentable.agregarDescansoFlores()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Descanso memorial', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
        funerariaSustentable.agregarVelatorioPremium()
        funerariaSustentable.agregarDescansoMemoriar()
        funerariaSustentable.revisarAgregarCarrito()
        funerariaSustentable.revisarPreciosVelatorio()
        funerariaSustentable.revisarPreciosDescanso()
        funerariaSustentable.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Cremacion prmeium -Descanso vidriado', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Sustentable -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaSustentable.ingresarFunerariaSustentable(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
//------------------------------------------funeraria Tradicion--------------------------------------------//
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - Tradicion -Cremacion tradicion', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso vidriado', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso pared', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso flores', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Descanso memorial', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion basico', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion tradicion', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium -Descanso vidriado', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion full -Descanso pared', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionFull()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion premium -Descanso flores premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionPremium()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Descanso flores', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Cremacion basico -Descanso memorial', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarCremacionBasico()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosCremacion()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Descanso vidriado', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarDescansoVidriado()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Descanso pared', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioBasico()
        funerariaTradicion.agregarDescansoPared()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estantar -Descanso flores premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarDescansoFloresPremium()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Descanso flores', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioEstandar()
        funerariaTradicion.agregarDescansoFlores()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Descanso memorial', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
        funerariaTradicion.agregarVelatorioPremium()
        funerariaTradicion.agregarDescansoMemoriar()
        funerariaTradicion.revisarAgregarCarrito()
        funerariaTradicion.revisarPreciosVelatorio()
        funerariaTradicion.revisarPreciosDescanso()
        funerariaTradicion.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Cremacion premium -Descanso vidriado', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - Tradicion -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaTradicion.ingresarFunerariaTradicion(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
//-------------------------------------funeraria Tradicion Destacado--------------------------------------------//
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion basico', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
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
    it('Funeraria - tradicion destacado -Cremacion tradicion', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso vidriado', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso pared', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso flores premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso flores', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Descanso memorial', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion basico', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion tradicion', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarCremacionResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremaicion premium -Descanso vidriado', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion premium -Descanso pared', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionFull()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion premium -Descanso flores premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionPremium()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion basico -Descanso flores', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Cremacion basico -Descanso memorial', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarCremacionBasico()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosCremacion()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarCremacionResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio premium -Descanso vidriado', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarDescansoVidriado()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico -Descanso pared', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioBasico()
        funerariaTradicionDestacado.agregarDescansoPared()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Descanso flores premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarDescansoFloresPremium()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Descanso flores', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioEstandar()
        funerariaTradicionDestacado.agregarDescansoFlores()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio premium -Descanso memorial', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
        funerariaTradicionDestacado.agregarVelatorioPremium()
        funerariaTradicionDestacado.agregarDescansoMemoriar()
        funerariaTradicionDestacado.revisarAgregarCarrito()
        funerariaTradicionDestacado.revisarPreciosVelatorio()
        funerariaTradicionDestacado.revisarPreciosDescanso()
        funerariaTradicionDestacado.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio premium -Cremacion premium -Descanso vidriado', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio basico -Cremacion full -Descanso pared', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion premium -Descanso flores premium', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio estandar -Cremacion basico -Descanso flores', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Funeraria - tradicion destacado -Velatorio premium -Cremacion basico -Descanso memorial', function() {
        funerariaTradicionDestacado.ingresarFunerariaTradicionDestacado(this.datos.Url)
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
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.formularioFallecidoSegundoServicio(this.datos.Formulario)
        carroCompras.formularioFallecidoTercerServicio(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.selectTarjetas()
        webpay3.ingresoTarjetaDebito(this.datos.Formulario)
        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
        checkoutRecibo.validarPaginaAprobada()
        checkoutRecibo.revisarVelatorioResumen()
    })
})