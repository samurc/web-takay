import {
  FETCH_DATA_INIT,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/index';
import initialState from './initialState';

export default function metadataReducer(state = initialState.metadata, action) {

  switch (action.type) {
    case FETCH_DATA_INIT:
      return {
        ...state,
        loadStatus: 1,
        inicio: null,
        familia: null,
        experto: null,
        nosotros: null,
        libroDeReclamaciones: null,
        experienciaFamilia: [],
        experienciaExperto: [],
        sliderFamilia: [],
        sliderExperto: [],
        listaExperto: [],
        textosHome: [],
        infoHome: [],
        textosFamilia: [],
        textosExperto: [],
        textosNosotros: [],
        textosReclamaciones: [],
        link: [],
        textosPie: [],
        comboProyecto: [],
        comboSituacion: [],
        comboOcupacion: [],
        comboServicio: [],
        rutaFormFamilia: null,
        rutaFormExperto: null,
        rutaFormNosotros: null,
        rutaFormReclamaciones: null,
        pdf: []
      }
    case FETCH_DATA_SUCCESS:
      const seccion = action.payload.seccion
      const experienciaFamilia = action.payload.sliderpie.filter(function (item) { return item.pagina == "familia"; });
      const experienciaExperto = action.payload.sliderpie.filter(function (item) { return item.pagina == "experto"; });
      const sliderFamilia = action.payload.slidercabecera.filter(function (item) { return item.pagina == "familia"; });
      const sliderExperto = action.payload.slidercabecera.filter(function (item) { return item.pagina == "experto"; });
      const listaExperto = action.payload.nuestrosexpertos;
      const textosNosotros = action.payload.textos_img.filter(function (item) { return item.pagina == "nosotros"; });
      const textosHome = action.payload.textos_img.filter(function (item) { return item.pagina == "home"; });
      const textosExperto = action.payload.textos_img.filter(function (item) { return item.pagina == "experto"; });
      const textosFamilia = action.payload.textos_img.filter(function (item) { return item.pagina == "familia"; });
      const link = Object.values(action.payload.link);
      const textosPie = Object.values(action.payload.textos).filter(function (item) { return item.sec_referencia == "pie"; });
      const textosReclamaciones = Object.values(action.payload.textos).filter(function (item) { return item.sec_referencia == "libro de reclamaciones"; });
      const infoHome = Object.values(action.payload.textos).filter(function (item) { return item.sec_referencia == "home"; });
      const comboProyecto = Object.values(action.payload.combos).filter(function (item) { return item.sec_referencia == "combo tipo de proyecto"; });
      const comboSituacion = Object.values(action.payload.combos).filter(function (item) { return item.sec_referencia == "combo situacion actual"; });
      const comboOcupacion = Object.values(action.payload.combos).filter(function (item) { return item.sec_referencia == "combo ocupacion"; });
      const comboServicio = Object.values(action.payload.combos).filter(function (item) { return item.sec_referencia == "combo tipo de servicio"; });

      return {
        ...state,
        loadStatus: 2,
        inicio: seccion[1],
        familia: seccion[2],
        experto: seccion[3],
        nosotros: seccion[4],
        libroDeReclamaciones: seccion[5],
        experienciaFamilia: experienciaFamilia,
        experienciaExperto: experienciaExperto,
        sliderFamilia: sliderFamilia,
        sliderExperto: sliderExperto,
        listaExperto: listaExperto,
        textosHome: textosHome,
        infoHome: infoHome,
        textosFamilia: textosFamilia,
        textosExperto: textosExperto,
        textosNosotros: textosNosotros,
        link: link,
        textosPie: textosPie,
        textosReclamaciones: textosReclamaciones,
        comboProyecto: comboProyecto,
        comboSituacion: comboSituacion,
        comboOcupacion: comboOcupacion,
        comboServicio: comboServicio,
        rutaFormFamilia: action.payload.ruta_form_familia,
        rutaFormExperto: action.payload.ruta_form_experto,
        rutaFormNosotros: action.payload.ruta_form_nosotros,
        rutaFormReclamaciones: action.payload.ruta_form_libroreclamaciones,
        pdf: Object.values(action.payload.pdf)
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadStatus: 3,
        inicio: null,
        familia: null,
        experto: null,
        nosotros: null,
        libroDeReclamaciones: null,
        experienciaFamilia: [],
        experienciaExperto: [],
        sliderFamilia: [],
        sliderExperto: [],
        listaExperto: [],
        textosHome: [],
        infoHome: [],
        textosFamilia: [],
        textosExperto: [],
        textosNosotros: [],
        link: [],
        textosPie: [],
        comboProyecto: [],
        comboSituacion: [],
        comboOcupacion: [],
        comboServicio: [],
        rutaFormFamilia: null,
        rutaFormExperto: null,
        rutaFormNosotros: null,
        rutaFormReclamaciones: null,
        pdf: []
      }

    default:
      return state;
  }
}
