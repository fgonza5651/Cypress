//Botones menu desplegable
const btnMenuDesplegable = '.mat-form-field-infix'
const btnNuestrosParques = '#mat-option-0 > .mat-option-text'
const tituloNuestrosParques = '.titulo-parques-oficinas'
const btnPreguntasFrecuentes = '#mat-option-1 > .mat-option-text'
const tituloPreguntasFrecuentes = '.titulo-preguntas-frecuentes'
const btnTerminosCondiciones = '#mat-option-2 > .mat-option-text'
const tituloTerminosCondiciones = '.titulo-termino-condicioness'
// Parques contenido Nuestros parque y oficinas
const btnParque = {
    PCO: '[href="https://ic.parquedelrecuerdo.cl/parques/cordillera"]',
    PPH: '[href="https://ic.parquedelrecuerdo.cl/parques/padre-hurtado"]',
    PAV: '[href="https://ic.parquedelrecuerdo.cl/parques/americo-vespucio"]'
}
const urlBtnParque = {
    PCO: 'urlPCO',
    PPH: 'urlPPH',
    PAV: 'urlPAV'
}
//Ver mas seccion nuestros parques y oficionas
const btnVerMasParquesOficinas = {
    PAV: ':nth-child(1) > .link-mapa-parque',
    PCO: ':nth-child(3) > .link-mapa-parque',
    PPH: ':nth-child(5) > .link-mapa-parque',
    EstacionCentral: ':nth-child(7) > .link-mapa-parque',
    Providencia: ':nth-child(9) > .link-mapa-parque',
    LaReina: ':nth-child(11) > .link-mapa-parque'
}
const urlVerMasParquesOficionas = {
    PAV: 'urlUbicacionPAV',
    PCO: 'urlUbicacionPCO',
    PPH: 'urlUbicacionPPH',
    EstacionCentral: 'urlUbicacionEstacionCentral',
    Providencia: 'urlUbicacionProvidencia',
    LaReina: 'urlUbicacionLaReina'
}

//Servicios seccion preguntas frecuentes
const btnServicioPreguntasFrecuentes = {
    Cremacion: '[href="https://ic.parquedelrecuerdo.cl/landing/cremacion"]',
    Sepultura: '[href="https://ic.parquedelrecuerdo.cl/landing/sepultura"]',
    Funeraria: '[href="https://ic.parquedelrecuerdo.cl/landing/funeraria"]'
}

const urlBtnServicioPreguntasFrecuentes = {
    Cremacion: 'urlLandingCremacion',
    Sepultura: 'urlLandingSepultura',
    Funeraria: 'urlLandingFuneraria'
}

//Sector preguntas frecuentes
const btnPreguntaDesplegable = {
    0: '#mat-expansion-panel-header-0',
    1: '#mat-expansion-panel-header-1',
    2: '#mat-expansion-panel-header-2',
    3: '#mat-expansion-panel-header-3',
    4: '#mat-expansion-panel-header-4',
    5: '#mat-expansion-panel-header-5',
    6: '#mat-expansion-panel-header-6',
    7: '#mat-expansion-panel-header-7',
    8: '#mat-expansion-panel-header-8',
    9: '#mat-expansion-panel-header-9',
    10: '#mat-expansion-panel-header-10',
    11: '#mat-expansion-panel-header-11',
    12: '#mat-expansion-panel-header-12',
    13: '#mat-expansion-panel-header-13',
    14: '#mat-expansion-panel-header-14',
    15: '#mat-expansion-panel-header-15',
    16: '#mat-expansion-panel-header-16',
    17: '#mat-expansion-panel-header-17',
    18: '#mat-expansion-panel-header-18',
    19: '#mat-expansion-panel-header-19',
    20: '#mat-expansion-panel-header-20',
}
const contenidoDesplegablePregunta = {
   0: '#cdk-accordion-child-0 > .mat-expansion-panel-body',
   1: '#cdk-accordion-child-1 > .mat-expansion-panel-body',
   2: '#cdk-accordion-child-2 > .mat-expansion-panel-body',
   3: '#cdk-accordion-child-3 > .mat-expansion-panel-body',
   4: '#cdk-accordion-child-4 > .mat-expansion-panel-body',
   5: '#cdk-accordion-child-5 > .mat-expansion-panel-body',
   6: '#cdk-accordion-child-6 > .mat-expansion-panel-body',
   7: '#cdk-accordion-child-7 > .mat-expansion-panel-body',
   8: '#cdk-accordion-child-8 > .mat-expansion-panel-body',
   9: '#cdk-accordion-child-9 > .mat-expansion-panel-body',
   10: '#cdk-accordion-child-10 > .mat-expansion-panel-body',
   11: '#cdk-accordion-child-11 > .mat-expansion-panel-body',
   12: '#cdk-accordion-child-12 > .mat-expansion-panel-body',
   13: '#cdk-accordion-child-13 > .mat-expansion-panel-body',
   14: '#cdk-accordion-child-14 > .mat-expansion-panel-body',
   15: '#cdk-accordion-child-15 > .mat-expansion-panel-body',
   16: '#cdk-accordion-child-16 > .mat-expansion-panel-body',
   17: '#cdk-accordion-child-17 > .mat-expansion-panel-body',
   18: '#cdk-accordion-child-18 > .mat-expansion-panel-body',
   19: '#cdk-accordion-child-19 > .mat-expansion-panel-body',
   20: '#cdk-accordion-child-20 > .mat-expansion-panel-body',
}
//Seccion de terminos y condiciones
const btnTerminosDesplegable = {
    1: '#mat-expansion-panel-header-21',
    2: '#mat-expansion-panel-header-22',
    3: '#mat-expansion-panel-header-23',
    4: '#mat-expansion-panel-header-24',
    5: '#mat-expansion-panel-header-25',
    6: '#mat-expansion-panel-header-26',
    7: '#mat-expansion-panel-header-27',
    8: '#mat-expansion-panel-header-28',
    9: '#mat-expansion-panel-header-29',
    10: '#mat-expansion-panel-header-30',
    11: '#mat-expansion-panel-header-31'
}
const contenidoDesplegableTerminos = {
    1: '#cdk-accordion-child-21 > .mat-expansion-panel-body',
    2: '#cdk-accordion-child-22 > .mat-expansion-panel-body',
    3: '#cdk-accordion-child-23 > .mat-expansion-panel-body',
    4: '#cdk-accordion-child-24 > .mat-expansion-panel-body',
    5: '#cdk-accordion-child-25 > .mat-expansion-panel-body',
    6: '#cdk-accordion-child-26 > .mat-expansion-panel-body',
    7: '#cdk-accordion-child-27 > .mat-expansion-panel-body',
    8: '#cdk-accordion-child-28 > .mat-expansion-panel-body',
    9: '#cdk-accordion-child-29 > .mat-expansion-panel-body',
    10: '#cdk-accordion-child-30 > .mat-expansion-panel-body',
    11: '#cdk-accordion-child-31 > .mat-expansion-panel-body'
}

const urlServicioCliente = {
    nuestrosParques: 'urlServicioClienteNuestrosParques',
    preguntas: 'urlServicioClientePreguntas',
    terminos: 'urlServicioClienteTerminos'
}


class ServicioClientePageMobile {

    ingresoServicioCliente(url){
        cy.viewport('iphone-xr')
        cy.visit(urlServicioCliente[url])
    }

    //Seleciona Nuestros parques del menu lateral 
    seleccionarNuestrosParques(){
        cy.get(btnMenuDesplegable,{timeout:100000}).should('be.visible').click()
        cy.get(btnNuestrosParques,{timeout:100000}).should('be.visible').click()
        cy.get(tituloNuestrosParques,{timeout:100000}).should('be.visible')
    }
    
    //Seleciona preguntas frecuentes del menu lateral 
    seleccionarPreguntasFrecuentes(){
        cy.get(btnMenuDesplegable,{timeout:100000}).should('be.visible').click()
        cy.get(btnPreguntasFrecuentes,{timeout:100000}).should('be.visible').click()
        cy.get(tituloPreguntasFrecuentes,{timeout:100000}).should('be.visible')
    }
    
    //Seleciona terminos y condiciones del menu lateral 
    seleccionarTerminosCondiciones(){
        cy.get(btnMenuDesplegable,{timeout:100000}).should('be.visible').click()
        cy.get(btnTerminosCondiciones,{timeout:100000}).should('be.visible').click()
        cy.get(tituloTerminosCondiciones,{timeout:100000}).should('be.visible')
    }
    
    //se selecciona el parque del texto nuestros parques con las opciones "PPH" "PCO" "PAV" 
    parquesContenidoNuestrasOficinas(url, parque){
        cy.get(btnParque[parque],{timeout:100000}).should('be.visible').click()
        cy.url().should('equal',url[ urlBtnParque[parque] ])
    }
    //Se selecciona ver mas del parque u oficina en el sector nuestros parque y oficinas y revisa su url
    //Con las opciones "PAV" "PCO" "PPH" "EstacionCentral" "Providencia" "LaReina"
    verMasParquesOficinas(url, lugar){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnVerMasParquesOficinas[lugar],{timeout:100000}).should('be.visible').click()
        cy.url().should('contains',url[ urlVerMasParquesOficionas[lugar] ])
    }
    
    //se selecciona el servicio del texto preguntas frecuentes con las opciones "Cremacion" "Sepultura" "Funeraria" 
    serviciosPreguntasFrecunetes(url, servicio){
        cy.get(btnServicioPreguntasFrecuentes[servicio],{timeout:10000}).should('be.visible').click()
        cy.url().should('equal',url[ urlBtnServicioPreguntasFrecuentes[servicio] ])
    }

    //se selecciona la pregunta de preguntas frecuentes con las opciones del 0 al 20 
    //se revisa que se despliegue el contenido con las opciones del 0 al 20
    btnPreguntas(pregunta){
        cy.get(btnPreguntaDesplegable[pregunta],{timeout:10000}).should('be.visible').click()
        cy.get(contenidoDesplegablePregunta[pregunta],{timeout:10000}).should('be.visible')
    }

    //se selecciona el termino y condicion de terminos y condiciones con las opciones del 1 al 11 
    //se revisa que se despliegue el contenido con las opciones del 1 al 11
    btnDesplegableTerminosCondiciones(termino){
        cy.get(btnTerminosDesplegable[termino],{timeout:10000}).should('be.visible').click()
        cy.get(contenidoDesplegableTerminos[termino],{timeout:10000}).should('be.visible')
    }
}

const servicioClientePageMobile = new ServicioClientePageMobile()
export default servicioClientePageMobile