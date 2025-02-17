import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import PortalConocenosPageMobile from "../../../pageMobile/portalConocenos/portalConocenosPageMobile";


describe('Paginas informativas portal conocenos ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
        cy.task('clearDownloadsFolder');
     });

     //
     it('Reglamento interno -Reglamento PAV', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPAV")

     });

     //
     it('Reglamento interno -Reglamento PCO', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPCO")

     });

     //
     it('Reglamento interno -Reglamento PPH', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPPH")
        
    });
    
    //
    it('Contratos -Contrato A08 general', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA08General")

     });
    
    //
    it('Contratos -Contrato A08 Particulares', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA08Particular")

     });
    
    //
    it('Contratos -Contrato A09 general', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA09General")

     });
    
    //
    it('Contratos -Contrato A09 Particulares', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA09Particular")

     });
    
    //
    it('Contratos -Contrato de compreventa', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoCompraventa")

     });
    
    //
    it('Informacion corporativa -Revision de texto', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.revisarInformacionCorporativa()

     });
    //
    it('Informacion corporativa -Politica de calidad', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Calidad")

     });
    //
    it('Informacion corporativa -Politica de proveedores', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Proveedores")

     });
    //
    it('Informacion corporativa -Politica de diversidad e inclusion', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Inclusion")

     });
    //
    it('Informacion corporativa -Politica de privacidad web', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("PrivacidadWeb")

     });
    //
    it('Informacion corporativa -Politica de gestion comunitaria', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Comunicacion")

     });
    //
    it('Informacion corporativa -Politica de derechos humanos', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Derechos")

     });
    //
    it('Informacion corporativa -Politica de gestion de proveedores', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("GestionProveedores")

     });
     
    //
    it('Informacion corporativa -Politica de donaciones', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Donaciones")

     });

    //
    it('Informacion corporativa -Estrategia sostenibilidad', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Sostenibilidad")

     });

    //
    it('Informacion corporativa -Politica de proteccion de datos', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("ProteccionDatos")

     });

    //
    it('Informacion corporativa -Politica de medio ambiente', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Ambiente")

     });

    //
    it('Informacion corporativa -Politica de marketing sostenible', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Marketing")

     });

    //
    it('Informacion corporativa -Sistema de gestion etica aqui', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarGestionEtica('pinchaAqui')

     });

    //
    it('Informacion corporativa -Sistema de gestion etica buzon etico', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarGestionEtica('buzonEtico')
        
    });
    
    //
    it('Informacion corporativa -Memoria corporativo 2023', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2023)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2022', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2022)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2021', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2021)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2020', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2020)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2019', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2019)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2018', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2018)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2017', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(2017)
        
    });
    
    //
    it('Informacion corporativa -Revista encontremonos', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarRevistaEncontremonos()

     });
    
    //
    it('Informacion corporativa -Libro de nuestros 40 años', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarLibroNuestros40años()

    });
    
    
    //
    it('Proveedores -Politicas de proveedores', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores("PoliticaProvedor")
        
    });

    //
    it('Proveedores -Banco de chile', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores("BancoChile")
        
    });

    //
    it('Proveedores -BBVA', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores("BBVA")
        
    });

    //
    it('Proveedores -Somos una empresaB', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores("EmpresaB")
        
    });

    //
    it('Trabaja con nosotros', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('4')
        homePageMobile.RevisarCambioUrl()
        
    });
    
    //
    it('Funeraria hogar de Cristo', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('5')
        homePageMobile.RevisarCambioUrl()

    });

    //
    it('Gestion etica y cumplimiento -Canales de denuncia', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('6')
        PortalConocenosPageMobile.seleccionarCodigoEtica("CanalesDenuncia")

    });

    //
    it('Gestion etica y cumplimiento -Linea etica', () => {
        
        homePageMobile.ingresoHomeMobile()
        homePageMobile.FooterConocenos('6')
        PortalConocenosPageMobile.seleccionarCodigoEtica("LineaEtica")

    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
        cy.task('clearDownloadsFolder');
    });


})