import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import bookReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  bookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
