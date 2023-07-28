import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PasswordProvider from './context/Password.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PasswordProvider>
    <App />
  </PasswordProvider>,
)
