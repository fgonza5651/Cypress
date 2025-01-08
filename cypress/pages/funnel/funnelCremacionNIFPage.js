const selectRegion = '#mat-select-4 > div'

class funnelCremacionNIF {

    //ingresa al flujo funnel cremacion NIF
    inicioFlujoCremacion(){
        cy.visit('https://preprod.parquedelrecuerdo.cl/funnel/inicio-flujo?producto=cremacion-nif')
    }

    seleccionRegion(){
        cy.get(selectRegion, {timeout: 100000}).should('be.visible').click()
    }
}