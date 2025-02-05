const totalPrecio = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-total-pagar.ng-star-inserted > div > p.cifra-valor-pagar'
const precioAgregado = '.precio-ssaa'
const slideCarrito = '#sidenav-carro-compra > div'
//Agregar al carrito
const btnAgregarCarrito = '.contenedor-caracteristicas-pdp > .contenedor-detalle-producto > .contenedor-total-pagar > .btn-agragar-compra'
const btnCarroCompras = '#contenedor-sidenav-carro-compra > div.cont-carro > div.cont-total-pagar > button'
//Botones de velatorio
const popUpVelatorio = '#mat-tab-content-2-0 > div'
const btnDetalleVelatorio = '#grilla-caracteristicas-pdp > div > div.contenedor-detalle-producto > div.contenedor-servicios-adicionales.ng-star-inserted > div:nth-child(2) > div > button.btn-ver-detalle-desktop'
const btnAgregarServicio = '.btn-agregar-ssaa'
const btnVelatorioEstandar = '#mat-tab-content-2-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(1)'
const btnVelatorioPremium = '#mat-tab-content-2-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(2)'
const iconCheckVelatorio = '#mat-checkbox-4 > label > span.mat-checkbox-inner-container > span.mat-checkbox-background'
//botones de funeraria
const btnDetalleFuneraria = ':nth-child(3) > .valor-ss-aa > .btn-ver-detalle-desktop'
const btnFunerariaTradicion = '#mat-tab-content-3-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(1)'
const iconCheckFuneraria = '#mat-checkbox-5 > label > span.mat-checkbox-inner-container > span.mat-checkbox-background'
//botones de Descanso de cenizas
const btnDetalleDescanso = ':nth-child(4) > .valor-ss-aa > .btn-ver-detalle-desktop'
const btnDescansoPared = '#mat-tab-content-4-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(1)'
const btnDescansoFloresPremium = '#mat-tab-content-4-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(2)'
const btnDescansoFlores = '#mat-tab-content-4-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(3)'
const btnDescansoMemorial = '#mat-tab-content-4-0 > div > div.cont-card-otras-opciones.ng-star-inserted > div > div:nth-child(4)'
const iconCheckDescanso = '#mat-checkbox-6 > label > span.mat-checkbox-inner-container > span.mat-checkbox-background'

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

class CremacionParvulo {
    //ingreso a la URL de Cremacion Premium NI
    ingresoCremacionParvulo(){
        cy.visit('https://ic.parquedelrecuerdo.cl/productos-pdp/cremacion/servicio-parvulo')
        cy.clearCookies();   
        cy.clearLocalStorage();
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
        cy.get(btnVelatorioEstandar,{timeout:100000}).should('be.visible').click()
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
        cy.get(btnVelatorioPremium,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioVelatorio')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckVelatorio).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo Funeraria basico y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaParvulo(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckFuneraria).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo Funeraria tradicion y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarFunerariaParvuloDestacado(){
        cy.get(btnDetalleFuneraria,{timeout:100000}).should('be.visible').click()
        cy.get(btnFunerariaTradicion,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioFuneraria')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckFuneraria).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
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
        cy.get(iconCheckDescanso).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo descanso columbario de pared y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoPared(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoPared,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckDescanso).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo descanso jardin de flores premium y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoFloresPremium(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoFloresPremium,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckDescanso).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo descanso jardin de flores y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoFlores(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoFlores,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckDescanso).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Agrega al carrito el articulo descanso memorial del recuerdo y revisa que la suma del total sea correcta
    //Ademas revisa si la casilla quede marcada con un check
    agregarDescansoMemoriar(){
        cy.get(btnDetalleDescanso,{timeout:100000}).should('be.visible').click()
        cy.get(btnDescansoMemorial,{timeout:100000}).should('be.visible').click()
        cy.get(precioAgregado,{timeout:100000}).invoke('text').then((text) => {
            cy.log(text);
            cy.wrap(text).as('precioDescanso')
        })
        ComprararPrecios(totalPrecio, precioAgregado)
        cy.get(iconCheckDescanso).should('be.visible').and('have.css','background-color','rgb(0, 153, 114)')
    }
    //Preciona el boton agregar al carrito y revisa que se muestre el slide
    revisarAgregarCarrito () {
        cy.get(btnAgregarCarrito,{timeout:100000}).should('be.visible').click()
        cy.get(slideCarrito,{timeout:100000}).should('be.visible')
    }
    //Preciona el boton ir al carro de compra
    precionarCarroCompra(){
        cy.get(btnCarroCompras,{timeout:100000}).should('be.visible').click()
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

const cremacionParvulo = new CremacionParvulo()
export default cremacionParvulo