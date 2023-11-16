import React from 'react'
import NavigationBar from './components/Header/NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <FontAwesomeIcon icon={icon({ name: 'user', style: 'regular' })} />
    </div>
  )
}

export default App
