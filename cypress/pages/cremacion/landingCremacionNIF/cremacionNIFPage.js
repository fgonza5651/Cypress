//formulario cremacion NIF
const inputNombre = '#checkout-info-input-name'
const inputApellidoPaterno = '.mat-form-field.ng-tns-c22-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputApellidoMaterno = '.mat-form-field.ng-tns-c22-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '#checkout-info-input-mail'
const inputDetllaCotizar = '#mat-input-5'
const btnSolicitarAsesoria = '.btn-solicitar-asesoria'
//modal del formulario
const btnIrHome = '//*[@id="cont-lb-solicitud-recibida"]/div[2]/button'


class crenacionNIFF {

    ingresarCremacionNIF(){
        cy.visit('https://ic.parquedelrecuerdo.cl/landing/cremacion-pronto-fallecimiento')
    }
    //SE ENVIA FORMULARIO
    enviarFormulario(){

        //Se rellena el formulario
        cy.get(inputNombre, {timeout: 10000}).should('be.visible').type('QA')
        cy.get(inputApellidoPaterno, {timeout: 10000}).should('be.visible').type('TEST')
        cy.get(inputApellidoMaterno, {timeout: 10000}).should('be.visible').type('prueba')
        cy.get(inputTelefono, {timeout: 10000}).should('be.visible').type('123456789')
        cy.get(inputCorreo,{timeout: 10000}).should('be.visible').type('q@q.cl')
        cy.get(inputDetllaCotizar, {timeout: 10000}).should('be.visible').type('Prueba QA automatizacion')
        cy.get(btnSolicitarAsesoria, {timeout: 100000}).should('be.visible').click()
    }

}
const CrenacionNIFF = new crenacionNIFF()
export default CrenacionNIFF;