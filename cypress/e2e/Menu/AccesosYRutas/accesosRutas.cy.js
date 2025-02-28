import homePage from "../../../pages/home/homePage";

describe('Accesos y Rutas ', () => {

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

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('1')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Necesito ayuda -Necesito ayuda futura', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('1')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PAV', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PCO', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Parque -PPH', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('2')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Necesidad inmediata', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Pronto fallecimiento', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Funeraria -Necesidad Futura', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('1')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Velatorio', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Necesidad inmediata', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Pronto fallecimiento', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Cremacion -Necesidad Futura', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('3')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Necesidad inmediata', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('1')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Pronto fallecimiento', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('2')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Productos y servicios -Sepultura -Necesidad Futura', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('3')
        homePage.SubServicioBarraMenu('4')
        homePage.NecesidadBarraMenu('3')
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Obituario -Obituario', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Obituario -Buscar sepultura', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('4')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Mas parque', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('1')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Actividades en nuestros parques ', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Articulos y noticias', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('3')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Sostenibilidad', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('4')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Buzon vecinos', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('5')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Comunidad -Ver todo', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('5')
        homePage.SubServicioBarraMenu('6')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Otros servicios -Enviar flores', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('1')
        homePage.RevisarNuevaPestaña(this.datos.Url)

     });

     //
     it('Otros servicios -Seguros ', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        homePage.RevisarCambioUrl(this.datos.Url)

     });

     //
     it('Contactanos', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('7')
        homePage.RevisarCambioUrl(this.datos.Url)

     });
})