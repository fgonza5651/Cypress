require('cypress-xpath');
//resumen antes del pago
const btnContinuarPagoSepultura = '//*[@id="single-spa-application:corporativo-sepultura"]/corporativo-sepultura/resumen-compra/div[2]/div/div[2]/button'
const btnVerDetallePago = '#cont-general-resumen > div.cont-pagaras-futuro > div.cont-info-pagaras-futuro > div.cont-cuota-mantencion > p > span.mat-menu-trigger.link-detalle'
const btnCerrarVerDetallePago = '.cabecera-tabla-cuotas-futuras > .material-icons-round'
//formulario checkout
const inputDireccion = '#mat-input-0'
const inputRut = '#checkout-info-input-rut'
const btnContinuar = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//Checkkout cotizacion
const checkTerminosCondiciones = '#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnContinuarInactivo = '.btn-continuar-inactivo'
const btnContinuarActivo = '.primary'
const btnContinuarCotizacion = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[2]/div/button'

//se llama los datos
const formularioCheckout = Cypress.env('Formulario')

class resumenPagoPageSepulturaMobile {

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
        cy.get(inputDireccion,{timeout: 100000}).should('be.visible').type(formularioCheckout['FormularioInoformacionComprador'].direccion)
        cy.get(inputRut,{timeout: 100000}).should('be.visible').type(formularioCheckout['FormularioInoformacionComprador'].rut)

    }

    //Se acepta terminos y condiciones
    checkTerminosCondiciones(){
        cy.get(btnContinuarInactivo,{timeout: 100000}).should('be.disabled')

        // Se acepta los terminos y condiciones
        cy.get(checkTerminosCondiciones,{timeout:1000000}).should('be.visible').click()

        //Se hace clic en el boton continuar
        cy.get(btnContinuarActivo,{timeout: 100000}).should('be.enabled').click()

    }
}
const ResumenPagoPageSepulturaMobile = new resumenPagoPageSepulturaMobile()
export default ResumenPagoPageSepulturaMobile;