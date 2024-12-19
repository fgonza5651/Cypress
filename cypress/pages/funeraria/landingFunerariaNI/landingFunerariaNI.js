
const btnCompraEnLinea = '#click_compra_linea_header'
const inputNumeroCompraEnLinea = '#mat-input-0'
const btnEmpiezaAqui = '.btn-empieza-aqui'
const urlFlujoFunerario = 'https://ic.parquedelrecuerdo.cl/funnel/inicio-flujo?producto=funeraria-ni'
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

class LandingFunerariaNI {

    //revisa el boton compra en linea, lo preciona y rellena el formulario
    compraEnLinea(){
        cy.get(btnCompraEnLinea,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroCompraEnLinea,{timeout: 100000}).should('be.visible').type(formularioLanding['FormularioFunnel'].telefono)
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
    //busca el texto de titulo1 en la pagina
    encontrarTitulo1(){
        cy.contains(titulo1,{timeout:100000})
    }
    //busca el texto de titulo2 en la pagina
    encontrarTitulo2(){
        cy.contains(titulo2,{timeout:100000})
    }
    //preciona el boton de iniciar una cotizacion yrevisa que nos redirecciona a la pagina correcta
    iniciarUnaCotizacion(){
        cy.get(btnIniciarCotizacion,{timeout:100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', urlFlujoFunerario)
    }

}

const landingFunerariaNI = new LandingFunerariaNI()
export default landingFunerariaNI;