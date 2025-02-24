//Sector calendario actividades
const tituloCalendario = 'Calendario actividades 2024'
const cardsCalendario = '.cont-general-mas-parque > :nth-child(4)'
const btnDetalleCalendarioInicio = ':nth-child(4) > :nth-child('
const btnDetalleCalendarioFinal = ') > .cont-info-mas-parque > .link-ver-detalle'

//Sector Noticias y actividades
const tituloNoticias = 'Noticias actividades'
const cardsNoticias = '.cont-general-mas-parque > :nth-child(6)'
const btnDetalleNoticiaInicial = ':nth-child(6) > :nth-child('
const btnDetalleNoticiaFinal = ') > .cont-info-mas-parque > .link-ver-detalle'

class masParquesPageMobile{

    IngresarMasParques(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
    }
    
    //Se revisa si la pagina contiene los titulos "Noticias actividades" y "Calendario actividades 2024"
    RevisarTitulos(){
        cy.contains(tituloCalendario)
        cy.contains(tituloNoticias)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion calendario
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleCalendario(){
        cy.get(cardsCalendario).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleCalendarioInicio + numeroChildrne + btnDetalleCalendarioFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion Noticias
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleNoticias(){
        cy.get(cardsNoticias).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleNoticiaInicial + numeroChildrne + btnDetalleNoticiaFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const MasparquesPageMobile = new masParquesPageMobile()
export default MasparquesPageMobile