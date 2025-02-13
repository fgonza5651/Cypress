//Seguros personales
const btnSegurosPersonales = '#tabs-seguros > :nth-child(1) > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-0'
const btnSmadBasicoPremium = '#tabs-seguro-personas > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-0'
const tituloSmadBasicoPremium = '.cabecera-seguro-smad > h2'
const btnSmadMejoresAños = '#tabs-seguro-personas > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-1'
const tituloSmadMejoresAños = '.cabecera-seguro-mejores > h2'
const btnSmadRepatriacion = '#tabs-seguro-personas > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-2'
const tituloSmadRepatriacion = '.cabecera-seguro-repatriacion > h2'
//Seguros empresas
const btnSegurosEmpresas = '#tabs-seguros > :nth-child(1) > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-1'
const tituloSegurosEmpresas = '.cabecera-seguro-empresa > h2'
//Seguros Incluidos
const btnSegurosIncluidos = '#tabs-seguros > :nth-child(1) > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-2'
const btnDesgravamen = '#mat-tab-label-2-0'
const tituloDesgravamen = '.cabecera-seguro-desgravamen'
const btnCuotaMantencion = '#mat-tab-label-2-1'
const tituloCuotaMantencion = '.cabecera-seguro-mantencion'
const btnSmadColectivo = '#mat-tab-label-2-2'
const tituloSmadColectivo = '.cabecera-seguro-colectivo'


class SegurosPage {
    //Se revisa que el btn seguros personales Smad Basico y premium funcione de manera correcta y el texto coicida
    revisarSegurosPersonalesBasicoPremium(){
        cy.get(btnSegurosPersonales,{timeout:100000}).should('be.visible').click()
        cy.get(btnSmadBasicoPremium,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase().split(" Y")[0]
            cy.get(tituloSmadBasicoPremium).contains(textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros personales Smad mejores años funcione de manera correcta y el texto coicida
    revisarSegurosPersonalesMejoresAños(){
        cy.get(btnSegurosPersonales,{timeout:100000}).should('be.visible').click()
        cy.get(btnSmadMejoresAños,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase()
            cy.get(tituloSmadMejoresAños).contains(textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros personales Smad repatriacion funcione de manera correcta y el texto coicida
    revisarSegurosPersonalesRepatriacion(){
        cy.get(btnSegurosPersonales,{timeout:100000}).should('be.visible').click()
        cy.get(btnSmadRepatriacion,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase()
            cy.get(tituloSmadRepatriacion).contains(textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros empresas funcione de manera correcta y el texto coicida
    revisarSegurosEmpresas(){
        cy.get(btnSegurosEmpresas,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase().slice(0,-1)
            cy.get(tituloSegurosEmpresas).should('have.text',textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros incluidos seguro desgravamen funcione de manera correcta y el texto coicida
    revisarSegurosIncluidosDesgravamen(){
        cy.get(btnSegurosIncluidos,{timeout:100000}).should('be.visible').click()
        cy.get(btnDesgravamen,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase()
            cy.get(tituloDesgravamen).contains(textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros incluidos couta de mantencion funcione de manera correcta y el texto coicida
    revisarSegurosIncluidosCuotaMantencion(){
        cy.get(btnSegurosIncluidos,{timeout:100000}).should('be.visible').click()
        cy.get(btnCuotaMantencion,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase()
            cy.get(tituloCuotaMantencion).contains(textoNormalizado)
        })
    }
    
    //Se revisa que el btn seguros incluidos smad colectivo funcione de manera correcta y el texto coicida
    revisarSegurosIncluidosColectivo(){
        cy.get(btnSegurosIncluidos,{timeout:100000}).should('be.visible').click()
        cy.get(btnSmadColectivo,{timeout:100000}).click().invoke('text').then((textoBtn) =>{
            const textoNormalizado = textoBtn.trim().toUpperCase()
            cy.get(tituloSmadColectivo).contains(textoNormalizado)
        })
    }
}
const segurosPage = new SegurosPage()
export default segurosPage