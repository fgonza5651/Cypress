//Seleccion de parques
const parqueAmericoVespucio = '#card-pav > .mat-checkbox-layout > .mat-checkbox-inner-container'
const parqueCordillera = '#card-pco > .mat-checkbox-layout > .mat-checkbox-inner-container'
const parquePadreHurtado = '#card-pph > .mat-checkbox-layout > .mat-checkbox-inner-container'
//botton continuar
const btnContinuar = ' Continuar'
//formulario funnel
const inputNombre = '#checkout-info-input-name'
const inputApellidoPaterno = '.mat-form-field.ng-tns-c31-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputApellidoMaterno = '.mat-form-field.ng-tns-c31-6 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '.mat-form-field.ng-tns-c31-8 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
//Capacidad de sepulturas
const checkCapacidad3 = '#\\31  > .mat-checkbox-layout'
const checkCapacidad4 = '#\\32 > .mat-checkbox-layout > .mat-checkbox-inner-container';
const checkCapacidad6 ='#\\33 > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkCapacidad8 ='#\\34  > .mat-checkbox-layout > .mat-checkbox-inner-container';
//Rango de precios
const checkEconomico = 'más económico'
const checkTerminoMedio = 'termino medio'
const checkPremium = 'más premium'
//Select de capacidad - Precios - Sectores
const selectSepultura = '#mat-select-value-1 > .mat-select-value-text > .mat-select-min-line'
const selectPrecio = '#mat-select-value-3 > .mat-select-value-text > .mat-select-min-line'
const selectSectores = '#mat-select-value-5 > .mat-select-value-text > .mat-select-min-line'
const btnVerTodasOpciones = '.busqueda-opciones'
const btnCambiarParque = '.btn-cambiar-parque-mobile > span'
//Ubicacion sepulura
const btnVerMapa = '.contenedor-icono-ordenar'
const contenedorCards = '.cont-card-sep .card'
const contenedorCardsMapa = '.contenedor-scroll [class ^="card-seleccionada"]'
const btnContiuarCard = '//*[@id="mat-tab-content-0-2"]/div/corporativo-footer-contacto-no-fixed/div/div[1]/button'
const seleccionImagenCard1 = ':nth-child(2) > .cont-img-galeria > .ver-img-sector-mobile > p'
const popUpImagenCard = '.cont-galeria-img'
const seleccionB1Mapa = '#B1'
const seleccionC20Mapa = '#C20'
const seleccionS24Mapa = '#S24'
//link pdp-sep
const urlPdpSep = 'https://ic.parquedelrecuerdo.cl/sepultura/pdp-sep'
const linkComoEsElSector = '#nivel-uno > :nth-child(2) > .link-modal-mobile'
const linkCapacidadSpultura = '#nivel-dos > .cont-detalle > .link-modal-mobile'
const linkOpcionesFinanciamiento = '#nivel-tres > :nth-child(1) > .link-modal-mobile'
const linkCuantoCuestaMantencion = '#nivel-cuatro > :nth-child(1) > .link-modal-mobile'
const linkOcuparSepultura = '#nivel-cuatro > :nth-child(2) > .link-modal-mobile'
const cerrarPopup = '.icono-cerrar-mobile > .material-icons'
//editar financiemiento
const linkEditarFinanciamiento = '#nivel-cuatro > div:nth-child(5) > div.cont-link-modal-mobile > p.link-modal-financiamiento-mobile'
const precioSubtittle = '.subtitulo-editar > :nth-child(3)'
const checkCredito = '#mat-radio-2 > label'
const checkContado = '#mat-radio-3 > label'
const inputPieAPagar = '#mat-input-2'
const precioPieMinimo = '#cont-financiamiento > form > div.cont-input-pie.ng-star-inserted > label > span'
const selectCuotas = '#mat-select-value-7'
const btn92Cuotas = '#mat-option-105 > .mat-option-text'
const selectCuandoPrimerPago = '.mat-select-placeholder'
const btnSegundoMes = '#mat-option-13 > .mat-option-text'
const precioPie = '.cont-ahora-pagaras'
const precioPagarasPie = '.ahora-pagaras > span'
const precioAhoraPagaras = '.cont-ahora-pagaras > p > span'
const btnGuardarInformacion = '.btn-guardar-financiamiento'
const btnPagar = '.cont-button > .btn-ir-a-pagar'
const verFinanciamineto = '#cont-footer-pdp-sep > div > div.cont-btn.ng-tns-c114-0 > button'
//boton ir a pagar y ver financiamineto 
const btnIrPagar = '.cont-button > .btn-ir-a-pagar'
const btnVerFinanciamineto = '.cont-btn > .btn-ir-a-pagar'
const precioPagarAhora = '#cont-general-resumen > div.cont-pagaras-ahora > p.total-pagaras-ahora'
//Pop up cambiar parque 
const popUpCambiarParque = '#mat-dialog-0'
const btnCambiarParquePopUp = '.cont-btn-accion > .btn-continuar'
const btnCancelarPopUp = '.btn-cancelar'



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

class funerariaFunnelMobile {

    //Se inicia el flujo de funerara funnel
    iniciarFunnel(){
        cy.viewport('iphone-xr')
        cy.visit("https://ic.parquedelrecuerdo.cl/sepultura/funnel")
        cy.clearCookies();   
        cy.clearLocalStorage();
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
        cy.get('button').contains(btnContinuar).should('be.visible').click({force:true})
    }

    //seleccionar capacidad de 3 personas
    seleccion3Capacidad(){

        cy.get(checkCapacidad3, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

    //seleccionar capacidad de 4 personas
    seleccion4Capacidad(){

        cy.get(checkCapacidad4, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

    //seleccionar capacidad de 6 personas
    seleccion6Capacidad(){

        cy.get(checkCapacidad6, {timeout: 100000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()

    }

    //seleccionar capacidad de 8 personas
    seleccion8Capacidad(){

        cy.get(checkCapacidad8, {timeout: 10000}).should('be.visible').click()
        cy.contains(btnContinuar).should('be.visible').click()
        
    }

    //rango de precio economico selecionado
    seleccionPrecioEconomico(){

        cy.contains(checkEconomico, {timeout: 100000}).invoke('css','background-color').then((color1) =>{
            let colorInicial = color1
            cy.contains(checkEconomico, {timeout: 100000}).should('be.visible').click()
            cy.contains(checkEconomico, {timeout: 100000}).invoke('css','color').then((color) =>{
                expect(color).to.not.equal(colorInicial)
                cy.contains(btnContinuar).should('be.visible').click()
            })
        })

    }

    //rango de precio termino medio selecionado
    seleccionPrecioMedio(){

        cy.contains(checkTerminoMedio, {timeout: 100000}).invoke('css','background-color').then((color1) =>{
            let colorInicial = color1
            cy.contains(checkTerminoMedio, {timeout: 100000}).should('be.visible').click()
            cy.contains(checkTerminoMedio, {timeout: 100000}).invoke('css','color').then((color) =>{
                expect(color).to.not.equal(colorInicial)
                cy.contains(btnContinuar).should('be.visible').click()
            })
        })
    }
    
    //rango de precio premium selecionado
    seleccionPrecioPremium(){

        cy.contains(checkPremium, {timeout: 100000}).invoke('css','background-color').then((color1) =>{
            let colorInicial = color1
            cy.contains(checkPremium, {timeout: 100000}).should('be.visible').click()
            cy.contains(checkPremium, {timeout: 100000}).invoke('css','color').then((color) =>{
                expect(color).to.not.equal(colorInicial)
                cy.contains(btnContinuar).should('be.visible').click()
            })
        })
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

        cy.get(contenedorCards, {timeout: 100000}).should('be.visible').invoke('children').then((Cards) =>{
            cy.wrap(Cards.eq(1),{timeout:10000}).should('be.visible').click()
            cy.wait(1000)
            cy.xpath(btnContiuarCard,{timeout:10000}).should('be.visible').click()
            cy.url().should('eq',urlPdpSep)
        })
    }

    //Se seleciona la primera card
    seleccionImagenCard(){
        
        cy.get(seleccionImagenCard1, {timeout: 100000}).should('be.visible').click()
        cy.get(popUpImagenCard, {timeout: 100000}).should('be.visible')

    }
    //Se seleciona sector B1 de PAV
    seleccionSectorB1MapaPAV(){
        
        cy.get(contenedorCards,{timeout:100000}).its('length').then((count) => {
            cy.get(btnVerMapa, {timeout: 100000}).should('be.visible').click()
            cy.get(seleccionB1Mapa, {timeout: 100000}).should('be.visible').click()
            cy.get(contenedorCardsMapa).its('length').should('not.equal',count)
        })
    }
    //Se seleciona sector C32 de PCO
    seleccionSectorC20MapaPCO(){
        cy.get(btnVerMapa, {timeout: 100000}).should('be.visible').click()
        cy.get(seleccionC20Mapa, {timeout: 100000}).should('be.visible').click()
    }
    //Se seleciona sector B1 de PPH
    seleccionSectorS24MapaPPH(){
        
        cy.get(contenedorCards,{timeout: 100000}).its('length').then((count) => {
            cy.get(btnVerMapa, {timeout: 100000}).should('be.visible').click()
            cy.get(seleccionS24Mapa, {timeout: 100000}).should('be.visible').click()
            cy.get(contenedorCardsMapa).its('length').should('not.equal',count)
        })
    }

    
    //Abrir link del pdp-sep
    clickLinkComoEsElSector(){

        cy.get(linkComoEsElSector, {timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkOpcionesFinanciamiento, {timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkCuantoCuestaMantencion, {timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

        cy.get(linkOcuparSepultura, {timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.get(cerrarPopup, {timeout: 100000}).should('be.visible').click()

    }

    //Editar financimiento con credito
    editarFinanciamientoCredito(){
        cy.wait(2000)
        cy.get(linkEditarFinanciamiento, {timeout: 100000}).click()
        cy.get(checkCredito, {timeout: 100000}).should('be.visible').click()
        cy.get(inputPieAPagar, { timeout: 100000 }).should('be.visible').invoke('val').then((inputValue) => {
            cy.get(precioPieMinimo).contains(inputValue)
        });
        cy.get(inputPieAPagar, {timeout: 100000}).should('be.visible').clear().type('300000')
        cy.get(selectCuotas, {timeout: 100000}).should('be.visible').click()
        cy.get(btn92Cuotas, {timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.get(selectCuandoPrimerPago, { timeout: 100000 }).should('be.visible').click()
        cy.get(btnSegundoMes, { timeout: 100000 }).should('be.visible').click()
        cy.get(precioPagarasPie, { timeout: 100000 }).invoke('text').then((precioPagaras)=>{
            cy.wrap(precioPagaras).as('PrecioPagarPie')
        })
        cy.get(btnGuardarInformacion, {timeout: 100000}).should('be.visible').click()
        
    }
    
    editarFinanciamientoContado(){
        cy.wait(2000)
        cy.get(linkEditarFinanciamiento, {timeout: 100000}).click()
        cy.get(checkContado, {timeout: 100000}).should('be.visible').click()
        cy.get(precioPie, {timeout: 100000}).invoke('text').then((textPrecioPie) =>{
            const numPrecioPie = textPrecioPie.match(/[\d,.]+/)[0]
            cy.get(precioSubtittle,{timeout: 100000}).contains(numPrecioPie)
        })
        cy.get(precioAhoraPagaras, { timeout: 100000 }).invoke('text').then((precioPagaras)=>{
            cy.wrap(precioPagaras).as('PrecioPagarPie')
        })
        cy.get(btnGuardarInformacion, {timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
    }

    //Preciona ir a pagar y revisa que el valor del resumen sea igual que el del pago
    irPagar(){
        cy.get(btnIrPagar, {timeout: 100000}).should('be.visible').click()
        cy.get('@PrecioPagarPie').then((precioPagarPie) => {
            cy.get(precioPagarAhora, {timeout: 100000}).invoke('text').then((texto) =>{
                const textoLimpio = texto.split('|')[0].trim()
                expect(textoLimpio).to.eq(precioPagarPie)
            })
        })
    }
    
    //preciona ver financiamiento 
    verFinanciamineto(){
        cy.wait(2000)
        cy.get(btnVerFinanciamineto, {timeout: 100000}).should('be.visible').click()
    }

    //Preciona cambiar parque del sector ubicaicon de la sepultura
    cambiarParque(){
        cy.get(contenedorCards, {timeout: 100000}).should('be.visible')
        cy.get(btnCambiarParque, {timeout: 100000}).should('be.visible').click()
        cy.get(popUpCambiarParque, {timeout: 100000}).should('be.visible')
        cy.get(btnCambiarParquePopUp, {timeout: 100000}).should('be.visible').click()
        
    }
}
const FunerariaFunnelMobile = new funerariaFunnelMobile()
export default FunerariaFunnelMobile;