// import PropTypes from 'prop-types'
// import React from "react";
import './styles.css'
import React from 'react'

interface HeaderProps {
  chevronDown: string
  heart: string
}
export const Header: React.FC<HeaderProps> = ({
  chevronDown = 'https://c.animaapp.com/frJBsLDy/img/chevron-down-3-1.svg',
  heart = 'https://c.animaapp.com/frJBsLDy/img/heart-2-2-1.svg',
}) => {
  return (
    <div className="header">
      <div className="group">
        <div className="frame">
          <div className="text-wrapper">SAFARIS &amp; TOURS</div>
          <div className="text-wrapper">DESTINATIONS</div>
          <div className="text-wrapper">TOUR OPERATORS</div>
        </div>
        <img
          className="kato-bonded-bnw"
          alt="Kato bonded bnw"
          src="https://c.animaapp.com/frJBsLDy/img/kato-bonded-bnw-1-1@2x.png"
        />
        <div className="div">
          <div className="group-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Search</div>
            </div>
            <img
              className="icon-search"
              alt="Icon search"
              src="https://c.animaapp.com/frJBsLDy/img/icon-search-1-1.svg"
            />
          </div>
          <div className="group-3">
            <img
              className="dollar"
              alt="Dollar"
              src="https://c.animaapp.com/frJBsLDy/img/dollar-1-1.svg"
            />
            <div className="frame-wrapper">
              <div className="frame-2">
                <div className="text-wrapper-3">USD</div>
                <img
                  className="chevron-down"
                  alt="Chevron down"
                  src={chevronDown}
                />
              </div>
            </div>
          </div>
          <div className="group-4">
            <div className="text-wrapper-4">Agent LogIn</div>
            <img
              className="icon-user"
              alt="Icon user"
              src="https://c.animaapp.com/frJBsLDy/img/icon-user-2-1.svg"
            />
          </div>
          <div className="group-5">
            <img className="heart" alt="Heart" src={heart} />
            <div className="text-wrapper-4">Favourites</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Header.propTypes = {
//     chevronDown: PropTypes.string,
//     heart: PropTypes.string,
//   };
