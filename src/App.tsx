import React from 'react'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <div>
      <section>
        <Header
          chevronDown="URL_TO_CHEVRON_DOWN_IMAGE"
          heart="URL_TO_HEART_IMAGE"
        ></Header>
      </section>
      <div className="text-red-500 font-bold">Text</div>
    </div>
  )
}

export default App
