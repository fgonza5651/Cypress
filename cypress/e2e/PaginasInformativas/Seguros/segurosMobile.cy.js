import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import segurosPageMobile from "../../../pageMobile/seguros/SegurosPageMobile";


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
     it('Seguros Personales -Smad basico y premium', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesBasicoPremium()

     });

     //
     it('Seguros Personales -Smad mejores años', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesMejoresAños()

     });

     //
     it('Seguros personales -Smad repatriacion', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesRepatriacion()

     });

     //
     it('Seguros empresa', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosEmpresas()

     });

     //
     it('Seguros incluidos -Seguro Desgravamen', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosDesgravamen()

     });

     //
     it('Seguros incluidos -Cuota de mantencion', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosCuotaMantencion()

     });

     //
     it('Seguros inlcuidos -Smad Colectivo', function()  {

        homePageMobile.ingresoHomeMobile(this.datos.Url)
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosColectivo()

     });

})