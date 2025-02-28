import cremacionBasicoNI from "../../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-basico-NI', () => {
    beforeEach( function()  {
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
    ////CEC-2527
    it('Cremacion -Basico - NI  - Compra en linea', function(){
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.compraEnLinea(this.datos.Formulario)
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarDescansoVidriado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
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
        checkoutRecibo.revisarDescansoResumen()
    })
    //CEC-3115 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso pared', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarDescansoParedSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaMastercard(this.datos.Url,this.datos.Formulario).then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-3237 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores premium', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarDescansoFloresPremiumSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaMastercard(this.datos.Url,this.datos.Formulario).then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-3111 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarDescansoFloresSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaMastercard(this.datos.Url,this.datos.Formulario).then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankRechazar(this.datos.Formulario)
                        checkoutRecibo.validarPaginaRechazada()
                    }
                })
            }
        })
    })
    //CEC-3112 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso memorial', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.agregarDescansoMemoriarSola()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales(this.datos.Formulario)
        carroCompras.formularioContacto(this.datos.Formulario)
        carroCompras.formularioFallecidoPrimerServico(this.datos.Formulario)
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas().then((respuesta) =>{
            //Revisa que se logre precionar el boton tarjeta sin que salte algun error en la transaccion
            if(respuesta){
                cy.log('Error')
            }else{
                webpay3.formularioTarjetaRedcompra(this.datos.Url,this.datos.Formulario).then((success) =>{
                    //Revisa que la transaccion se realiza correctamente y esta no se caiga en mitad del proceso
                    if(success){
                        cy.log('Error')
                    }else{
                        authenticatorWebpay.formularioTransbankAceptar(this.datos.Formulario)
                        checkoutRecibo.validarPaginaAprobada()
                        checkoutRecibo.revisarDescansoResumen()
                    }
                })
            }
        })
    })
    //CEC-2523
    it('Cremacion - Basico -NI -Tour virtual', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.tourVirtual()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Caracteristicas y detalles', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.caracteristicasDetalles()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Llamanos', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.llamanos(this.datos.Formulario)
    })
    //CEC-2530
    it('Cremacion - Basico -NI -Escribenos', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.escribenos(this.datos.Formulario)
    })
    //CEC-2532
    it('Cremacion - Basico -NI -Cotiza', function() {
        cremacionBasicoNI.ingresoCremacionBasicaNI(this.datos.Url)
        cremacionBasicoNI.cotiza(this.datos.Url)
    })

    afterEach(function(){
        cy.clearCookies();   
        cy.clearLocalStorage()
    })
});