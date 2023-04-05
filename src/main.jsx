import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from '/serviceWorker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
'serviceWorker' in navigator && 'register' in navigator.serviceWorker