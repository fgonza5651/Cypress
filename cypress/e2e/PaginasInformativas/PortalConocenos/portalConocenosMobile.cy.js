import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import PortalConocenosPageMobile from "../../../pageMobile/portalConocenos/portalConocenosPageMobile";


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

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPAV")

     });

     //
     it('Reglamento interno -Reglamento PCO', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPCO")

     });

     //
     it('Reglamento interno -Reglamento PPH', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('1')
        PortalConocenosPageMobile.seleccionarReglamentoInterno("ReglasPPH")
        
    });
    
    //
    it('Contratos -Contrato A08 general', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA08General")

     });
    
    //
    it('Contratos -Contrato A08 Particulares', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA08Particular")

     });
    
    //
    it('Contratos -Contrato A09 general', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA09General")

     });
    
    //
    it('Contratos -Contrato A09 Particulares', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoA09Particular")

     });
    
    //
    it('Contratos -Contrato de compreventa', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('2')
        PortalConocenosPageMobile.seleccionarContrato("ContratoCompraventa")

     });
    
    //
    it('Informacion corporativa -Revision de texto', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.revisarInformacionCorporativa()

     });
    //
    it('Informacion corporativa -Politica de calidad', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Calidad")

     });
    //
    it('Informacion corporativa -Politica de proveedores', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Proveedores")

     });
    //
    it('Informacion corporativa -Politica de diversidad e inclusion', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Inclusion")

     });
    //
    it('Informacion corporativa -Politica de privacidad web', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("PrivacidadWeb")

     });
    //
    it('Informacion corporativa -Politica de gestion comunitaria', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Comunicacion")

     });
    //
    it('Informacion corporativa -Politica de derechos humanos', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Derechos")

     });
    //
    it('Informacion corporativa -Politica de gestion de proveedores', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("GestionProveedores")

     });
     
    //
    it('Informacion corporativa -Politica de donaciones', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Donaciones")

     });

    //
    it('Informacion corporativa -Estrategia sostenibilidad', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Sostenibilidad")

     });

    //
    it('Informacion corporativa -Politica de proteccion de datos', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("ProteccionDatos")

     });

    //
    it('Informacion corporativa -Politica de medio ambiente', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Ambiente")

     });

    //
    it('Informacion corporativa -Politica de marketing sostenible', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarPoliticas("Marketing")

     });

    //
    it('Informacion corporativa -Sistema de gestion etica aqui', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarGestionEtica(this.datos.Url,'pinchaAqui')

     });

    //
    it('Informacion corporativa -Sistema de gestion etica buzon etico', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarGestionEtica(this.datos.Url,'buzonEtico')
        
    });
    
    //
    it('Informacion corporativa -Memoria corporativo 2023', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2023)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2022', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2022)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2021', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2021)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2020', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2020)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2019', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2019)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2018', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2018)

     });
    
    //
    it('Informacion corporativa -Memoria corporativo 2017', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarMemoriasCorporativas(this.datos.Url,2017)
        
    });
    
    //
    it('Informacion corporativa -Revista encontremonos', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarRevistaEncontremonos(this.datos.Url)

     });
    
    //
    it('Informacion corporativa -Libro de nuestros 40 años', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarLibroNuestros40años(this.datos.Url)

    });
    
    
    //
    it('Proveedores -Politicas de proveedores', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores(this.datos.Url,"PoliticaProvedor")
        
    });

    //
    it('Proveedores -Banco de chile', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores(this.datos.Url,"BancoChile")
        
    });

    //
    it('Proveedores -BBVA', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores(this.datos.Url,"BBVA")
        
    });

    //
    it('Proveedores -Somos una empresaB', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('3')
        PortalConocenosPageMobile.seleccionarProveedores()
        PortalConocenosPageMobile.SeleccionarOpcionProveedores(this.datos.Url,"EmpresaB")
        
    });

    //
    it('Trabaja con nosotros', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('4')
        homePageMobile.RevisarCambioUrl(this.datos.Url)
        
    });
    
    //
    it('Funeraria hogar de Cristo', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('5')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

    });

    //
    it('Gestion etica y cumplimiento -Canales de denuncia', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('6')
        PortalConocenosPageMobile.seleccionarCodigoEtica(this.datos.Url,"CanalesDenuncia")

    });

    //
    it('Gestion etica y cumplimiento -Linea etica', function()  {
        
        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.FooterConocenos('6')
        PortalConocenosPageMobile.seleccionarCodigoEtica(this.datos.Url,"LineaEtica")

    });

    afterEach(function()  {
        cy.clearCookies();  
        cy.clearLocalStorage();
        cy.task('clearDownloadsFolder');
    });


})