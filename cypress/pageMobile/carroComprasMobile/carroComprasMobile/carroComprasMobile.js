const resumenCompra = '.resumen-compra'
const btnComprar = '.boton-verde-resumen'
//formulario datos personales
const inputNombreDatosPersonales = '#checkout-info-ff-name > .mat-form-field-wrapper > .mat-form-field-flex'
const inputApellidoDatosPersonales = '#checkout-info-ff-last-name > .mat-form-field-wrapper > .mat-form-field-flex'
const inputRutDatosPersonales = '#checkout-info-ff-rut > .mat-form-field-wrapper > .mat-form-field-flex'
const inputCalleDatosPersonales = ':nth-child(5) > #checkout-info-ff-address > .mat-form-field-wrapper > .mat-form-field-flex'
const inputNroCasaDatosPersonales = ':nth-child(6) > #checkout-info-ff-address > .mat-form-field-wrapper > .mat-form-field-flex'
const inputDptoDatosPersonales = '#checkout-info-ff-depto > .mat-form-field-wrapper > .mat-form-field-flex'
const btnRegionDatosPersonales = '.contenedor-selector-region > #checkout-info-ff-region > .mat-form-field-wrapper > .mat-form-field-flex'
const btnComunaDatosPersonales = '.contenedor-selector-comuna > #checkout-info-ff-region > .mat-form-field-wrapper > .mat-form-field-flex'
const btnLaFloridaScrollComuna = '#mat-option-31 > .mat-option-text'
const btnMetropolitanaScrollRegion = '#mat-option-0 > .mat-option-text'
const btnSiguienteDatosPersonales = '#cdk-accordion-child-0 > .mat-expansion-panel-body > .cont-btn-navegacion > .btn-siguiente'
//formulario contacto
const inputTelefonoContacto = '#checkout-info-ff-telefono > .mat-form-field-wrapper > .mat-form-field-flex'
const inputCorreoContacto = '#checkout-info-ff-mail > .mat-form-field-wrapper > .mat-form-field-flex'
const inputConfirmarCorreoContacto = '#checkout-info-ff-conf-mail > .mat-form-field-wrapper > .mat-form-field-flex'
const btnSiguienteContacto = '#cdk-accordion-child-1 > .mat-expansion-panel-body > .cont-btn-navegacion > .btn-siguiente'
//formulario fallecido Funeraria
const inputNombreFallecidoPrimerServicio = '#fallecidosShow0 > :nth-child(2) > #checkout-benef-ff-benef-name > .mat-form-field-wrapper > .mat-form-field-flex'
const inputApellidoFallecidoPrimerServicio = '#fallecidosShow0 > :nth-child(3) > #checkout-benef-ff-benef-lastname > .mat-form-field-wrapper > .mat-form-field-flex'
const inputRutFallecidoPrimerServicio = '#fallecidosShow0 > .cont-inputs.ng-star-inserted > #checkout-benef-ff-rut > .mat-form-field-wrapper > .mat-form-field-flex'
const btnSiguienteFallecidoPrimerServicio = '#cdk-accordion-child-2 > .mat-expansion-panel-body > .cont-btn-navegacion > #checkout-benef-btn-next'
//formulario fallecido Velatorio
const inputNombreFallecidoSegundoServicio = '#fallecidosShow1 > :nth-child(2) > #checkout-benef-ff-benef-name > .mat-form-field-wrapper > .mat-form-field-flex'
const inputApellidoFallecidoSegundoServicio = '#fallecidosShow1 > :nth-child(3) > #checkout-benef-ff-benef-lastname > .mat-form-field-wrapper > .mat-form-field-flex'
const inputRutFallecidoSegundoServicio = '#fallecidosShow1 > .cont-inputs.ng-star-inserted > #checkout-benef-ff-rut > .mat-form-field-wrapper > .mat-form-field-flex'
const btnSiguienteFallecidoSegundoServicio = '#cdk-accordion-child-3 > .mat-expansion-panel-body > .cont-btn-navegacion > #checkout-benef-btn-next'
//formulario fallecido Cremacion
const inputNombreFallecidoTercerServicio = '#fallecidosShow2 > :nth-child(2) > #checkout-benef-ff-benef-name > .mat-form-field-wrapper > .mat-form-field-flex'
const inputApellidoFallecidoTercerServicio = '#fallecidosShow2 > :nth-child(3) > #checkout-benef-ff-benef-lastname > .mat-form-field-wrapper > .mat-form-field-flex'
const inputRutFallecidoTercerServicio = '#fallecidosShow2 > .cont-inputs.ng-star-inserted > #checkout-benef-ff-rut > .mat-form-field-wrapper > .mat-form-field-flex'
const btnSiguienteFallecidoTercerServicio = '#checkout-benef-btn-next-step'
//Terminos y condiciones e ir a pagar
const btnCheckTerminosCondiciones ='.mat-checkbox-inner-container'
const btnIrPagar = 'corporativo-checkout-metodo-pago > form.ng-valid > #contenido-tab-info-personal > corporativo-checkout-resumen-compra > #contenedor-resumen-compra-mobile > .total > .btn-total > .boton-verde-resumen'


class CarroComprasMobile{

    ingresarCarroCompras(url){
        cy.viewport('iphone-xr')
        cy.visit(url)
    }

    //Revisa que el precio del servicio velatorio en el resumen sea el mismo que el seleccionado 
    revisarVelatorioResumen(){
        cy.get('@precioVelatorioExport').then((precioVelatorioExport) => {
            cy.log(precioVelatorioExport)
            cy.get(resumenCompra).contains(precioVelatorioExport)
        })
    }
    //Revisa que el precio del servicio funeral en el resumen sea el mismo que el seleccionado 
    revisarFunerariaResumen(){
        cy.get('@precioFunerariaExport').then((precioFunerariaExport) => {
            cy.log(precioFunerariaExport)
            cy.get(resumenCompra).contains(precioFunerariaExport)
        })
    }
    //Revisa que el precio del servicio Cremacion en el resumen sea el mismo que el seleccionado 
    revisarCremacionResumen(){
        cy.get('@precioCremacionExport').then((precioCremacionExport) => {
            cy.log(precioCremacionExport)
            cy.get(resumenCompra).contains(precioCremacionExport)
        })
    }
    //Revisa que el precio del servicio descanso en el resumen sea el mismo que el seleccionado 
    revisarDescansoResumen(){
        cy.get('@precioDescansoExport').then((precioDescansoExport) => {
            cy.log(precioDescansoExport)
            cy.get(resumenCompra).contains(precioDescansoExport)
        })
    }
    //preciona el boton ir a comprar
    precionarIrComprar(){
        cy.get(btnComprar,{timeout:100000}).should('be.visible').click()
    }
    //rellena el formulario de datos personales y pasa al siguiente paso
    formularioDatosPersonales(formulario){
        cy.get(inputNombreDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.nombre)
        cy.get(inputApellidoDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.apellido)
        cy.get(inputRutDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.rut)
        cy.get(btnRegionDatosPersonales,{timeout:100000}).should('be.visible').click()
        cy.get(btnMetropolitanaScrollRegion,{timeout:100000}).should('be.visible').click()
        cy.get(btnComunaDatosPersonales,{timeout:100000}).should('be.visible').click()
        cy.get(btnLaFloridaScrollComuna,{timeout:100000}).click()
        cy.get(inputCalleDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.calle)
        cy.get(inputNroCasaDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.nroCalle)
        cy.get(inputDptoDatosPersonales,{timeout:100000}).should('be.visible').type(formulario.FormularioDatosPersonales.dpto)
        cy.get(btnSiguienteDatosPersonales,{timeout:100000}).should('be.visible').click()
    }
    //rellena el formulario de datos de contacto y pasa al siguiente paso
    formularioContacto(formulario){
        cy.get(inputTelefonoContacto,{timeout:100000}).should('be.visible').type(formulario.FormularioContacto.telefono)
        cy.get(inputCorreoContacto,{timeout:100000}).should('be.visible').type(formulario.FormularioContacto.correo)
        cy.get(inputConfirmarCorreoContacto,{timeout:100000}).should('be.visible').type(formulario.FormularioContacto.correo)
        cy.get(btnSiguienteContacto,{timeout:100000}).should('be.visible').click()
    }
    //rellena el formulario de datos del fallecido primer servicio
    formularioFallecidoPrimerServico(formulario){
        cy.get(inputNombreFallecidoPrimerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.nombre)
        cy.get(inputApellidoFallecidoPrimerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.apellido)
        cy.get(inputRutFallecidoPrimerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.rut)
    }
    //Pasa al siguiente paso y rellena el formulario de datos del fallecido segundo servicio
    formularioFallecidoSegundoServicio(formulario){
        cy.get(btnSiguienteFallecidoPrimerServicio,{timeout:100000}).should('be.visible').click()
        cy.get(inputNombreFallecidoSegundoServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.nombre)
        cy.get(inputApellidoFallecidoSegundoServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.apellido)
        cy.get(inputRutFallecidoSegundoServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.rut)
    }
    //Pasa al siguiente paso y rellena el formulario de datos del fallecido tercero servicio
    formularioFallecidoTercerServicio(formulario){
        cy.get(btnSiguienteFallecidoSegundoServicio,{timeout:100000}).should('be.visible').click()
        cy.get(inputNombreFallecidoTercerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.nombre)
        cy.get(inputApellidoFallecidoTercerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.apellido)
        cy.get(inputRutFallecidoTercerServicio,{timeout:100000}).should('be.visible').type(formulario.FormularioFallecido.rut)
    }
    //Pasa al siguiente paso, acepta los terminos y condiciones y preciona el boton ir a pagar 
    TerminosCondicionesPagar (){
        cy.get(btnSiguienteFallecidoTercerServicio,{timeout:100000}).should('be.visible').click()
        cy.get(btnCheckTerminosCondiciones,{timeout:100000}).should('be.visible').click()
        cy.wait(1000)
        cy.get(btnIrPagar,{timeout:100000}).should('be.visible').click()
    }
}
const carroComprasMobile = new CarroComprasMobile()
export default carroComprasMobile