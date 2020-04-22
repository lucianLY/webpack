import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux"
import App from './App'
import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log(store)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
  document.getElementById('app')
);
