import homePage from "../../../pages/home/homePage";

describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Necesito ayuda -Necesito ayuda ahora', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('1')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Necesito ayuda -Necesito ayuda futura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('1')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Parque -PAV', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Parque -PCO', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Parque -PPH', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Necesidad inmediata', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Pronto fallecimiento', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Necesidad Futura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Velatorio', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Necesidad inmediata', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Pronto fallecimiento', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Necesidad Futura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Necesidad inmediata', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Pronto fallecimiento', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Necesidad Futura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl()

     });

     //
     it('Obituario -Obituario', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Obituario -Buscar sepultura', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Mas parque', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Actividades en nuestros parques ', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Articulos y noticias', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Sostenibilidad', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('4')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Buzon vecinos', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('5')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Comunidad -Ver todo', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('6')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Otros servicios -Enviar flores', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('1')
        homePage.RevisarNuevaPestaña()

     });

     //
     it('Otros servicios -Seguros ', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl()

     });

     //
     it('Contactanos', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('7')
        homePage.RevisarCambioUrl()

     });
})