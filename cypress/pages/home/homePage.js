const btnCremacionNI = ".cont-necesidad-inmediata > .cont-btn-producto > :nth-child(3)"
const btnCremacionNIF = ".cont-necesidad-futura > .cont-btn-producto > :nth-child(2)"
// menu header
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
const btnConocerParquePCO = ':nth-child(2) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
const btnConocerParquePPH = ':nth-child(3) > .cont-info-btn > .cont-btn-conocer-parque > .btn-conocer-parque'
// explorar nuestros productos
const fotoCremacion = ':nth-child(3) > .cont-info-productos'
const btnDetallesCremacion = '//*[@id="grilla-nuestros-productos"]/div/div[2]/div[3]/div/button'
//Ingreso Clientes body
const btnPagoExpress = '.cont-btn-pago-express > .btn-producto'

let btnOpcionMenuBarra;
let btnSubServicioBarra;

require('cypress-xpath')
import "cypress-real-events/support";

class HomePage {

    

    //ingreso a la URL de parque del recuerdo
    ingresoHomeParqueDelRecuerdo(){

        cy.visit('/')
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


    //selecciona de cremacion NI
    seleccionaraCremacionNI(){
        cy.get(btnCremacionNI, { timeout: 100000 }).should('be.visible').click();
    }

    //selecciona de cremacion NIF
    seleccionCremacionNIF(){
        cy.get(btnCremacionNIF, { timeout: 100000 }).should('be.visible').click()
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
    }

    //se ingresa al parque de PCO
    ingresarPCO(){
        cy.get(btnConocerParquePCO, {timeout: 10000}).should('be.visible').click()
    }

    //Se ingresa el parque de PPH
    ingresaPPH(){
        cy.get(btnConocerParquePPH,{timeout: 10000}).should('be.visible').click()
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

}
const homePage = new HomePage()
export default homePage;