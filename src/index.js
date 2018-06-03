import { Provider } from 'react-redux'
import React from 'react'
import SlideShow from './components/slideshow/SlideShow'
import { render } from 'react-dom'
import store from './store'

const App = () => (
  <div>
    <SlideShow>
      <img src="http://placekitten.com/300/200" alt="Cat Pic"/>
      <img src="http://placekitten.com/300/201" alt="Cat Pic"/>
      <img src="http://placekitten.com/300/202" alt="Cat Pic"/>
    </SlideShow>
  </div>
)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
