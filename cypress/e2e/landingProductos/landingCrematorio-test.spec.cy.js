/// <reference types="cypress" />
import landingCremacionNi from "../../page/crematiroInmediato"
import homePage from "../../page/home"
import CrenacionNIFF from "../../page/procesoCremacionInmediata"

describe('Creamatorio test', ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it('frontpage can be open', ()=> {
        homePage.cerrarPopup()
    })
    after('velatorio can be open', () => {
        homePage.posicionarProductosServicio()
        homePage.posicionarCremacionDespliegue()
        homePage.precionarNecesidadInmediataDespliegue()
        landingCremacionNi.clicBotonEmpiezaAqui()
    })
})