require('cypress-xpath');
//Selecion Region
const selectRegion = '#mat-select-4 > div'
const selectMetroplitana = '#mat-option-16 > .mat-option-text'
//Boton continuar
const btnContinuar = 'Continuar'
//Formulario cuentanos de ti
const inputNombre = '#checkout-info-input-name'
const inputPaterno = '.mat-form-field.ng-tns-c46-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputMaterno = '.mat-form-field.ng-tns-c46-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '#checkout-info-input-mail'
//Seleccion servicio funerario
const checkPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnContinuarFunnel = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//precion servicios funerario
const precioPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
//btn continuar servicio de cremacion base
const btnContinuarCremacionBase = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[1]/button'
//seleccion ceremonia de despedida
const checkCeremoniaDespedidaIncluida = '#ceremonia-despedida-incluida > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkCeremoniaDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkCeremoniaDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkCeremoniaDespedidaEspecialConCoro = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
//Precio ceremonia de despedida 
const precioCeremoniaDeDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDeDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDeDesPedidaEspecialConCoror = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDepedida= ':nth-child(3) > .pasos > .cont-detalle > .valor-peso'
const btnContinuarCeremoniaDespedida = '//*[@id="mat-tab-content-0-2"]/div/div[2]/div[1]/button'
//seccion seleccion de anafora
const checkAnaforaMaderaBasica = '#seleccion-anforas-incluida > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkAnaforaCofrePremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnContinuarSelecionAnafora = '//*[@id="mat-tab-content-0-3"]/div/div[2]/div[1]/button'
//precio seleccion de anafora
const precioAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioAnaforaCofresPremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioSeleccionAnafora = ':nth-child(4) > .pasos > .cont-detalle > .valor-peso'
//Seccion entrega de cenizas
const checkEntregaCenizasIncluida = '#entrega-cenizas-incluido > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkEntregaCenizaseEspecial = '#entrega-especial-cenizas > .mat-checkbox-layout > .mat-checkbox-inner-container'
//Precio entrega de cenizas
const precioEntregaCenizasEspecial = '.detalle-valor'
const precioEntregaDeCenizas = ':nth-child(5) > .pasos > .cont-detalle > .valor-peso'
const btnEntregaCenizas = '//*[@id="mat-tab-content-0-4"]/div/div[2]/div[1]/button'
//Seccion descansp de ceizas
const checkMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkjardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-inner-container'
const checkColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-inner-container'
//Precio descanzo de cenizas
const precioMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioJardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioDescansoCenizas = ':nth-child(6) > .pasos > .cont-detalle > .valor-peso'
const btnIaResumen = '//*[@id="mat-tab-content-0-5"]/div/div[2]/div[1]/button'

const precioServicioFunerario = '.valor-peso'

//variables
const formulario = Cypress.env('Formulario');

function generarCorrero() {

    const timeStamp = Date.now();

    const correo = `${timeStamp}@qa.com`

    return correo

}
// formatea el precio eliminando los punto y el signo $
const cleanPrice = (price) => price.replace(/[$.]/g, '').trim(); // Remueve símbolos y espacios

class funnelCremacionNIF {

    //ingresa al flujo funnel cremacion NIF
    
    inicioFlujoCremacion(){

        cy.visit('https://preprod.parquedelrecuerdo.cl/funnel/inicio-flujo?producto=cremacion-nif')
        cy.clearCookies();   
        cy.clearLocalStorage();
    }

    //Se selecciona la region metropolitana
    seleccionRegion(){
        cy.get(selectRegion, {timeout: 100000}).should('be.visible').click()
        cy.get(selectMetroplitana,{timeout: 100000}).should('be.visible').click()
        //clic en el boton continuar
        cy.contains(btnContinuar,{timeout: 100000}).should('be.visible').click()
    }

    //Formulario cuentanos de ti
    formularioCuentanoDeTi(){

        const correoRandom = generarCorrero();
        //Se rellena el formulario
        cy.get(inputNombre,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].Nombre)
        cy.get(inputPaterno,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].apellido)
        cy.get(inputMaterno,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].apellidoMaterno)
        cy.get(inputTelefono,{timeout: 100000}).should('be.visible').type(formulario['FormularioFunnel'].telefono)
        cy.get(inputCorreo,{timeout: 100000}).should('be.visible').type(correoRandom)
        //clic en el boton continuar
        cy.contains(btnContinuar,{timeout: 100000}).should('be.visible').click()
    }

    //Se selecciona plan basico
    seleccionPlanBasico(){

        cy.wait(2000)
        cy.get(precioPlanBasico)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });

        cy.get(checkPlanBasico, {timeout: 100000}).should('be.visible').click()

        cy.wait(2000)

        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {

            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }

    //se seleciona el plan tradicional
    seleccionarPlanTradicional(){
        cy.get(checkPlanTradicion,{timeout: 100000}).should('be.visible').click()

        cy.get(precioPlanTradicion)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });

        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {

            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }
     //se seleciona el plan sustentable
     seleccionarPlanSustentable(){
        cy.get(checkPlanSustentable,{timeout: 100000}).should('be.visible').click()

        cy.get(precioPlanSustentable)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });
        
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {

            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })
        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }

    //se seleciona el plan tradicion destacado
    seleccionarPlanTradicionalDestacado(){
        cy.get(checkPlanTradicionDestacado,{timeout: 100000}).should('be.visible').click()

        cy.get(precioPlanTradicionDestacado)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });
        
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {

            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }

    //se seleciona el plan homenaje premium
    seleccionarPlanHomenajePremium(){
        

        cy.get(precioPlanHomenajePremium)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });

        cy.get(checkPlanHomenajePremium,{timeout: 100000}).should('be.visible').click()
        
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }

     //se seleciona el plan homenaje premium
     seleccionarPlanHomenajePremiumDestacado(){
        cy.get(checkPlanHomenajePremiumDestacado,{timeout: 100000}).should('be.visible').click()

        cy.get(precioCeremoniaDeDespedidaEspecial)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            cy.wrap(precio).as('precioProducto');
        });
        
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {

            const formato = cleanPrice(precio)
            //Compara el precio para ver si es el mismo con el elemento seleccionado
            cy.get('@precioProducto').then((formato) =>{
                expect(formato).to.eq(formato)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }

    //Servicio de cremacion base
    seccionServicioCremacionBase(){
        //clic en el boton continuar
        cy.wait(5000)
        cy.xpath(btnContinuarCremacionBase,{timeout: 100000}).should('be.visible').click()
        cy.wait(5000)
    }

    //Seleccion ceremonia de despedida incluida
    seleccionCermmoniaDeDespedidaIncluida(){
        cy.get(checkCeremoniaDespedidaIncluida,{timeout: 10000}).should('be.visible').click()

        cy.wait(3000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }

    //selecciona ceremonia de despedida especial
    seleccionCeremoniaDespeidaEspecial(){
      
      
      cy.get(precioCeremoniaDeDespedidaEspecial) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

      cy.get(checkCeremoniaDespedidaEspecial, { timeout: 100000 })
      .should('be.visible')
      .click();

      cy.wait(5000)
      
      cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }

    //selecciona ceremonia de despedida con coro
    selecionCeremoniaDespedidaConCoro(){

        cy.get(precioCeremoniaDeDespedidaConCoro) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkCeremoniaDespedidaConCoro, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(5000)

        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }

    //Selecion ceremonia de despedida con coro especial
    seleccionCeremoniaDespedidaEspecialConCoro(){
       
        cy.get(precioCeremoniaDeDesPedidaEspecialConCoror) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });
        checkCeremoniaDespedidaEspecialConCoro
        cy.get(checkCeremoniaDespedidaEspecialConCoro, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(5000)

        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }

    //seleccion anafora de madera basica incluida
    seleccionAnaforaMaderaBasicaIncluida(){
        
        cy.get(checkAnaforaMaderaBasica , {timeout: 10000}).should('be.visible').click()

        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }

    //Selecciona anafora o cofres full
    seleccionAnaforaCofreFull(){
        
        cy.get(precioAnaforaCofresFull) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkAnaforaCofresFull, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(5000)

        cy.get(precioSeleccionAnafora) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }

    //Seleccion Anafora y cofres premium
    seleccionAnaforaCofrePremium(){

        cy.get(precioAnaforaCofresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkAnaforaCofrePremium, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(5000)

        cy.get(precioSeleccionAnafora) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }

    //seleccion entrega de cenizas incluida
    seleccionEntregaCenizasIncluida(){

        cy.get(checkEntregaCenizasIncluida,{timeout: 100000}).should('be.visible').click()

        cy.wait(5000)

        cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()
    }

    //Se selecciona entrega de cenizas especial
    selecionEntregaCenizasEspecial(){

        cy.get(precioEntregaCenizasEspecial) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkEntregaCenizaseEspecial, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(5000)

        cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()
    }

    //se selecciona memorial del recuerdo
    seleccionaMemorialDelRecuerdo(){

        cy.wait(2000)
        cy.get(precioMemorialRecuerdo) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkMemorialRecuerdo, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(3000)

        cy.get(precioDescansoCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }

    //Se selecciona jardin de flores
    selecionarJardinFlores(){

        cy.get(precioJardinFlores) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkjardinFlores, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(3000)

        cy.get(precioDescansoCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
        
    }

    // se selecciona jardin de flores premium
    seleccionarJardinFloresPremium()
    {
        cy.wait(3000)

        cy.get(precioJardinFloresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.wait(3000)

        cy.get(checkJardinFloresPremium, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(3000)

        cy.get(precioDescansoCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()

    }

    //Se selecciona columbario de pared
    seleccionarColumbarioPared()
    {
        cy.get(precioColumbarioPared) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkColumbarioPared, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(3000)

        cy.get(precioDescansoCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }

    //Se selecciona columbario vidriado
    seleccionarColumbarioVidriado()
    {

        cy.wait(3000)
        cy.get(precioColumbarioVidriado) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkColumbarioVidriado, { timeout: 100000 })
        .should('be.visible')
        .click();

        cy.wait(3000)

        cy.get(precioDescansoCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.wait(3000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }

}
const FunnelCremacionNIF = new funnelCremacionNIF()
export default FunnelCremacionNIF;