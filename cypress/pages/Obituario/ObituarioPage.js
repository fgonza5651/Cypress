const cards = '.ng-star-inserted > #cont-banner-accesos > .cont-card-banner'
//Botones para seleccionar fecha 12/12/2024
const inputFecha = '#mat-input-0'
const inputAño = '.mat-calendar-period-button'
const btn2024 = ':nth-child(3) > [data-mat-col="0"]'
const btnDiciembre = ':nth-child(4) > [data-mat-col="3"]'
const btn12 = ':nth-child(3) > [data-mat-col="3"]'
//Botones para seleccionar fecha 08/01/2025
const btn2025 = ':nth-child(3) > [data-mat-col="1"]'
const btnEnero = ':nth-child(2) > [data-mat-col="0"]'
const btn8 = ':nth-child(3) > [data-mat-col="2"]'
//Botones para seleccionar fecha 21/06/2024
const btnJunio = ':nth-child(3) > [data-mat-col="1"]'
const btn21 = ':nth-child(4) > [data-mat-col="4"]'
//Boton para buscar fecha
const btnBuscar = '.btn-calendario'
const cardsObituario = '.cont-card-obituario'
const detalleObituarioCard = '.detalle-obituario'
//Parques obituario
const btnPAV = '.cont-resultados-obituario > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-0'
const btnPCO = '.cont-resultados-obituario > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-1'
const btnPPH = '.cont-resultados-obituario > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-2'

class obituarioPage{

    //Revisa que el banner de cards tenga almenos 1 elemento
    RevisarCard(){
        cy.get(cards,{timeout:10000}).should('be.visible').children().should('have.length.greaterThan',0)
    }
    
    //Selecciona la fecha 12 de diciembre del 2024 y preciona el btn buscar
    Seleccionar12Dic2024(){
        cy.get(inputFecha,{timeout:10000}).should('be.visible').click()
        cy.get(inputAño,{timeout:10000}).should('be.visible').click()
        cy.get(btn2024,{timeout:10000}).should('be.visible').click()
        cy.get(btnDiciembre,{timeout:10000}).should('be.visible').click()
        cy.get(btn12,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
    }

    //Selecciona la fecha 8 de enero del 2025 y preciona el btn buscar
    Seleccionar8Ene2025(){
        cy.get(inputFecha,{timeout:10000}).should('be.visible').click()
        cy.get(inputAño,{timeout:10000}).should('be.visible').click()
        cy.get(btn2025,{timeout:10000}).should('be.visible').click()
        cy.get(btnEnero,{timeout:10000}).should('be.visible').click()
        cy.get(btn8,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
    }

    //Selecciona la fecha 21 de Junio del 2024 y preciona el btn buscar
    Seleccionar21Jun2024(){
        cy.get(inputFecha,{timeout:10000}).should('be.visible').click()
        cy.get(inputAño,{timeout:10000}).should('be.visible').click()
        cy.get(btn2024,{timeout:10000}).should('be.visible').click()
        cy.get(btnJunio,{timeout:10000}).should('be.visible').click()
        cy.get(btn21,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).should('be.visible')
    }

    //Revisa las cards de PAV, que estas contenga la fecha 12 diciembre, 2024 y que tenga mas de 1 servicio pero menos de 4
    RevisarCardObituarioPAV(){
        cy.get(btnPAV,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).invoke('children').then((NumeroCards) =>{
            NumeroCards.each((index, element) =>{
                cy.wrap(element).should('be.visible').within(() =>{
                    cy.get(detalleObituarioCard).invoke('children').then((servicios) =>{
                        expect(servicios.length).to.be.greaterThan(0)
                        expect(servicios.length).to.be.lessThan(4)
                        cy.get(detalleObituarioCard).contains('12 diciembre, 2024');
                        cy.log(`Card #${index + 1} verificado`);
                    })
                })
            })
        })
    }

    //Revisa las cards de PAV, que estas contenga la fecha 8 Enero, 2025 y que tenga mas de 1 servicio pero menos de 4
    RevisarCardObituarioPCO(){
        cy.get(btnPCO,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).invoke('children').then((NumeroCards) =>{
            NumeroCards.each((index, element) =>{
                cy.wrap(element).should('be.visible').within(() =>{
                    cy.get(detalleObituarioCard).invoke('children').then((servicios) =>{
                        expect(servicios.length).to.be.greaterThan(0)
                        expect(servicios.length).to.be.lessThan(4)
                        cy.get(detalleObituarioCard).contains('08 enero, 2025');
                        cy.log(`Card #${index + 1} verificado`);
                    })
                })
            })
        })
    }
    

    //Revisa las cards de PAV, que estas contenga la fecha 21 Junio, 2024 y que tenga mas de 1 servicio pero menos de 4
    RevisarCardObituarioPPH(){
        cy.get(btnPPH,{timeout:10000}).should('be.visible').click()
        cy.get(cardsObituario,{timeout:20000}).invoke('children').then((NumeroCards) =>{
            NumeroCards.each((index, element) =>{
                cy.wrap(element).should('be.visible').within(() =>{
                    cy.get(detalleObituarioCard).invoke('children').then((servicios) =>{
                        expect(servicios.length).to.be.greaterThan(0)
                        expect(servicios.length).to.be.lessThan(4)
                        cy.get(detalleObituarioCard).contains('21 junio, 2024');
                        cy.log(`Card #${index + 1} verificado`);
                    })
                })
            })
        })
    }
}
const ObituarioPage = new obituarioPage()
export default ObituarioPage