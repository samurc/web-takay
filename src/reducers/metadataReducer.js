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
        nosotros: null
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadStatus: 2,
        inicio: action.payload[3],
        familia: action.payload[2],
        experto: action.payload[1],
        nosotros: action.payload[0]
      }

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loadStatus: 3,
        inicio: null,
        familia: null,
        experto: null,
        nosotros: null
      }

    default:
      return state;
  }
}
