const inputRutTransbank = '#rutClient'
const inputClaveTransbank = '#passwordClient'
const btnAceptar = 'body > div > form > table > tbody > tr:nth-child(9) > td > input[type=submit]:nth-child(1)'
const btnContinuar = 'body > div > form > table > tbody > tr:nth-child(4) > td > input[type=submit]'
const selectorAceptarRechasar = '#vci'

const formularioAuthenticator = Cypress.env('Formulario')
class AuthenticatorWebpay{
    //rellena el formulario de transbank y acepta la transaccion 
    formularioTransbankAceptar(){
        cy.get(inputRutTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].rut)
        cy.get(inputClaveTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].clave)
        cy.get(btnAceptar,{timeout:100000}).should('be.visible').click()
        cy.get(selectorAceptarRechasar,{timeout:100000}).should('be.visible').select('Aceptar')
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
    }
    //rellena el formulario de transbank y rechazasa la transaccion 
    formularioTransbankRechazar(){
        cy.get(inputRutTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].rut)
        cy.get(inputClaveTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].clave)
        cy.get(btnAceptar,{timeout:100000}).should('be.visible').click()
        cy.get(selectorAceptarRechasar,{timeout:100000}).should('be.visible').select('Rechazar')
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
    }
}
const authenticatorWebpay = new AuthenticatorWebpay()
export default authenticatorWebpay