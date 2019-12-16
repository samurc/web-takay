import {
  createBrowserHistory
} from 'history'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export const history = createBrowserHistory()

export default function configureStore (initialState) {
  return createStore(rootReducer(history), initialState, applyMiddleware(thunk))
}
