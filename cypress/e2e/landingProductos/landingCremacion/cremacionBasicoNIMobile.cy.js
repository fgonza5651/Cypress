import cremacionBasicoNIMobile from "../../../pageMobile/cremacionMobile/cremacionBasicoNI/cremacionBasicoNIMobile";
import carroComprasMobile from "../../../pageMobile/carroComprasMobile/carroComprasMobile/carroComprasMobile";
import webpay3Mobile from "../../../pageMobile/carroComprasMobile/webpayMobile/webpay3Mobile";
import authenticatorWebpayMobile from "../../../pageMobile/carroComprasMobile/webpayMobile/autentificacionMobile";
import checkoutReciboMobile from "../../../pageMobile/carroComprasMobile/reciboMobile/checkoutReciboMobile";

describe('test cremacion-basico-NI', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });   
   
    //CEC-2527
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.iconoTelefonosTitulo()
    })
    //CEC-1784
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaHablar()
    })
    //CEC-2532
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaOtraSolicitud()
    })
    
    //CEC-2603 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Velatorio basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaAprobada()
            checkoutReciboMobile.revisarVelatorioResumen()
        }
    })
    //CEC-2604 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Velatorio estandar -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-2608 CEC-2993 CEC-3001 CEC-3028 CEC-3029 CEC-3032
    it('Cremacion - Basico -NI -Velatorio premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-2662 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria basico -Mobile', () =>{
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
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-2660 CEC-2977 CEC-2976 CEC-3029
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', () =>{
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
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaAprobada()
            checkoutReciboMobile.revisarFunerariaResumen()
            checkoutReciboMobile.revisarVelatorioResumen()
        }
    })
    //CEC-2658 CEC-2993 CEC-3001 CEC-3028 CEC-3029 CEC-3032
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', () =>{
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
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
        
    })
    //CEC-2658 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', () =>{
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
        const caso = webpay3Mobile.precionarTarjetas()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            webpay3Mobile.formularioTarjetaMastercard()
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-2656 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', () =>{
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
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-3105 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', () =>{
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
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaAprobada()
            checkoutReciboMobile.revisarFunerariaResumen()
            checkoutReciboMobile.revisarVelatorioResumen()
        }
    })
    //CEC-3114 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso vidriado -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.agregarDescansoVidriado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaAprobada()
            checkoutReciboMobile.revisarFunerariaResumen()
            checkoutReciboMobile.revisarVelatorioResumen()
            checkoutReciboMobile.revisarDescansoResumen()
        }
    })
    //CEC-3115 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso pared -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.agregarDescansoPared()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-3237 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.agregarDescansoFloresPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-3111 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso flores -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.agregarDescansoFlores()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaMastercard()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankRechazar()
            checkoutReciboMobile.validarPaginaRechazada()
        }
    })
    //CEC-3112 CEC-3267 CEC-3268 CEC-3269 CEC-3270
    it('Cremacion - Basico -NI -Descanso memorial -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.agregarDescansoMemoriar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
        cremacionBasicoNIMobile.revisarPreciosVelatorio()
        cremacionBasicoNIMobile.revisarPreciosFuneraria()
        cremacionBasicoNIMobile.revisarPreciosDescanso()
        cremacionBasicoNIMobile.precionarCarroCompra()
        carroComprasMobile.revisarVelatorioResumen()
        carroComprasMobile.revisarFunerariaResumen()
        carroComprasMobile.revisarDescansoResumen()
        carroComprasMobile.precionarIrComprar()
        carroComprasMobile.formularioDatosPersonales()
        carroComprasMobile.formularioContacto()
        carroComprasMobile.formularioFallecidoPrimerServico()
        carroComprasMobile.formularioFallecidoSegundoServicio()
        carroComprasMobile.formularioFallecidoTercerServicio()
        carroComprasMobile.TerminosCondicionesPagar()
        webpay3Mobile.precionarTarjetas()
        const caso = webpay3Mobile.formularioTarjetaRedcompra()
        cy.log(caso)
        if(caso == 0){
            cy.log('Falla')
        }else{
            authenticatorWebpayMobile.formularioTransbankAceptar()
            checkoutReciboMobile.validarPaginaAprobada()
            checkoutReciboMobile.revisarFunerariaResumen()
            checkoutReciboMobile.revisarVelatorioResumen()
            checkoutReciboMobile.revisarDescansoResumen()
        }
    })
    //CEC-2523
    it('Cremacion - Basico -NI -Tour virtual -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.tourVirtual()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Caracteristicas y detalles -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.caracteristicasDetalles()
    })
    //CEC-2528
    it('Cremacion - Basico -NI -Llamanos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.llamanos()
    })
    //CEC-2530
    it('Cremacion - Basico -NI -Escribenos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.escribenos()
    })
    //CEC-2532
    it('Cremacion - Basico -NI -Cotiza -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.cotiza()
    })
})