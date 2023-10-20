import React from 'react'
import './styles.css'
import iconsearch from './assets/icons/icon-search.svg'
import icondollar from './assets/icons/icon-dollar.svg'
import iconuser from './assets/icons/icon-user.svg'
import iconheart from './assets/icons/heart-2.svg'
import chevrondown from './assets/icons/chevron-down.svg'

interface User {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps): JSX.Element => (
  <header>
    <div className="main-header">
      <div>
        <div className="logo"></div>
      </div>
      <div className="links">
        <a className="text">Safaris & Tours</a>
        <a className="text">Destinations</a>
        <a className="text">Tour Operators</a>
      </div>
      <div className="search">
        <div className="icon">
          <img src={iconsearch}></img>
        </div>
        <div className="text">Search</div>
      </div>
      <div className="dollar">
        <div className="icon">
          <img src={icondollar}></img>
        </div>
        <div className="text chevron">
          USD
          <img
            src={chevrondown}
            style={{ marginLeft: '5px' }}
            alt="Chevron"
            className="icon"
          />
        </div>
      </div>
      <div className="user">
        <div className="icon">
          <img src={iconuser}></img>
        </div>
        <div className="text">Agent Login</div>
      </div>
      <div className="heart">
        <div className="icon">
          <img src={iconheart}></img>
        </div>
        <div className="text">Favourites</div>
      </div>

      <div className="spacer"></div>
    </div>
  </header>
)
