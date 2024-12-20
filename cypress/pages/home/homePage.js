const btnCremacionNI = ".cont-necesidad-inmediata > .cont-btn-producto > :nth-child(3)"
const btnCremacionNIF = ".cont-necesidad-futura > .cont-btn-producto > :nth-child(2)"
//  menu header
const menuProductosServicios = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]'
const menuCremacion = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/a'
const menuNecesidadInmediata = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/ul/li[1]/a'
const menuNcesidadFutura = '(//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/ul/li[3]/a)[1]'

//Funeraria desde la Barra
const menuFuneraria = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > a'
const menuFunerariaNI = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > ul > li:nth-child(1) > a'
const menuFunerariaNIF = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > ul > li:nth-child(2) > a'
// parques del home
const btnConocerParquePAV = '.cont-card-parque > :nth-child(1) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
const btnConocerParquePCO = ':nth-child(2) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
const btnConocerParquePPH = ':nth-child(3) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
// explorar nuestros productos
const fotoCremacion = ':nth-child(3) > .cont-info-productos'
const btnDetallesCremacion = '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[3]/div/button'


require('cypress-xpath')
import "cypress-real-events/support";

class HomePage {

    //ingreso a la URL de parque del recuerdo
    ingresoHomeParqueDelRecuerdo(){
        cy.visit('/')
    }

    //selecciona de cremacion NI
    seleccionaraCremacionNI(){
        cy.get(btnCremacionNI, { timeout: 10000 }).should('be.visible').click();
    }

    //selecciona de cremacion NIF
    seleccionCremacionNIF(){
        cy.get(btnCremacionNIF, { timeout: 10000 }).should('be.visible').click()
    }

    //se ingresa a cremacion desde el menu del header desde productos y servicios
    ingresoCremacionNIProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 10000 }).realHover();
        cy.xpath(menuCremacion, { timeout: 10000 }).realHover();
        cy.xpath(menuNecesidadInmediata, { timeout: 10000 }).realHover().click()
    }

    //se ingresa a Funeraria desde el menu del header desde productos y servicios
    ingresoFunerariaNIProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 10000 }).realHover();
        cy.get(menuFuneraria, { timeout: 10000 }).realHover();
        cy.get(menuFunerariaNI, { timeout: 10000 }).realHover().click()
    }

    ingresoFunerariaNIFProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 10000 }).realHover();
        cy.get(menuFuneraria, { timeout: 10000 }).realHover();
        cy.get(menuFunerariaNIF, { timeout: 10000 }).realHover().click()
    }
    

    //se ingresa al parque de PAV
    ingresarPAV(){
        cy.get(btnConocerParquePAV, { timeout: 10000 }).should('be.visible').click()
    }

    //se ingresa al parque de PCO
    ingresarPCO(){
        cy.get(btnConocerParquePCO, {timeout: 10000}).should('be.visible').click()
    }

    //Se ingresa el parque de PPH
    ingresaPPH(){
        cy.get(btnConocerParquePPH,{timeout: 10000}).should('be.visible').click()
    }

    //Se ingresa a la cremacion desde el home
    ingresarCremacion(){
        cy.get(fotoCremacion,{timeout: 100000}).should('be.visible').realHover()
        cy.xpath(btnDetallesCremacion, {timeout: 1000000}).should('be.visible').click()
    }

    //Se ingresa a la cremacion
    ingresarCremacionNecesidadFutura(){
        cy.get(menuProductosServicios, {timeout: 100000}).should('be.visible').realHover()
        cy.get(menuCremacion, {timeout: 100000}).should('be.visible').realHover()
        cy.get(menuNcesidadFutura, {timeout: 100000}).should('be.visible').realHover()
    }

}
const homePage = new HomePage()
export default homePage;