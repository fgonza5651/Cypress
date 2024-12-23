
const btnTelefonoTitulo = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-mobile > img:nth-child(1)'
const popUpTelefonos = '#mat-tab-content-2-0 > .mat-tab-body-content'
const inputNumeroLlamanos = '.mat-form-field-flex'
const btnLlamanos = '#cont-banner-cre-nif > div > div > div.cont-info-banner > div > button.btn-llamanos-banner.ng-star-inserted'
const btnWhatsapp = '#cont-banner-cre-nif > div > div > div.cont-info-banner > div > button.btn-wsp-banner'
const btnIniciarCotizacion = '.btn-iniciar-cot'
const btnSeleccionarNecesidad = '.btn-contacto'

//campo ejecutiva en linea
const btnEjecutiva = '#chatSalesforce'
const btnCerrarEjecutiva = '#chatSalesforce > .material-icons-round'
const btnHablarConAsesora = '#btn-wsp'
const inputNumeroAsesoraEnLinea = '#mat-input-1'
const btnOtraSolicitud = '.cont-btns-contactos > :nth-child(3)'
const inputNombreOtraSolicitud = '#FirstName'
const inputApellidoOtraSolicitud = '#LastName'
const inputEmailOtraSolicitud = '#Email'
//Textos y titulos a buscar
const titulo1 = '¿Qué pasa cuando un asesor te contacta?'
const titulo2 = 'Compra tu sepultura con nuestros asesores expertos'
//Descubres nuestros parques y donde se ubican
const btnImagenesPAV = ':nth-child(1) > .card-ubicacion-parques > .btn-ver-img'
const btnImagenesPCO = ':nth-child(2) > .card-ubicacion-parques > .btn-ver-img'
const btnImagenesPPH = ':nth-child(3) > .card-ubicacion-parques > .btn-ver-img'
const popupDescubrirParques = '#mat-tab-content-0-0 > div > swiper > div.swiper-wrapper > div.swiper-slide.ng-star-inserted.swiper-slide-active'
const btnCerrarPopupDescubrirParques = '#sidenav-imagenes > div > button > span'

const formularioLanding = Cypress.env('Formulario')

class LandingSepulturaNIFMobile {

    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
    }
    //preciona el boton llamanos y rellena el formulario
    llamanos(){
        cy.get(btnLlamanos,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroLlamanos,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
    }
    //preciona el boton llamanos y rellena el formulario
    chatWhatsapp(){
        cy.get(btnWhatsapp,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroAsesoraEnLinea,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
    }
    //precion el boton hablar con una ejecutiva y seleciona la opicion hablar con asesora de ventas y rellena el formulario
    ejecutivaEnlineaHablar (){
        cy.get(btnEjecutiva,{timeout: 100000}).should('be.visible').click()
        cy.get(btnHablarConAsesora,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroAsesoraEnLinea,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
    }
    //precion el boton hablar con una ejecutiva y seleciona la opicion otro tipo de solicitud y rellena el formulario
    ejecutivaEnlineaOtraSolicitud (){
        cy.get(btnEjecutiva,{timeout: 100000}).should('be.visible').click()
        cy.get(btnOtraSolicitud,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNombreOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].Nombre)
        cy.get(inputApellidoOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].apellido)
        cy.get(inputEmailOtraSolicitud,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].correo)
    }
    //busca el texto de "¿Qué pasa cuando un asesor te contacta?" en la pagina
    encontrarTitulo1(){
        cy.contains(titulo1,{timeout:100000})
    }
    //busca el texto de "Compra tu sepultura con nuestros asesores expertos" en la pagina
    encontrarTitulo2(){
        cy.contains(titulo2,{timeout:100000})
    }
    //preciona el boton de iniciar una cotizacion y revisa que se realice un scroll al inicio de la pagina
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
    //preciona el boton selecciona tu necesidad y revisa que se realice un scroll al inicio de la pagina
    seleccionarNecesidad(){
        cy.get(btnSeleccionarNecesidad,{timeout:100000}).should('be.visible').click()
        cy.window().its('scrollY').should('equal', 0);
    }

}

const landingSepulturaNIFMobile = new LandingSepulturaNIFMobile()
export default landingSepulturaNIFMobile;