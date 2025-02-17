import homePage from "../../../pages/home/homePage";
import PortalConocenosPage from "../../../pages/portalConocenos/portalConocenosPage.cy";

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

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPAV")

     });

     //
     it('Reglamento interno -Reglamento PCO', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPCO")

     });

     //
     it('Reglamento interno -Reglamento PPH', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPPH")
        
    });
    
    //
    it('Contratos -Contrato A08 general', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA08General")

     });
    
    //
    it('Contratos -Contrato A08 Particulares', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA08Particular")

     });
    
    //
    it('Contratos -Contrato A09 general', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA09General")

     });
    
    //
    it('Contratos -Contrato A09 Particulares', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA09Particular")

     });
    
    //
    it('Contratos -Contrato de compreventa', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoCompraventa")

     });
    
    //
    it('Informacion corporativa -Revision de texto', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.revisarInformacionCorporativa()

     });
    //
    it('Informacion corporativa -Politica de calidad', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Calidad")

     });
    //
    it('Informacion corporativa -Politica de proveedores', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Proveedores")

     });
    //
    it('Informacion corporativa -Politica de diversidad e inclusion', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Inclusion")

     });
    //
    it('Informacion corporativa -Politica de privacidad web', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("PrivacidadWeb")

     });
    //
    it('Informacion corporativa -Politica de gestion comunitaria', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Comunicacion")

     });
    //
    it('Informacion corporativa -Politica de derechos humanos', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Derechos")

     });
    //
    it('Informacion corporativa -Politica de gestion de proveedores', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("GestionProveedores")

     });
     
    //
    it('Informacion corporativa -Politica de donaciones', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Donaciones")

     });

    //
    it('Informacion corporativa -Estrategia sostenibilidad', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Sostenibilidad")

     });

    //
    it('Informacion corporativa -Politica de proteccion de datos', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("ProteccionDatos")

     });

    //
    it('Informacion corporativa -Politica de medio ambiente', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Ambiente")

     });

    //
    it('Informacion corporativa -Politica de marketing sostenible', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Marketing")

     });

    //
    it('Informacion corporativa -Sistema de gestion etica aqui', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarGestionEtica('pinchaAqui')

     });

    //
    it('Informacion corporativa -Sistema de gestion etica buzon etico', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarGestionEtica('buzonEtico')
        
    });
    
    //
    it('Informacion corporativa -Memoria corporativo 2023', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2023)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2022', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2022)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2021', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2021)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2020', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2020)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2019', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2019)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2018', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2018)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2017', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(2017)
        
    });
    
    //
    it('Informacion corporativa -Revista encontremonos', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarRevistaEncontremonos()

     });
    
    //
    it('Informacion corporativa -Libro de nuestros 40 años', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarLibroNuestros40años()

     });

    //
    it('Proveedores -Politicas de proveedores', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores("PoliticaProvedor")
        
    });

    //
    it('Proveedores -Banco de chile', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores("BancoChile")
        
    });

    //
    it('Proveedores -BBVA', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores("BBVA")
        
    });

    //
    it('Proveedores -Somos una empresaB', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores("EmpresaB")
        
    });

    //
    it('Trabaja con nosotros', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('4')
        homePage.RevisarCambioUrl()
        
    });
    
    //
    it('Funeraria hogar de Cristo', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('5')
        homePage.RevisarCambioUrl()

    });

    //
    it('Gestion etica y cumplimiento -Canales de denuncia', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('6')
        PortalConocenosPage.seleccionarCodigoEtica("CanalesDenuncia")

    });

    //
    it('Gestion etica y cumplimiento -Linea etica', () => {
        
        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.FooterConocenos('6')
        PortalConocenosPage.seleccionarCodigoEtica("LineaEtica")

    });

    afterEach(() => {
        cy.clearCookies();  
        cy.clearLocalStorage();
        cy.task('clearDownloadsFolder');
    });


})