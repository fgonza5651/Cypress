import funerariaParvuloDestacado from "../../../../pages/funeraria/funerariaParvuloDestacado/funerariaParvuloDestacado";
import carroCompras from "../../../../pages/carroCompras/carroCompras/carroCompras";
import webpay3 from "../../../../pages/carroCompras/webpay/webpay3";
import authenticatorWebpay from "../../../../pages/carroCompras/webpay/autentificacion";
import checkoutRecibo from "../../../../pages/carroCompras/recibo/checkoutRecibo";

describe('test funeraria plan parvulo destacado', () =>{
    beforeEach(() => {
        cy.clearCookies();   
        cy.clearLocalStorage();
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Funeraria - Parvulo - Destacado -Descanso memorial', () =>{
        funerariaParvuloDestacado.ingresarFunerariaParvuloDestacado()
        funerariaParvuloDestacado.revisarAgregarCarrito()
        funerariaParvuloDestacado.precionarCarroCompra()
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
});