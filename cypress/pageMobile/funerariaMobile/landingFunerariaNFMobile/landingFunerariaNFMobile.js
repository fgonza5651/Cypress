const btnTelefonoTitulo = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-mobile > img:nth-child(1)'
const popUpTelefonos = '#mat-tab-content-2-0 > .mat-tab-body-content'
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

const textoDetalle = 'Test de prueba form funeraria NF'

class LandingFunerariaNFMobile {

    ingresoLandingFunerariaNF(url){
        cy.viewport('iphone-xr')
        cy.visit(url.urlLandingFunerariaNF)
    }

    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
    }
    //Rellena el formulario de solicitar asesoria y cierra el popup
    solicitarAsesoriaCierrePopup(formulario){
        cy.get(inputNombreForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.Nombre)
        cy.get(inputApellidoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellido)
        cy.get(inputApellidoMaternoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellidoMaterno)
        cy.get(inputTelefonoFrom,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
        cy.get(inputCorreoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.correo)
        cy.get(inputDetallaNecesidadForm,{timeout:100000}).should('be.visible').type(textoDetalle)
        cy.get(btnSolicitarAsesoria,{timeout: 100000}).should('be.visible').click()
        cy.get(PopupSolicitud,{timeout:100000}).should('be.visible')
        cy.get(btnCierrePopupSolicitud,{timeout: 100000}).should('be.visible').click()
    }
    //Rellena el formulario de solicitar asesoria y preciona el boton de go home
    solicitarAsesoriaGoHome(url, formulario){
        cy.get(inputNombreForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.Nombre)
        cy.get(inputApellidoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellido)
        cy.get(inputApellidoMaternoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellidoMaterno)
        cy.get(inputTelefonoFrom,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
        cy.get(inputCorreoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.correo)
        cy.get(inputDetallaNecesidadForm,{timeout:100000}).should('be.visible').type(textoDetalle)
        cy.get(btnSolicitarAsesoria,{timeout: 100000}).should('be.visible').click()
        cy.get(PopupSolicitud,{timeout:100000}).should('be.visible')
        cy.get(btnGoHomePopup,{timeout: 100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', url.urlHome)
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

const landingFunerariaNFMobile = new LandingFunerariaNFMobile()
export default landingFunerariaNFMobile;