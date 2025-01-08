const btnTarjetas = '#tarjetas'
const inputNumeroTarjeta = '#card-number'
const btnContinuar = 'Continuar'
const btnConfirmar = 'Confirmar'
const urlPagar = 'https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi'
const inputFechaExpiracion = '#card-exp'
const inputCvv = '#card-cvv'
const btnListaCuotas = '#botonlistacuotas0'
const btn3cuotas = '.installments-modal__body-form-radiobuttons > :nth-child(2) > span'
const btnPagar = 'Pagar'
const popUpTransaccionCaida = '.modal__content.modal__content--error'
const boxPagar = '.card-number'

const formularioWebpay3 = Cypress.env('Formulario')
class Webpay3Mobile{
    //Preciona la opcion tarjetas
    precionarTarjetas(){
        return new Cypress.Promise((resolve) => {
            cy.wait(4000)
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                if(!$modal.is(':visible')){
                    cy.get(btnTarjetas,{timeout:100000}).click()
                    resolve(false)
                }else{
                    cy.wait(3000)
                    resolve(true)
                }
            })
        })
    }
    //Rellena el formulario de tarjetas con los datos de una tarjeta redcompra y revisa que se desplegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaRedcompra(){
        return new Cypress.Promise((resolve) => {
            cy.wait(2000)
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaAprobadaRedcompra'].numero)
                    cy.contains(btnContinuar,{timeout:100000}).should('be.visible').click()
                    cy.wait(6000)
                    cy.get(boxPagar).then(($error)=>{
                        cy.log($error.text().includes('Intenta'))
                        if(!$error.text().includes('Intenta')) {
                            cy.contains(btnPagar, { timeout: 100000 }).click();
                            cy.get(popUpTransaccionCaida).then(($modal)=>{
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
    //Rellena el formulario de tarjetas con los datos de una tarjeta Matercard, luego seleciona la opcion 3 cuotas y revisa que se desplegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaMastercard(){
        return new Cypress.Promise((resolve) => { 
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].numero)
                    cy.contains(btnContinuar,{timeout:100000}).should('be.visible').click()
                    cy.contains('Intenta').then(($error)=>{
                        cy.log(!$error.is(':visible'))
                        if (!$error.is(':visible')) {
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].mes)
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].año)
                            cy.get(inputCvv,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].cvv)
                            cy.contains(btnContinuar,{timeout:100000}).click()
                            cy.get(btnListaCuotas,{timeout:100000}).should('be.visible').click()
                            cy.get(btn3cuotas,{timeout:100000}).should('be.visible').click()
                            cy.contains(btnConfirmar,{timeout:100000}).click()
                            cy.wait(3000)
                            cy.get(popUpTransaccionCaida).then(($modal)=>{
                                if($modal.is(':visible')){
                                    cy.wait(3000)
                                    resolve(true)
                                }else{
                                    cy.contains(btnPagar, { timeout: 100000 }).should('be.visible').click()
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
}
const webpay3Mobile = new Webpay3Mobile()
export default webpay3Mobile