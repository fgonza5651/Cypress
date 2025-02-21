const btnHablarLinea = '#chatSalesforce'
const btnHablarAsesora = '#btn-wsp'
const btnOtraSolicitud = '.cont-btns-contactos > :nth-child(3)'
//formulario whassap
const inputNumeroWhassap = '#mat-input-1'
const btnWhassap = '#btn_chat_unif_salesforce'
//formulario otro servicio
const inputNombre = '#FirstName'
const inputApellido = '#LastName'
const inputNumero = '#Email'
const btnIniciarChat = '.startButton'
const chatVirtual = '.messageArea'

const formulario = Cypress.env('Formulario');

//funcion para crear correo aleatorio
function generarCorreoAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const longitudUsuario = 8; // longitud del nombre de usuario
    const longitudDominio = 5; // longitud del dominio
    let usuario = '';
    let dominio = '';
  
    for (let i = 0; i < longitudUsuario; i++) {
      usuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    for (let i = 0; i < longitudDominio; i++) {
      dominio += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    const correo = `${usuario}@${dominio}.com`;
    return correo;
  }

class chatPageMobile {

    seleccionarHablarAsesora(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnHablarLinea,{timeout:10000}).should('be.visible').click()
        cy.get(btnHablarAsesora,{timeout:10000}).should('be.visible').click()
        cy.get(inputNumeroWhassap,{timeout:10000}).should('be.visible').type(formulario['FormularioFunnel'].telefono)
        cy.get(btnWhassap,{timeout:10000}).should('be.visible').click()
        cy.url().should('include', 'https://wa.me/',{timeout:10000})
    }
    
    seleccionarOtroSolicitud(){
        let correoRandom = generarCorreoAleatorio();
        cy.get(btnHablarLinea,{timeout:10000}).should('be.visible').click()
        cy.get(btnOtraSolicitud,{timeout:10000}).should('be.visible').click()
        cy.get(inputNombre, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].Nombre)
        cy.get(inputApellido, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].apellido)
        cy.get(inputNumero,{timeout:10000}).should('be.visible').type(correoRandom)
    }
}
const ChatPageMobile = new chatPageMobile
export default ChatPageMobile