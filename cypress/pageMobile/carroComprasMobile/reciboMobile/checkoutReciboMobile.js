const nroPedidoAprovado = '#contenedor-typ > div.cont-typ > div.cont-numero-pedido > p.num-pedido'
const resumenPago = '.resumen-pago'
const nroPedidoRechaso = '#contenedor-ntyp > div.cont-ntyp > div.cont-numero-pedido > p'
const nroPedidoAprovadoFannel = '.cont-resumen-pago-servicio > h2'


class CheckoutReciboMobile{
    //revisa que la pagina contenga la palabra "con éxito" ademas verifica que la url contenga el numero del pedido
    validarPaginaAprobada(){
        cy.get(nroPedidoAprovado).invoke('text').then((nroPedidotext) => {
            const nroPedidonum = nroPedidotext.replace(/[\D]/g, '');
            cy.url().should('include', `/${nroPedidonum}`)
            cy.contains('con éxito')
        }
    )}
    //revisa que la pagina contenga la palabra "Rechazada" ademas verifica que la url contenga el numero del pedido
    validarPaginaRechazada(){
        cy.get(nroPedidoRechaso).invoke('text').then((nroPedidotext) => {
            const nroPedidonum = nroPedidotext.replace(/[\D]/g, '');
            cy.url().should('include', `/${nroPedidonum}`)
            cy.contains('Rechazada')
        }
    )}
    //revisa que en el resumen de compra el precio del velatorio agregado sea el mismo que se solicito
    revisarVelatorioResumen(){
        cy.get('@precioVelatorioExport').then((precioVelatorioExport) => {
            cy.log(precioVelatorioExport)
            cy.get(resumenPago).contains(precioVelatorioExport)
        })
    }
    //revisa que en el resumen de compra el precio de funeraria agregado sea el mismo que se solicito
    revisarFunerariaResumen(){
        cy.get('@precioFunerariaExport').then((precioFunerariaExport) => {
            cy.log(precioFunerariaExport)
            cy.get(resumenPago).contains(precioFunerariaExport)
        })
    }
    //revisa que en el resumen de compra el precio de Cremacion agregado sea el mismo que se solicito
    revisarCremacionResumen(){
        cy.get('@precioCremacionExport').then((precioCremacionExport) => {
            cy.log(precioCremacionExport)
            cy.get(resumenPago).contains(precioCremacionExport)
        })
    }
    //revisa que en el resumen de compra el precio del descanso agregado sea el mismo que se solicito
    revisarDescansoResumen(){
        cy.get('@precioDescansoExport').then((precioDescansoExport) => {
            cy.log(precioDescansoExport)
            cy.get(resumenPago).contains(precioDescansoExport)
        })
    }
    
    validarAprobacionFunnel()
    {
        //revisa que la pagina contenga la palabra "con éxito" ademas revisa que la url contenga el mismo numero del pedido
        cy.get(nroPedidoAprovadoFannel,{timeout:10000})
        .should('be.visible')
        .and('have.text', 'El pago de tus servicios se ha realizado con éxito.')
        .debug()

        cy.wait(1000)

        cy.clearCookies();   
        cy.clearLocalStorage();
        
    }
}
const checkoutReciboMobile = new CheckoutReciboMobile()
export default checkoutReciboMobile