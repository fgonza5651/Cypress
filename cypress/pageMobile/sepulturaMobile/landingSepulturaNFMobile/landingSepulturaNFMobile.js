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
const iconInputCorreo = '#checkout-info-ff-mail > div > div.mat-form-field-flex.ng-tns-c22-4 > div.mat-form-field-suffix.ng-tns-c22-4.ng-star-inserted > mat-icon'
//Botones Popup Solicitud
const PopupSolicitud = '#cont-lb-solicitud-recibida'
const btnCierrePopupSolicitud = '#cont-lb-solicitud-recibida > .material-icons'
const btnGoHomePopup = '#cont-lb-solicitud-recibida > div.cont-btn-ir-home > button'

const titulo = '¿Qué pasa cuando un asesor te contacta?'
const btnIniciarCotizacion = ':nth-child(6) > .cont-contacto-dudas > .cont-btns-ayuda > .btn-contacto'
const btnSolicitarAsesoriaFinalPagina = ':nth-child(9) > .cont-contacto-dudas > .cont-btns-ayuda > .btn-contacto'


const textoDetalle = 'Test de prueba form funeraria NF'

class LandingSepulturaNFMobile {

    ingresoLandingSepulturaNF(url){
        cy.viewport('iphone-xr')
        cy.visit(url.urlLandingSepulturaNF)
    }

    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
    }
    //Rellena el formulario de solicitar asesoria con un correo fin formato y verifica que sea rechazado
    solicitarAsesoriaCorreroMalFormato(formulario){
        cy.get(inputNombreForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.Nombre)
        cy.get(inputApellidoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellido)
        cy.get(inputApellidoMaternoForm,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.apellidoMaterno)
        cy.get(inputTelefonoFrom,{timeout:100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
        cy.get(inputCorreoForm,{timeout:100000}).should('be.visible').type('qa')
        cy.get(inputDetallaNecesidadForm,{timeout:100000}).should('be.visible').type(textoDetalle) 
        cy.get(iconInputCorreo,{timeout:100000}).should('be.visible').and('have.css','color','rgb(193, 39, 45)')
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
    solicitarAsesoriaGoHome(url,formulario){
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
    //preciona el boton iniciar una cotizacion y verifica que se realice el scroll
    iniciarCotizacion (){
        cy.get(btnIniciarCotizacion, {timeout:100000}).should('be.visible').click();
        cy.window().its('scrollY').should('equal', 0);
    }
    //preciona el boton solicitar asesoria del final de la pagina y verifica que se realice el scroll
    solicitarAsesoriaFinalPagina (){
        cy.get(btnSolicitarAsesoriaFinalPagina, {timeout:100000}).should('be.visible').click();
        cy.window().its('scrollY').should('equal', 0);
    }
}

const landingSepulturaNFMobile = new LandingSepulturaNFMobile()
export default landingSepulturaNFMobile;