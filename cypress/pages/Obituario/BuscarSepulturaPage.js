const cards = '.ng-star-inserted > #cont-banner-accesos > .cont-card-banner'
//A quien deseas buscar
const inputNombreApellido = '.input-pie > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
const btnBuscar = '.btn-buscar-sep'
const selectorZona = '#contenedor-selectores > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
const btnTodosParques = '#mat-option-0 > .mat-option-text'
const btnPAV = '#mat-option-1 > .mat-option-text'
const btnPCO = '#mat-option-2 > .mat-option-text'
const btnPPH = '#mat-option-3 > .mat-option-text'
//Nombres buscar
const NombreTodosParques = 'Matias Alvarez'
const NombrePAV = 'Raul Castillo'
const NombrePCO = 'Ricardo Barria'
const NombrePPH = 'Ignacio Fuentes'
//Cards sepultura
const cardSepultura = '.cont-card-busqueda-sep'
const btnSectorCard = '.cont-info-fallecido > .ubicacion > .cont-ubicacion-mapa > :nth-child(1) > p'
const btnVerMapa = ' .cont-info-fallecido > .ubicacion > .cont-ubicacion-mapa > .ver-mapa'
//Tambien ofrecemos
const btnVerMasFloreria = '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[1]/div/div/a'
const btnVerMasLapidas = '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[2]/div/div/a'
const btnVerMasCeremonia = '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[3]/div/div/a'
const btnVerMasApoyo = '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[4]/div/div/a'
const popUpTambienOfrecemos = '#mat-dialog-0'
const btnHablaEnLinea = '#lightbox-ssaa-a-c > div.contenedor-modal-ssaa > div > div.info-ssaa > div.cont-btns > button.btn-hablar'
const btnIrFloresRecuerdo = '#lightbox-ssaa-flores > div.contenedor-modal-ssaa > div > div.info-ssaa > div.cont-btn-arreglos > button'
//Ceremonias del recuerdo
const textoVerMasPAV = '#mat-tab-content-1-0 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoVerMasPCO = '#mat-tab-content-1-1 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoVerMasPPH = '#mat-tab-content-1-2 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const btnVerMasPAV = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-0'
const btnVerMasPCO = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-1'
const btnVerMasPPH = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-2'

class buscarSepultura{
    
    ingresoBusquedaSepultura(){
        cy.visit('https://ic.parquedelrecuerdo.cl/busqueda/sepultados')
    }

    //Revisa que el banner de cards tenga almenos 1 elemento
    RevisarCard(){
        cy.get(cards,{timeout:10000}).should('be.visible').children().should('have.length.greaterThan',0)
    }

    //Se busca el nombre 'Matias Alvarez' en la opcion todo los parques
    SeleccionarTodosParques(){
        cy.get(inputNombreApellido,{timeout:10000}).should('be.visible').type(NombreTodosParques)
        cy.get(selectorZona,{timeout:10000}).should('be.visible').click()
        cy.get(btnTodosParques,{timeout:10000}).should('be.visible').click()
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.wait(5000)
        cy.get(cardSepultura,{timeout:20000}).should('be.visible')
    }
    
    //Se busca el nombre 'Raul Castillo' en la opcion todo los parques
    SeleccionarPAV(){
        cy.get(inputNombreApellido,{timeout:10000}).should('be.visible').type(NombrePAV)
        cy.get(selectorZona,{timeout:10000}).should('be.visible').click()
        cy.get(btnPAV,{timeout:10000}).should('be.visible').click()
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.wait(5000)
        cy.get(cardSepultura,{timeout:20000}).should('be.visible')
    }

    //Se busca el nombre 'Ricardo Barria' en la opcion todo los parques
    SeleccionarPCO(){
        cy.get(inputNombreApellido,{timeout:10000}).should('be.visible').type(NombrePCO)
        cy.get(selectorZona,{timeout:10000}).should('be.visible').click()
        cy.get(btnPCO,{timeout:10000}).should('be.visible').click()
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.wait(5000)
        cy.get(cardSepultura,{timeout:20000}).should('be.visible')
    }
    
    //Se busca el nombre 'Ignacio Fuentes' en la opcion todo los parques
    SeleccionarPPH(){
        cy.get(inputNombreApellido,{timeout:10000}).should('be.visible').type(NombrePPH)
        cy.get(selectorZona,{timeout:10000}).should('be.visible').click()
        cy.get(btnPPH,{timeout:10000}).should('be.visible').click()
        cy.get(btnBuscar,{timeout:10000}).should('be.visible').click()
        cy.wait(5000)
        cy.get(cardSepultura,{timeout:20000}).should('be.visible')
    }

    //Revisa las cards de PAV, que estas contenga la fecha 21 Junio, 2024 y que tenga mas de 1 servicio pero menos de 4
    RevisarPersonaSector(){
        cy.get(cardSepultura,{timeout:20000}).invoke('children').then((NumeroCards) =>{
            NumeroCards.each((index, element) =>{
                cy.wrap(element).should('be.visible').within(() =>{
                    cy.get(btnSectorCard,{timeout:10000}).should('be.visible').click()
                    cy.log(`Card #${index + 1} verificado`);
                })
            })
        })
    }

    //Revisa las cards de PAV, que estas contenga la fecha 21 Junio, 2024 y que tenga mas de 1 servicio pero menos de 4
    RevisarPersonaVerMapa(){
        cy.get(cardSepultura,{timeout:20000}).invoke('children').then((NumeroCards) =>{
            NumeroCards.each((index, element) =>{
                cy.wrap(element).should('be.visible').within(() =>{
                    cy.get(btnVerMapa,{timeout:10000}).should('be.visible').click()
                    cy.log(`Card #${index + 1} verificado`);
                })
            })
        })
    }

    //Se selecciona el boton ver mas de Floreria
    seleccionarVerMasFloreria(){
        cy.xpath(btnVerMasFloreria,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
    }
    
    //Se selecciona el boton ver mas de Lapidas
    seleccionarVerMasLapidas(){
        cy.xpath(btnVerMasLapidas,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
    }
    
    //Se selecciona el boton ver mas de Ceremonia
    seleccionarVerMasCeremonia(){
        cy.xpath(btnVerMasCeremonia,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
    }
    
    //Se selecciona el boton ver mas de Apoyo coral
    seleccionarVerMasApoyo(){
        cy.xpath(btnVerMasApoyo,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
    }
    
    //Se selecciona el boton hablar con una ejecutiva en linea de Apoyo coral
    seleccionarVerMasApoyoHablaLinea(){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.xpath(btnVerMasApoyo,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
        cy.get(btnHablaEnLinea,{timeout:10000}).should('be.visible').click()
    }
    
    //Se Selecciona ir al sitio Flores del Recuerdo 
    seleccionVerMasFloresIr(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.xpath(btnVerMasFloreria,{timeout:10000}).should('be.visible').click()
        cy.get(popUpTambienOfrecemos,{timeout:10000}).should('be.visible')
        cy.get(btnIrFloresRecuerdo,{timeout: 10000}).click()
        cy.url().should('eq', 'https://flores.parquedelrecuerdo.cl/')
    }
    
    //Se revisa la ceremonia del recuerdo desde tambien te ofrecemos
    revisarCeremoniasRecuerdo(){
        let textoAntes;
        cy.xpath(btnVerMasCeremonia,{timeout:10000}).should('be.visible').click({force:true})
        cy.get(popUpTambienOfrecemos, {timeout: 10000}).contains('Parque Américo Vespucio')
        cy.get(popUpTambienOfrecemos, {timeout: 10000}).contains('Parque Cordillera')
        cy.get(popUpTambienOfrecemos, {timeout: 10000}).contains('Parque Padre Hurtado')
        cy.get(textoVerMasPAV, {timeout: 10000}).invoke('text').then(texto => {
            cy.wait(2000)
            textoAntes = texto;
            cy.get(btnVerMasPCO, {timeout: 10000}).click()
            cy.get(textoVerMasPCO, {timeout: 10000}).invoke('text').should('not.equal', textoAntes);
            cy.get(btnVerMasPPH, {timeout: 10000}).click()
            cy.get(textoVerMasPPH, {timeout: 10000}).invoke('text').should('not.equal', textoAntes);
            cy.get(btnVerMasPAV, {timeout: 10000}).click()
            cy.get(textoVerMasPAV, {timeout: 10000}).invoke('text').should('equal', textoAntes);
        });
        
    }



}
const BuscarSepultura = new buscarSepultura()
export default BuscarSepultura