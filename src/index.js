import Loader from './components/loader/Loader'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import store from './store'

const App = () => (
  <div>
    <Loader />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
