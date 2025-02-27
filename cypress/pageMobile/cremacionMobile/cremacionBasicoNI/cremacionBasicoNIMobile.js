const btnTelefonoTitulo = '#contenedor-header-menu > div > div.contenedor-menu-desplegable-mobile > img:nth-child(1)'
const popUpTelefonos = '#mat-tab-content-2-0 > .mat-tab-body-content'
const totalPrecio = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-total-pagar.ng-star-inserted > div > p.cifra-valor-pagar'
const precioAgregado = '#contenedor-sidenav-ssaa > div > div.cont-info-producto-ssaa > div.cont-info-ssaa > div > p.text-normal'
const slideCarrito = '#sidenav-carro-compra > div'
const btnTourVirtual = '#grilla-navegacion-pdp > div > div.cont-btn-volver > a.btn-tour-virtual-mobile.ng-star-inserted'
const popUpTourVirtual = '.contenedor-swiper'
//Agregar al carrito
const btnAgregarCarrito = '.contenedor-caracteristicas-pdp > .contenedor-detalle-producto > .contenedor-total-pagar > .btn-agragar-compra'
const btnCarroCompras = '#contenedor-sidenav-carro-compra > div.cont-carro > div.cont-total-pagar > button'
//Informacion y caracteristicas de Cremacion
const btnCaracteristicas = '.contenedor-tabs-caracteristicas > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-0'
const informacionCaracteristicas = '.contenedor-tabs-caracteristicas > .mat-tab-group > .mat-tab-body-wrapper > #mat-tab-content-1-0 > .mat-tab-body-content'
const btnDetalle = '.contenedor-tabs-caracteristicas > .mat-tab-group > .mat-tab-header > .mat-tab-label-container > .mat-tab-list > .mat-tab-labels > #mat-tab-label-1-1'
const informacionDetalle = '.contenedor-tabs-caracteristicas > .mat-tab-group > .mat-tab-body-wrapper > #mat-tab-content-1-1 > .mat-tab-body-content'
//botones Comunicate con nosotros
const btnLlamanos = '#btn_llamanos_comunicate_con_nosotros'
const inputNombreLlamanos = ':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
const inputApellidoLlamanos = '.form-datos-cliente > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
const inputTelefonoLlamanos = ':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex'
const btnEscribenos = '.btn-escribenos'
const btnCotiza = '.btn-cotiza'
const urlCotiza = 'https://ic.parquedelrecuerdo.cl/contacto/cotiza-aqui'
//campo ejecutiva en linea
const btnEjecutiva = '#chatSalesforce'
const btnHablarConAsesora = '#btn-wsp'
const inputNumeroAsesoraEnLinea = '#mat-input-1'
const btnOtraSolicitud = '.cont-btns-contactos > :nth-child(3)'
const inputNombreOtraSolicitud = '#FirstName'
const inputApellidoOtraSolicitud = '#LastName'
const inputEmailOtraSolicitud = '#Email'
//Botones de velatorio
const popUpVelatorio = '#mat-tab-content-2-0 > div'
const btnDetalleVelatorio = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-servicios-adicionales.ng-star-inserted > div:nth-child(2) > div > button.btn-ver-detalle-mobile'
const btnAgregarServicio = '.btn-agregar-ssaa'
const btnVelatorioEstandar = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-active > div > div.cont-img-producto'
const btnVelatorioPremium = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-next > div > div.cont-img-producto'
const iconCheckVelatorio = '#mat-checkbox-4 > label > span.mat-checkbox-inner-container > span.mat-checkbox-background'
//botones de funeraria
const btnDetalleFuneraria = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-servicios-adicionales.ng-star-inserted > div:nth-child(3) > div > button.btn-ver-detalle-mobile'
const btnFunerariaTradicion = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-active > div > div.cont-img-producto'
const btnFunerariaTradicionDestacada = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-next > div > div.cont-img-producto'
const btnFunerariaSustentable = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-active > div > div.cont-img-producto'
const btnFunerariaPremium = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-next > div > div.cont-img-producto'
const btnFunerariaPremiumDestacada = '#cont-swipper-otras-opciones > swiper > div > div.swiper-slide.ng-star-inserted.swiper-slide-next > div > div.cont-img-producto'
const iconCheckFuneraria = '#mat-checkbox-5 > label > span.mat-checkbox-inner-container > span.mat-checkbox-background'
//botones de Descanso de cenizas
const btnDetalleDescanso = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-servicios-adicionales.ng-star-inserted > div:nth-child(4) > div > button.btn-ver-detalle-mobile'
const btnDescansoPared = '#cont-swipper-otras-opciones > swiper > div > div:nth-child(1) > div > div.cont-img-producto'
const btnDescansoFloresPremium = '#cont-swipper-otras-opciones > swiper > div > div:nth-child(2) > div > div.cont-img-producto'
const btnDescansoFlores = '#cont-swipper-otras-opciones > swiper > div > div:nth-child(3) > div > div.cont-img-producto'
const btnDescansoMemorial = '#cont-swipper-otras-opciones > swiper > div > div:nth-child(4) > div > div.cont-img-producto'

//Funcion que revisa la suma de los productos agregados sea igual al total
function ComprararPrecios (precioTotaltext, precioAgregadoText){
    cy.wait(1000)
    cy.get(precioTotaltext).invoke('text').then((precioInicial) => {
        const precioTotalNum = parseFloat(precioInicial.replace(/[.$]/g, ''));
        cy.log(precioTotalNum);
        cy.get(precioAgregadoText).invoke('text').then((precioAgregado) => {
            const precioAgregadoNum = parseFloat(precioAgregado.replace(/[.$]/g, ''));
            cy.log(precioAgregadoNum);
            const totalSuma = precioTotalNum + precioAgregadoNum;
            cy.get(btnAgregarServicio,{timeout:100000}).should('be.visible').click()
            cy.wait(2000)
            cy.get(precioTotaltext).invoke('text').then((precioFinal) => {
                const precioFinalNum = parseFloat(precioFinal.replace(/[.$]/g, ''));
                expect(totalSuma).to.equal(precioFinalNum); 
            })
        })
    })
}

const formularioLanding = Cypress.env('Formulario')

class CremacionBasicoNIMobile {
    
    //ingreso a la URL de Cremacion Basica NI Mobile
    ingresoCremacionBasicaNIMobile(url){
        cy.viewport('iphone-xr')
        cy.visit(url.urlCremacionBasicoNI)
        cy.clearCookies();   
        cy.clearLocalStorage();
    }
    //revisa el boton de telefonos y lo preciona 
    iconoTelefonosTitulo (){
        cy.get(btnTelefonoTitulo,{timeout: 100000}).should('be.visible').click()
        cy.get(popUpTelefonos,{timeout: 100000}).should('be.visible')
    }
    //Agrega al carrito el articulo velatorio cafeteria basico y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarVelatorioBasico(){
        cy.get(btnDetalleVelatorio,{timeout:100000}).should('be.visible').click()
        cy.get(popUpVelatorio,{timeout:100000}).should('be.visible')
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioVelatorio')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckVelatorio).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo velatorio cafeteria estandar y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarVelatorioEstandar(){
        cy.get(btnDetalleVelatorio,{timeout:100000}).should('be.visible').click()
        cy.get(btnVelatorioEstandar,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioVelatorio')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckVelatorio).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo Velatorio cafeteria premium y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarVelatorioPremium(){
        cy.get(btnDetalleVelatorio,{timeout:100000}).should('be.visible').click()
        cy.get(btnVelatorioPremium,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioVelatorio')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckVelatorio).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo Funeraria basico y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaBasico(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo Funeraria tradicion y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaTradicion(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaTradicion,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo Funeraria tradicion destacado y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaTradicionDestacado(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaTradicionDestacada,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo Funeraria sustentable y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaSustentable(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaSustentable,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo Funeraria Homenaje Premium y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaPremium(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaPremium,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo Funeraria Homenaje Premium Destacado y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaPremiumDestacado(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaPremiumDestacada,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo descanso columbrario vidriado y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoVidriado(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo descanso columbario de pared y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoPared(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoPared,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo descanso jardin de flores premium y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoFloresPremium(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoFloresPremium,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo descanso jardin de flores y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoFlores(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoFlores,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Agrega al carrito el articulo descanso memorial del recuerdo y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoMemoriar(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoMemorial,{timeout:100000}).click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
    }
    //Preciona el boton agregar al carrito y revisa que se muestre el slide
    revisarAgregarCarrito () {
        cy.get(btnAgregarCarrito,{timeout:100000}).should('be.visible').click()
        cy.get(slideCarrito,{timeout:100000}).should('be.visible')
    }
    //Preciona el boton ir al carro de compras
    precionarCarroCompra(){
        cy.get(btnCarroCompras,{timeout:100000}).should('be.visible').click()
    }
    //Preciona el boton tour virtual y revisa que se desplegue el pop up
    tourVirtual(){
        cy.get(btnTourVirtual,{timeout:100000}).should('be.visible').click()
        cy.get(popUpTourVirtual,{timeout:10000}).should('be.visible')
    }
    //Revisa que se muestre tanto las caracteristicas como los detalles 
    caracteristicasDetalles (){
        cy.get(btnDetalle,{timeout:100000}).should('be.visible').click()
        cy.get(informacionDetalle,{timeout:100000}).should('be.visible')
        cy.get(btnCaracteristicas,{timeout:100000}).should('be.visible').click()
        cy.get(informacionCaracteristicas,{timeout:100000}).should('be.visible')
    }
    //Preciona el boton llamanos y rellena el formulario
    llamanos (formulario){
        cy.get(btnLlamanos,{timeout:100000}).should('be.visible').click()
        cy.get(inputNombreLlamanos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.Nombre)
        cy.get(inputApellidoLlamanos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.apellido)
        cy.get(inputTelefonoLlamanos,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //Preciona el boton escribenos y rellena el formulario
    escribenos (formulario){
        cy.get(btnEscribenos,{timeout:100000}).should('be.visible').click()
        cy.get(inputNumeroAsesoraEnLinea,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
    }
    //Preciona el boton cotiza que esta al final de la pagina y revisa que nos redireccione a "https://ic.parquedelrecuerdo.cl/contacto/cotiza-aqui"
    cotiza (url){
        cy.get(btnCotiza,{timeout:100000}).should('be.visible').click()
        cy.url({timeout: 100000}).should('eq', url.urlCotiza)
    }
    //revisa que el precio de velatorio en el slide carrito sean iguales al solicitado
    revisarPreciosVelatorio(){
        cy.get('@precioVelatorio').then((precioVelatorio) =>{
            const precioVelatorioNum = precioVelatorio.replace(/[' ']/g,'')
            Cypress.env('precioVelatorio',precioVelatorioNum)
            cy.log(precioVelatorioNum)
            cy.wrap(precioVelatorioNum).as('precioVelatorioExport')
            cy.get(slideCarrito,{timeout:100000}).contains(precioVelatorioNum).should('be.visible')
        })
    }
    //revisa que el precio de funeraria en el slide carrito sean iguales al solicitado
    revisarPreciosFuneraria(){
        cy.get('@precioFuneraria').then((precioFuneraria) =>{
            const precioFunerariaNum = precioFuneraria.replace(/[' ']/g,'')
            cy.log(precioFunerariaNum)
            cy.wrap(precioFunerariaNum).as('precioFunerariaExport')
            cy.get(slideCarrito,{timeout:100000}).contains(precioFunerariaNum).should('be.visible')
        })
    }
    //revisa que el precio de descanso en el slide carrito sean iguales al solicitado
    revisarPreciosDescanso (){
        cy.get('@precioDescanso').then((precioDescanso) =>{
            const precioDescansoNum = precioDescanso.replace(/[' ']/g,'')
            Cypress.env('precioDescanso',precioDescansoNum)
            cy.log(precioDescansoNum)
            cy.wrap(precioDescansoNum).as('precioDescansoExport')
            cy.get(slideCarrito,{timeout:100000}).contains(precioDescansoNum).should('be.visible')
        })  
    }
}

const cremacionBasicoNIMobile = new CremacionBasicoNIMobile ()
export default cremacionBasicoNIMobile