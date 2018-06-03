import { Button } from './styled/Controls'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import store from './store'

const App = () => (
  <div>
    <Button>Hello</Button>
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
