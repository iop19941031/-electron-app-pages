import ReactDOM from 'react-dom'
import React from 'react'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import store from './store/stote-dools'
import Store from './store/index'
// import Router from './router/index'
// import { setLinkConfig } from '@/router/links-config'
// setLinkConfig()
ReactDOM.render(
  <Provider store={store}>
    <Store />
  </Provider>,
  document.getElementById('root')
)
