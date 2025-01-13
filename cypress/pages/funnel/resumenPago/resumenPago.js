const btnCompletarDatos = '//*[@id="single-spa-application:corporativo-funnel"]/corporativo-funnel/corporativo-resumen-pago/div[2]/div[1]/div/button'
//formulario checkout
const inputDireccion = '.mat-form-field.ng-tns-c46-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputRut = '.mat-form-field.ng-tns-c46-7 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputNombre = '#mat-input-2'
const inputApellido = '#mat-input-3'
const inputRutBeneficiario = '.mat-form-field.ng-tns-c46-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'

class resumenPagoPage {

    //clic boton completar datos
    completarDatos()
    {
        cy.get(btnCompletarDatos, {timeout: 100000}).should('be.visible').click()

    }

    formularioComprador()
    {

    }
}