
const btnCompraEnLinea = '#click_compra_linea_header'
const inputNumeroCompraEnLinea = '#mat-input-0'
const urlHomePage = 'https://ic.parquedelrecuerdo.cl/'
//Formulario Solicitar necesidad
const inputNombreForm = '.mat-form-field.ng-tns-c22-0 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputApellidoForm = '.mat-form-field.ng-tns-c22-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputApellidoMaternoForm = '.mat-form-field.ng-tns-c22-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputTelefonoFrom = '#checkout-info-ff-telefono > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputCorreoForm = '#checkout-info-ff-mail > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputDetallaNecesidadForm = '.text-area-comentario > #checkout-info-ff-name > .mat-form-field-wrapper > .mat-form-field-flex'
const btnSolicitarAsesoria = '.btn-solicitar-asesoria'
//Botones Popup Solicitud
const PopupSolicitud = '#cont-lb-solicitud-recibida'
const btnCierrePopupSolicitud = '#cont-lb-solicitud-recibida > .material-icons'
const btnGoHomePopup = '#cont-lb-solicitud-recibida > div.cont-btn-ir-home > button'
//campo ejecutiva en linea
const btnEjecutiva = '#chatSalesforce'
const btnCerrarEjecutiva = '#chatSalesforce > .material-icons-round'
const btnHablarConAsesora = '#btn-wsp'
const inputNumeroAsesoraEnLinea = '#mat-input-1'
const btnOtraSolicitud = '.cont-btns-contactos > :nth-child(3)'
const inputNombreOtraSolicitud = '#FirstName'
const inputApellidoOtraSolicitud = '#LastName'
const inputEmailOtraSolicitud = '#Email'

const titulo = '¿Qué pasa cuando un asesor te contacta?'
const btnSolicitarAsesoriaFinalPagina = '.btn-contacto'

const formularioLanding = Cypress.env('Formulario')
const textoDetalle = 'Test de prueba form funeraria NF'

class LandingFunerariaNF {
    
    ingresoLandingFunerariaNF(){
        cy.visit('https://ic.parquedelrecuerdo.cl/landing/funeraria-necesidad-futura')
    }

    //preciona el boton de compra en linea y rellena el formulario 
    compraEnLinea(){
        cy.get(btnCompraEnLinea,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroCompraEnLinea,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
    }
    //Rellena el formulario de solicitar asesoria y cierra el popup
    solicitarAsesoriaCierrePopup(){
        cy.get(inputNombreForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].Nombre)
        cy.get(inputApellidoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellido)
        cy.get(inputApellidoMaternoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellidoMaterno)
        cy.get(inputTelefonoFrom,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
        cy.get(inputCorreoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].correo)
        cy.get(inputDetallaNecesidadForm,{timeout:100000}).should('be.visible').type(textoDetalle)
        cy.get(btnSolicitarAsesoria,{timeout: 100000}).should('be.visible').click()
        cy.get(PopupSolicitud,{timeout:100000}).should('be.visible')
        cy.get(btnCierrePopupSolicitud,{timeout: 100000}).should('be.visible').click()
    }
    //Rellena el formulario de solicitar asesoria y preciona el boton de go home
    solicitarAsesoriaGoHome(){
        cy.get(inputNombreForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].Nombre)
        cy.get(inputApellidoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellido)
        cy.get(inputApellidoMaternoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellidoMaterno)
        cy.get(inputTelefonoFrom,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
        cy.get(inputCorreoForm,{timeout:100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].correo)
        cy.get(inputDetallaNecesidadForm,{timeout:100000}).should('be.visible').type(textoDetalle)
        cy.get(btnSolicitarAsesoria,{timeout: 100000}).should('be.visible').click()
        cy.get(PopupSolicitud,{timeout:100000}).should('be.visible')
        cy.get(btnGoHomePopup,{timeout: 100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', urlHomePage)
    }

    //precion el boton hablar con una ejecutiva y seleciona la opicion hablar con asesora de ventas y rellena el formulario
    ejecutivaEnlineaHablar (){
        cy.get(btnEjecutiva,{timeout: 100000}).should('be.visible').click()
        cy.get(btnHablarConAsesora,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroAsesoraEnLinea,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
    }
    //precion el boton hablar con una ejecutiva y seleciona la opicion otro tipo de solicitud y rellena el formulario
    ejecutivaEnlineaOtraSolicitud (){
        cy.get(btnEjecutiva,{timeout: 100000}).should('be.visible').click()
        cy.get(btnOtraSolicitud,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNombreOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].Nombre)
        cy.get(inputApellidoOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellido)
        cy.get(inputEmailOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].correo)
    }
    //busca el texto de "¿Qué pasa cuando un asesor te contacta?" en la pagina
    encontrarTitulo(){
        cy.contains(titulo,{timeout:100000})
    }
    //preciona el boton solicitar asesoria del final de la pagina y verifica que se realice el scroll
    solicitarAsesoriaFinalPagina (){
        cy.get(btnSolicitarAsesoriaFinalPagina, {timeout:100000}).should('be.visible').click();
        cy.window().its('scrollY').should('equal', 0);
    }
}

const landingFunerariaNF = new LandingFunerariaNF()
export default landingFunerariaNF;