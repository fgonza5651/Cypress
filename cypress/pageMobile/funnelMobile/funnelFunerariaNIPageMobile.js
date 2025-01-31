require('cypress-xpath');
//Selecion Region
const selectRegion = '#mat-select-value-1 > .mat-select-placeholder'
const selectMetroplitana = '#mat-option-0 > .mat-option-text'
const selectComuna = '#mat-select-value-3 > .mat-select-placeholder'
const selectProvidencia = '#mat-option-67 > .mat-option-text'
//Expansion indicador cotizacion
const btnExpansionIndicador = '.mat-expansion-indicator'
//Boton continuar
const btnContinuar = 'Continuar'
const btnContinuarSinServicio = '.btn-continuar-mobile'
//Formulario cuentanos de ti
const inputNombre = '#checkout-info-input-name'
const inputPaterno = '.mat-form-field.ng-tns-c46-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputMaterno = '.mat-form-field.ng-tns-c46-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '#checkout-info-input-mail'
//Seleccion servicio funerario
const checkPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanBasico = '#card-producto-funeraria-3 > .btn-sidenav-mobile'
const checkPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanTradicion = '#card-producto-funeraria-4 > .btn-sidenav-mobile'
const checkPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanSustentable = '#card-producto-funeraria-5 > .btn-sidenav-mobile'
const checkPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanTradicionDestacado = '#card-producto-funeraria-6 > .btn-sidenav-mobile'
const checkPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanHomenajePremium = '#card-producto-funeraria-7 > .btn-sidenav-mobile'
const checkPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanHomenajePremiumDestacado = '#card-producto-funeraria-8 > .btn-sidenav-mobile'
const btnContinuarFunnel = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//precion servicios funerario
const precioPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-label >.cont-precio-uf > .detalle-valor'
const precioPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
//Seleccion servicio Velatorio
const checkVelatorioBasico = '#velatorio-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioBasico = '#card-producto-velatorio-0 > .btn-sidenav-mobile'
const checkVelatorioCafeteriaEstandar = '#velatorio-cafeteria-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioCafeteriaEstandar = '#card-producto-velatorio-1 > .btn-sidenav-mobile'
const checkVelatorioCefeteriaPremium = '#velatorio-cafeteria-premium-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioCafeteriaPremium = '#card-producto-velatorio-2 > .btn-sidenav-mobile'
const btnContinuarVelatorio = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[1]/button'
//precion servicios Velatorio
const precioVelatorioBasico = '#velatorio-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioVelatorioEstandar = '#velatorio-cafeteria-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioVelatorioPremium = '#velatorio-cafeteria-premium-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
//Seccion Nesecita cremacion o sepultura
const btnNecesitoCremacion = ':nth-child(1) > .cont-info-servicio > button'
const btnNecesitoSepultura = ':nth-child(2) > .cont-info-servicio > button'
const btnContinuarSinEstosServicios = '//*[@id="mat-tab-content-0-2"]/div/div[2]/div[1]/button'
//btn continuar servicio de cremacion base
const btnContinuarCremacionBase = '//*[@id="mat-tab-content-0-2"]/div/div[2]/div[1]/button'
//seleccion ceremonia de despedida
const checkCeremoniaDespedidaIncluida = '#ceremonia-despedida-incluida > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaIncluida = '#card-producto-ceremonia-despedida-1 > .btn-sidenav-mobile'
const checkCeremoniaDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaEspecial = '#card-producto-ceremonia-despedida-2 > .btn-sidenav-mobile'
const checkCeremoniaDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaConCoro = '#card-producto-ceremonia-despedida-4 > .btn-sidenav-mobile'
const checkCeremoniaDespedidaEspecialConCoro = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaEspecialConCoro = '#card-producto-ceremonia-despedida-5 > .btn-sidenav-mobile'
//Precio ceremonia de despedida 
const precioCeremoniaDeDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDeDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDeDesPedidaEspecialConCoror = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioCeremoniaDepedida= ':nth-child(4) > .cont-valor-servicio > .valor-servicio > .valor-servicio-peso'
const btnContinuarCeremoniaDespedida = '//*[@id="mat-tab-content-0-3"]/div/div[2]/div[1]/button'
//seccion seleccion de anafora
const checkAnaforaMaderaBasica = '//*[@id="seleccion-anforas-incluida"]/label/span[1]'
const btnVerMasAnaforaMaderaBasica = '#card-producto-seleccion-anfora-1 > .btn-sidenav-mobile'
const checkAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasAnaforaCofresFull = '#card-producto-seleccion-anfora-2 > .btn-sidenav-mobile'
const checkAnaforaCofrePremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasAnaforaCofrePremium = '#card-producto-seleccion-anfora-3 > .btn-sidenav-mobile'
const btnContinuarSelecionAnafora = '//*[@id="mat-tab-content-0-4"]/div/div[2]/div[1]/button'
//precio seleccion de anafora
const precioAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioAnaforaCofresPremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioSeleccionAnafora = ':nth-child(5) > .cont-valor-servicio > .valor-servicio > .valor-servicio-peso'
//Seccion entrega de cenizas
const checkEntregaCenizasIncluida = '#entrega-cenizas-incluido > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasEntregaCenizasIncluida = '#card-producto-entrega-cenizas-0 > .btn-sidenav-mobile'
const checkEntregaCenizaseEspecial = '#entrega-especial-cenizas > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasEntregaCenizasEspecial = '#card-producto-entrega-cenizas-2 > .btn-sidenav-mobile'
//Precio entrega de cenizas
const precioEntregaCenizasEspecial = '.detalle-valor'
const precioEntregaDeCenizas = ':nth-child(6) > .cont-valor-servicio > .valor-servicio > .valor-servicio-peso'
const btnEntregaCenizas = '//*[@id="mat-tab-content-0-5"]/div/div[2]/div[1]/button'
//Seccion descansp de ceizas
const checkMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasMemorialRecuerdo =  ':nth-child(1) > .btn-sidenav-mobile'
const checkjardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasJardinFlores = '#card-producto-descanso-cenizas-1 > .btn-sidenav-mobile'
const checkJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasJardinFloresPremium = '#card-producto-descanso-cenizas-2 > .btn-sidenav-mobile'
const checkColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasColumbarioPared = '#card-producto-descanso-cenizas-3 > .btn-sidenav-mobile'
const checkColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasColumbarioVidriado = '#card-producto-descanso-cenizas-4 > .btn-sidenav-mobile'
//Precio descanzo de cenizas
const precioMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioJardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-label >.cont-precio-uf > .detalle-valor'
const precioColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-label >.cont-precio-uf > .detalle-valor'
const precioColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-label > .cont-precio-uf > .detalle-valor'
const precioDescansoCenizas = ':nth-child(7) > .cont-valor-servicio > .valor-servicio > .valor-servicio-peso'
const btnIaResumen = '//*[@id="mat-tab-content-0-6"]/div/div[2]/div[1]/button'
//Seccion Sidenav
const sidenavServicio = '.mat-bottom-sheet-container > corporativo-bottom-sidenav'
const precioServicioSidenav = '.precio-servicio-sidenav'
const btnVolver = '.volver'
const btnSeleccionar = '.btn-seleccionar'




const precioServicioFunerario = '.valor-servicio-peso'
const precioServicioVelatorio = ':nth-child(2) > .cont-valor-servicio > .valor-servicio > .valor-servicio-peso'


//variables
const formulario = Cypress.env('Formulario');

function generarCorrero() {

    const timeStamp = Date.now();

    const correo = `${timeStamp}@qa.com`

    return correo

}
// formatea el precio eliminando los punto y el signo $
const cleanPrice = (price) => price.replace(/[$.]/g, '').trim(); // Remueve símbolos y espacios

class funnelFunerariaNIMobile {

    //ingresa al flujo funnel cremacion NI
    
    inicioFlujoCremacion(){
        cy.viewport('iphone-xr')
        cy.visit('https://ic.parquedelrecuerdo.cl/funnel/inicio-flujo?producto=funeraria-ni')
        cy.wait(2000)
        cy.clearCookies();   
        cy.clearLocalStorage();
    }

    //Se selecciona la region metropolitana
    seleccionRegionComuna(){
        cy.wait(2000)
        cy.get(selectRegion, {timeout: 100000}).should('be.visible').click()
        cy.get(selectMetroplitana,{timeout: 100000}).should('be.visible').click()
        cy.get(selectComuna, {timeout: 100000}).should('be.visible').click()
        cy.get(selectProvidencia,{timeout: 100000}).scrollIntoView().should('be.visible').click()
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
    //selecciona el servicio desde el sidenav de ver mas
    SeleccionarServiciosSidenav(){
      cy.get(btnSeleccionar,{timeout:100000}).should('be.visible').click()
    }
    //Selecciona volver desde el sidenav de ver mas
    SeleccionarVolverSidenav(){
      cy.get(btnVolver,{timeout:100000}).should('be.visible').click()
    }
    //Selecciona volver desde el sidenav de ver mas
    SeleccionarContinuarSinServicio(){
      cy.get(btnContinuarSinServicio,{timeout:100000}).should('be.visible').click()
    }
    //selecciona continuar del servicio funeraria
    seccionFunerariaContinuar(){
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }
    //Se selecciona plan basico
    seleccionPlanBasico(){

        cy.wait(2000)
        cy.get(precioPlanBasico,{timeout:100000})
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio del producto sin espacios y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        
          cy.get(checkPlanBasico, {timeout: 100000}).should('be.visible').click()
          
          cy.wait(2000)
          cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
          cy.get(btnExpansionIndicador, {timeout: 100000}).should('be.visible').click()
          cy.get(precioServicioFunerario)
          .invoke('text')//obtengo el texto del elemento
          .then((precio)=> {
            const precioSin$ = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
              expect(valor).to.eq(precioSin$)
            })
          })
          cy.get(btnExpansionIndicador, {timeout: 100000}).should('be.visible').click()
      }
      
      //Se selecciona ver mas de plan basico
      verMasPlanBasico(){
        
        cy.wait(2000)
        cy.get(precioPlanBasico,{timeout:100000})
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio del producto y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        
        cy.get(btnVerMasPlanBasico, {timeout: 100000}).should('be.visible').click()
        
        cy.wait(2000)
        
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
          const precioSin$ = cleanPrice(precio)
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precioSin$)
          })
        })
        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
      }
      
      //se seleciona el plan tradicional
      seleccionarPlanTradicional(){
        cy.get(checkPlanTradicion,{timeout: 100000}).should('be.visible').click()
        
        cy.get(precioPlanTradicion)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio sin espacios del producto y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        cy.wait(2000)
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
          const precioSinText = cleanPrice(precio)
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precioSinText)
          })
        })
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        
      }
    //se seleciona ver mas del plan tradicional
    verMasPlanTradicional(){
      
      cy.wait(2000)
      cy.get(precioPlanTradicion)
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
        const precioLimpio = cleanPrice(precio)
        //guardo el precio del producto y lo guardo en una variable
        cy.wrap(precioLimpio).as('precioProducto');
      });
      
      cy.get(btnVerMasPlanTradicion,{timeout: 100000}).should('be.visible').click()
      cy.wait(2000)
      cy.get(precioServicioSidenav)
      .invoke('text')//obtengo el texto del elemento
      .then((precio)=> {
        const precioSinText = cleanPrice(precio)
        cy.get('@precioProducto').then((valor) =>{
          expect(valor).to.eq(precioSinText)
        })
      })
      
      //clic en el boton continuar
      cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }
    
    //se seleciona el plan sustentable
    seleccionarPlanSustentable(){
      
      cy.get(precioPlanSustentable)
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
        //guardo el precio del producto sin espacios y lo guardo en una variable
        const precioLimpio = cleanPrice(precio)
        cy.wrap(precioLimpio).as('precioProducto');
      });
      
      cy.get(checkPlanSustentable,{timeout: 100000}).should('be.visible').click()
      cy.wait(2000)
      cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
      cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
      cy.get(precioServicioFunerario)
      .invoke('text')//obtengo el texto del elemento
      .then((precio)=> {
        const precioSinText = cleanPrice(precio)
        cy.get('@precioProducto').then((valor) =>{
          expect(valor).to.eq(precioSinText)
        })
      })
      cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
    }
    
    //se seleciona ver mas del plan sustentable
    verMasPlanSustentable(){
      
      cy.wait(2000)
      cy.get(precioPlanSustentable)
      .invoke('text') //obtengo el texto del elemento
       .then((precio) => {
          const precioLimpio = cleanPrice(precio)
         //guardo el precio del producto y lo guardo en una variable
         cy.wrap(precioLimpio).as('precioProducto');
        });
        
        cy.get(btnVerMasPlanSustentable,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {  
          const precioSinText = cleanPrice(precio)        
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precioSinText)
          })
        })
        //clic en el boton continuar
        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
      }
      //se seleciona el plan tradicion destacado
      seleccionarPlanTradicionalDestacado(){
        
        cy.get(precioPlanTradicionDestacado,{timeout:100000})
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio sin espacios del producto y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        
        cy.get(checkPlanTradicionDestacado,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
          const precionSinText = cleanPrice(precio)
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precionSinText)
          })
        })
        
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
      }
      //se seleciona el plan tradicion destacado
      verMasPlanTradicionalDestacado(){
        
        cy.wait(2000)
        cy.get(precioPlanTradicionDestacado)
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
        //guardo el precio del producto y lo guardo en una variable
        const precioLimpio = cleanPrice(precio)
        cy.wrap(precioLimpio).as('precioProducto');
      });
      
      cy.get(btnVerMasPlanTradicionDestacado,{timeout: 100000}).should('be.visible').click()
      cy.wait(2000)
      cy.get(precioServicioSidenav)
      .invoke('text')//obtengo el texto del elemento
      .then((precio)=> {
        const precioSinText = cleanPrice(precio)
        cy.get('@precioProducto').then((valor) =>{
          expect(valor).to.eq(precioSinText)
        })
      })
      
      cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }
    
    //se seleciona el plan homenaje premium
    seleccionarPlanHomenajePremium(){
      
      
      cy.wait(3000)
      cy.get(precioPlanHomenajePremium,{timeout:100000})
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
          //guardo el precio sin espacios del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
          cy.get(checkPlanHomenajePremium,{timeout: 100000}).should('be.visible').click()
          cy.wait(2000)
          cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
          cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
          cy.get(precioServicioFunerario)
          .invoke('text')//obtengo el texto del elemento
          .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
              expect(valor).to.eq(precioSinText)
            })
          })
          
          cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
          //clic en el boton continuar
        }
        //se seleciona ver mas del plan homenaje premium
        verMasPlanHomenajePremium(){
          
          cy.wait(2000)
          cy.get(precioPlanHomenajePremium)
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
          cy.get(btnVerMasPlanHomenajePremium,{timeout: 100000}).should('be.visible').click()
          cy.wait(2000)
          cy.get(precioServicioSidenav)
          .invoke('text')//obtengo el texto del elemento
          .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
              expect(valor).to.eq(precioSinText)
            })
          })
          cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
        }
        
        //se seleciona el plan homenaje premium
        seleccionarPlanHomenajePremiumDestacado(){
          
          cy.get(precioPlanHomenajePremiumDestacado)
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
        cy.get(checkPlanHomenajePremiumDestacado,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        //clic en el boton continuar
    }
     //se seleciona el plan homenaje premium
     verMasPlanHomenajePremiumDestacado(){
       cy.wait(2000)
       cy.get(precioPlanHomenajePremiumDestacado)
       .invoke('text') //obtengo el texto del elemento
       .then((precio) => {
         //guardo el precio del producto y lo guardo en una variable
         const precioLimpio = cleanPrice(precio)
         cy.wrap(precioLimpio).as('precioProducto');
        });
        cy.get(btnVerMasPlanHomenajePremiumDestacado,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }

    //Selecciona continuar de la seccion velatorio
    seccionVelatorioContinuar(){
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
    }

    //se seleciona Velatorio basico
    seleccionarVelatorioBasico(){
          
          cy.get(precioVelatorioBasico)
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
       cy.get(checkVelatorioBasico,{timeout: 100000}).should('be.visible').click()
       cy.wait(2000)
       cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
       cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })
    }
     //se seleciona ver mas de Velatorio basico
     verMasVelatorioBasico(){
       cy.wait(2000)
       cy.get(precioVelatorioBasico)
       .invoke('text') //obtengo el texto del elemento
       .then((precio) => {
         //guardo el precio del producto y lo guardo en una variable
         const precioLimpio = cleanPrice(precio)
         cy.wrap(precioLimpio).as('precioProducto');
        });
        cy.get(btnVerMasVelatorioBasico,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }
    //se seleciona Velatorio cafeteria estandar
    seleccionarVelatorioCafeteriaEstandar(){
          
          cy.get(precioVelatorioEstandar)
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
        cy.get(checkVelatorioCafeteriaEstandar,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

    }
     //se seleciona ver mas de Velatorio cafeteria Estandar
     verMasVelatorioCafeteriaEstandar(){
       cy.wait(2000)
       cy.get(precioVelatorioEstandar)
       .invoke('text') //obtengo el texto del elemento
       .then((precio) => {
         //guardo el precio del producto y lo guardo en una variable
         const precioLimpio = cleanPrice(precio)
         cy.wrap(precioLimpio).as('precioProducto');
        });
        cy.get(btnVerMasVelatorioCafeteriaEstandar,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }
    //se seleciona Velatorio cafeteria premium
    seleccionarVelatorioCafeteriaPremium(){
          
          cy.get(precioVelatorioPremium)
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
        cy.get(checkVelatorioCefeteriaPremium,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

    }
     //se seleciona ver mas de Velatorio cafeteria premium
     verMasVelatorioCafeteriaPremium(){
       cy.wait(2000)
       cy.get(precioVelatorioPremium)
       .invoke('text') //obtengo el texto del elemento
       .then((precio) => {
         //guardo el precio del producto y lo guardo en una variable
         const precioLimpio = cleanPrice(precio)
         cy.wrap(precioLimpio).as('precioProducto');
        });
        cy.get(btnVerMasVelatorioCafeteriaPremium,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioSidenav)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }
    seleccionNecesitoCremacion(){
        cy.wait(3000)
        cy.get(btnNecesitoCremacion,{timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.wait(3000)    
    }
    seleccionNecesitoSepultura(){
        cy.wait(3000)
        cy.get(btnNecesitoSepultura,{timeout: 100000}).scrollIntoView().should('be.visible').click()
        cy.wait(3000)    
    }
    seleccionContinuarSinEstosServicios(){
        cy.wait(3000)
        cy.xpath(btnContinuarSinEstosServicios,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)    
    }

    //Servicio de cremacion base
    seccionServicioCremacionBase(){
        //clic en el boton continuar
        cy.wait(5000)
        cy.xpath(btnContinuarCremacionBase,{timeout: 100000}).should('be.visible').click()
        cy.wait(5000)
    }
    //selecciona continuar en el servicio ceremonia despedida
    seccionCeremoniaDespedidaContinuar(){
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
    }
    //Seleccion ceremonia de despedida incluida
    seleccionCermmoniaDeDespedidaIncluida(){
        cy.get(checkCeremoniaDespedidaIncluida,{timeout: 10000}).should('be.visible').click()

        cy.wait(3000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }
    //Seleccion ceremonia de despedida incluida
    verMasCermmoniaDeDespedidaIncluida(){
        cy.get(btnVerMasCeremoniaDespedidaIncluida,{timeout: 10000}).should('be.visible').click()
        cy.wait(3000)
        cy.get(sidenavServicio,{timeout:100000}).should('be.visible')
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

      cy.get(checkCeremoniaDespedidaEspecial, { timeout: 100000 }).should('be.visible').click();
      cy.wait(2000)
      cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
      cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
      cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
      .invoke('text')
      .then((precio) => {
        const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
        // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
    }
    //selecciona ceremonia ver mas de despedida especial
    verMasCeremoniaDespeidaEspecial(){
      
      
      cy.get(precioCeremoniaDeDespedidaEspecial) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

      cy.get(btnVerMasCeremoniaDespedidaEspecial, { timeout: 100000 }).should('be.visible').click();
      cy.wait(2000)
      cy.get(precioServicioSidenav).invoke('text').then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
            cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }

    //selecciona ceremonia de despedida con coro
    selecionCeremoniaDespedidaConCoro(){

        cy.get(precioCeremoniaDeDespedidaConCoro) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkCeremoniaDespedidaConCoro,{ timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()        
        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.wait(3000)

    }
    //selecciona ceremonia de despedida con coro
    verMasCeremoniaDespedidaConCoro(){

        cy.get(precioCeremoniaDeDespedidaConCoro) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasCeremoniaDespedidaConCoro, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible')
    }

    //Selecion ceremonia de despedida con coro especial
    seleccionCeremoniaDespedidaEspecialConCoro(){
       
        cy.get(precioCeremoniaDeDesPedidaEspecialConCoror) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });
        cy.get(checkCeremoniaDespedidaEspecialConCoro,{ timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()

    }

    //Selecion ceremonia de despedida con coro especial
    verMasCeremoniaDespedidaEspecialConCoro(){
       
        cy.get(precioCeremoniaDeDesPedidaEspecialConCoror) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });
        cy.get(btnVerMasCeremoniaDespedidaEspecialConCoro, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(sidenavServicio,{timeout: 100000}).should('be.visible').click()
    }
    //selecciona continuar desde la seccion anafora
    seccionAnaforaContinuar(){
      cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }
    
    //seleccion anafora de madera basica incluida
    seleccionAnaforaMaderaBasicaIncluida(){
        cy.xpath(checkAnaforaMaderaBasica , {timeout: 10000}).click({ force: true })
        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }
    //seleccion anafora de madera basica incluida
    verMasAnaforaMaderaBasicaIncluida(){
        
        cy.get(btnVerMasAnaforaMaderaBasica , {timeout: 10000}).should('be.visible').click()
        cy.get(sidenavServicio, {timeout: 10000}).should('be.visible')
        cy.wait(2000)
    }

    //Selecciona anafora o cofres full
    seleccionAnaforaCofreFull(){
        
        cy.get(precioAnaforaCofresFull) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkAnaforaCofresFull, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
        cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
        cy.get(precioSeleccionAnafora) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        
        cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
      }
    //Selecciona anafora ver mas de cofres full
    verMasAnaforaCofreFull(){
        
        cy.get(precioAnaforaCofresFull) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasAnaforaCofresFull, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio,{timeout: 10000}).should('be.visible')
    }

    //Seleccion Anafora y cofres premium
    seleccionAnaforaCofrePremium(){

        cy.get(precioAnaforaCofresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkAnaforaCofrePremium, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()
        cy.get(precioSeleccionAnafora) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(btnExpansionIndicador,{timeout: 100000}).should('be.visible').click()

    }
    //Seleccion Anafora y cofres premium
    verMasAnaforaCofrePremium(){

        cy.get(precioAnaforaCofresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasAnaforaCofrePremium, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio,{timeout: 10000}).should('be.visible')
    }
    //selecciona continuar desde la seccion cenizas
    seccionCenizasContinuar(){
      cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()

    }

    //seleccion entrega de cenizas incluida
    seleccionEntregaCenizasIncluida(){

        cy.get(checkEntregaCenizasIncluida,{timeout: 100000}).should('be.visible').click()

        cy.wait(3000)

        cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()
    }
    //seleccion entrega de cenizas incluida
    verMasEntregaCenizasIncluida(){

        cy.get(btnVerMasEntregaCenizasIncluida,{timeout: 100000}).should('be.visible').click()

        cy.wait(3000)

        cy.get(sidenavServicio,{timeout: 10000}).should('be.visible')
    }

    //Se selecciona entrega de cenizas especial
    selecionEntregaCenizasEspecial(){

        cy.wait(2000)
        cy.get(precioEntregaCenizasEspecial) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkEntregaCenizaseEspecial, { timeout: 100000 }).should('be.visible').click();
        cy.wait(3000)
        cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()
        cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
        cy.get(precioEntregaDeCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        
        cy.get(btnExpansionIndicador, { timeout: 100000 }).should('be.visible').click();
    }
    //Se selecciona entrega de cenizas especial
    verMasEntregaCenizasEspecial(){
        
        cy.wait(2000)
        cy.get(precioEntregaCenizasEspecial) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasEntregaCenizasEspecial, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.get(sidenavServicio,{timeout: 10000}).should('be.visible')
    }
    //selecciona continuar desde la seccion descanso cenizas
    seccionDescansoCenizasContinuar(){
      cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
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

        cy.get(checkMemorialRecuerdo, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)

        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
      }
      //se selecciona memorial del recuerdo
      verMasMemorialDelRecuerdo(){
        
        cy.wait(2000)
        cy.get(precioMemorialRecuerdo) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasMemorialRecuerdo, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio, {timeout: 100000}).should('be.visible')
    }

    //Se selecciona jardin de flores
    selecionarJardinFlores(){
        cy.wait(2000)
        cy.get(precioJardinFlores) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkjardinFlores, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
      
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
        cy.wait(3000)
    }

    //Se selecciona jardin de flores
    verMasJardinFlores(){

        cy.get(precioJardinFlores) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasJardinFlores, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio, {timeout: 100000}).should('be.visible')
        
    }

    // se selecciona jardin de flores premium
    seleccionarJardinFloresPremium(){
        cy.wait(3000)
        cy.get(precioJardinFloresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(checkJardinFloresPremium, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }
    
    // se selecciona jardin de flores premium
    verMasJardinFloresPremium()
    {
        cy.wait(3000)
        cy.get(precioJardinFloresPremium) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasJardinFloresPremium, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio, {timeout: 100000}).should('be.visible')

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

        cy.get(checkColumbarioPared, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }

    //Se selecciona columbario de pared
    verMasColumbarioPared()
    {
        cy.get(precioColumbarioPared) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasColumbarioPared, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio, {timeout: 100000}).should('be.visible')
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

        cy.get(checkColumbarioVidriado, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.xpath(btnIaResumen, {timeout: 100000}).should('be.visible').click()
    }
    //Se selecciona columbario vidriado
    verMasColumbarioVidriado()
    {

        cy.wait(3000)
        cy.get(precioColumbarioVidriado) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });

        cy.get(btnVerMasColumbarioVidriado, { timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioServicioSidenav) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });

        cy.get(sidenavServicio, {timeout: 100000}).should('be.visible')
    }

}
const FunnelFunerariaNIMobile = new funnelFunerariaNIMobile()
export default FunnelFunerariaNIMobile;