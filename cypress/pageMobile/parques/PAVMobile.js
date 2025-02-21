import 'cypress-iframe';
//Titulo parque americo vespucio
const btnCotizaAqui = '.btn-cotiza'
//Tour Virtual
const btnTourVirtual = '.btns-galeria > .btn-tour-desktop'
const popUpTourVirtual = '.contenedor-swiper'
const frameTourVirtual = '#iframe-tour'
//Ver plano del parque
const btnVerPlano = '.btns-galeria > .btn-desktop'
const popUpMapaParque = '.contenedor-mapa'
const btnCerrarPopUpGaleria = '.icono-cerrar-galeria > .material-icons'
//Galeria fotos
const btnCalendarioPasto = '.cont-btn-corte-pasto-desktop > .btn-corte-pasto'
const popUpCalendario = '#cont-modal-calendario'
const btnCerrarCalendario = '#cont-modal-calendario > .material-icons'
//Comunicate con nosotros
const btnLlamanos = '#btn_llamanos_comunicate_con_nosotros'
const inputNumeroLlamanos = '#mat-input-0'
const btnEscribenos = '.btn-escribenos'
const popUpEscribenos = '.cont-chat-abierto'
const inputNumeroEscribenos = '#mat-input-1'
const btnHablarWhassap = '#btn_chat_unif_salesforce'
const btnCotiza = '.btn-cotiza'
//Nuestros Servicios
const Servicio = {
    Funeraria: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[1]/span[1]',
    Velatorio: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[1]/span[2]',
    Cremacion: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[1]/span[3]',
    Sepultura: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[1]/span[4]' 
};
const btnVerDetalles = {
    
    Funeraria: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[2]/div[1]/div/div/a',
    Velatorio: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[2]/div[2]/div/div/a',
    Cremacion: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[2]/div[3]/div/div/a',
    Sepultura: '//*[@id="grilla-nuestros-productos"]/div/div[3]/swiper/div[2]/div[4]/div/div/a'
};
const url = {
    Funeraria: 'https://ic.parquedelrecuerdo.cl/landing/funeraria',
    Velatorio: 'https://ic.parquedelrecuerdo.cl/productos/velatorio/velatorio-ni',
    Cremacion: 'https://ic.parquedelrecuerdo.cl/landing/cremacion',
    Sepultura: 'https://ic.parquedelrecuerdo.cl/landing/sepultura'
};
//Tambien te ofrecemos
const btnHablarEnLineaTambienOfrecemos = 'sidenav-multimedia.ng-tns-c44-10 > #cont-sidenav-ssaa > .info-ssaa > .cont-btns > .btn-hablar'
const btnSiguinteTambienOfrecemos = {
    Templo: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[1]',
    despedida: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[2]',
    sepultación: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[3]',
    Recuerdo: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[4]',
    coros: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[5]',
    lápida: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[6]',
    flores: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[7]',
    cafeterías: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[8]',
    multimedia: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[3]/span[9]'
}
const popUpVerMasTambienOfrecemos = {
    Templo: '#sidenav-ssaa-templo-velatorio > div',
    despedida: '#sidenav-ssaa-ceremonia-despedida > div',
    sepultación: '#sidenav-ssaa-ceremonia-sepultacion > div',
    Recuerdo: '#sidenav-ssaa-ceremonia-recuerdo > div',
    coros: '#sidenav-ssaa-apoyo-coral > div',
    lápida: '#sidenav-ssaa-lapidas > div',
    flores: '#sidenav-ssaa-floreria > div',
    cafeterías: '#sidenav-ssaa-cafeteria > div',
    multimedia: '#sidenav-ssaa-multimedia > div'
};
const btnVerMasTambienOfrecemos = {
    Templo: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[5]/div/div/a',
    despedida: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[6]/div/div/a',
    sepultación: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[7]/div/div/a',
    Recuerdo: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[8]/div/div/a',
    coros: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[9]/div/div/a',
    lápida: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[10]/div/div/a',
    flores: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[11]/div/div/a',
    cafeterías: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[12]/div/div/a',
    multimedia: '//*[@id="grilla-tambien-ofrecemos"]/div/div/swiper/div[4]/div[13]/div/div/a'
}
//pop up de ceremonia despedida
const btnCeremoniaLaica = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-0 > .mat-tab-label-content'
const btnCeremoniaCatolica = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-1 > .mat-tab-label-content'
const textoCeremoniaDespedidaLaica = '#mat-tab-content-1-0 > div > div > p'
const textoCeremoniaDespedidaCatolica = '#mat-tab-content-1-1 > div > div > p'
//pop up de ceremonia del recuerdo
const btnCeremoniaPAV = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-0 > .mat-tab-label-content'
const btnCeremoniaPCO = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-1 > .mat-tab-label-content'
const btnCeremoniaPPH = '.cont-tabs-ceremonia > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-0-2 > .mat-tab-label-content'
const textoCeremoniaRecuerdoPAV = '#mat-tab-content-0-0 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoCeremoniaRecuerdoPCO = '#mat-tab-content-0-1 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoCeremoniaRecuerdoPPH = '#mat-tab-content-0-2 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
//pop up de Floreria
const btnVerArreglos = '.btn-ver-arreglos'
//Sector Obituario
const btnVerTodosObituarios = '.swiper-slide-active > .card-ver-mas-avisos'
//Sector ultimas noticias
const btnVerTodoUltimasNoticias = '.cont-enlace-ver-todo > a'
const btnActividadesEnParques = '[href="../../../comunidad/actividades-en-nuestros-parques"]'
const btnArticulosNoticias = '.boton-noticia'
const btnSostenibilidad = '[href="../../../comunidad/sostenibilidad"]'
const btnMasParque = '[href="../../../comunidad/mas-parque"]'
//Flores del recuerdo y contigo en el recuerdo
const btnIrFloresRecuerdo = ':nth-child(1) > .btn-ir-sitio'
const btnIrContigoRecuerdo = ':nth-child(2) > .btn-ir-sitio'


const formulario = Cypress.env('Formulario');

class pavHomeMobile {

    ingresoPavHome(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/parques/americo-vespucio')
    }

    //Se selecciona Cotiza aqui desde el parque PAV
    seleccionCotizaAqui(){
        cy.get(btnCotizaAqui, {timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/contacto/cotiza-aqui')
    }

    //Se selecciona tour virtual del parque PAV
    seleccionTourVirtual(){

        cy.get(btnTourVirtual,{timeout: 10000}).click({force:true})
        cy.get(popUpTourVirtual, {timeout: 10000}).should('be.visible')
        cy.wait(2000)
        cy.frameLoaded(frameTourVirtual, {timeout: 10000}); 
        cy.iframe(frameTourVirtual, {timeout: 10000}).click(); 
        cy.wait(2000)
        cy.get(btnCerrarPopUpGaleria, {timeout: 10000}).should('be.visible').click()
    }
    
    //Se selecciona el plano del parque PAV
    seleccionPlanoParque(){
        cy.get(btnVerPlano,{timeout: 10000}).click({force:true})
        cy.get(popUpMapaParque, {timeout: 10000}).should('be.visible')
        cy.wait(2000)
        cy.get(btnCerrarPopUpGaleria, {timeout: 10000}).should('be.visible').click()
    }
    
    //Se selecciona e calendario de corte de pasto de parque PAV
    seleccionCalendario(){
        cy.get(btnCalendarioPasto,{timeout: 10000}).click({force:true})
        cy.get(popUpCalendario, {timeout: 10000}).should('be.visible')
        cy.get(btnCerrarCalendario, {timeout: 10000}).should('be.visible').click()
    }
    
    //Se selecciona llamanos de parque PAV
    seleccionLlamanos(){
        cy.get(btnLlamanos,{timeout: 10000}).click()
        cy.get(inputNumeroLlamanos,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].telefono)
    }
    
    //Se selecciona Escribenos de parque PAV
    seleccionEscribenos(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnEscribenos,{timeout: 10000}).click()
        cy.get(popUpEscribenos, {timeout: 10000}).should('be.visible')
        cy.get(inputNumeroEscribenos,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].telefono)
        cy.get(btnHablarWhassap,{timeout: 10000}).click()
        cy.url().should('eq', 'https://wa.me/56940277054?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20Parque%20del%20Recuerdo')
    }
    
    //Se selecciona Cotiza de parque PAV
    seleccionCotiza(){
        cy.get(btnCotiza,{timeout: 10000}).click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/contacto/cotiza-aqui')
    }
    
    //Se selecciona la cremacion desde el parque PAV
    seleccionNuestrosServicios(tipo){
        cy.xpath(Servicio[tipo], {timeout: 10000}).should('be.visible').click()
        cy.xpath(btnVerDetalles[tipo],{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url[tipo])
        
    }
    
    //Se selecciona la cremacion desde el parque PAV
    seleccionTambienOfrecemos(tipo){
        cy.xpath(btnSiguinteTambienOfrecemos[tipo],{timeout: 10000}).click()
        cy.xpath(btnVerMasTambienOfrecemos[tipo],{timeout: 10000}).should('be.visible').click()
        cy.get(popUpVerMasTambienOfrecemos[tipo],{timeout: 10000}).should('be.visible')
        cy.get(popUpVerMasTambienOfrecemos[tipo],{timeout: 10000}).contains(tipo)
    }
    
    //Se revisa la ceremonia de despedida desde tambien te ofrecemos
    revisarCeremoniaDespedida(){
        let textoAntes;
        cy.get(popUpVerMasTambienOfrecemos["despedida"], {timeout: 10000}).contains('Ceremonia Laica')
        cy.get(popUpVerMasTambienOfrecemos["despedida"], {timeout: 10000}).contains('Ceremonia Católica')
        cy.get(textoCeremoniaDespedidaLaica, {timeout: 10000}).invoke('text').then(texto => {
            cy.wait(2000)
            textoAntes = texto;
            cy.get(btnCeremoniaCatolica, {timeout: 10000}).click()
            cy.get(textoCeremoniaDespedidaCatolica, {timeout: 10000}).invoke('text').should('not.equal', textoAntes);
            cy.get(btnCeremoniaLaica, {timeout: 10000}).click()
            cy.get(textoCeremoniaDespedidaLaica, {timeout: 10000}).invoke('text').should('equal', textoAntes);
        });
        
    }

    //Se revisa la ceremonia del recuerdo desde tambien te ofrecemos
    revisarCeremoniasRecuerdo(){
        let textoAntes;
        cy.get(popUpVerMasTambienOfrecemos["Recuerdo"], {timeout: 10000}).contains('Parque Américo Vespucio')
        cy.get(popUpVerMasTambienOfrecemos["Recuerdo"], {timeout: 10000}).contains('Parque Cordillera')
        cy.get(popUpVerMasTambienOfrecemos["Recuerdo"], {timeout: 10000}).contains('Parque Padre Hurtado')
        cy.get(textoCeremoniaRecuerdoPAV, {timeout: 10000}).invoke('text').then(texto => {
            cy.wait(2000)
            textoAntes = texto;
            cy.get(btnCeremoniaPCO, {timeout: 10000}).click()
            cy.get(textoCeremoniaRecuerdoPCO, {timeout: 10000}).invoke('text').should('not.equal', textoAntes);
            cy.get(btnCeremoniaPPH, {timeout: 10000}).click()
            cy.get(textoCeremoniaRecuerdoPPH, {timeout: 10000}).invoke('text').should('not.equal', textoAntes);
            cy.get(btnCeremoniaPAV, {timeout: 10000}).click()
            cy.get(textoCeremoniaRecuerdoPAV, {timeout: 10000}).invoke('text').should('equal', textoAntes);
        });
        
    }

    //Se revisa la Loreria desde tambien te ofrecemos
    revisarFloreria(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnVerArreglos,{timeout: 10000}).click()
        cy.url().should('eq', 'https://flores.parquedelrecuerdo.cl/')
    }

    //Se revisa hablar en linea de pop up tambien te ofrecemos 
    revisarHablaEnLinea(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnHablarEnLineaTambienOfrecemos,{timeout: 10000}).click()
        cy.url().should('eq', 'https://wa.me/56940277054?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20Parque%20del%20Recuerdo')
    }

    //Se selecciona ver todos los obituarios 
    seleccionObituarios(){
        cy.get(btnVerTodosObituarios,{timeout: 10000}).click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/busqueda/obituario')
    }

    //Se selecciona ver todos los obituarios 
    seleccionVerTodoNoticias(){
        cy.get(btnVerTodoUltimasNoticias,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/comunidad/ver-todo')
    }

    //Se selecciona ver todos los obituarios 
    seleccionActividadesEnParques(){
        cy.get(btnActividadesEnParques,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/comunidad/actividades-en-nuestros-parques')
    }

    //Se selecciona ver todos los obituarios 
    seleccionArticulosNoticias(){
        cy.get(btnArticulosNoticias,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/comunidad/articulos-y-noticias')
    }

    //Se selecciona ver todos los obituarios 
    seleccionSostenibilidad(){
        cy.get(btnSostenibilidad,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/comunidad/sostenibilidad')
    }

    //Se selecciona ver todos los obituarios 
    seleccionMasParque(){
        cy.get(btnMasParque,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/comunidad/mas-parque')
    }

    //Se Selecciona ir al sitio Flores del Recuerdo 
    seleccionFloresRecuerdoIr(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnIrFloresRecuerdo,{timeout: 10000}).click()
        cy.url().should('eq', 'https://flores.parquedelrecuerdo.cl/')
    }

    //Se Selecciona ir al sitio Contigo en el Recuerdo
    seleccionContigoRecuerdoIr(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnIrContigoRecuerdo,{timeout: 10000}).click()
        cy.url().should('eq', 'https://contigoenelrecuerdo.cl/')
    }
}

const PavHomeMobile = new pavHomeMobile()
export default PavHomeMobile;