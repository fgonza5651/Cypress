import cremacionParvuloMobile from "../../../../pageMobile/cremacionMobile/cremacionParvulo/cremacionParvuloMobile";
import carroComprasMobile from "../../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test cremacion -Parvulo', () => {
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
    
    //{nombre historia}
    it('Cremacion - Parvulo -Velatorio basico -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Velatorio estandar -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Velatorio premium -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Funeraria Parvulo -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.precionarCarroCompra()
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
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Funeraria Parvulo destacado -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.precionarCarroCompra()
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
    it('Cremacion - Parvulo -Descanso vidriado -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoVidriado()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarVelatorioResumen()
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
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso pared -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioBasico()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.agregarDescansoPared()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarVelatorioResumen()
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
    it('Cremacion - Parvulo -Descanso flores premium -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoFloresPremium()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarVelatorioResumen()
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
        checkoutReciboMobile.revisarVelatorioResumen()
    })
    //{nombre historia}
    it('Cremacion - Parvulo -Descanso flores -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioEstandar()
        cremacionParvuloMobile.agregarFunerariaParvulo()
        cremacionParvuloMobile.agregarDescansoFlores()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarVelatorioResumen()
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
    it('Cremacion - Parvulo -Descanso memorial -Mobile', function() {
        cremacionParvuloMobile.ingresoCremacionParvuloMobile(this.datos.Url)
        cremacionParvuloMobile.agregarVelatorioPremium()
        cremacionParvuloMobile.agregarFunerariaParvuloDestacado()
        cremacionParvuloMobile.agregarDescansoMemoriar()
        cremacionParvuloMobile.revisarAgregarCarrito()
        cremacionParvuloMobile.revisarPreciosVelatorio()
        cremacionParvuloMobile.revisarPreciosFuneraria()
        cremacionParvuloMobile.revisarPreciosDescanso()
        cremacionParvuloMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarVelatorioResumen()
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
        checkoutReciboMobile.revisarVelatorioResumen()
    })
})