import cremacionBasicoNI from "../../../pages/cremacion/cremacionBasicoNI/cremacionBasicoNI";
import cremacionBasicoNIMobile from "../../../pageMobile/cremacionMobile/cremacionBasicoNI/cremacionBasicoNIMobile";


describe('test cremacion-basico-NI', () =>{
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
    });
    //{nombre historia}
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.compraEnLinea()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.ejecutivaEnlineaOtraSolicitud()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria basico', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaBasico()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremiumDestacado()
        cremacionBasicoNI.agregarDescansoVidriado()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso pared', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioBasico()
        cremacionBasicoNI.agregarFunerariaTradicion()
        cremacionBasicoNI.agregarDescansoPared()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores premium', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaTradicionDestacado()
        cremacionBasicoNI.agregarDescansoFloresPremium()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioEstandar()
        cremacionBasicoNI.agregarFunerariaSustentable()
        cremacionBasicoNI.agregarDescansoFlores()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso memorial', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.agregarVelatorioPremium()
        cremacionBasicoNI.agregarFunerariaPremium()
        cremacionBasicoNI.agregarDescansoMemoriar()
        cremacionBasicoNI.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Tour virtual', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.tourVirtual()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Caracteristicas y detalles', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.caracteristicasDetalles()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Llamanos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.llamanos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Escribenos', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.escribenos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Cotiza', () =>{
        cremacionBasicoNI.ingresoCremacionBasicaNI()
        cremacionBasicoNI.cotiza()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Compra en linea', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.iconoTelefonosTitulo()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Hablar en linea con una ejecutiva', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaHablar()
    })
    //{nombre historia}
    it('Landing Sepultura - NI - Realizar otra solicitud con ejecutiva en linea', ()=>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.ejecutivaEnlineaOtraSolicitud()
    })
    
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio estandar -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Velatorio premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria basico -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaBasico()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria tradicion destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria sustentable -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Funeraria premium destacada -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso vidriado -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremiumDestacado()
        cremacionBasicoNIMobile.agregarDescansoVidriado()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso pared -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioBasico()
        cremacionBasicoNIMobile.agregarFunerariaTradicion()
        cremacionBasicoNIMobile.agregarDescansoPared()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores premium -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaTradicionDestacado()
        cremacionBasicoNIMobile.agregarDescansoFloresPremium()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso flores -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioEstandar()
        cremacionBasicoNIMobile.agregarFunerariaSustentable()
        cremacionBasicoNIMobile.agregarDescansoFlores()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Descanso memorial -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.agregarVelatorioPremium()
        cremacionBasicoNIMobile.agregarFunerariaPremium()
        cremacionBasicoNIMobile.agregarDescansoMemoriar()
        cremacionBasicoNIMobile.revisarAgregarCarrito()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Tour virtual -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.tourVirtual()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Caracteristicas y detalles -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.caracteristicasDetalles()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Llamanos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.llamanos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Escribenos -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.escribenos()
    })
    //{nombre historia}
    it('Cremacion - Basico -NI -Cotiza -Mobile', () =>{
        cremacionBasicoNIMobile.ingresoCremacionBasicaNIMobile()
        cremacionBasicoNIMobile.cotiza()
    })
})