import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
/* The above code is creating a store using the createStore function from redux. The createStore
function takes in two arguments, the rootReducer and the middleware. The rootReducer is the combined
reducer from the reducers folder. The middleware is the thunk middleware. The thunk middleware
allows us to use asynchronous actions in our redux store. */

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default store