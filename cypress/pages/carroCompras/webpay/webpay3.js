const btnTarjetas = '#tarjetas'
const inputNumeroTarjeta = '#card-number'
const btnContinuar = '.submit'
const btnPagar = 'Pagar'
const urlPagar = 'https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi'
const inputFechaExpiracion = '#card-exp'
const inputCvv = '#card-cvv'
const btnListaCuotas = '#botonlistacuotas0'
const btn3cuotas = '.combobox-list > :nth-child(2) > button'
const popUpTransaccionCaida = '.modal__content.modal__content--error'
const btnIntentarNuevamente = '.modal__body > button'
const boxPagar = '.card-number'


const formularioWebpay3 = Cypress.env('Formulario')
class Webpay3{
    //Preciona el boton tarjetas
    precionarTarjetas(){
        return new Cypress.Promise((resolve) => {
            cy.wait(4000)
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                cy.wait(4000)
                //Revisa si se encuentra el pop up de transaccion caida, si lo encuentra retorna true para cancelar la ejecucion, sino continua con el flujo
                if(!$modal.is(':visible')){
                    cy.get(btnTarjetas,{timeout:100000}).should('be.visible').click()
                    resolve(false)
                }else{
                    cy.wait(3000)
                    resolve(true)
                }
            })
        })
    }
    //rellena el formulario de tarjeta con los datos de una tarjeta redcompra y revisa que se despliegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaRedcompra(){
        return new Cypress.Promise((resolve) => {
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                //Revisa si se encuentra el pop up de transaccion caida, si lo encuentra retorna true para cancelar la ejecucion, sino continua con el flujo
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaAprobadaRedcompra'].numero)
                    cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
                    cy.wait(6000)
                    cy.get(boxPagar).then(($error)=>{
                        //Revisa si debajo del numero de tarjeta aparece el tecto "Intenta..." de una transaccion fallida, si este aparece se termina la ejecucion sino se continua con el flujo
                        if(!$error.text().includes('Intenta')) {
                            cy.wait(3000)
                            cy.contains(btnPagar, { timeout: 100000 }).click();
                            cy.wait(4000)
                            cy.get(popUpTransaccionCaida).then(($modal)=>{
                                //Revisa si antes de pagar aparece el pop up de transaccion caida, si lo encuntra termina la ejecucion sino continua con el flujo
                                if($modal.is(':visible')){
                                    cy.get(btnIntentarNuevamente,{timeout:100000}).click()
                                    cy.contains('502')
                                    cy.wait(3000)
                                    resolve(true)
                                }else{
                                    cy.url({ timeout: 100000 }).should('eq', urlPagar);
                                    resolve(false)
                                }
                            })
                        } else {
                            cy.wait(3000)
                            resolve(true)
                        }
                    })
                }else{
                    cy.wait(3000)
                    resolve(true)
                }
            })
        })
    }
    //rellena el formulario de tarjeta con los datos de una tarjeta Mastercard y revisa que se despliegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaMastercard(){
        return new Cypress.Promise((resolve) => {
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                //Revisa si se encuentra el pop up de transaccion caida, si lo encuentra retorna true para cancelar la ejecucion, sino continua con el flujo
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].numero)
                    cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
                    cy.wait(4000)
                    cy.get(boxPagar).then(($error) => {
                        //Revisa si debajo del numero de tarjeta aparece el tecto "Intenta..." de una transaccion fallida, si este aparece se termina la ejecucion sino se continua con el flujo
                        if(!$error.text().includes('Intenta')){
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].mes)
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].año)
                            cy.get(inputCvv,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].cvv)
                            cy.wait(1000)
                            cy.get(btnListaCuotas,{timeout:100000}).should('be.visible').click()
                            cy.get(btn3cuotas,{timeout:100000}).should('be.visible').click()
                            cy.wait(6000)
                            cy.get(popUpTransaccionCaida).then(($modal)=>{
                                //Revisa si antes de pagar aparece el pop up de transaccion caida, si lo encuntra termina la ejecucion sino continua con el flujo
                                if ($modal.is(':visible')) {
                                    cy.get(btnIntentarNuevamente, { timeout: 100000 }).should('be.visible').click();
                                    cy.contains('502');
                                    cy.wait(3000)
                                    resolve(true)
                                } else {
                                    cy.contains(btnPagar, { timeout: 100000 }).should('be.visible').click()
                                    cy.url({ timeout: 100000 }).should('eq', urlPagar);
                                    resolve(false)
                                }
                            })
                        }else{
                            cy.wait(3000)
                            resolve(true)
                        }
                    })
                }else{
                    cy.wait(3000)
                    resolve(true)
                }
            })
        })
    }

    
    //Preciona el boton tarjetas
    selectTarjetas(){
        cy.get(btnTarjetas,{timeout:100000}).should('be.visible').click()
    }
    
    //Ingreso numero de tarjeta
    ingresoTarjetaDebito()
    {
        //ingresa a numero de tarejeta (debito)
        cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaAprobadaRedcompra'].numero)
        cy.wait(3000)

        //clic en el boton continuar
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
        
        //clic en el boton pagar
        cy.wait(1000)
        cy.contains(btnPagar,{timeout:100000}).should('be.visible').click()
    }
  
}
const webpay3 = new Webpay3()
export default webpay3