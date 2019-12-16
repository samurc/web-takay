import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import metadata from './metadataReducer';

export default history => combineReducers({
  router: connectRouter(history),
  metadata
});
