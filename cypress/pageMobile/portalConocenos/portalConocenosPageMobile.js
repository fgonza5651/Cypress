//Carrucel superior
const btnCarrucel = '.mat-form-field-infix'

//Reglamento internos
const btnReglasInternas = {
    ReglasPAV: '.cont-reglamento > :nth-child(1)',
    ReglasPPH: '.cont-reglamento > :nth-child(3)',
    ReglasPCO: '.cont-reglamento > :nth-child(2)'
}
const filenameReglas = {
    ReglasPAV: 'americo-vespucio.pdf',
    ReglasPCO: 'cordillera.pdf',
    ReglasPPH: 'padre-hurtado.pdf'
}

//Seccion Contratos
const btnContratos = {
    ContratoA08General: '.cont-contrato > :nth-child(1)',
    ContratoA08Particular: '.cont-contrato > :nth-child(2)',
    ContratoA09General: '.cont-contrato > :nth-child(3)',
    ContratoA09Particular: '.cont-contrato > :nth-child(4)',
    ContratoCompraventa: '.cont-contrato > :nth-child(5)',
}
const filenameContrato = {
    ContratoA08General: 'Contrato-A08-Los-Parques-Condiciones-Generales-final-1.pdf',
    ContratoA08Particular: 'Contrato-A08-Los-Parques-Condiciones-Particulares-Final.pdf',
    ContratoA09General: 'Contrato-A09-Los-Parques-Condiciones-Generales-Final.pdf',
    ContratoA09Particular: 'Contrato-A09-Los-Parques-Condiciones-Particulares-Final.pdf',
    ContratoCompraventa: 'Contrato-de-Compraventa-de-Sepultura-v.-E.-Publica-final.pdf',
}

//Seccion informacion corporativa
const infoCorporativa = '.info-corporativa'
const btnPolitica = {
    Calidad: '.cont-politicas > :nth-child(1)',
    Proveedores: '.cont-politicas > :nth-child(2)',
    Inclusion: '.cont-politicas > :nth-child(3)',
    PrivacidadWeb: '.cont-politicas > :nth-child(4)',
    Comunicacion: '.cont-politicas > :nth-child(5)',
    Derechos: '.cont-politicas > :nth-child(6)',
    GestionProveedores: '.cont-politicas > :nth-child(7)',
    Donaciones: '.cont-politicas > :nth-child(8)',
    Sostenibilidad: '.cont-politicas > :nth-child(9)',
    ProteccionDatos: '.cont-politicas > :nth-child(10)',
    Ambiente: '.cont-politicas > :nth-child(11)',
    Marketing: '.cont-politicas > :nth-child(12)',
}
const filenamePolitica = {
    Calidad: 'POLITICA-DE-CALIDAD.pdf',
    Proveedores: 'Política-de-Proveedores-de-Parque-del-Recuerdo.pdf',
    Inclusion: 'Política-de-Diversidad-e-Inclusión.pdf',
    PrivacidadWeb: 'Politica-de-Privacidad-web.pdf',
    Comunicacion: 'Política-de-Gestión-Comunitaria.pdf',
    Derechos: 'Política-de-Derechos-Humanos-de-Parque-del-Recuerdo.pdf',
    GestionProveedores: 'Política-Gestión-de-Proveedores.pdf',
    Donaciones: 'Política-de-Donaciones-Parque-del-Recuerdo.pdf',
    Sostenibilidad: 'Estrategia de Sostenibilidad PDR 2022-2025.pdf',
    ProteccionDatos: 'Poliìtica-de-Proteccion-de-Datos-de-Parque-del-Recuerdo.pdf',
    Ambiente: 'Pol.-Medio-ambiente-.pdf',
    Marketing: 'Política-de-Marketing-Sostenible.pdf',
}

//Sistema de gestion etica
const btnGestionEtica = {
    pinchaAqui: '.p-buzon-etico > a',
    buzonEtico: '.btn-buzon-etico'
}

//Seccion memorias corporativas
const btnMemoriasCorporativas = {
    2023: ':nth-child(1) > .img-memoria-mobile',
    2022: ':nth-child(2) > .img-memoria-mobile',
    2021: ':nth-child(3) > .img-memoria-mobile',
    2020: ':nth-child(4) > .img-memoria-mobile',
    2019: ':nth-child(5) > .img-memoria-mobile',
    2018: ':nth-child(6) > .img-memoria-mobile',
    2017: ':nth-child(7) > .img-memoria-mobile'
}

//banners final seccion informacion corporativa
const btnRevistaEncontremosnos = '.cont-revista-encontremonos'
const btnLibroNuestros40años = '.cont-libro-nuestro'

//Seccion Proveedores
const btnProveedores = '#mat-option-3 > .mat-option-text'
const btnProveedor = {
    PoliticaProvedor: '.margen-superior > .a-clic',
    BancoChile: ':nth-child(5) > .a-clic',
    BBVA: ':nth-child(3) > .a-clic',
    EmpresaB: ':nth-child(7) > .subtitulo-proveedores > .a-clic'
}

//Seccion codigo de etica
const btnCodigoEtica = {
    CanalesDenuncia: '[href="https://etica.resguarda.com/eticaparquedelrecuerdo/es/main.html"]',
    LineaEtica: '[href="https://report.resguarda.com/?empresa=Parque%20del%20Recuerdo"]'
}

//URL de conoce mas sobre nosotros
const urlConocenos = {
    reglas: 'https://ic.parquedelrecuerdo.cl/conocenos/reglamento-interno',
    contratos: 'https://ic.parquedelrecuerdo.cl/conocenos/contratos',
    informacion: 'https://ic.parquedelrecuerdo.cl/conocenos/informacion-corporativa',
    proveedores: 'https://ic.parquedelrecuerdo.cl/conocenos/proveedores',
    gestion: 'https://ic.parquedelrecuerdo.cl/conocenos/sistema-de-gestion-etica-cumplimiento'
}

class portalConocenosPageMobile {
    
    ingresoPortalConocenos(url){
        cy.viewport('iphone-xr')
        cy.visit(urlConocenos[url])
    }


    //Se selecciona uno de los reglamentos internos entre "ReglasPAV", "ReglasPCO" y "ReglasPPH" 
    //se revisa que se descargue el archivo de manera correcta
    seleccionarReglamentoInterno(parque){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnReglasInternas[parque],{timeout:10000}).should('be.visible').click()
        cy.exec('powershell "Get-ChildItem -Path cypress/downloads -Filter *.pdf | Select-Object -ExpandProperty Name"').then((result) => {
            cy.log(result)
            expect(result.stdout.trim().length).to.be.eq(filenameReglas[parque].length);
        })
    }
    
    //Se selecciona uno de los contratos entre "ContratoA08General", "ContratoA08Particular",
    //"ContratoA09General", "ContratoA09Particular" y "ContratoCompraventa" ademas se revisa que se descargue 
    // el achivo de manera correcta
    seleccionarContrato(contrato){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnContratos[contrato],{timeout:10000}).should('be.visible').click()
        cy.exec('powershell "Get-ChildItem -Path cypress/downloads -Filter *.pdf | Select-Object -ExpandProperty Name"').then((result) => {
            cy.log(result)
            expect(result.stdout.trim().length).to.be.eq(filenameContrato[contrato].length);
        })
    }
    
    //Se revisa que se despliegue el texto de informacion corporativa
    revisarInformacionCorporativa(){
        cy.get(infoCorporativa,{timeout:10000}).should('be.visible')
    }

    //Se selecciona una de las politicas de la empresa entre "Calidad", "Proveedores", "Inclusion",
    //"PrivacidadWeb", "Comunicacion", "Derechos", "GestionProveedores", "Donaciones", "Sostenibilidad", 
    //"ProteccionDatos", "Ambiente" y "Marketing" ademas se revisa que el archivo se descarque de menera correcta
    seleccionarPoliticas(politica){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnPolitica[politica],{timeout:10000}).should('be.visible').click()
        cy.exec('powershell "Get-ChildItem -Path cypress/downloads -Filter *.pdf | Select-Object -ExpandProperty Name"').then((result) => {
            cy.log(result)
            expect(result.stdout.trim().length).to.be.eq(filenamePolitica[politica].length);
        })
    }
    
    //Se selecciona uno de los botones de sistema de gestion etica entre "pinchaAqui" y "buzonEtico" ademas 
    //revisa que se cambie de pagina
    seleccionarGestionEtica(etica){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnGestionEtica[etica],{timeout:10000}).should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/informacion-corporativa')
        
    }
    
    //Se selecciona una de las memorias compartidas entre "2023", "2022", "2021", "2020", "2019", "2018" y "2017" 
    //ademas revisa que se cambie de pagina
    seleccionarMemoriasCorporativas(memoria){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnMemoriasCorporativas[memoria],{timeout:10000}).should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/informacion-corporativa')
    }
    
    //Se preciona revista encontremonos y se revisa que se cambie de pagina
    seleccionarRevistaEncontremonos(){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnRevistaEncontremosnos,{timeout:10000}).should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/informacion-corporativa')
    }
    
    //Se preciona Libro de nuestros 40 años y se revisa que se cambie de pagina
    seleccionarLibroNuestros40años(){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnLibroNuestros40años,{timeout:10000}).should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/informacion-corporativa')
    }
    
    //Selecciona la opcion proveedores del menu lateral
    seleccionarProveedores(){
        cy.get(btnCarrucel,{timeout:10000}).should('be.visible').click()
        cy.get(btnProveedores,{timeout:10000}).should('be.visible').click()
    }
    
    //Selecciona la  opcion del apartado proveedores entre "PoliticaProvedor", "BancoChile", "BBVA" y "EmpresaB"
    //ademas revisa que se cambie la url
    SeleccionarOpcionProveedores(proveedor){
        cy.get(btnProveedor[proveedor],{timeout:10000}).should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/proveedores')
    }

    //Se preciona el uno de los botones de codigo de etica entre "CanalesDenuncia" y "LineaEtica" 
    //ademas se revisa que cambie de pagina 
    seleccionarCodigoEtica(canal){
        cy.get(btnCodigoEtica[canal],{timeout:10000}).invoke('removeAttr', 'target').should('be.visible').click()
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/conocenos/sistema-de-gestion-etica-cumplimiento')
    }


}
const PortalConocenosPageMobile = new portalConocenosPageMobile
export default PortalConocenosPageMobile