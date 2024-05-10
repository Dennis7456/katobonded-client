import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/tailwind.css'
import { BotModalProvider } from './context/BotModalContext'
import { LoginModalProvider } from './context/LoginModalContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BotModalProvider>
      <LoginModalProvider>
        <App />
      </LoginModalProvider>
    </BotModalProvider>
  </React.StrictMode>,
)
