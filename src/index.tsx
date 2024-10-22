import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/tailwind.css'
import { BotModalProvider } from './context/BotModalContext'
import { LoginModalProvider } from './context/LoginModalContext'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDoG2Xi-cujyLmY-5YV3jXmeW3Uk5Wh1MM',
  authDomain: 'safarihub-9ed52.firebaseapp.com',
  projectId: 'safarihub-9ed52',
  storageBucket: 'safarihub-9ed52.appspot.com',
  messagingSenderId: '292389079001',
  appId: '1:292389079001:web:4e9e563ea6d9216d2a7bc8',
  measurementId: 'G-56190DNC7H',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

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
