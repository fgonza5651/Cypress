import homePage from "../../../pages/home/homePage"
import landingCremacionNi from "../../../pages/cremacion/landingCremacionNI/cremacionNIPage";
import PavHome from "../../../pages/parques/PAV";
import PcoHome from "../../../pages/parques/PCO";
import PphHome from "../../../pages/parques/PPH";
import CrenacionNIFF from "../../../pages/cremacion/landingCremacionNIF/cremacionNIFPage";

describe('Formulario landing de cremacion NI/NIF', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     // CEC-2092 //CEC-2749
    it('Ingresando al landing de cremacion NI', () =>{

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionaraCremacionNI()
        landingCremacionNi.clicBotonEmpiezaAqui()
    })

    // CEC-2092 // CEC-2748
    it('Ingresando al landing de cremacion NIF', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionCremacionNIF()
    })

    //CEC-2747
    it('Enrutamientos Landings Cremación - MENÚ HEADER', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoCremacionNIProductosServicios()

    })

    //CEC-2751
    it('Enrutamientos Landings Cremación - PARQUE PAV', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPAV()
        PavHome.seleccionNuestrosServicios('Cremacion')
    })
    
    //CEC-2752
    it('Enrutamientos Landings Cremación - PARQUE PCO', () =>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarPCO()
        PavHome.seleccionNuestrosServicios('Cremacion')
    })

    //CEC-2753
    it('Enrutamientos Landings Cremación - PARQUE PPH', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresaPPH()
        PphHome.seleccionNuestrosServicios('Cremacion')
    })

    //CEC-2720
    it('Landings Cremación - Principal  - Envío de formulario', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.seleccionCremacionNIF()
        CrenacionNIFF.enviarFormulario()
    })

    //CEC-2930
    it('Cambios landing cremación - Cambio rótulos selector NI', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresarCremacion()
    })
})