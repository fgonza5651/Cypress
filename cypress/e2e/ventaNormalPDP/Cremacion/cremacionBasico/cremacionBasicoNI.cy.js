import cremacionBasicoNI from "../../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test cremacion-basico-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Cremacion -Basico - NI  - Compra en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.compraEnLinea()
    })
    //{nombre historia}
    it('Cremacion -Basico - NI  - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Cremacion -Basico - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaOtraSolicitud()
    })
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            cy.log('Funciona')
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaAprobada()
            checkoutRecibo.revisarVelatorioResumen()
        }
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            cy.log('Funciona')
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaRechazada() 
        }
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankRechazar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria basico', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankRechazar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaAprobada()
            checkoutRecibo.revisarVelatorioResumen()
            checkoutRecibo.revisarFunerariaResumen()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankRechazar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankRechazar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada', () =>{
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
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.agregarDescansoVidriado()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaAprobada()
            checkoutRecibo.revisarVelatorioResumen()
            checkoutRecibo.revisarFunerariaResumen()
            checkoutRecibo.revisarDescansoResumen()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso pared', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.agregarDescansoPared()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.agregarDescansoFloresPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.agregarDescansoFlores()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankRechazar()
            checkoutRecibo.validarPaginaRechazada()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso memorial', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.agregarDescansoMemoriar()
        cremacionBasicoNI.revisarAgregarCarrito()
        cremacionBasicoNI.revisarPreciosVelatorio()
        cremacionBasicoNI.revisarPreciosFuneraria()
        cremacionBasicoNI.revisarPreciosDescanso()
        cremacionBasicoNI.precionarCarroCompra()
        carroCompras.revisarVelatorioResumen()
        carroCompras.revisarFunerariaResumen()
        carroCompras.revisarDescansoResumen()
        carroCompras.precionarIrComprar()
        carroCompras.formularioDatosPersonales()
        carroCompras.formularioContacto()
        carroCompras.formularioFallecidoPrimerServico()
        carroCompras.formularioFallecidoSegundoServicio()
        carroCompras.formularioFallecidoTercerServicio()
        carroCompras.TerminosCondicionesPagar()
        webpay3.precionarTarjetas()
        const caso = webpay3.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpay.formularioTransbankAceptar()
            checkoutRecibo.validarPaginaAprobada()
            checkoutRecibo.revisarVelatorioResumen()
            checkoutRecibo.revisarFunerariaResumen()
            checkoutRecibo.revisarDescansoResumen()
        }
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Tour virtual', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.tourVirtual()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Caracteristicas y detalles', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.caracteristicasDetalles()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Llamanos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.llamanos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Escribenos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.escribenos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Cotiza', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.cotiza()
    })
});