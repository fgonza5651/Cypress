const btnEmpiezaAqui = ".btn-empieza-aqui"
const btnVerMas = ".btn-ver-mas"
const textFAQ = ".cont-texto-faq"
//campos whatssap
const iconoEjecutivo = '.btn-asistencia > p'
const btnWhatssap = '#btn-wsp'
const inputTelefono = '#mat-input-1'
const btnHablarWhatsapp = '#btn_chat_unif_salesforce'
//Seccion cuéntanos ¿ en que situacion te encuentras?
const checkNecesitoAyuda = '#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkQuieroUnaCremacion = '#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkQuieroPlanearCremacion = '#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container'

class LandingCremacionNiMobile {

    ingresarLandingCremacionNI(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/landing/cremacion-necesidad-inmediata')
    }
    //Se hace clic en el boton empieza aqui
    clicBotonEmpiezaAqui(){
        cy.get(btnEmpiezaAqui).should('be.visible').click()
    }

    //Se visualiza el SEO FAQ's del landing de cremacion
    SEOFAQHome(){
        cy.get(btnVerMas).should('be.visible').click()
        cy.get(textFAQ).should('be.visible')
    }

    //Se hace entra al whatssap
    whatssapNI(){
        //se hace clic en el icono de ejecutivo
        cy.get(iconoEjecutivo, {timeout: 10000}).should('be.visible').click()
        //se hace clic en el boton de whatssap
        cy.get(btnWhatssap, {timeout: 1000000}).should('be.visible').click()
        cy.get(inputTelefono, {timeout: 100000}).should('be.visible').type('123456789')
        cy.get(btnHablarWhatsapp,{timeout: 10000}).should('be.visible').click()
    }

     //Se valida la seccion cuentanos, ¿en que situacion te encunetras?
     validarSeccionCuentanos(){
        
        cy.get(checkNecesitoAyuda, {timeout: 100000}).should('be.visible')
        cy.get(checkQuieroUnaCremacion, {timeout: 100000}).should('be.visible')
        cy.get(checkQuieroPlanearCremacion, {timeout: 100000}).should('be.visible')

    }

}
const landingCremacionNiMobile = new LandingCremacionNiMobile()
export default landingCremacionNiMobile;