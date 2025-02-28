const btnCompraEnLinea = '#click_compra_linea_header'
const inputNumeroCompraEnLinea = '#mat-input-0'
const btnEmpiezaAqui = '.btn-empieza-aqui'
const btnIniciarCotizacion = '.btn-iniciar-cot'
//Textos y titulos a buscar
const titulo1 = 'Compra o cotiza un servicio funerario totalmente en linea'
const titulo2 = '¿Cómo es nuestro servicio funerario?'

class LandingFunerariaNIF {

    ingresoLandingFunerariaNIF(url){
        cy.visit(url.urlLandingFunerariaNIF)
    }

    //revisa el boton compra en linea, lo preciona y rellena el formulario
    compraEnLinea(formulario){
        cy.get(btnCompraEnLinea,{timeout: 100000}).should('be.visible').click()
        cy.get(inputNumeroCompraEnLinea,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //preciona el boton empieza aqui y revisa que nos redireccione a la pagina correcta
    empiezaAqui (url){
        cy.get(btnEmpiezaAqui,{timeout: 100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', url.urlFlujoFunerarioNIF)
    }
    //busca el texto de "Compra o cotiza un servicio funerario totalmente en linea" en la pagina
    encontrarTitulo1(){
        cy.contains(titulo1,{timeout:100000})
    }
    //busca el texto de "¿Cómo es nuestro servicio funerario?" en la pagina
    encontrarTitulo2(){
        cy.contains(titulo2,{timeout:100000})
    }
    //preciona el boton de iniciar una cotizacion y revisa que nos redirecciona a la pagina correcta
    iniciarUnaCotizacion(url){
        cy.get(btnIniciarCotizacion,{timeout:100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', url.urlFlujoFunerarioNIF)
    }

}

const landingFunerariaNIF = new LandingFunerariaNIF()
export default landingFunerariaNIF;