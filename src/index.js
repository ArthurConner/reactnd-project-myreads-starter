import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import bookReducer from './reducers'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 


const store = createStore(
  bookReducer,

    composeEnhancers(
      applyMiddleware(logger,thunk)
   )
   )

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
