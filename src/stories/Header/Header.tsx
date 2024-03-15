import React from 'react'
import logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="flex sticky top-0 z-50" id="header">
      <div className=" flex items-center justify-start basis-[65%] h-[80px] bg-[#134427] w-full">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <span className="px-[20px]"></span>
        <div className="flex gap-[20px] text-white font-mulish">
          <div className="cursor-pointer">SAFARIS & TOURS</div>
          <div className="cursor-pointer">DESTINATIONS</div>
          <div className="cursor-pointer">TOUR OPERATORS</div>
        </div>
      </div>
      <div className=" flex items-center justify-around basis-[35%] h-[80px] bg-[#134427] w-auto font-semibold text-white">
        <div className="flex flex-col cursor-pointer">
          <FontAwesomeIcon
            className="py-[5px]"
            icon={solid('magnifying-glass')}
            size="lg"
            style={{ color: '#ffffff' }}
          />
          <div className="">Search</div>
        </div>
        <div className="flex flex-col cursor-pointer">
          <FontAwesomeIcon
            className="py-[5px]"
            icon={solid('dollar-sign')}
            size="lg"
            style={{ color: '#ffffff' }}
          />
          <div className="">USD</div>
        </div>
        <div className="flex flex-col cursor-pointer">
          <FontAwesomeIcon
            className="py-[5px]"
            icon={regular('user')}
            size="lg"
            style={{ color: '#ffffff' }}
          />
          <div className="">Agent Login</div>
        </div>
        <div className="flex flex-col cursor-pointer">
          <FontAwesomeIcon
            className="py-[5px]"
            icon={regular('heart')}
            size="lg"
            style={{ color: '#ffffff' }}
          />
          <div className="">Favourites</div>
        </div>
      </div>
    </div>
  )
}

export default Header
