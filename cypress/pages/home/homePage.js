//Pop up informacion importante
const btnContinuarPopUp = '.btn-cta'
const btnCerrarPopUp = '#cont-pop-up-info-sv > .material-icons'
const PopUpInformacion = '#cont-pop-up-info-sv'
//Necesito ayuda ahora menu
const btnFunerariaNI = '.cont-necesidad-inmediata > .cont-btn-producto > :nth-child(1)'
const btnVelatorioNI = '.cont-necesidad-inmediata > .cont-btn-producto > :nth-child(2)'
const btnCremacionNI = ".cont-necesidad-inmediata > .cont-btn-producto > :nth-child(3)"
const btnSepulturaNI = ".cont-necesidad-inmediata > .cont-btn-producto > :nth-child(4)"
//Estoy pensando en futuro menu
const btnFunerariaNIF = ".cont-necesidad-futura > .cont-btn-producto > :nth-child(1)"
const btnCremacionNIF = ".cont-necesidad-futura > .cont-btn-producto > :nth-child(2)"
const btnSepulturaNIF = ".cont-necesidad-futura > .cont-btn-producto > :nth-child(3)"
// menu header
const btnHomeParqueRecuerdo = '.logo-header'
const OpcionMenuBarra = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li'
const menuProductosServicios = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]'
const menuPagoExpress = '.btn-pago-express-header'

//productos y servicios desde la barra
const menuVelatorio = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[2]/a'
const menuCremacion = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/a'
const menuFuneraria = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > a'
const menuSepultura = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(4) > a'

//Cremacion desde la barra
const menuNecesidadInmediata = '//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/ul/li[1]/a'
const menuNcesidadFutura = '(//*[@id="contenedor-header-menu"]/div/div[2]/ul/li[3]/ul/li/ul/li[3]/ul/li[3]/a)[1]'

//Funeraria desde la Barra
const menuFunerariaNI = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > ul > li:nth-child(1) > a'
const menuFunerariaNIF = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > ul > li:nth-child(2) > a'
const menuFunerariaNF = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(1) > ul > li:nth-child(3) > a'

//Sepultura desde la Barra
const menuSepulturaNI = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(4) > ul > li:nth-child(1) > a'
const menuSepulturaNIF = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(4) > ul > li:nth-child(2) > a'
const menuSepulturaNF = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-desktop > ul > li:nth-child(3) > ul > li > ul > li:nth-child(4) > ul > li:nth-child(3) > a'

// parques del home
const btnConocerParquePAV = '.cont-card-parque > :nth-child(1) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
const btnConocerParquePCO = '.cont-card-parque > :nth-child(2) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
const btnConocerParquePPH = '.cont-card-parque > :nth-child(3) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
//Banner principal
const SwiperBannerPrincipal = '#contenedor-home-pdr > pdr-cross-banner-mkt > div > swiper > div.swiper-wrapper'
const btnQuieroContactarme = '.btn-pasos-contacto'
const btnPlanificaConTiempo = '.btn-cotiza-aqui-landing'

// explorar nuestros productos
const fotoCremacion = ':nth-child(3) > .cont-info-productos'
const btnDetallesCremacion = '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[3]/div/button'

//Ingreso Clientes body
const btnPagoExpress = '.cont-btn-pago-express > .btn-producto'

//Explora nuestros servicios
const cardFuneraria ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(1)'
const cardVelatorio ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(2)'
const cardCremacion ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(3)'
const cardSepultura ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(4)'
const cardVerDetalleFuneraria ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(1) > div > button'
const cardVerDetalleVelatorio ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(2) > div > button'
const cardVerDetalleCremacion ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(3) > div > button'
const cardVerDetalleSepultura ='#grilla-nuestros-productos > div > div.cont-card-nuestros-productos > div:nth-child(4) > div > button'

//Footer
const btnParquesFooter = '//*[@id="contenedor-secciones-footer"]/div[1]/ul/li'
const btnConocenosFooter = '//*[@id="contenedor-secciones-footer"]/div[2]/ul/li'
const btnServicioClienteFooter = '//*[@id="contenedor-secciones-footer"]/div[3]/ul/li'
const btnContactoFooter = '//*[@id="contenedor-secciones-footer"]/div[4]/ul/li'
const btnRedesSocialesFooter = '//*[@id="seccion-redes-footer"]/div/ul/li'
const popUpCotizaEnLinea = '#mat-menu-panel-0'
//Archivos descargados
const filename = 'BASES_SORTEO_PARQUE_DEL_RECUERDO.pdf'

let btnOpcionMenuBarra;
let btnSubServicioBarra;

require('cypress-xpath')
import "cypress-real-events/support";

class HomePage {
    
    //ingreso a la URL de parque del recuerdo
    ingresoHomeParqueDelRecuerdo(){
        cy.visit('/')
        cy.wait(1000)
        cy.clearCookies(); 
        cy.get('body').then(($body) =>{
            if ($body.find(PopUpInformacion).length > 0){
                cy.get(btnContinuarPopUp,{timeout:100000}).should('be.visible').click()
                cy.clearLocalStorage();
            }else{
                cy.clearLocalStorage();
            }
        })
    }
    
    //Se selecciona la opcion del sub menu
    PrecionarLogoParqueHome(){
        cy.get(btnHomeParqueRecuerdo,{timeout:100000}).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/')
    }
    //utilizando un numero desde el 1 hasta el 8 para las opciones del Menu desplegable
    OpcionBarraMenu(opcion){

        btnOpcionMenuBarra = `${OpcionMenuBarra}[${opcion}]`
        cy.xpath(btnOpcionMenuBarra, { timeout: 100000 }).should('exist').realHover().click()
    }

    //utilizando un numero desde el 1 hasta el 6 para las opciones del SubMenu que se desplegable despues de seleccionar una opcion
    SubServicioBarraMenu(Servicio){
        btnSubServicioBarra = `${btnOpcionMenuBarra}/ul/li/ul/li[${Servicio}]`;
        cy.xpath(`${btnSubServicioBarra}/a`, { timeout: 100000 }).should('exist').realHover()
    }

    //Se selecciona la opcion del sub menu
    seleccionarSubServicioBarra(){
        cy.xpath(`${btnSubServicioBarra}/a`, { timeout: 100000 }).should('exist').realHover().click()
    }

    //utilizando un numero desde el 1 hasta el 3 para las opciones del segundo SubMenu que se desplegable despues de seleccionar una segunda opcion
    NecesidadBarraMenu(Servicio){
        let btnNecesidad
        btnNecesidad = `${btnSubServicioBarra}/ul/li[${Servicio}]`;
        cy.xpath(`${btnNecesidad}/a`, { timeout: 100000 }).should('exist').realHover().click()
    }

    //revisa que al presionar uno de los botones, este te redirija a otra pagina con una URL diferente
    RevisarCambioUrl(){
        cy.wait(3000)
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/')
    }

    //revisa que al precionar el boton este abra otra pestaña utilizando un numero del 1 al 2 para distintos botones
    RevisarNuevaUrl(opcion){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        switch (opcion){
            //Se selecciona pago express desde el menu superior de la pagina
            case '1':
                cy.get(menuPagoExpress, { timeout: 100000 }).should('be.visible').click();
                break;
            //Se selecciona pago express desde el menu principal
            case '2':
                cy.get(btnPagoExpress, { timeout: 100000 }).should('be.visible').click();
                break;                
        }
        // Verifica que window.open fue llamado
        cy.get('@windowOpen').should('be.calledOnce');
    }
    
    //Revisa que el btn enviar flores redirija a otra pestaña 
    RevisarNuevaPestaña(){
        cy.xpath(`${btnSubServicioBarra}/a`).should('have.attr', 'target', '_blank');
        // Haz clic en el botón que abre la nueva pestaña
        cy.xpath(`${btnSubServicioBarra}/a`, { timeout: 100000 }).invoke('removeAttr', 'target').click()
        // Verifica que window.open fue llamado
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/')
    }
    
    
    //selecciona de Funeraria NI
    seleccionaraFunerariaNI(){
        cy.get(btnFunerariaNI, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/funeraria-necesidad-inmediata')
    }
    //selecciona de Velatorio NI
    seleccionaraVelatorioNI(){
        cy.get(btnVelatorioNI, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/productos/velatorio/velatorio-ni')
    }
    //selecciona de cremacion NI
    seleccionaraCremacionNI(){
        cy.get(btnCremacionNI, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/cremacion-necesidad-inmediata')
    }
    //selecciona de Sepultura NI
    seleccionaraSepulturaNI(){
        cy.get(btnSepulturaNI, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/sepultura-necesidad-inmediata')
    }
    
    //selecciona de Funeraria NIF
    seleccionFunerariaNIF(){
        cy.get(btnFunerariaNIF, { timeout: 100000 }).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/funeraria-necesidad-futura')
    }
    //selecciona de cremacion NIF
    seleccionCremacionNIF(){
        cy.get(btnCremacionNIF, { timeout: 100000 }).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/cremacion-necesidad-futura')
    }
    //selecciona de Sepultura NIF
    seleccionSepulturaNIF(){
        cy.get(btnSepulturaNIF, { timeout: 100000 }).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/sepultura-necesidad-futura')
    }
    //Comprueba que el banner principal cambie
    ComprobarBanner(){
        cy.wait(4000)
        cy.get(SwiperBannerPrincipal).should('have.css', 'transform', 'matrix(1, 0, 0, 1, -3636, 0)');
        cy.wait(4000)
        cy.get(SwiperBannerPrincipal).should('have.css', 'transform', 'matrix(1, 0, 0, 1, -4848, 0)');
    }
    
    //Comprueba que al precionar quiero contactarme se redirija a whatssap
    quieroContactarme(){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open').callsFake((url) => {
                win.location.assign(url);
            });
        });
        cy.get(btnQuieroContactarme).scrollIntoView().should('be.visible').click();
        cy.url().should('eq', 'https://wa.me/56940277054?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20Parque%20del%20Recuerdo')
    }
    
    //selecciona Planifica con tiempo
    seleccionPlanificaConTiempo(){
        cy.get(btnPlanificaConTiempo, { timeout: 100000 }).should('be.visible').click()
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/contacto/cotiza-aqui')
    }

    //se ingresa a cremacion desde el menu del header desde productos y servicios
    ingresoCremacionNIProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.xpath(menuCremacion, { timeout: 100000 }).realHover();
        cy.xpath(menuNecesidadInmediata, { timeout: 100000 }).realHover().click()
    }

    //se ingresa a Funeraria necesidad inmediata desde el menu del header desde productos y servicios
    ingresoFunerariaNIProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuFuneraria, { timeout: 100000 }).realHover();
        cy.get(menuFunerariaNI, { timeout: 100000 }).realHover().click()
    }
    //se ingresa a Funeraria pronto fallecimineto desde el menu del header desde productos y servicios
    ingresoFunerariaNIFProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuFuneraria, { timeout: 100000 }).realHover();
        cy.get(menuFunerariaNIF, { timeout: 100000 }).realHover().click()
    }

    //se ingresa a Funeraria necesidad futura desde el menu del header desde productos y servicios
    ingresoFunerariaNFProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuFuneraria, { timeout: 100000 }).realHover();
        cy.get(menuFunerariaNF, { timeout: 100000 }).realHover().click()
    }

    //se ingresa a Sepultura necesidad inmediata desde el menu del header desde productos y servicios
    ingresoSepulturaNIProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuSepultura, { timeout: 100000 }).realHover();
        cy.get(menuSepulturaNI, { timeout: 100000 }).realHover().click()
    }
    //se ingresa a Sepultura pronto fallecimineto desde el menu del header desde productos y servicios
    ingresoSepulturaNIFProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuSepultura, { timeout: 100000 }).realHover();
        cy.get(menuSepulturaNIF, { timeout: 100000 }).realHover().click()
    }

    //se ingresa a Sepultura necesidad futura desde el menu del header desde productos y servicios
    ingresoSepulturaNFProductosServicios(){
        cy.xpath(menuProductosServicios, { timeout: 100000 }).realHover();
        cy.get(menuSepultura, { timeout: 100000 }).realHover();
        cy.get(menuSepulturaNF, { timeout: 100000 }).realHover().click({timeout: 100000})
    }
    

    //se ingresa al parque de PAV
    ingresarPAV(){
        cy.get(btnConocerParquePAV, { timeout: 10000 }).should('be.visible').click()
        cy.get('h1').contains('Parque Américo Vespucio')
    }
    
    //se ingresa al parque de PCO
    ingresarPCO(){
        cy.get(btnConocerParquePCO, {timeout: 10000}).should('be.visible').click()
        cy.get('h1').contains('Parque Cordillera')
    }
    
    //Se ingresa el parque de PPH
    ingresaPPH(){
        cy.get(btnConocerParquePPH,{timeout: 10000}).should('be.visible').click()
        cy.get('h1').contains('Parque Padre Hurtado')
    }

    //Se ingresa a la cremacion desde el home
    ingresarCremacion(){
        cy.get(fotoCremacion,{timeout: 100000}).should('be.visible').realHover()
        cy.xpath(btnDetallesCremacion, {timeout: 1000000}).should('be.visible').click()
    }

    //Se ingresa a la cremacion
    ingresarCremacionNecesidadFutura(){
        cy.get(menuProductosServicios, {timeout: 100000}).should('be.visible').realHover()
        cy.get(menuCremacion, {timeout: 100000}).should('be.visible').realHover()
        cy.get(menuNcesidadFutura, {timeout: 100000}).should('be.visible').realHover()
    }

    //selecciona card de Funeraria 
    seleccionarCardFuneraria(){
        cy.get(cardFuneraria, { timeout: 100000 }).scrollIntoView().should('be.visible').realHover();
        cy.get(cardVerDetalleFuneraria, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/funeraria')
    }
    //selecciona card de Velatorio 
    seleccionarCardVelatorio(){
        cy.get(cardVelatorio, { timeout: 100000 }).scrollIntoView().should('be.visible').realHover();
        cy.get(cardVerDetalleVelatorio, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/productos/velatorio/velatorio-ni')
    }
    //selecciona card de cremacion 
    seleccionarCardCremacion(){
        cy.get(cardCremacion, { timeout: 100000 }).scrollIntoView().should('be.visible').realHover();
        cy.get(cardVerDetalleCremacion, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/cremacion')
    }
    //selecciona card de Sepultura 
    seleccionarCardSepultura(){
        cy.get(cardSepultura, { timeout: 100000 }).scrollIntoView().should('be.visible').realHover();
        cy.get(cardVerDetalleSepultura, { timeout: 100000 }).should('be.visible').click();
        cy.url().should('eq', 'https://ic.parquedelrecuerdo.cl/landing/sepultura')
    }

    //Selecciona desde el Footer un parque con opciones del 1 al 3 
    FooterParques(opcion){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.xpath(`${btnParquesFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
        // Verifica que window.open fue llamado
        cy.get('@windowOpen').should('be.calledOnce');
    }

    //Selecciona desde el Footer Conocenos una Opcion del 1 al 6
    FooterConocenos(opcion){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.xpath(`${btnConocenosFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
        // Verifica que window.open fue llamado
        cy.get('@windowOpen').should('be.calledOnce');
    }

    //Selecciona desde el Footer Servicio al cliente una Opcion del 1 al 4
    FooterServicioCliente(opcion){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        if(opcion == '4'){
            cy.xpath(`${btnServicioClienteFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
            cy.log('estamos antes de ver si se descarga')
            cy.readFile(`cypress/downloads/${filename}`).should('exist');
        }else{
            cy.xpath(`${btnServicioClienteFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
            cy.get('@windowOpen').should('be.calledOnce');
        }
        // Verifica que window.open fue llamado
    }

    //Selecciona desde el Footer contacto una Opcion del 1 al 4
    FooterContacto(opcion){
        if(opcion == '3'){
            cy.xpath(`${btnContactoFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
            cy.get(popUpCotizaEnLinea,{timeout:100000}).should('be.visible')
        }else{

            cy.window().then((win) => {
                // Espía window.open y simula su comportamiento
                cy.stub(win, 'open', (url) => {
                    // Abre la URL en la misma pestaña para fines de prueba
                    win.location.href = url;
                }).as('windowOpen');
            });
            cy.xpath(`${btnContactoFooter}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
            // Verifica que window.open fue llamado
            cy.get('@windowOpen').should('be.calledOnce');
        }
    }
    //Selecciona desde el Footer inferior de redes sociales facebook
    FooterRedesSociales(opcion){
        cy.xpath(`${btnRedesSocialesFooter}[${opcion}]/a`).should('have.attr', 'target', '_blank');
        // Haz clic en el botón que abre la nueva pestaña
        cy.xpath(`${btnRedesSocialesFooter}[${opcion}]/a`, { timeout: 100000 }).invoke('removeAttr', 'target').click()
        // Verifica que window.open fue llamado
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/')
    }

}
const homePage = new HomePage()
export default homePage;