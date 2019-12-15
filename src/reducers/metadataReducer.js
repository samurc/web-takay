import { FETCH_DATA } from '../actions/index';
import initialState from './initialState';

export default function metadataReducer(state = initialState.metadata, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        next: action.payload.next
      };
    default:
      return state;
  }
}
