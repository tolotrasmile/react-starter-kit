import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import middlwares from './middlewares'

const middleware = composeWithDevTools({})(applyMiddleware(...middlwares));
const store = createStore(reducers, middleware);

/** Export the store */
export default store;
