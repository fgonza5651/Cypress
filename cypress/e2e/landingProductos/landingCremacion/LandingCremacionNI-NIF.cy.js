import homePage from "../../../pages/home/homePage"
import landingCremacionNi from "../../../pages/cremacion/landingCremacionNI/cremacionNIPage";
import PavHome from "../../../pages/parques/PAV";
import PcoHome from "../../../pages/parques/PCO";
import PphHome from "../../../pages/parques/PPH";
import CrenacionNIFF from "../../../pages/cremacion/landingCremacionNIF/cremacionNIFPage";

describe('Formulario landing de cremacion NI/NIF', () => {

    beforeEach(function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
     });

     // CEC-2092 //CEC-2749
    it('Ingresando al landing de cremacion NI', function(){

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionaraCremacionNI(this.datos.Url)
        landingCremacionNi.clicBotonEmpiezaAqui()
    })

    // CEC-2092 // CEC-2748
    it('Ingresando al landing de cremacion NIF', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionCremacionNIF(this.datos.Url)
    })

    //CEC-2747
    it('Enrutamientos Landings Cremación - MENÚ HEADER', function() {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresoCremacionNIProductosServicios()

    })

    //CEC-2751
    it('Enrutamientos Landings Cremación - PARQUE PAV', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios(this.datos.Url, 'Cremacion')
    })
    
    //CEC-2752
    it('Enrutamientos Landings Cremación - PARQUE PCO', function(){
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarPCO()
        PavHome.seleccionNuestrosServicios(this.datos.Url, 'Cremacion')
    })

    //CEC-2753
    it('Enrutamientos Landings Cremación - PARQUE PPH', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios(this.datos.Url, 'Cremacion')
    })

    //CEC-2720
    it('Landings Cremación - Principal  - Envío de formulario', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.seleccionCremacionNIF(this.datos.Url)
        CrenacionNIFF.enviarFormulario()
    })

    //CEC-2930
    it('Cambios landing cremación - Cambio rótulos selector NI', function() {
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.ingresarCremacion()
    })
})