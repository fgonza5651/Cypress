require('cypress-xpath');
//Selecion Region
const selectRegion = '#mat-select-value-1 > .mat-select-placeholder'
const selectMetroplitana = '#mat-option-0 > .mat-option-text'
const selectComuna = '#mat-select-value-3 > .mat-select-placeholder'
const selectProvidencia = '#mat-option-67 > .mat-option-text'
//Boton continuar
const btnContinuar = 'Continuar'
const btnContinuarSinServicio = '.btn-continuar-desktop'
//Formulario cuentanos de ti
const inputNombre = '#checkout-info-input-name'
const inputPaterno = '.mat-form-field.ng-tns-c46-12 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputMaterno = '.mat-form-field.ng-tns-c46-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #checkout-info-input-last-name'
const inputTelefono = '#checkout-info-input-telefono'
const inputCorreo = '#checkout-info-input-mail'
//Seleccion servicio funerario
const checkPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const btnContinuarFunnel = '//*[@id="mat-tab-content-0-0"]/div/div[2]/div[1]/button'
//precion servicios funerario
const precioPlanBasico = '#funeraria-plan-basico > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioPlanTradicion = '#funeraria-plan-tradicion > .mat-checkbox-layout > .mat-checkbox-label >  .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioPlanSustentable = '#funeraria-plan-sustentable > .mat-checkbox-layout > .mat-checkbox-label >  .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioPlanTradicionDestacado = '#funeraria-plan-tradicion-destacado > .mat-checkbox-layout > .mat-checkbox-label >  .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioPlanHomenajePremium = '#funeraria-plan-homenaje-premium > .mat-checkbox-layout > .mat-checkbox-label >  .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioPlanHomenajePremiumDestacado = '#funeraria-plan-homenaje-premium-destacado > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
//Seleccion servicio Velatorio
const checkVelatorioBasico = '#velatorio-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioBasico = '#velatorio-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkVelatorioCafeteriaEstandar = '#velatorio-cafeteria-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioCafeteriaEstandar = '#velatorio-cafeteria-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkVelatorioCefeteriaPremium = '#velatorio-cafeteria-premium-ni > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasVelatorioCafeteriaPremium = '#velatorio-cafeteria-premium-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const btnContinuarVelatorio = '//*[@id="mat-tab-content-0-1"]/div/div[2]/div[1]/button'
//precion servicios Velatorio
const precioVelatorioBasico = '#velatorio-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioVelatorioEstandar = '#velatorio-cafeteria-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioVelatorioPremium = '#velatorio-cafeteria-premium-ni > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
//btn continuar servicio de cremacion base
const btnContinuarCremacionBase = '//*[@id="mat-tab-content-0-2"]/div/div[2]/div[1]/button'
//seleccion ceremonia de despedida
const checkCeremoniaDespedidaIncluida = '#ceremonia-despedida-incluida > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaIncluida = '#ceremonia-despedida-incluida > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkCeremoniaDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkCeremoniaDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkCeremoniaDespedidaEspecialConCoro = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasCeremoniaDespedidaEspecialConCoro = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
//Precio ceremonia de despedida 
const precioCeremoniaDeDespedidaEspecial = '#ceremonia-despedida-especial > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioCeremoniaDeDespedidaConCoro = '#ceremonia-despedida-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioCeremoniaDeDesPedidaEspecialConCoror = '#ceremonia-despedida-especial-con-coro > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioCeremoniaDepedida= ':nth-child(4) > .pasos > .cont-detalle > .valor-peso'
const btnContinuarCeremoniaDespedida = '//*[@id="mat-tab-content-0-3"]/div/div[2]/div[1]/button'
//seccion seleccion de anafora
const checkAnaforaMaderaBasica = '#seleccion-anforas-incluida > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasAnaforaMaderaBasica = '#seleccion-anforas-incluida > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkAnaforaCofrePremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasAnaforaCofrePremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const btnContinuarSelecionAnafora = '//*[@id="mat-tab-content-0-4"]/div/div[2]/div[1]/button'
//precio seleccion de anafora
const precioAnaforaCofresFull = '#seleccion-anforas-full > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioAnaforaCofresPremium = '#seleccion-anforas-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioSeleccionAnafora = ':nth-child(5) > .pasos > .cont-detalle > .valor-peso'
//Seccion entrega de cenizas
const checkEntregaCenizasIncluida = '#entrega-cenizas-incluido > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasEntregaCenizasIncluida = '#entrega-cenizas-incluido > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkEntregaCenizaseEspecial = '#entrega-especial-cenizas > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasEntregaCenizasEspecial = '#entrega-especial-cenizas > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
//Precio entrega de cenizas
const precioEntregaCenizasEspecial = '.detalle-valor'
const precioEntregaDeCenizas = ':nth-child(6) > .pasos > .cont-detalle > .valor-peso'
const btnEntregaCenizas = '//*[@id="mat-tab-content-0-5"]/div/div[2]/div[1]/button'
//Seccion descansp de ceizas
const checkMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasMemorialRecuerdo =  '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkjardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasJardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
const checkColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-inner-container'
const btnVerMasColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .btn-sidenav-desktop'
//Precio descanzo de cenizas
const precioMemorialRecuerdo = '#descanso-memorial-recuerdo > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioJardinFlores = '#descanso-jardin-flores > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioJardinFloresPremium = '#descanso-jardin-flores-premium > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioColumbarioPared = '#descanso-columbario-pared > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioColumbarioVidriado = '#descanso-columbario-vidriado > .mat-checkbox-layout > .mat-checkbox-label > .cont-pie-card > .cont-precio-uf > .detalle-valor > span'
const precioDescansoCenizas = ':nth-child(7) > .pasos > .cont-detalle > .valor-peso'
const btnIaResumen = '//*[@id="mat-tab-content-0-6"]/div/div[2]/div[1]/button'
//Seccion Sidenav
const sidenavServicio = '.cont-sidenav'
const precioServicioSidenav = '.precio-servicio-sidenav'
const btnVolver = '.volver'
const btnSeleccionar = '.btn-seleccionar'



const precioServicioFunerario = '.valor-peso'
const precioServicioVelatorio = ':nth-child(2) > .pasos > .cont-detalle > .valor-peso'


function generarCorrero() {

    const timeStamp = Date.now();

    const correo = `${timeStamp}@qa.com`

    return correo

}
// formatea el precio eliminando los punto y el signo $
const cleanPrice = (price) => price.replace(/[$.]/g, '').trim(); // Remueve símbolos y espacios

class funnelCremacionNI {

    //ingresa al flujo funnel cremacion NI
    
    inicioFlujoCremacion(url){

        cy.visit(url.urlFlujoCremacionNI)
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
    formularioCuentanoDeTi(formulario){

        const correoRandom = generarCorrero();
        //Se rellena el formulario
        cy.get(inputNombre,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.Nombre)
        cy.get(inputPaterno,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.apellido)
        cy.get(inputMaterno,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.apellidoMaterno)
        cy.get(inputTelefono,{timeout: 100000}).should('be.visible').type(formulario.FormularioFunnel.telefono)
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
        cy.get(precioPlanBasico)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio del producto sin espacios y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        
        cy.get(checkPlanBasico, {timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
          
          cy.get(precioServicioFunerario,{timeout:5000})
          .invoke('text')//obtengo el texto del elemento
          .then((precio)=> {
            const precioSin$ = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
              expect(valor).to.eq(precioSin$)
            })
          })
        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
      }
      
      //Se selecciona ver mas de plan basico
      verMasPlanBasico(){
        
        cy.wait(2000)
        cy.get(precioPlanBasico)
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
          cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
          const precioSinText = cleanPrice(precio)
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precioSinText)
          })
        })
        
        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
      }
    //se seleciona ver mas del plan tradicional
    verMasPlanTradicional(){
      
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
      cy.wait(2000)
      cy.get(precioPlanSustentable)
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
        //guardo el precio del producto sin espacios y lo guardo en una variable
        const precioLimpio = cleanPrice(precio)
        cy.wrap(precioLimpio).as('precioProducto');
      });
      
      cy.get(checkPlanSustentable,{timeout: 100000}).should('be.visible').click()
      cy.wait(2000)
      cy.get(precioServicioFunerario)
      .invoke('text')//obtengo el texto del elemento
      .then((precio)=> {
        const precioSinText = cleanPrice(precio)
        cy.get('@precioProducto').then((valor) =>{
          expect(valor).to.eq(precioSinText)
        })
      })
      //clic en el boton continuar
      cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }
    
    //se seleciona ver mas del plan sustentable
    verMasPlanSustentable(){
      
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
        
        cy.get(precioPlanTradicionDestacado)
        .invoke('text') //obtengo el texto del elemento
        .then((precio) => {
          //guardo el precio sin espacios del producto y lo guardo en una variable
          const precioLimpio = cleanPrice(precio)
          cy.wrap(precioLimpio).as('precioProducto');
        });
        
        cy.get(checkPlanTradicionDestacado,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
          const precionSinText = cleanPrice(precio)
          cy.get('@precioProducto').then((valor) =>{
            expect(valor).to.eq(precionSinText)
          })
        })
        
        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
      }
      //se seleciona ver mas del plan tradicion destacado
      verMasPlanTradicionalDestacado(){
        
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
      
      
      cy.get(precioPlanHomenajePremium)
      .invoke('text') //obtengo el texto del elemento
      .then((precio) => {
          //guardo el precio sin espacios del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
          cy.get(checkPlanHomenajePremium,{timeout: 100000}).should('be.visible').click()
          cy.wait(2000)
          cy.get(precioServicioFunerario)
          .invoke('text')//obtengo el texto del elemento
          .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
          })
          
          //clic en el boton continuar
          cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
        }
        //se seleciona ver mas del plan homenaje premium
        verMasPlanHomenajePremium(){
          
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
        
        //se seleciona el plan homenaje premium destacado
        seleccionarPlanHomenajePremiumDestacado(){
          
          cy.get(precioPlanHomenajePremiumDestacado,{timeout:100000})
          .invoke('text') //obtengo el texto del elemento
          .then((precio) => {
            //guardo el precio del producto y lo guardo en una variable
            const precioLimpio = cleanPrice(precio)
            cy.wrap(precioLimpio).as('precioProducto');
          });
          
        cy.get(checkPlanHomenajePremiumDestacado,{timeout: 100000}).should('be.visible').click()
        cy.wait(2000)
        cy.get(precioServicioFunerario)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarFunnel,{timeout: 100000}).should('be.visible').click()
    }
     //se seleciona ver mas del plan homenaje premium destacado
     verMasPlanHomenajePremiumDestacado(){
       cy.wait(2000)
       cy.get(precioPlanHomenajePremiumDestacado,{timeout:100000})
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
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
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
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
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
        cy.get(precioServicioVelatorio)
        .invoke('text')//obtengo el texto del elemento
        .then((precio)=> {
            const precioSinText = cleanPrice(precio)
            cy.get('@precioProducto').then((valor) =>{
                expect(valor).to.eq(precioSinText)
            })
        })

        //clic en el boton continuar
        cy.xpath(btnContinuarVelatorio,{timeout: 100000}).should('be.visible').click()
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
      cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
        cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
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
        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
    }
    //selecciona ver mas de ceremonia de despedida con coro
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

    //Selecion ceremonia de despedida especial con coro especial
    seleccionCeremoniaDespedidaEspecialConCoro(){
       
        cy.get(precioCeremoniaDeDesPedidaEspecialConCoror) // Captura el precio del producto seleccionado
        .invoke('text')
        .then((precio) => {
          const precioProductoLimpio = cleanPrice(precio); // Limpia el precio capturado
          cy.wrap(precioProductoLimpio).as('precioProducto'); // Guarda el precio limpio
        });
        cy.get(checkCeremoniaDespedidaEspecialConCoro,{ timeout: 100000 }).should('be.visible').click();
        cy.wait(2000)
        cy.get(precioCeremoniaDepedida) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });
        cy.xpath(btnContinuarCeremoniaDespedida,{timeout: 100000}).should('be.visible').click()
    }

    //Selecion ver mas de ceremonia de despedida especial con coro especial
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
        
        cy.get(checkAnaforaMaderaBasica , {timeout: 10000}).should('be.visible').click()

        cy.xpath(btnContinuarSelecionAnafora,{timeout: 10000}).should('be.visible').click()
    }
    //seleccion ver mas de anafora de madera basica incluida
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
    //Selecciona ver mas de anafora ver mas de cofres full
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
    //Seleccion ver mas de Anafora y cofres premium
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
    //seleccion ver mas de entrega de cenizas incluida
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
        cy.get(precioEntregaDeCenizas) // Captura el precio del carrito o el lugar donde lo comparas
        .invoke('text')
        .then((precio) => {
          const precioCarritoLimpio = cleanPrice(precio); // Limpia el precio capturado
          // Obtén el precio del producto guardado
          cy.get('@precioProducto').then((precioProductoLimpio) => {
            expect(precioCarritoLimpio).to.eq(precioProductoLimpio); // Compara ambos precios
          });
        });        
        cy.xpath(btnEntregaCenizas,{timeout: 10000}).should('be.visible').click()
    }
    //Se selecciona ver mas de entrega de cenizas especial
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
        cy.wait(3000)
      }
      //se selecciona ver mas de memorial del recuerdo
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
        cy.wait(3000)
    }

    //Se selecciona ver mas de jardin de flores
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
        cy.wait(3000)


    }
    
    // se selecciona ver mas de jardin de flores premium
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
        cy.wait(3000)
    }

    //Se selecciona ver mas de columbario de pared
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
        cy.wait(3000)
    }
    //Se selecciona ver mas de columbario vidriado
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
const FunnelCremacionNI = new funnelCremacionNI()
export default FunnelCremacionNI;