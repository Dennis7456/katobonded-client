import React, { useState } from 'react'
// import logo from './assets/logo.svg'
import logo from './assets/safarihub-logo.png'
import logoCircle from './assets/circle-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Header.css'
import { LoginModal } from '../LoginModal/LoginModal'
import {
  LoginModalProvider,
  useLoginModalContext,
} from 'src/context/LoginModalContext'

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isModalOpen, openModal, closeModal } = useLoginModalContext()

  return (
    <div className="sticky top-0 z-20 w-[100vw]">
      <div className="flex justify-between items-center bg-[#134427]">
        <div className="flex py-[10px]">
          <img
            src={logoCircle}
            alt="logo image"
            className="w-[80px] rotate-[10deg] ml-6 cursor-pointer"
          />
          <img
            src={logo}
            alt="logo image"
            className="w-[150px] rotate-[15deg] ml-6 cursor-pointer"
          />
        </div>
        <button
          className="mr-[35px] lg:hidden"
          onClick={() => {
            setIsSidebarOpen(true)
            document.body.style.overflow = 'hidden'
          }}
        >
          <FontAwesomeIcon
            icon={solid('bars')}
            size="xl"
            className="text-white "
          />
        </button>

        {/* Vissible on large screen       */}
        <div className="hidden lg:flex gap-[20px] text-white font-mulish tracking-wider">
          <div className="cursor-pointer hover:text-orange-500 ">
            SAFARIS & TOURS
          </div>
          <div className="cursor-pointer hover:text-orange-500">
            DESTINATIONS
          </div>
          <div className="cursor-pointer hover:text-orange-500">
            TOUR OPERATORS
          </div>
        </div>

        {/* Vissble on large screens */}
        <div className="hidden lg:flex items-center justify-around gap-[35px] mr-[35px] tracking-wider text-white font-semibold">
          <div className="flex flex-col cursor-pointer hover:text-orange-500">
            <FontAwesomeIcon
              className="py-[5px]"
              icon={solid('magnifying-glass')}
              size="lg"
            />
            <div className="">Search</div>
          </div>
          <div className="flex flex-col cursor-pointer hover:text-orange-500 text-white">
            <FontAwesomeIcon
              className="py-[5px]"
              icon={solid('dollar-sign')}
              size="lg"
            />
            <div className="">Currency</div>
          </div>
          <LoginModal />
          <div className="flex flex-col cursor-pointer hover:text-orange-500 text-white">
            <FontAwesomeIcon
              className="py-[5px]"
              icon={solid('heart')}
              size="lg"
            />
            <div className="">Likes</div>
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {isSidebarOpen ? (
        <div className="modal-bg lg:hidden z-10">
          <div className="absolute top-0 right-0 h-[100vh] w-[75vw] overflow-hidden">
            <div className="bg-[#134427] flex justify-end items-center h-[81px]">
              {/* <img src={logo} alt='logo image' /> */}
              <button
                onClick={() => {
                  setIsSidebarOpen(false)
                  document.body.style.overflow = 'auto'
                }}
                className="mr-[35px]"
              >
                <FontAwesomeIcon
                  icon={solid('bars-staggered')}
                  size="xl"
                  className="text-white"
                />
              </button>
            </div>
            <div className="bg-[#134427] flex flex-col gap-[55px] text-white border-t-[2px] h-[100vh]">
              <div className="relative left-0 px-[10px] py-[10px]">
                <input
                  placeholder="search"
                  className="
        py-[10px]
        px-[10px]
        w-full
        border-gray-400
        border-[1px]
        rounded-[3px]
        text-gray-500
        focus:outline-none"
                />
                <button className="absolute right-[10px] transform translate-y-1/2 -translate-x-1/2">
                  <FontAwesomeIcon
                    icon={solid('magnifying-glass')}
                    size="xl"
                    className="text-gray-400"
                  />
                </button>
              </div>

              {/* Reduce the gap between input and links */}
              <div className="flex flex-col justify-start items-center gap-[35px] tracking-wider">
                <div className="cursor-pointer hover:text-yellow-400">
                  SAFARIS & TOURS
                </div>
                <div className="cursor-pointer hover:text-yellow-400">
                  DESTINATIONS
                </div>
                <div className="cursor-pointer hover:text-yellow-400">
                  TOUR OPERATORS
                </div>
              </div>
              <div className="flex justify-center tracking-wider">
                <div>
                  <LoginModal />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header
