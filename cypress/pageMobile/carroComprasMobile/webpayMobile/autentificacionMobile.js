const inputRutTransbank = '#rutClient'
const inputClaveTransbank = '#passwordClient'
const btnAceptar = 'body > div > form > table > tbody > tr:nth-child(9) > td > input[type=submit]:nth-child(1)'
const btnContinuar = 'body > div > form > table > tbody > tr:nth-child(4) > td > input[type=submit]'
const selectorAceptarRechasar = '#vci'

const formularioAuthenticator = Cypress.env('Formulario')
class AuthenticatorWebpayMobile{
    //Rellena el formulario de la transaccion y seleciona la opcion "Aceptar" 
    formularioTransbankAceptar(){
        cy.get(inputRutTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].rut)
        cy.get(inputClaveTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].clave)
        cy.get(btnAceptar,{timeout:100000}).should('be.visible').click()
        cy.get(selectorAceptarRechasar,{timeout:100000}).should('be.visible').select('Aceptar')
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
    }
    //Rellena el formulario de la transaccion y seleciona la opcion "Rechazar" 
    formularioTransbankRechazar(){
        cy.get(inputRutTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].rut)
        cy.get(inputClaveTransbank,{timeout:100000}).should('be.visible').type(formularioAuthenticator['FormularioTarjetaAprobadaRedcompra'].clave)
        cy.get(btnAceptar,{timeout:100000}).should('be.visible').click()
        cy.get(selectorAceptarRechasar,{timeout:100000}).should('be.visible').select('Rechazar')
        cy.get(btnContinuar,{timeout:100000}).should('be.visible').click()
    }
}
const authenticatorWebpayMobile = new AuthenticatorWebpayMobile()
export default authenticatorWebpayMobile