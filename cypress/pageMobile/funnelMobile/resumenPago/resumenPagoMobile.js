const btnCompletarDatos = '//*[@id="single-spa-application:corporativo-funnel"]/corporativo-funnel/corporativo-resumen-pago/div[2]/div[1]/div/button'
//formulario checkout
const inputDireccion = '.mat-form-field.ng-tns-c46-8 > .mat-form-field-wrapper > .mat-form-field-flex'
const inputRut = '.mat-form-field.ng-tns-c46-9 > .mat-form-field-wrapper > .mat-form-field-flex'
const inputNombre = '#mat-input-2'
const inputApellido = '#mat-input-3'
const inputRutBeneficiario = '.mat-form-field.ng-tns-c46-14 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-rut'
const btnContinuar = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//Checkkout cotizacion
const checkTerminosCondiciones = '#mat-checkbox-1 > label > span.mat-checkbox-inner-container'
const btnContinuarCotizacion = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[2]/div/button'


class resumenPagoPageMobile {

    //clic boton completar datos
    completarDatos()
    {
        cy.xpath(btnCompletarDatos, {timeout: 100000}).should('be.visible').click()

    }

    // se rellena los formularios
    formularioComprador(formulario)
    {
        //formulario informacion comprador
        cy.get(inputDireccion,{timeout: 100000}).should('be.visible').type(formulario.FormularioInoformacionComprador.direccion)
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
        cy.get(checkTerminosCondiciones,{timeout:1000000}).should('be.visible').click()

        //Se hace clic en el boton continuar
        cy.xpath(btnContinuarCotizacion,{timeout: 100000}).should('be.visible').click()

    }
}
const ResumenPagoPageMobile = new resumenPagoPageMobile()
export default ResumenPagoPageMobile;