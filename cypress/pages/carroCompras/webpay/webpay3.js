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
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaAprobadaRedcompra'].numero)
                    cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
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
    //rellena el formulario de tarjeta con los datos de una tarjeta Mastercard y revisa que se despliegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaMastercard(){
        return new Cypress.Promise((resolve) => {
            cy.get(popUpTransaccionCaida).then(($modal)=>{
                if(!$modal.is(':visible')){
                    cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].numero)
                    cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
                    cy.wait(6000)
                    cy.get(boxPagar).then(($error) => {
                        if(!$error.text().includes('Intenta')){
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].mes)
                            cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].año)
                            cy.get(inputCvv,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].cvv)
                            cy.get(btnListaCuotas,{timeout:100000}).should('be.visible').click()
                            cy.get(btn3cuotas,{timeout:100000}).should('be.visible').click()
                            cy.wait(6000)
                            cy.get(popUpTransaccionCaida).then(($modal)=>{
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
}
const webpay3 = new Webpay3()
export default webpay3