const btnMasParque = '.cont-tab-noticias > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-4'
const cardsMasParque = '.cont-noticias'
const btnDetalleMasParqueInicial = ':nth-child('
const btnDetalleMasParqueFinal = ') > .cont-info-comunidad > .link-ver-detalle'

class seccionMasParquePage{

    //Se selecciona el apartado Mas parque
    SeleccionarMasParque(){
        cy.get(btnMasParque,{timeout:10000}).should('be.visible').click()
        cy.wait(1000)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion Mas parque
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleMasParque(){
        cy.get(cardsMasParque).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleMasParqueInicial + numeroChildrne + btnDetalleMasParqueFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const SeccionMasParquePage = new seccionMasParquePage()
export default SeccionMasParquePage