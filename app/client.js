import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { clientSideApp } from './core/getRootApp'
import getStore from './core/getStore'

console.log(window.__INITIAL_STATE__)
ReactDOM.render(
  clientSideApp(getStore(window.__INITIAL_STATE__), routes),
  document.getElementById('root')
)
