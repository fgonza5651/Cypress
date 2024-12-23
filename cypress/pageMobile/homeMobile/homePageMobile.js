const btnMenuDesplegable = '[src="https://stappdeveastus001.blob.core.windows.net/corporativo-ic/media/icons/svg/menu-hamburguesa.svg"]'
const btnProductosServicios = ':nth-child(4) > .a-menu-sidenav'
const btnFunerariaMenu = '#mat-tab-content-0-1 > div > ul > li:nth-child(1) > a'
const btnNecesidadInmeditaFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(2) > a'
const btnProntoFallecimientoFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(3) > a'
const btnNecesidadFuturaFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(4) > a'





class HomePageMobile {
    //ingresa a la pagina desde mobile
    ingresoHomeMobile (){
        cy.viewport('iphone-xr')
        cy.visit('/')
    }
    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad inmediata de la saccion Productos y servicios
    ingresoFunerariaNIProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadInmeditaFuneraria, { timeout: 10000 }).should('be.visible').click();
    }
    //Ingresa desde el menu desplegable a la seccion Funeraria pronto fallecimineto  de la saccion Productos y servicios
    ingresoFunerariaNIFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProntoFallecimientoFuneraria, { timeout: 10000 }).should('be.visible').click();
    }

    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad futura de la saccion Productos y servicios
    ingresoFunerariaNFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadFuturaFuneraria, { timeout: 10000 }).should('be.visible').click();
    }
}

const homePageMobile = new HomePageMobile()
export default homePageMobile;