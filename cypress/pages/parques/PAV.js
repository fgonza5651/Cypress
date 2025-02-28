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
    Funeraria: ":nth-child(1) > .cont-info-productos",
    Velatorio: ":nth-child(2) > .cont-info-productos",
    Cremacion: ":nth-child(3) > .cont-info-productos",
    Sepultura: ":nth-child(4) > .cont-info-productos" 
};
const btnVerDetalles = {
    Funeraria: '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[1]/div/button',
    Velatorio: '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[2]/div/button',
    Cremacion: '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[3]/div/button',
    Sepultura: '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[4]/div/button'
};
const urlServicio = {
    Funeraria: 'urlLandingFuneraria',
    Velatorio: 'urlCafeteriaVelatorioBasico',
    Cremacion: 'urlLandingCremacion',
    Sepultura: 'urlLandingSepultura'
};
//Tambien te ofrecemos
const btnSiguinteTambienOfrecemos = '#grilla-tambien-ofrecemos > div > div > swiper > div.swiper-button-next.ng-star-inserted'
const popUpVerMasTambienOfrecemos = '#mat-dialog-0'
const btnHablarEnLineaTambienOfrecemos = '#lightbox-ssaa-tambien-ofrecemos > div > div.contenedor-modal-ssaa > div > div.info-ssaa > div.cont-btns > button.btn-hablar'
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
const btnCeremoniaLaica = '#mat-tab-label-2-0 > div'
const btnCeremoniaCatolica = '#mat-tab-label-2-1 > div'
const textoCeremoniaDespedidaLaica = '#mat-tab-content-2-0 > div > div > p'
const textoCeremoniaDespedidaCatolica = '#mat-tab-content-2-1 > div > div > p'
//pop up de ceremonia del recuerdo
const btnCeremoniaPAV = '#mat-tab-label-2-0'
const btnCeremoniaPCO = '#mat-tab-label-2-1'
const btnCeremoniaPPH = '#mat-tab-label-2-2'
const textoCeremoniaRecuerdoPAV = '#mat-tab-content-2-0 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoCeremoniaRecuerdoPCO = '#mat-tab-content-2-1 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
const textoCeremoniaRecuerdoPPH = '#mat-tab-content-2-2 > div > div > div > div.cont-tabla-ceremonia-laica > div.cuerpo-tabla > div:nth-child(1)'
//pop up de Floreria
const btnVerArreglos = '#lightbox-ssaa-tambien-ofrecemos > div > div.contenedor-modal-ssaa > div > div.info-ssaa > div.cont-btn-arreglos > button'
//Sector Obituario
const btnVerTodosObituarios = '.cont-card-avisos-funebres > .card-ver-mas-avisos'
//Sector ultimas noticias
const btnVerTodoUltimasNoticias = '.cont-titulo-comunidad > a'
const btnActividadesEnParques = '[href="../../../comunidad/actividades-en-nuestros-parques"]'
const btnArticulosNoticias = '.boton-noticia'
const btnSostenibilidad = '[href="../../../comunidad/sostenibilidad"]'
const btnMasParque = '[href="../../../comunidad/mas-parque"]'
//Flores del recuerdo y contigo en el recuerdo
const btnIrFloresRecuerdo = ':nth-child(1) > .btn-ir-sitio'
const btnIrContigoRecuerdo = ':nth-child(2) > .btn-ir-sitio'


class pavHome {

    ingresoPavHome(url){
        cy.visit(url.urlPAV)
    }

    //Se selecciona Cotiza aqui desde el parque PAV
    seleccionCotizaAqui(url){
        cy.get(btnCotizaAqui, {timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlCotiza)
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
    seleccionLlamanos(formulario){
        cy.get(btnLlamanos,{timeout: 10000}).click()
        cy.get(inputNumeroLlamanos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    
    //Se selecciona Escribenos de parque PAV
    seleccionEscribenos(url,formulario){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnEscribenos,{timeout: 10000}).click()
        cy.get(popUpEscribenos, {timeout: 10000}).should('be.visible')
        cy.get(inputNumeroEscribenos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
        cy.get(btnHablarWhassap,{timeout: 10000}).click()
        cy.url().should('include', url.urlWhatsapp)
    }
    
    //Se selecciona Cotiza de parque PAV
    seleccionCotiza(url){
        cy.get(btnCotiza,{timeout: 10000}).click()
        cy.url().should('eq', url.urlCotiza)
    }
    
    //Se selecciona la cremacion desde el parque PAV
    seleccionNuestrosServicios(url,tipo){
        cy.get(Servicio[tipo], {timeout: 10000}).should('be.visible').realHover()
        cy.xpath(btnVerDetalles[tipo],{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url[ urlServicio[tipo] ])
        
    }
    
    //Se selecciona la cremacion desde el parque PAV
    seleccionTambienOfrecemos(tipo){
        let key = Object.keys(btnVerMasTambienOfrecemos)
        let index = key.indexOf(tipo)
        if(index >=4 && index <8){
            cy.get(btnSiguinteTambienOfrecemos,{timeout: 10000}).click()
        }else if(index >= 8){
            cy.get(btnSiguinteTambienOfrecemos,{timeout: 10000}).click()
            cy.wait(1000)
            cy.get(btnSiguinteTambienOfrecemos,{timeout: 10000}).click()
        }
        cy.xpath(btnVerMasTambienOfrecemos[tipo],{timeout: 10000}).should('be.visible').click()
        cy.get(popUpVerMasTambienOfrecemos,{timeout: 10000}).should('be.visible')
        cy.get(popUpVerMasTambienOfrecemos,{timeout: 10000}).contains(tipo)
    }
    
    //Se revisa la ceremonia de despedida desde tambien te ofrecemos
    revisarCeremoniaDespedida(){
        let textoAntes;
        cy.get(popUpVerMasTambienOfrecemos, {timeout: 10000}).contains('Ceremonia Laica')
        cy.get(popUpVerMasTambienOfrecemos, {timeout: 10000}).contains('Ceremonia Católica')
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
        cy.get(popUpVerMasTambienOfrecemos, {timeout: 10000}).contains('Parque Américo Vespucio')
        cy.get(popUpVerMasTambienOfrecemos, {timeout: 10000}).contains('Parque Cordillera')
        cy.get(popUpVerMasTambienOfrecemos, {timeout: 10000}).contains('Parque Padre Hurtado')
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
    revisarFloreria(url){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnVerArreglos,{timeout: 10000}).click()
        cy.url().should('eq', url.urlFlores)
    }

    //Se revisa hablar en linea de pop up tambien te ofrecemos 
    revisarHablaEnLinea(url){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnHablarEnLineaTambienOfrecemos,{timeout: 10000}).click()
        cy.url().should('include', url.urlWhatsapp)
    }

    //Se selecciona ver todos los obituarios 
    seleccionObituarios(url){
        cy.get(btnVerTodosObituarios,{timeout: 10000}).click()
        cy.url().should('eq', url.urlObituario)
    }

    //Se selecciona ver todos los obituarios 
    seleccionVerTodoNoticias(url){
        cy.get(btnVerTodoUltimasNoticias,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlComunidadVerTodo)
    }

    //Se selecciona ver todos los obituarios 
    seleccionActividadesEnParques(url){
        cy.get(btnActividadesEnParques,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlComunidadActividadesParques)
    }

    //Se selecciona ver todos los obituarios 
    seleccionArticulosNoticias(url){
        cy.get(btnArticulosNoticias,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlComunidadArticulos)
    }

    //Se selecciona ver todos los obituarios 
    seleccionSostenibilidad(url){
        cy.get(btnSostenibilidad,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlComunidadSostenibilidad)
    }

    //Se selecciona ver todos los obituarios 
    seleccionMasParque(url){
        cy.get(btnMasParque,{timeout: 10000}).should('be.visible').click()
        cy.url().should('eq', url.urlComunidadMasParque)
    }

    //Se Selecciona ir al sitio Flores del Recuerdo 
    seleccionFloresRecuerdoIr(url){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnIrFloresRecuerdo,{timeout: 10000}).click()
        cy.url().should('eq', url.urlFlores)
    }

    //Se Selecciona ir al sitio Contigo en el Recuerdo
    seleccionContigoRecuerdoIr(url){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnIrContigoRecuerdo,{timeout: 10000}).click()
        cy.url().should('eq', url.urlContigo)
    }
}

const PavHome = new pavHome()
export default PavHome;