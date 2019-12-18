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
        experienciaFamilia: [],
        experienciaExperto: [],
        sliderFamilia: [],
        sliderExperto: []
      }
    case FETCH_DATA_SUCCESS:
      const seccion = action.payload.seccion
      const experienciaFamilia = action.payload.sliderpie.filter(function (item) { return item.pagina == "familia"; });
      const experienciaExperto = action.payload.sliderpie.filter(function (item) { return item.pagina == "experto"; });
      const sliderFamilia = action.payload.slidercabecera.filter(function (item) { return item.pagina == "familia"; });
      const sliderExperto = action.payload.slidercabecera.filter(function (item) { return item.pagina == "experto"; });
      return {
        ...state,
        loadStatus: 2,
        inicio: seccion[1],
        familia: seccion[2],
        experto: seccion[3],
        nosotros: seccion[4],
        experienciaFamilia: experienciaFamilia,
        experienciaExperto: experienciaExperto,
        sliderFamilia: sliderFamilia,
        sliderExperto: sliderExperto
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadStatus: 3,
        inicio: null,
        familia: null,
        experto: null,
        nosotros: null,
        experienciaFamilia: [],
        experienciaExperto: [],
        sliderFamilia: [],
        sliderExperto: []
      }

    default:
      return state;
  }
}
