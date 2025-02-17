const btnActividadesParques = '.cont-tab-noticias > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-1'
const cardsActividades = '.cont-noticias'
const btnDetalleActividadesInicial = ':nth-child('
const btnDetalleActividadesFinal = ') > .cont-info-comunidad > .link-ver-detalle'

class actividadesParquePage{

    //Se selecciona el apartado Actividades en nuestros parques
    SeleccionarActividades(){
        cy.get(btnActividadesParques,{timeout:10000}).should('be.visible').click()
        cy.wait(1000)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion Actividades en nuestros parques
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleActividades(){
        cy.get(cardsActividades).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleActividadesInicial + numeroChildrne + btnDetalleActividadesFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const ActividadesParquePage = new actividadesParquePage()
export default ActividadesParquePage