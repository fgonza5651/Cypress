const btnSostenibilidad = '.cont-tab-noticias > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-3'
const cardsSostenibilidad = '.cont-noticias'
const btnDetalleSostenibilidadInicial = ':nth-child('
const btnDetalleSostenibilidadFinal = ') > .cont-info-comunidad > .link-ver-detalle'

class sostenibilidadPageMobile{

    ingresarSostenibilidad(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/comunidad/sostenibilidad')
    }

    //Se selecciona el apartado Sostenibilidad
    SeleccionarSostenibilidad(){
        cy.get(btnSostenibilidad,{timeout:10000}).should('be.visible').click()
        cy.wait(1000)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion Sostenibilidad
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleSostenibilidad(){
        cy.get(cardsSostenibilidad).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleSostenibilidadInicial + numeroChildrne + btnDetalleSostenibilidadFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const SostenibilidadPageMobile = new sostenibilidadPageMobile()
export default SostenibilidadPageMobile