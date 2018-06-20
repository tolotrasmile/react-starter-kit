import { Provider } from 'react-redux'
import React from 'react'
import Counter from './components/counter/Counter'
import { render } from 'react-dom'
import store from './store'

const App = () => (
  <div>
    <Counter />
  </div>
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
