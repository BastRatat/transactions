import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { EthContextProvider } from './contexts/EthContext'

ReactDOM.render(
  <React.StrictMode>
    <EthContextProvider>
      <App />
    </EthContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
