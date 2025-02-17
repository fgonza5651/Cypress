const btnTodo = '.cont-tab-noticias > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-0'
const cardsTodo = '.cont-noticias'
const btnDetalleTodoInicial = ':nth-child('
const btnDetalleTodoFinal = ') > .cont-info-comunidad > .link-ver-detalle'

class todoPage{

    //Se selecciona el apartado Todo
    SeleccionarTodo(){
        cy.get(btnTodo,{timeout:10000}).should('be.visible').click()
        cy.wait(1000)
    }

    //Se selecciona de manera aleatoria un "ver detalle" de la seccion todo
    //utilizando el tamaño de hijos de la seccion como numero maxino de elementos 
    SeleccionarDetalleTodo(){
        cy.get(cardsTodo).should('be.visible').invoke('children').then((numeroCards) =>{
            let numeroChildrne = Math.floor(Math.random() * numeroCards.length) + 1
            cy.get(btnDetalleTodoInicial + numeroChildrne + btnDetalleTodoFinal).should('be.visible').click()
            cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
        })
    }

}
const TodoPage = new todoPage()
export default TodoPage