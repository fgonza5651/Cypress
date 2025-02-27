require('cypress-xpath');
const btnCompletarDatos = '//*[@id="single-spa-application:corporativo-funnel"]/corporativo-funnel/corporativo-resumen-pago/div[2]/div[1]/div/button'
//formulario checkout
const inputDireccion = '.mat-form-field.ng-tns-c46-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputRut = '.mat-form-field.ng-tns-c46-7 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputNombre = '#mat-input-2'
const inputApellido = '#mat-input-3'
const inputRutBeneficiario = '.mat-form-field.ng-tns-c46-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const btnContinuar = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//Checkkout cotizacion
const checkTerminosCondiciones = '//*[@id="mat-checkbox-2"]/label'
const btnContinuarCotizacion = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[2]/div/button'


class resumenPagoPage {

    //clic boton completar datos
    completarDatos()
    {
        cy.xpath(btnCompletarDatos, {timeout: 100000}).should('be.visible').click()

    }

    // se rellena los formularios
    formularioComprador(formulario)
    {
        //formulario informacion comprador
        cy.get(inputDireccion,{timeout: 5000}).should('be.visible').type(formulario.FormularioInoformacionComprador.direccion)
        cy.get(inputRut,{timeout: 100000}).should('be.visible').type(formulario.FormularioInoformacionComprador.rut)

        //formulario informacion beneficiario
        cy.get(inputNombre,{timeout: 100000}).should('be.visible').type(formulario.FormularioInformacionBeneficiario.nombre)
        cy.get(inputApellido,{timeout: 100000}).should('be.visible').type(formulario.FormularioInformacionBeneficiario.apellido)
        cy.get(inputRutBeneficiario,{timeout: 100000}).should('be.visible').type(formulario.FormularioInformacionBeneficiario.rut)

        //Se hace clic en el boton continuar
        cy.xpath(btnContinuar,{timeout: 100000}).should('be.visible').click()

    }

    //Se acepta terminos y condiciones
    checkTerminosCondiciones(){

        // Se acepta los terminos y condiciones
        cy.xpath(checkTerminosCondiciones,{timeout:1000000}).should('be.visible').click()

        //Se hace clic en el boton continuar
        cy.xpath(btnContinuarCotizacion,{timeout: 100000}).should('be.visible').click()

        cy.wait(2000)

    }
}
const ResumenPagoPage = new resumenPagoPage()
export default ResumenPagoPage;