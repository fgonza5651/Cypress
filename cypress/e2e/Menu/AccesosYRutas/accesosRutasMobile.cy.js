import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";


describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Necesito ayuda -Necesito ayuda ahora', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('2')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl()
     });

     //
     it('Necesito ayuda -Necesito ayuda futura', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('2')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Parque -PAV', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Parque -PCO', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Parque -PPH', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Necesidad inmediata', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Pronto fallecimiento', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Funeraria -Necesidad Futura', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Velatorio', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Necesidad inmediata', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Pronto fallecimiento', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Cremacion -Necesidad Futura', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Necesidad inmediata', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Pronto fallecimiento', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Productos y servicios -Sepultura -Necesidad Futura', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Obituario -Obituario', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Obituario -Buscar sepultura', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Mas parque', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Actividades en nuestros parques ', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Articulos y noticias', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Sostenibilidad', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Buzon vecinos', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('5')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Comunidad -Ver todo', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('6')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Otros servicios -Enviar flores', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.RevisarNuevaUrl('1')

     });

     //
     it('Otros servicios -Seguros ', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl()

     });

     //
     it('Contactanos', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('8')
        homePageMobile.RevisarCambioUrl()

     });
})