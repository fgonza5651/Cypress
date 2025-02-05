const btnMenuDesplegable = '[src="https://stappdeveastus001.blob.core.windows.net/corporativo-ic/media/icons/svg/menu-hamburguesa.svg"]'
const btnProductosServicios = ':nth-child(4) > .a-menu-sidenav'

// menu header
const btnOpcionMenuBarra = '//*[@id="mat-tab-content-0-0"]/div/ul/li';
const btnSegundaSeleccionMenuBarra = '//*[@id="mat-tab-content-0-1"]/div/ul/li'
const btnTerceraSeleccionMenuBarra = '//*[@id="mat-tab-content-0-2"]/div/ul/li'

const menuPagoExpress = '.btn-pago-express-sidenav'
const btnPagoExpress = '.cont-btn-pago-express > .btn-producto'

//Botones Funeraria
const btnFunerariaMenu = '#mat-tab-content-0-1 > div > ul > li:nth-child(1) > a'
const btnNecesidadInmeditaFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(2) > a'
const btnProntoFallecimientoFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(3) > a'
const btnNecesidadFuturaFuneraria = '#mat-tab-content-0-2 > div > ul > li:nth-child(4) > a'
//Botones Sepultura
const btnSepulturaMenu = '#mat-tab-content-0-1 > div > ul > li:nth-child(4) > a'
const btnNecesidadInmeditaSepultura = '#mat-tab-content-0-2 > div > ul > li:nth-child(2) > a'
const btnProntoFallecimientoSepultura = '#mat-tab-content-0-2 > div > ul > li:nth-child(3) > a'
const btnNecesidadFuturaSepultura = '#mat-tab-content-0-2 > div > ul > li:nth-child(4) > a'
//Footer
const btnParquesFooter = '//*[@id="contenedor-secciones-footer"]/div[1]/ul/li'
const btnConocenosFooter = '//*[@id="contenedor-secciones-footer"]/div[2]/ul/li'
const btnServicioClienteFooter = '//*[@id="contenedor-secciones-footer"]/div[3]/ul/li'
const btnContactoFooter = '//*[@id="contenedor-secciones-footer"]/div[4]/ul/li'
const btnRedesSocialesFooter = '//*[@id="seccion-redes-footer"]/div/ul/li'
const popUpCotizaEnLinea = '#mat-dialog-0'
//Archivos descargados
const filename = 'BASES_SORTEO_PARQUE_DEL_RECUERDO.pdf'




let btnSubServicioBarra;

require('cypress-xpath')
import "cypress-real-events/support";



class HomePageMobile {
    //ingresa a la pagina desde mobile
    ingresoHomeMobile (){
        cy.viewport('iphone-xr')
        cy.visit('/')
    }

    //utilizando un numero desde el 1 hasta el 8 para las opciones del Menu desplegable
    OpcionBarraMenu(opcion){
        
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.xpath(`${btnOpcionMenuBarra}[${opcion}]/a`, { timeout: 100000 }).should('exist').click()
    }
    
    
    //utilizando un numero desde el 1 hasta el 6 para las opciones del SubMenu que se desplegable despues de seleccionar una opcion
    SubServicioBarraMenu(Servicio){
        cy.xpath(`${btnSegundaSeleccionMenuBarra}[${Servicio}]/a`, { timeout: 100000 }).should('exist').click()
    }
    
    //utilizando un numero desde el 1 hasta el 3 para las opciones del segundo SubMenu que se desplegable despues de seleccionar una segunda opcion
    NecesidadBarraMenu(Servicio){
        cy.xpath(`${btnTerceraSeleccionMenuBarra}[${Servicio}]/a`, { timeout: 100000 }).should('exist').realHover().click()
    }

    //revisa que al presionar uno de los botones, este te redirija a otra pagina con una URL diferente
    RevisarCambioUrl(){
        cy.wait(3000)
        cy.url().should('not.eq', 'https://ic.parquedelrecuerdo.cl/')
    }
    
    //revisa que al precionar el boton este abra otra pestaña utilizando un numero del 1 al 3 para distintos botones
    RevisarNuevaUrl(opcion){
        cy.window().then((win) => {
            // Espía window.open y simula su comportamiento
            cy.stub(win, 'open', (url) => {
                // Abre la URL en la misma pestaña para fines de prueba
                win.location.href = url;
            }).as('windowOpen');
        });
        cy.wait(2000)
        switch (opcion){
            //Selecciona el btn enviar flores en el subMenu
            case '1':               
                cy.xpath(`${btnSegundaSeleccionMenuBarra}[${opcion}]/a`).click()
                break;
            //Seleccion el btn pago express del menu desplegable 
            case '2':
                cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
                cy.get(menuPagoExpress, { timeout: 100000 }).should('be.visible').click();
                break;
            //Selecciona el btn pago express de el menu principal 
            case '3':
                cy.get(btnPagoExpress, { timeout: 100000 }).should('be.visible').click();
                break; 
        }
        // Verifica que window.open fue llamado
        cy.get('@windowOpen').should('be.calledOnce');
    }

    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad inmediata de la saccion Productos y servicios
    ingresoFunerariaNIProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadInmeditaFuneraria, { timeout: 10000 }).should('be.visible').click();
    }
    //Ingresa desde el menu desplegable a la seccion Funeraria pronto fallecimineto  de la saccion Productos y servicios
    ingresoFunerariaNIFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProntoFallecimientoFuneraria, { timeout: 10000 }).should('be.visible').click();
    }

    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad futura de la saccion Productos y servicios
    ingresoFunerariaNFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnFunerariaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadFuturaFuneraria, { timeout: 10000 }).should('be.visible').click();
    }
    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad inmediata de la saccion Productos y servicios
    ingresoSepulturaNIProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnSepulturaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadInmeditaSepultura, { timeout: 10000 }).should('be.visible').click();
    }
    //Ingresa desde el menu desplegable a la seccion Funeraria pronto fallecimineto  de la saccion Productos y servicios
    ingresoSepulturaNIFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnSepulturaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProntoFallecimientoSepultura, { timeout: 10000 }).should('be.visible').click();
    }

    //Ingresa desde el menu desplegable a la seccion Funeraria Necesidad futura de la saccion Productos y servicios
    ingresoSepulturaNFProductosServiciosMobile(){
        cy.get(btnMenuDesplegable, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnProductosServicios, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnSepulturaMenu, { timeout: 10000 }).should('be.visible').click();
        cy.get(btnNecesidadFuturaSepultura, { timeout: 10000 }).should('be.visible').click();
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

const homePageMobile = new HomePageMobile()
export default homePageMobile;