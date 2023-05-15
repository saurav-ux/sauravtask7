import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
//Supply data to all Components with a help of store
import  store  from "./App1/Store1";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}> 
    <App />
  </Provider>,
)
