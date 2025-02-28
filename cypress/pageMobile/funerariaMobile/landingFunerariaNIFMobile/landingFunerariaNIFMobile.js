const btnTelefonoTitulo = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-mobile > img:nth-child(1)'
const popUpTelefonos = '#mat-tab-content-2-0 > .mat-tab-body-content'
const btnEmpiezaAqui = '.btn-empieza-aqui'
const btnIniciarCotizacion = '.btn-iniciar-cot'
//Textos y titulos a buscar
const titulo1 = 'Compra o cotiza un servicio funerario totalmente en linea'
const titulo2 = '¿Cómo es nuestro servicio funerario?'


class LandingFunerariaNIFMobile {

    ingresoLandingFunerariaNIF(url){
        cy.viewport('iphone-xr')
        cy.visit(url.urlLandingFunerariaNIF)
    }
    
    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
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
    //preciona el boton de iniciar una cotizacion yrevisa que nos redirecciona a la pagina correcta
    iniciarUnaCotizacion(url){
        cy.get(btnIniciarCotizacion,{timeout:100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', url.urlFlujoFunerarioNIF)
    }

}

const landingFunerariaNIFMobile = new LandingFunerariaNIFMobile()
export default landingFunerariaNIFMobile;