//formulario cremacion NF
const inputNombre = '#checkout-info-input-name'
const inputApellidoPaterno = '#checkout-info-input-last-name'
const inputApellidoMaterno = '#checkout-info-input-last-name'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '#checkout-info-input-mail'
const inputDetalleNecesitasCotizar = '#mat-input-5'
const btnSolicitarAsesoria = '#cont-landing-cre-tres > div.contenedor-banner-navegacion.ng-star-inserted > div > div.cont-padding-contacto-ayuda > div > div > div > button'
//Hablar con una ejecutiva
const btnEjecutivaLinea = '#chatSalesforce > div > p'
const btnOtroTipoSolicitudes = '#mat-tab-content-1-0 > div > div.cont-btns-contactos.ng-star-inserted > button:nth-child(3)'
const btnHablarConAsesora = '#btn-wsp'
const inputTelefonoWhatsapp = '#mat-input-1'
const btnHablarWhatsapp = '#chatSalesforce'
const inputNombreWhatsapp = '#FirstName'
const inputApellido = '#LastName'
const inputEmail = '#Email'
const btnInicarChat = '#page-top > div.modalContainer.sidebarMaximized.layout-docked.embeddedServiceSidebar > div > div > div.activeFeature.hideWhileLoading > div > div > div > div.buttonWrapper.embeddedServiceSidebarForm > button > span'
//Tour virtual
const btnHacerTourVirtuall = '#grilla-galeria-servicios-lading > div.cont-titulo-btn-galeria > button'
const popUpTourVirtual = '#lightbox-tour-virtual > div > swiper > div > div'


class landingCremacionNF {

    //Se envia formulario en cremacion necesidad futura
    formularioCremacion(){
      
        //Llamar la variables del archivo Cypress.env
        const formularioLanding = Cypress.env('Formulario')

          //Se rellena el formulario
        cy.get(inputNombre, {timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].nombre)
        cy.get(inputApellidoPaterno, {timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellido)
        cy.get(inputApellidoMaterno, {timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellidoMaterno)
        cy.get(inputTelefono, {timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
        cy.get(inputCorreo, {timeout: 100000}).should('be.visible').type('Q@q.cl')
        cy.get(inputDetalleNecesitasCotizar, {timeout: 100000}).should('be.visible').type('Prueba QA')

        //Se hace clic en el boton solicitar asesoria y cotizacion
        cy.get(btnSolicitarAsesoria, {timeout: 100000}).should('be.visible').click()
    }

    //Se realiza el flujo de whatsapp 
    hablarConEjecutivoWhatsapp(){

        cy.get(btnEjecutivaLinea, {timeout: 100000}).should('be.visible').click()
        cy.get(btnHablarConAsesora, {timeout: 100000}).should('be.visible').click()
        cy.get(inputTelefonoWhatsapp, {timeout: 100000}).should('be.visible').type('123456789')
        cy.get(btnHablarWhatsapp, {timeout: 100000}).should('be.visible').click()
    }

    //flujo hablar ejecutivo otro tipo de solicitudes
    otrosTipoSolicitudes(){
        cy.get(btnEjecutivaLinea, {timeout: 100000}).should('be.visible').click()
        cy.get(btnOtroTipoSolicitudes, {timeout: 100000}).should('be.visible').click()
        //Se rellana el formulario
        cy.get(inputNombreWhatsapp, {timeout: 100000}).should('be.visible').type('123456789')
        cy.get(inputApellido, {timeout: 100000}).should('be.visible').type('123456789')
        cy.get(inputEmail, {timeout: 100000}).should('be.visible').type('123456789')
        //Se hace clic en el boton inciar chat
        cy.get(btnInicarChat, {timeout: 100000}).should('be.visible').click()
    }

    //tour virtual
    tourVirtual(){
        cy.get(btnHacerTourVirtuall,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTourVirtual,{timeout: 100000}).should('be.visible')
    }

}