
const btnCompraEnLinea = '#click_compra_linea_header'
const inputNumeroCompraEnLinea = '#mat-input-0'
const inputNumeroLlamanos = '.mat-form-field-flex'
const btnLlamanos = '#btn_llamanos_banner_landing_sepultura_nif'
const btnWhatsapp = '.btn-wsp-banner'
const btnIniciarCotizacion = '.btn-iniciar-cot'
const btnSeleccionarNecesidad = '.btn-contacto'

//campo ejecutiva en linea
const inputNumeroAsesoraEnLinea = '#mat-input-1'

//Textos y titulos a buscar
const titulo1 = '¿Qué pasa cuando un asesor te contacta?'
const titulo2 = '¿Cómo adquirir tu sepultura para una necesidad pronta?'
//Descubres nuestros parques y donde se ubican
const btnImagenesPAV = ':nth-child(1) > .card-ubicacion-parques > .btn-ver-img'
const btnImagenesPCO = ':nth-child(2) > .card-ubicacion-parques > .btn-ver-img'
const btnImagenesPPH = ':nth-child(3) > .card-ubicacion-parques > .btn-ver-img'
const popupDescubrirParques = '#lb-galeria-landing'
const btnCerrarPopupDescubrirParques = '#lb-galeria-landing > p > span'



class LandingSepulturaNIF {

    ingresoLandingSepulturaNIF(url){
        cy.visit(url.urlLandingSepulturaNIF)
    }

    //revisa el boton compra en linea, lo preciona y rellena el formulario
    compraEnLinea(formulario){
        cy.get(btnCompraEnLinea,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroCompraEnLinea,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //preciona el llamanos y rellena el formulario
    llamanos(formulario){
        cy.get(btnLlamanos,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroLlamanos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //preciona el chat whatsapp y rellena el formulario
    chatWhatsapp(formulario){
        cy.get(btnWhatsapp,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroAsesoraEnLinea,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //busca el texto de "¿Qué pasa cuando un asesor te contacta?" en la pagina
    encontrarTitulo1(){
        cy.contains(titulo1,{timeout:100000})
    }
    //busca el texto de "¿Cómo adquirir tu sepultura para una necesidad inmediata" en la pagina
    encontrarTitulo2(){
        cy.contains(titulo2,{timeout:100000})
    }
    //preciona el boton de iniciar una cotizacion y revisa que realice un scroll hasta el inicio de la pagina
    iniciarUnaCotizacion(){
        cy.get(btnIniciarCotizacion,{timeout:100000}).should('be.visible').click()
        cy.window().its('scrollY').should('equal', 0);
    }
    //preciona el boton ver imagenes del parque americo vespucio y revisa que se despliegue el popup
    descubrePAV(){
        cy.get(btnImagenesPAV,{timeout: 100000}).should('be.visible').click()
        cy.get(popupDescubrirParques,{timeout: 100000}).should('be.visible')
        cy.get(btnCerrarPopupDescubrirParques,{timeout:100000}).should('be.visible').click()
    }
    //preciona el boton ver imagenes del parque cordillera y revisa que se despliegue el popup
    descubrePCO(){
        cy.get(btnImagenesPCO,{timeout: 100000}).should('be.visible').click()
        cy.get(popupDescubrirParques,{timeout: 100000}).should('be.visible')
        cy.get(btnCerrarPopupDescubrirParques,{timeout:100000}).should('be.visible').click()
    }
    //preciona el boton ver imagenes del parque padre hurtado y revisa que se despliegue el popup
    descubrePPH(){
        cy.get(btnImagenesPPH,{timeout: 100000}).should('be.visible').click()
        cy.get(popupDescubrirParques,{timeout: 100000}).should('be.visible')
        cy.get(btnCerrarPopupDescubrirParques,{timeout:100000}).should('be.visible').click()
    }
    //preciona el boton selecciona tu necesidad y revisa que realice un scroll hasta el inicio de la pagina
    seleccionarNecesidad(){
        cy.get(btnSeleccionarNecesidad,{timeout:100000}).should('be.visible').click()
        cy.window().its('scrollY').should('equal', 0);
    }

}

const landingSepulturaNIF = new LandingSepulturaNIF()
export default landingSepulturaNIF;