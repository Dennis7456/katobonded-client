import React, { useRef, useState, useEffect } from 'react'
import background from './assets/background.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { DateComponent } from './DateComponent'
import { AnimatePresence, motion } from 'framer-motion'
import { LocationCompnent } from './LocationCompnent'

interface Option {
  label: string
  value: number
}

export const CreateYourTrip: React.FC = () => {
  const options: Option[] = [
    { label: '2 Travellers', value: 2 },
    { label: '3 Travellers', value: 3 },
    { label: '4 Travellers', value: 4 },
    { label: 'Group travel', value: 5 },
  ]

  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [isOpen, setIsOpen] = useState(false)

  const clickRef = useRef<HTMLDivElement>(null)

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleOutsideClick = (e: MouseEvent): void => {
    if (
      clickRef.current !== null &&
      !clickRef.current.contains(e.target as Node)
    ) {
      setIsOpen((prevIsOpen) => false)
    }
  }

  return (
    <div>
      <div
        className="h-[520px] w-full relative overflow-hidden bg-cover bg-no-repeat p-[35px] text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form className="h-[340px] bg-[#ffffff] rounded-[5px] py-[35px] px-[70px]">
          <div className="flex flex-col items-start gap-[35px]">
            <div className="text-[25px] text-gray-600">Create Your Trip</div>
            <div className="flex items-center justify-center gap-[35px]">
              <div>
                <LocationCompnent />
              </div>
              <div>
                <DateComponent />
              </div>
              <div
                className="flex flex-col items-start gap-[10px]"
                ref={clickRef}
              >
                <label className="text-[15px] text-gray-600">Travellers</label>
                <span className="absolute flex items-center top-[190px] right-[450px]">
                  <FontAwesomeIcon
                    icon={solid('person-walking-luggage')}
                    size="lg"
                    className="text-gray-500 cursor-pointer relative"
                  />
                </span>
                <div
                  className="cursor-pointer w-[170px] h-[49px] text-gray-700 text-left border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] pl-[45px] text-gray-400"
                  onClick={toggleDropDown}
                >
                  {selectedOption.label}
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1 },
                        collapsed: { opacity: 0 },
                      }}
                      transition={{ duration: 0.5, ease: 'easeIn' }}
                      className="options bg-white mt-10 rounded-[3px] shadow p-4 absolute top-[210px] right-[310px] w-[170px] "
                    >
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className="option text-gray-600 text-center hover:rounded-[3px] hover:text-white cursor-pointer hover:bg-[#1181d7] tracking-normal"
                          onClick={() => {
                            handleOptionClick(option)
                          }}
                        >
                          {option.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <br />
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white">
                  Create Trip
                </button>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[240px]">
              <div className="text-gray-500 flex items-center gap-[10px] hover:bg-gray-200 hover:text-white rounded-[3px] px-[10px] cursor-pointer">
                <FontAwesomeIcon icon={solid('plus')} size="lg" />
                <p>Add Destination</p>
              </div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[120px]">
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  checked
                  id="orange-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Default checkbox
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateYourTrip
