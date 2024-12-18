const cremacion = ":nth-child(3) > .cont-info-productos"
const btnVerDetallesCremacion = '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[3]/div/button'

class pavHome {

    //Se selecciona la cremacion desde el parque PAV
    seleccionCremacion(){

        cy.get(cremacion, {timeout: 10000}).should('be.visible').realHover()
        cy.xpath(btnVerDetallesCremacion,{timeout: 10000}).should('be.visible').click()

    }
}

const PavHome = new pavHome()
export default PavHome;