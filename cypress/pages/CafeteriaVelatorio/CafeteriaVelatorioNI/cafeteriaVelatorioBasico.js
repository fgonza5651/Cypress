const slideCarrito = '#sidenav-carro-compra > div'
//Pop up continuar sin servicio
const popUpSinServicio = '#lightbox-servicios-adicionales'
const btnServicioEstandar = '#lightbox-servicios-adicionales > div.cont-btn-contacto > button.btn-cafeteria-estandar'
const btnServicioPremium = '#lightbox-servicios-adicionales > div.cont-btn-contacto > button.btn-cafeteria-premium'
const btnSinServicio = '#lightbox-servicios-adicionales > div.cont-btn-contacto > button.btn-sin-cafeteria'
//Agregar al carrito
const btnAgregarCarrito = '.contenedor-caracteristicas-pdp > .contenedor-detalle-producto > .contenedor-total-pagar > .btn-agragar-compra'
const btnCarroCompras = '#contenedor-sidenav-carro-compra > div.cont-carro > div.cont-total-pagar > button'
//Botones de velatorio
const btnCafeteriaEstandar = '#mat-checkbox-1 > .mat-checkbox-layout >.mat-checkbox-inner-container'
const checkCafeteriaEstandar = '#mat-checkbox-1 > label > span.mat-checkbox-inner-container [class^="mat-checkbox-input cdk-visually-hidden"]'
const btnCafeteriaPremium = '#mat-checkbox-2 > .mat-checkbox-layout >.mat-checkbox-inner-container  '
const checkCafeteriaPremium = '#mat-checkbox-2 > label > span.mat-checkbox-inner-container [class^="mat-checkbox-input cdk-visually-hidden"]'
//Sector Ver detalle
const btnAgregarServicioVerDetalle = '.btn-agregar-ssaa'
const popUpServicioVerDetalle = '.grilla-lightbox-ssaa'
const btnVerDetalleCafeteriaEstandar = ':nth-child(2) > .valor-ss-aa > .btn-ver-detalle-desktop'
const btnVerDetalleCafeteriaPremium = ':nth-child(3) > .valor-ss-aa > .btn-ver-detalle-desktop'


class cafeteriaVelatorioBasico {
    
    //ingreso a la URL de Cremacion Basico NI
    ingresoCafetariaVelatorioBasico(){
        cy.visit('https://ic.parquedelrecuerdo.cl/productos/velatorio/velatorio-ni')
        cy.clearCookies();   
        cy.clearLocalStorage();
    }
    agregarCarritoSinServicio(){
        cy.wait(2000)
        cy.get(btnAgregarCarrito,{timeout:100000}).should('be.visible').click()
        cy.get(popUpSinServicio,{timeout:100000}).should('be.visible')
    }
    servicioEstandarPopup(){
        cy.get(btnServicioEstandar,{timeout:100000}).should('be.visible').click()
    }
    servicioPremiumPopup(){
        cy.get(btnServicioPremium,{timeout:100000}).should('be.visible').click()
    }
    sinServicioPopup(){
        cy.get(btnSinServicio,{timeout:100000}).should('be.visible').click()
    }

    precionarAgregarCarrito(){
        cy.wait(2000)
        cy.get(btnAgregarCarrito,{timeout:100000}).should('be.visible').click()
        cy.get(slideCarrito,{timeout:100000}).should('be.visible')
    }
    precionarCarroCompras(){
        cy.get(btnCarroCompras,{timeout:100000}).should('be.visible').click()
    }

    AgregarCafeteriaEstandar (){
        cy.get(btnCafeteriaEstandar,{timeout:100000}).should('be.visible').click()
        cy.get(checkCafeteriaPremium,{timeout:100000}).should('have.attr', 'aria-checked', 'false')
    }
    AgregarCafeteriaPremium (){
        cy.get(btnCafeteriaPremium,{timeout:100000}).should('be.visible').click()
        cy.get(checkCafeteriaEstandar,{timeout:100000}).should('have.attr', 'aria-checked', 'false')
    }

    verDetalleEstandar(){
        cy.wait(2000)
        cy.get(btnVerDetalleCafeteriaEstandar,{timeout:100000}).should('be.visible').click()
    }
    verDetallePremium (){
        cy.wait(2000)
        cy.get(btnVerDetalleCafeteriaPremium,{timeout:100000}).should('be.visible').click()
    }
    AgregarServicioDetalle(){
        cy.get(popUpServicioVerDetalle,{timeout:100000}).should('be.visible')
        cy.get(btnAgregarServicioVerDetalle,{timeout:100000}).should('be.visible').click()
    }
}

const CafeteriaVelatorioBasico = new cafeteriaVelatorioBasico()
export default CafeteriaVelatorioBasico