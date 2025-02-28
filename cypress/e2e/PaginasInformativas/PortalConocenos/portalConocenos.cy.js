import homePage from "../../../pages/home/homePage";
import PortalConocenosPage from "../../../pages/portalConocenos/portalConocenosPage.cy";

describe('Paginas informativas portal conocenos ', () => {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
        });
        cy.task('clearDownloadsFolder');

        cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })

     });

     //
     it('Reglamento interno -Reglamento PAV', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPAV")

     });

     //
     it('Reglamento interno -Reglamento PCO', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPCO")

     });

     //
     it('Reglamento interno -Reglamento PPH', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('1')
        PortalConocenosPage.seleccionarReglamentoInterno("ReglasPPH")
        
    });
    
    //
    it('Contratos -Contrato A08 general', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA08General")

     });
    
    //
    it('Contratos -Contrato A08 Particulares', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA08Particular")

     });
    
    //
    it('Contratos -Contrato A09 general', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA09General")

     });
    
    //
    it('Contratos -Contrato A09 Particulares', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoA09Particular")

     });
    
    //
    it('Contratos -Contrato de compreventa', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('2')
        PortalConocenosPage.seleccionarContrato("ContratoCompraventa")

     });
    
    //
    it('Informacion corporativa -Revision de texto', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.revisarInformacionCorporativa()

     });
    //
    it('Informacion corporativa -Politica de calidad', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Calidad")

     });
    //
    it('Informacion corporativa -Politica de proveedores', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Proveedores")

     });
    //
    it('Informacion corporativa -Politica de diversidad e inclusion', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Inclusion")

     });
    //
    it('Informacion corporativa -Politica de privacidad web', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("PrivacidadWeb")

     });
    //
    it('Informacion corporativa -Politica de gestion comunitaria', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Comunicacion")

     });
    //
    it('Informacion corporativa -Politica de derechos humanos', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Derechos")

     });
    //
    it('Informacion corporativa -Politica de gestion de proveedores', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("GestionProveedores")

     });
     
    //
    it('Informacion corporativa -Politica de donaciones', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Donaciones")

     });

    //
    it('Informacion corporativa -Estrategia sostenibilidad', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Sostenibilidad")

     });

    //
    it('Informacion corporativa -Politica de proteccion de datos', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("ProteccionDatos")

     });

    //
    it('Informacion corporativa -Politica de medio ambiente', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Ambiente")

     });

    //
    it('Informacion corporativa -Politica de marketing sostenible', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarPoliticas("Marketing")

     });

    //
    it('Informacion corporativa -Sistema de gestion etica aqui', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarGestionEtica(this.datos.Url,'pinchaAqui')

     });

    //
    it('Informacion corporativa -Sistema de gestion etica buzon etico', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarGestionEtica(this.datos.Url,'buzonEtico')
        
    });
    
    //
    it('Informacion corporativa -Memoria corporativo 2023', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2023)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2022', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2022)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2021', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2021)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2020', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2020)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2019', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2019)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2018', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2018)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2017', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarMemoriasCorporativas(this.datos.Url, 2017)
        
    });
    
    //
    it('Informacion corporativa -Revista encontremonos', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarRevistaEncontremonos(this.datos.Url)

     });
    
    //
    it('Informacion corporativa -Libro de nuestros 40 años', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarLibroNuestros40años(this.datos.Url)

     });

    //
    it('Proveedores -Politicas de proveedores', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores(this.datos.Url, "PoliticaProvedor")
        
    });

    //
    it('Proveedores -Banco de chile', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores(this.datos.Url, "BancoChile")
        
    });

    //
    it('Proveedores -BBVA', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores(this.datos.Url, "BBVA")
        
    });

    //
    it('Proveedores -Somos una empresaB', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('3')
        PortalConocenosPage.seleccionarProveedores()
        PortalConocenosPage.SeleccionarOpcionProveedores(this.datos.Url, "EmpresaB")
        
    });

    //
    it('Trabaja con nosotros', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('4')
        homePage.RevisarCambioUrl(this.datos.Url)
        
    });
    
    //
    it('Funeraria hogar de Cristo', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('5')
        homePage.RevisarCambioUrl(this.datos.Url)

    });

    //
    it('Gestion etica y cumplimiento -Canales de denuncia', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('6')
        PortalConocenosPage.seleccionarCodigoEtica(this.datos.Url,"CanalesDenuncia")

    });

    //
    it('Gestion etica y cumplimiento -Linea etica', function()  {
        
        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.FooterConocenos('6')
        PortalConocenosPage.seleccionarCodigoEtica(this.datos.Url,"LineaEtica")

    });

    afterEach(function()  {
        cy.clearCookies();  
        cy.clearLocalStorage();
        cy.task('clearDownloadsFolder');
    });


})