import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Header } from './components/Header'

function App(): JSX.Element {
  return (
    <div>
      <section>
        <Header
          chevronDown="URL_TO_CHEVRON_DOWN_IMAGE"
          heart="URL_TO_HEART_IMAGE"
        ></Header>
      </section>
    </div>
  )
}

export default App
