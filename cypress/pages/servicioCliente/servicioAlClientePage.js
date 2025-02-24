//Botones laterales menu
const btnNuestrosParques = '#tabs-verticales-portal-sac > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-0'
const tituloNuestrosParques = '.titulo-parques-oficinas'
const btnPreguntasFrecuentes = '#tabs-verticales-portal-sac > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-1'
const tituloPreguntasFrecuentes = '.titulo-preguntas-frecuentes'
const btnTerminosCondiciones = '#tabs-verticales-portal-sac > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-2'
const tituloTerminosCondiciones = '.titulo-termino-condicioness'
// Parques contenido Nuestros parque y oficinas
const btnParque = {
    PCO: '[href="https://ic.parquedelrecuerdo.cl/parques/cordillera"]',
    PPH: '[href="https://ic.parquedelrecuerdo.cl/parques/padre-hurtado"]',
    PAV: '[href="https://ic.parquedelrecuerdo.cl/parques/americo-vespucio"]'
}
const urlBtnParque = {
    PCO: 'https://ic.parquedelrecuerdo.cl/parques/cordillera',
    PPH: 'https://ic.parquedelrecuerdo.cl/parques/padre-hurtado',
    PAV: 'https://ic.parquedelrecuerdo.cl/parques/americo-vespucio'
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
    PAV: 'https://www.google.com/maps?ll=-33.383951,-70.637596&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&q=Av.+Am%C3%A9rico+Vespucio+555+Huechuraba+Regi%C3%B3n+Metropolitana',
    PCO: 'https://www.google.com/maps?ll=-33.555192,-70.545634&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&cid=15755909411552318807',
    PPH: 'https://www.google.com/maps?ll=-33.609746,-70.834618&z=16&t=m&hl=es-ES&gl=US&mapclient=embed&q=Av.+Manuel+Castillo+1981+Pe%C3%B1aflor+Regi%C3%B3n+Metropolitana',
    EstacionCentral: 'https://www.google.com/maps/place/Av.+Libertador+Bernardo+OHiggins+4463,+Santiago,+Estaci%C3%B3n+Central,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4546488,-70.6994884,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c48a68302afd:0xd210b4e2e4714b4f!8m2!3d-33.4546533!4d-70.6969135!16s%2Fg%2F11gr7t9prx?hl=es-ES',
    Providencia: 'https://www.google.com/maps/place/Av.+Luis+Thayer+Ojeda+320,+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4214175,-70.6036895,17z/data=!3m1!4b1!4m6!3m5!1s0x9662cf6b816e87f9:0x52f186cfc7a16b07!8m2!3d-33.421422!4d-70.6011146!16s%2Fg%2F11n7_qk4yv?hl=es-ES',
    LaReina: 'https://www.google.com/maps/place/Av.+Ossa+235,+Local+3,+7870117+La+Reina,+Regi%C3%B3n+Metropolitana/@-33.4513489,-70.5728746,17z/data=!3m1!4b1!4m5!3m4!1s0x9662ce4bae5eeeab:0xebce6e6bef93b813!8m2!3d-33.4513534!4d-70.5702997?entry=ttu'
}

//Servicios seccion preguntas frecuentes
const btnServicioPreguntasFrecuentes = {
    Cremacion: '[href="https://ic.parquedelrecuerdo.cl/landing/cremacion"]',
    Sepultura: '[href="https://ic.parquedelrecuerdo.cl/landing/sepultura"]',
    Funeraria: '[href="https://ic.parquedelrecuerdo.cl/landing/funeraria"]'
}
const urlBtnServicioPreguntasFrecuentes = {
    Cremacion: 'https://ic.parquedelrecuerdo.cl/landing/cremacion',
    Sepultura: 'https://ic.parquedelrecuerdo.cl/landing/sepultura',
    Funeraria: 'https://ic.parquedelrecuerdo.cl/landing/funeraria'
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
    nuestrosParques: 'https://ic.parquedelrecuerdo.cl/servicio-al-cliente/nuestras-oficinas',
    preguntas: 'https://ic.parquedelrecuerdo.cl/servicio-al-cliente/preguntas-frecuentes',
    terminos: 'https://ic.parquedelrecuerdo.cl/servicio-al-cliente/terminos-y-condiciones'
}

class ServicioClientePage {

    ingresoServicioCliente(url){
        cy.visit(urlServicioCliente[url])
    }

    //Seleciona Nuestros parques del menu lateral 
    seleccionarNuestrosParques(){
        cy.get(btnNuestrosParques,{timeout:100000}).should('be.visible').click()
        cy.get(tituloNuestrosParques,{timeout:100000}).should('be.visible')
    }
    
    //Seleciona preguntas frecuentes del menu lateral 
    seleccionarPreguntasFrecuentes(){
        cy.get(btnPreguntasFrecuentes,{timeout:100000}).should('be.visible').click()
        cy.get(tituloPreguntasFrecuentes,{timeout:100000}).should('be.visible')
    }
    
    //Seleciona terminos y condiciones del menu lateral 
    seleccionarTerminosCondiciones(){
        cy.get(btnTerminosCondiciones,{timeout:100000}).should('be.visible').click()
        cy.get(tituloTerminosCondiciones,{timeout:100000}).should('be.visible')
    }
    
    //se selecciona el parque del texto nuestros parques con las opciones "PPH" "PCO" "PAV" 
    parquesContenidoNuestrasOficinas(parque){
        cy.get(btnParque[parque],{timeout:100000}).should('be.visible').click()
        cy.url().should('equal',urlBtnParque[parque])
    }
    //Se selecciona ver mas del parque u oficina en el sector nuestros parque y oficinas y revisa su url
    //Con las opciones "PAV" "PCO" "PPH" "EstacionCentral" "Providencia" "LaReina"
    verMasParquesOficinas(lugar){
        cy.window().then((win) => {
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.get(btnVerMasParquesOficinas[lugar],{timeout:100000}).should('be.visible').click()
        cy.url().should('equal',urlVerMasParquesOficionas[lugar])
    }
    
    //se selecciona el servicio del texto preguntas frecuentes con las opciones "Cremacion" "Sepultura" "Funeraria" 
    serviciosPreguntasFrecunetes(servicio){
        cy.get(btnServicioPreguntasFrecuentes[servicio],{timeout:10000}).should('be.visible').click()
        cy.url().should('equal',urlBtnServicioPreguntasFrecuentes[servicio])
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

const servicioClientePage = new ServicioClientePage()
export default servicioClientePage