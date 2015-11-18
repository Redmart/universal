import React from 'react'
import { RoutingContext, Router } from 'react-router'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import createHistory from 'history/lib/createBrowserHistory'

export function serverSideApp (store, renderProps) {
  return renderToString(
    <Provider store={store}>
      <RoutingContext {...renderProps}/>
    </Provider>
  )
}

export function clientSideApp (store, routes) {
  const history = createHistory()
  return (
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
  )
}
