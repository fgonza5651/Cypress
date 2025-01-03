const btnTarjetas = '#tarjetas'
const inputNumeroTarjeta = '#card-number'
const btnContinuar = '.submit'
const btnPagar = 'Pagar'
const urlPagar = 'https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi'
const inputFechaExpiracion = '#card-exp'
const inputCvv = '#card-cvv'
const btnListaCuotas = '#botonlistacuotas0'
const btn3cuotas = '.combobox-list > :nth-child(2) > button'
const popUpTransaccionCaida = 'app-modal-error > .modal > .modal__dialog > .modal__content'
const btnIntentarNuevamente = '.modal__body > button'


const formularioWebpay3 = Cypress.env('Formulario')
class Webpay3{
    //Preciona el boton tarjetas
    precionarTarjetas(){
        cy.get(btnTarjetas,{timeout:100000}).should('be.visible').click()
    }
    //rellena el formulario de tarjeta con los datos de una tarjeta redcompra y revisa que se despliegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaRedcompra(){
        cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaAprobadaRedcompra'].numero)
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
        cy.contains(btnPagar, { timeout: 100000 }).click();
        cy.wait(6000)
        cy.get('body').then(($body)=>{
            cy.log($body.text().includes('Rut'))
            if($body.text().includes('Rut')) {
                cy.url({ timeout: 100000 }).should('eq', urlPagar);
                cy.wrap(true)
            } else {
                cy.get(btnIntentarNuevamente, { timeout: 100000 }).should('be.visible').click();
                cy.contains('502');
                cy.wait(3000)
                cy.wrap(false)
            }
        })
    }
    //rellena el formulario de tarjeta con los datos de una tarjeta Mastercard y revisa que se despliegue la url "https://webpay3gint.transbank.cl/testcommercebank/authenticator.cgi"
    formularioTarjetaMastercard(){
        cy.get(inputNumeroTarjeta,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].numero)
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
        cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].mes)
        cy.get(inputFechaExpiracion,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].año)
        cy.get(inputCvv,{timeout:100000}).should('be.visible').type(formularioWebpay3['FormularioTarjetaRechazadaMasterCard'].cvv)
        cy.get(btnListaCuotas,{timeout:100000}).should('be.visible').click()
        cy.get(btn3cuotas,{timeout:100000}).should('be.visible').click()
        cy.contains(btnPagar, { timeout: 100000 }).click();
        cy.wait(6000)
        cy.get('body').then(($body)=>{
            cy.log($body.text().includes('Rut'))
            if ($body.text().includes('Rut')) {
                cy.url({ timeout: 100000 }).should('eq', urlPagar);
                cy.wrap(true)
            } else {
                cy.get(btnIntentarNuevamente, { timeout: 100000 }).should('be.visible').click();
                cy.contains('502');
                cy.wait(3000)
                cy.wrap(false)
            }
        });
    }
}
const webpay3 = new Webpay3()
export default webpay3