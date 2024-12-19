import homePage from "../../pages/home/homePage";
import landingFunerariaNI from "../../pages/funeraria/landingFunerariaNI/landingFunerariaNI";

describe('Formulario landing de funeraria NI', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Funeraria - NI - Compra en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Empieza aqui', function() {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.empiezaAqui()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Hablar en linea con una ejecutiva', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Revisar titulos', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.encontrarTitulo1()
        landingFunerariaNI.encontrarTitulo2()
    })
    //{nombre historia}
    it('Landing Funeraria - NI - Iniciar una cotizacion', ()=>{
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.ingresoFunerariaNIProductosServicios()
        landingFunerariaNI.iniciarUnaCotizacion()
    })

})