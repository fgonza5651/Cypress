import homePage from "../../pages/home/homePage";

describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Footer Parques -PAV', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterParques('1')
     });
     //
     it('Footer Parques -PCO', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterParques('2')
     });
     //
     it('Footer Parques -PPH', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterParques('3')
     });

     //
     it('Footer Conocenos -Reglamento interno', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('1')
        homePage.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Contratos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        homePage.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -informacion corporativa', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        homePage.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Trabaja con nosotros', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('4')
        homePage.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Funeraria hogar de Cristo', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('5')
        homePage.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Sistema de gestion etica', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('6')
        homePage.RevisarCambioUrl()
     });
     
     //
     it('Footer Servicio al cliente -Nuestros parques y oficinas', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('1')
        homePage.RevisarCambioUrl()
     });

     //
     it('Footer Servicio al cliente -Preguntas frecuentes', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('2')
        homePage.RevisarCambioUrl()
     });

     //
     it('Footer Servicio al cliente -Terminos y condiciones', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterServicioCliente('3')
        homePage.RevisarCambioUrl()
     });
     
     //
     it('Footer Servicio al cliente -Bases legales "Actualiza y gana" ', () => {
         homePage.ingresoHomeParqueDelRecuerdo()
         homePage.FooterServicioCliente('4')
     });

     //
     it('Footer Contacto -Comunidad Buzon vecinos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterContacto('1')
        homePage.RevisarCambioUrl()
     });

     //
     it('Footer Contacto -Cotiza en linea', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterContacto('3')
     });

     //
     it('Footer Contacto -Contactanos', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterContacto('4')
        homePage.RevisarCambioUrl()
     });

     //
     it('Footer redes sociales -Facebook', () => {
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterRedesSociales('1')
     });
})