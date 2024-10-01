import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/tailwind.css'
import { BotModalProvider } from './context/BotModalContext'
import { LoginModalProvider } from './context/LoginModalContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BotModalProvider>
        <LoginModalProvider>
          <App />
        </LoginModalProvider>
      </BotModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
