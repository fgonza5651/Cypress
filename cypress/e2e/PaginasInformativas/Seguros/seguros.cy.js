import homePage from "../../../pages/home/homePage";
import segurosPage from "../../../pages/seguros/SegurosPage";

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

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesBasicoPremium()

     });

     //
     it('Seguros Personales -Smad mejores años', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesMejoresAños()

     });

     //
     it('Seguros personales -Smad repatriacion', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesRepatriacion()

     });

     //
     it('Seguros empresa', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosEmpresas()

     });

     //
     it('Seguros incluidos -Seguro Desgravamen', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosDesgravamen()

     });

     //
     it('Seguros incluidos -Cuota de mantencion', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosCuotaMantencion()

     });

     //
     it('Seguros inlcuidos -Smad Colectivo', function()  {

        homePage.ingresoHomeParqueDelRecuerdo(this.datos.Url)
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosColectivo()

     });

})