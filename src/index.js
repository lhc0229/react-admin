import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import {HashRouter} from 'react-router-dom'
import reportWebVitals from '@/reportWebVitals'
import PermissionAuth from '@/PermissionAuth'
import '@/style/index.css'
import '@/style/global.less'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PermissionAuth />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
