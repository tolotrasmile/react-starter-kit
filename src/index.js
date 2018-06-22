import { Provider } from 'react-redux'
import React from 'react'
import Posts from './components/posts/Posts'
import { render } from 'react-dom'
import store from './store'

const App = () => (
  <div>
    <Posts />
  </div>
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
