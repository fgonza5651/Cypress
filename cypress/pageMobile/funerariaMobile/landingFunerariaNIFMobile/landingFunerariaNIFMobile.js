const btnTelefonoTitulo = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-mobile > img:nth-child(1)'
const popUpTelefonos = '#mat-tab-content-2-0 > .mat-tab-body-content'
const btnEmpiezaAqui = '.btn-empieza-aqui'
const urlFlujoFunerario = 'https://ic.parquedelrecuerdo.cl/funnel/inicio-flujo?producto=funeraria-nif'
const btnIniciarCotizacion = '.btn-iniciar-cot'

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
const titulo1 = 'Compra o cotiza un servicio funerario totalmente en linea'
const titulo2 = '¿Cómo es nuestro servicio funerario?'

const formularioLanding = Cypress.env('Formulario')

class LandingFunerariaNIFMobile {

    ingresoLandingFunerariaNIF(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/landing/funeraria-pronto-fallecimiento')
    }
    
    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
    }
    //preciona el boton empieza aqui y revisa que nos redireccione a la pagina correcta
    empiezaAqui (){
        cy.get(btnEmpiezaAqui,{timeout: 100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', urlFlujoFunerario)
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
    //busca el texto de "Compra o cotiza un servicio funerario totalmente en linea" en la pagina
    encontrarTitulo1(){
        cy.contains(titulo1,{timeout:100000})
    }
    //busca el texto de "¿Cómo es nuestro servicio funerario?" en la pagina
    encontrarTitulo2(){
        cy.contains(titulo2,{timeout:100000})
    }
    //preciona el boton de iniciar una cotizacion yrevisa que nos redirecciona a la pagina correcta
    iniciarUnaCotizacion(){
        cy.get(btnIniciarCotizacion,{timeout:100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', urlFlujoFunerario)
    }

}

const landingFunerariaNIFMobile = new LandingFunerariaNIFMobile()
export default landingFunerariaNIFMobile;