import React from 'react'
import logo from './assets/logo.svg'
export const Header: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-[50px] w-full bg-[#134427]">
        <img src={logo} className="hover:cursor-pointer"></img>
        <h1>
          <a
            className="text-white [word-spacing:5px] hover:cursor-pointer hover:text-gray-300"
            href="#"
          >
            RETURN TO HOMPAGE
          </a>
        </h1>
      </div>
    </div>
  )
}
