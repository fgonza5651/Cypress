import homePage from "../../../pages/home/homePage";
import segurosPage from "../../../pages/seguros/SegurosPage";

describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Seguros Personales -Smad basico y premium', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesBasicoPremium()

     });

     //
     it('Seguros Personales -Smad mejores años', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesMejoresAños()

     });

     //
     it('Seguros personales -Smad repatriacion', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosPersonalesRepatriacion()

     });

     //
     it('Seguros empresa', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosEmpresas()

     });

     //
     it('Seguros incluidos -Seguro Desgravamen', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosDesgravamen()

     });

     //
     it('Seguros incluidos -Cuota de mantencion', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosCuotaMantencion()

     });

     //
     it('Seguros inlcuidos -Smad Colectivo', () => {

        homePage.ingresoHomeParqueDelRecuerdo()
        homePage.OpcionBarraMenu('6')
        homePage.SubServicioBarraMenu('2')
        homePage.seleccionarSubServicioBarra()
        segurosPage.revisarSegurosIncluidosColectivo()

     });

})