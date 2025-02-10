require('cypress-xpath');
//resumen antes del pago
const btnContinuarPagoSepultura = '//*[@id="single-spa-application:corporativo-sepultura"]/corporativo-sepultura/resumen-compra/div[2]/div/div[2]/button'
const btnVerDetallePago = '#cont-general-resumen > div.cont-pagaras-futuro > div.cont-info-pagaras-futuro > div.cont-cuota-mantencion > p > span.mat-menu-trigger.link-detalle'
const btnCerrarVerDetallePago = '.cabecera-tabla-cuotas-futuras > .material-icons-round'
//formulario checkout
const inputDireccion = '.mat-form-field.ng-tns-c31-2 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputRut = '.mat-form-field.ng-tns-c31-3 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
//Checkkout cotizacion
const checkTerminosCondiciones = '//*[@id="mat-checkbox-3"]/label/span[1]'
const btnContinuarCotizacion = '//*[@id="single-spa-application:corporativo-sepultura"]/corporativo-sepultura/formulario-datos/div[2]/div[2]/div[2]/button'


//se llama los datos
const formularioCheckout = Cypress.env('Formulario')

class resumenPagoPageSepultura {

    //clic boton continuar pago
    continuarPago()
    {
        cy.xpath(btnContinuarPagoSepultura, {timeout: 100000}).should('be.visible').click()

    }
    //clic boton ver detalle de pagos
    verDetallePago()
    {
        cy.get(btnVerDetallePago, {timeout: 100000}).should('be.visible').click()
        cy.get(btnCerrarVerDetallePago, {timeout: 100000}).should('be.visible').click()

    }

    // se rellena los formularios
    formularioComprador()
    {
        //formulario informacion comprador
        cy.get(inputDireccion,{timeout: 5000}).should('be.visible').type(formularioCheckout['FormularioInoformacionComprador'].direccion)
        cy.get(inputRut,{timeout: 100000}).should('be.visible').type(formularioCheckout['FormularioInoformacionComprador'].rut)

    }

    //Se acepta terminos y condiciones
    checkTerminosCondiciones(){

        cy.xpath(btnContinuarCotizacion,{timeout: 100000}).should('be.disabled')
        // Se acepta los terminos y condiciones
        cy.xpath(checkTerminosCondiciones,{timeout:1000000}).should('be.visible').click()

        //Se hace clic en el boton continuar
        cy.xpath(btnContinuarCotizacion,{timeout: 100000}).should('be.enabled').click()

    }
}
const ResumenPagoPageSepultura = new resumenPagoPageSepultura()
export default ResumenPagoPageSepultura;