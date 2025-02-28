import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";


describe('Accesos y Rutas ', () =>  {

    beforeEach(function()  {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });

          cy.fixture('Datos').then((datos) =>{
            this.datos = datos
        })
     });

     //
     it('Necesito ayuda -Necesito ayuda ahora', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('2')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)
     });

     //
     it('Necesito ayuda -Necesito ayuda futura', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('2')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PAV', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PCO', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PPH', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('3')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Necesidad inmediata', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Pronto fallecimiento', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Necesidad Futura', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Velatorio', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Necesidad inmediata', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Pronto fallecimiento', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Necesidad Futura', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Necesidad inmediata', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Pronto fallecimiento', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Necesidad Futura', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('4')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.NecesidadBarraMenu('3')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Obituario -Obituario', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Obituario -Buscar sepultura', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('5')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Mas parque', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('1')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Actividades en nuestros parques ', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Articulos y noticias', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('3')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Sostenibilidad', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('4')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Buzon vecinos', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('5')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Ver todo', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('6')
        homePageMobile.SubServicioBarraMenu('6')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Otros servicios -Enviar flores', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.RevisarNuevaUrl('1')

     });

     //
     it('Otros servicios -Seguros ', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Contactanos', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('8')
        homePageMobile.RevisarCambioUrl(this.datos.Url)

     });
})