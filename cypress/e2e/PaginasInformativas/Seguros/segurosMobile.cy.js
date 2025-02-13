import homePageMobile from "../../../pageMobile/homeMobile/homePageMobile";
import segurosPageMobile from "../../../pageMobile/seguros/SegurosPageMobile";


describe('Accesos y Rutas ', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // ...
            return false;
          });
     });

     //
     it('Seguros Personales -Smad basico y premium', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesBasicoPremium()

     });

     //
     it('Seguros Personales -Smad mejores años', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesMejoresAños()

     });

     //
     it('Seguros personales -Smad repatriacion', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosPersonalesRepatriacion()

     });

     //
     it('Seguros empresa', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosEmpresas()

     });

     //
     it('Seguros incluidos -Seguro Desgravamen', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosDesgravamen()

     });

     //
     it('Seguros incluidos -Cuota de mantencion', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosCuotaMantencion()

     });

     //
     it('Seguros inlcuidos -Smad Colectivo', () => {

        homePageMobile.ingresoHomeMobile()
        homePageMobile.OpcionBarraMenu('7')
        homePageMobile.SubServicioBarraMenu('2')
        segurosPageMobile.revisarSegurosIncluidosColectivo()

     });

})