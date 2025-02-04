import homePageMobile from "../../pageMobile/homeMobile/homePageMobile";


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
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterParques('1')
     });
     //
     it('Footer Parques -PCO', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterParques('2')
     });
     //
     it('Footer Parques -PPH', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterParques('3')
     });

     //
     it('Footer Conocenos -Reglamento interno', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('1')
        homePageMobile.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Contratos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        homePageMobile.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -informacion corporativa', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        homePageMobile.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Trabaja con nosotros', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('4')
        homePageMobile.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Funeraria hogar de Cristo', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('5')
        homePageMobile.RevisarCambioUrl()
     });
     //
     it('Footer Conocenos -Sistema de gestion etica', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('6')
        homePageMobile.RevisarCambioUrl()
     });
     
     //
     it('Footer Servicio al cliente -Nuestros parques y oficinas', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('1')
        homePageMobile.RevisarCambioUrl()
     });

     //
     it('Footer Servicio al cliente -Preguntas frecuentes', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('2')
        homePageMobile.RevisarCambioUrl()
     });

     //
     it('Footer Servicio al cliente -Terminos y condiciones', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterServicioCliente('3')
        homePageMobile.RevisarCambioUrl()
     });
     
     //
     it('Footer Servicio al cliente -Bases legales "Actualiza y gana" ', () => {
         homePageMobile.ingresoHomeMobile()
         homePageMobile.FooterServicioCliente('4')
     });

     //
     it('Footer Contacto -Comunidad Buzon vecinos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterContacto('1')
        homePageMobile.RevisarCambioUrl()
     });

     //
     it('Footer Contacto -Cotiza en linea', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterContacto('3')
     });

     //
     it('Footer Contacto -Contactanos', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterContacto('4')
        homePageMobile.RevisarCambioUrl()
     });

     //
     it('Footer redes sociales -Facebook', () => {
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterRedesSociales('1')
     });
})