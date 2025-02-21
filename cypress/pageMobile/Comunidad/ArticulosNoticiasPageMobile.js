const btnArticulosNoticias = '.cont-tab-noticias > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-2'
const cardsNoticias = '.cont-noticias'
const btnDetalleNoticiaInicial = ':nth-child('
const btnDetalleNoticiaFinal = ') > .cont-info-comunidad > .link-ver-detalle'

class articulosNoticiasPageMobile{

    ingresarArticulosNoticias(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/comunidad/articulos-y-noticias')
    }
    //Se selecciona el apartado articulos y noticias
    SeleccionarArticulosNoticias(){
        cy.get(btnArticulosNoticias,{timeout:10000}).should('be.visible').click()
        cy.wait(1000)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion articulos y Noticias
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleNoticias(){
        cy.get(cardsNoticias).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleNoticiaInicial + numeroChildrne + btnDetalleNoticiaFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const ArticulosNoticiasPageMobile = new articulosNoticiasPageMobile()
export default ArticulosNoticiasPageMobile