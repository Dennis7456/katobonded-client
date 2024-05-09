import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/tailwind.css'
// import { ModalProvider } from './context/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <ModalProvider> */}
    <App />
    {/* </ModalProvider> */}
  </React.StrictMode>,
)
