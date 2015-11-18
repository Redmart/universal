import generateInitialHtml from './generateInitialHtml'
import getStore from './getStore'
import routes from '../routes'
import getInitialState from './getInitialState'
import { match } from 'react-router'

function renderOnServer (res, currentUrl, query) {
  match({ routes, location: currentUrl }, (error, redirectLocation, renderProps) => {

    if (query) {
      getInitialState(query, function (json) {
        const newState = {
          ...getStore().getState(),
          loading: false,
          loaded: true,
          query: query,
          payload: json
        }
        res.send(generateInitialHtml(getStore(newState), getStore(newState).getState(), renderProps))
      })
    } else {
      res.send(generateInitialHtml(getStore(), getStore().getState(), renderProps))
    }
  })
}

export default renderOnServer
