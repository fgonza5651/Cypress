//Seleccion de parques
const parqueAmericoVespucio = '#card-pav > .mat-checkbox-layout > .mat-checkbox-inner-container'
const parqueCordillera = '#card-pco > .mat-checkbox-layout > .mat-checkbox-inner-container'
const parquePadreHurtado = '#card-pph > .mat-checkbox-layout > .mat-checkbox-inner-container'
//botton continuar
const btnContinuar = 'Continuar'
//formulario funnel
const inputNombre = '#checkout-info-input-name'
const inputApellidoPaterno = '.mat-form-field.ng-tns-c31-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputApellidoMaterno = '.mat-form-field.ng-tns-c31-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '.mat-form-field.ng-tns-c31-8 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
//Capacidad de sepulturas
const checkCapacidad4 = '#\\32 > .mat-checkbox-layout > .mat-checkbox-inner-container';
const checkCapacidad6 =''
const checkCapacidad8 ='#\\34  > .mat-checkbox-layout > .mat-checkbox-inner-container';
//Rango de precios
const checkEconomico = 'Quiero lo más económico'
const checkTerminoMedio = 'Opciones de termino medio'
const checkPremium = 'Quiero lo más premium'
//Select de capacidad - Precios - Sectores
const selectSepultura = '#mat-select-value-1 > .mat-select-value-text > .mat-select-min-line'
const selectPrecio = '#mat-select-value-3 > .mat-select-value-text > .mat-select-min-line'
const selectSectores = '#mat-select-value-5 > .mat-select-value-text > .mat-select-min-line'
const btnVerTodasOpciones = '.busqueda-opciones'
//Ubicacion sepulura
const seleccionCard1 = ':nth-child(2) > .cont-info-sep > :nth-child(1) > ul'
//link pdp-sep
const linkComoEsElSector = '#nivel-uno > :nth-child(2) > .link-modal'
const linkCapacidadSpultura = '#nivel-dos > .cont-detalle > .link-modal'
const linkOpcionesFinanciamiento = '#nivel-tres > :nth-child(1) > .link-modal'
const linkCuantoCuestaMantencion = '#nivel-cuatro > :nth-child(1) > .link-modal'
const linkOcuparSepultura = '#nivel-cuatro > :nth-child(2) > .link-modal'
const cerrarPopup = '.cont-titulo-cerrar > .material-icons'
//editar financiemiento
const linkEditarFinanciamiento = ':nth-child(4) > .link-modal'
const checkCredito = '#mat-radio-2 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
const checkContado = '#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle'
const inputPieAPagar = '#mat-input-0'
const selectCuotas = '.mat-select-placeholder'
const btnGuardarInformacion = '.btn-guardar-financiamiento'


//variables
const formulario = Cypress.env('Formulario');

//funcion para crear correo aleatorio
function generarCorreoAleatorio() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const longitudUsuario = 8; // longitud del nombre de usuario
    const longitudDominio = 5; // longitud del dominio
    let usuario = '';
    let dominio = '';
  
    for (let i = 0; i < longitudUsuario; i++) {
      usuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    for (let i = 0; i < longitudDominio; i++) {
      dominio += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    const correo = `${usuario}@${dominio}.com`;
    return correo;
  }

class funerariaFunnel {

    //Se inicia el flujo de funerara funnel
    iniciarFunnel(){

        cy.visit("https://ic.parquedelrecuerdo.cl/sepultura/funnel")
        cy.get(parqueAmericoVespucio, {timeout: 100000}).should('be.visible')
        cy.get(parqueCordillera, {timeout: 100000}).should('be.visible')
        cy.get(parquePadreHurtado, {timeout: 100000}).should('be.visible')

    }

    //Seleccionar parque Americo Vespucio y continuar
    seleccionarPAV(){

        cy.get(parqueAmericoVespucio, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar, {timeout: 100000}).should('be.visible').click()
    }

    //Seleccionar parque cordillera y continuar
    seleccionarPCO(){

        cy.get(parqueCordillera, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar, {timeout: 100000}).should('be.visible').click()
    }

    //Seleccionar parque Padre Hurtado y continuar
    seleccionarPPH(){

        cy.get(parquePadreHurtado, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar, {timeout: 100000}).should('be.visible').click()
    }

    //Rellenar los datos del formulario
    rellernarFormulario(){

        const correoRandom = generarCorreoAleatorio();
        //Se rellena formulario 
        cy.get(inputNombre, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].Nombre)
        cy.get(inputApellidoPaterno, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].apellido)
        cy.get(inputApellidoMaterno, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].apellidoMaterno)
        cy.get(inputTelefono, {timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].telefono)
        cy.get(inputCorreo, {timeout: 100000}).should('be.visible').type(correoRandom)
        
        //Se hace clic en el boton continuar
        cy.contains(btnContinuar).should('be.visible').click()
    }

    //seleccionar capacidad de 4 personas
    seleccion4Capacidad(){

        cy.get(checkCapacidad4, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

    //seleccionar capacidad de 8 personas
    seleccion8Capacidad(){

        cy.get(checkCapacidad8, {timeout: 10000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()
        
    }

    //rango de precio economico selecionado
    seleccionPrecioEconomico(){

        cy.contains(checkEconomico, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

     //rango de precio termino medio selecionado
    seleccionPrecioEconomico(){

        cy.contains(checkTerminoMedio, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

      //rango de precio termino medio selecionado
      seleccionPrecioEconomico(){

        cy.contains(checkTerminoMedio, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()
    }

    //select de capacidadades
    selectCapacidadSepultura(){

        cy.get(selectSepultura, {timeout: 100000}).should('be.visible').click()
    
    }

    //Select de rango de precio
    selectRangoPrecio(){

        cy.get(selectPrecio, {timeout: 100000}).should('be.visible').click()

    }

     //Select de los sectores
     selectSectores(){

        cy.get(selectSectores, {timeout: 100000}).should('be.visible').click()
    }

    //Se seleciona la primera card
    seleccionCard(){

        cy.get(seleccionCard1, {timeout: 100000}).should('be.visible').click()
    }

    //Abrir link del pdp-sep
    clickLinkComoEsElSector(){

        cy.get(linkComoEsElSector, {timeout: 100000}).should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkCapacidadSpultura, {timeout: 100000}).should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkOpcionesFinanciamiento, {timeout: 100000}).should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkCuantoCuestaMantencion, {timeout: 100000}).should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkOcuparSepultura, {timeout: 100000}).should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

    }

    //Editar financimiento con credito
    editarFinanciamientoCredito(){

        cy.get(linkEditarFinanciamiento, {timeout: 100000}).should('be.visible').click()
        cy.get(checkCredito, {timeout: 100000}).should('be.visible').click()
        cy.get(inputPieAPagar, {timeout: 100000}).should('be.visible').type('300000')
        cy.get(selectCuotas, {timeout: 100000}).should('be.visible')

    }

    editarFinanciamientoContado(){

        cy.get(linkEditarFinanciamiento, {timeout: 100000}).should('be.visible')

    }

}
const FunerariaFunnel = new funerariaFunnel()
export default FunerariaFunnel;