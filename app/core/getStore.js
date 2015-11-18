import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Search from '../reducers/Search'

export default function getStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore)

  return createStoreWithMiddleware(Search, initialState)
}
