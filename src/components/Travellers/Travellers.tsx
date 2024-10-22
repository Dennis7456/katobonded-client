import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { AnimatePresence, motion } from 'framer-motion'

interface Option {
  label: string
  value: number
}

const Travellers: React.FC = () => {
  const options: Option[] = [
    { label: '2 Travellers', value: 2 },
    { label: '3 Travellers', value: 3 },
    { label: '4 Travellers', value: 4 },
    { label: 'Group travel', value: 5 },
  ]
  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [isOpen, setIsOpen] = useState(false)

  const clickRef = useRef<HTMLDivElement>(null)

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div ref={clickRef} className="flex justify-center">
      <div className="flex flex-col gap-[10px]">
        <label className="text-[15px] text-gray-600 text-left">
          Travellers
        </label>
        <div
          className="flex items-start justify-start gap-[5px] cursor-pointer w-[162px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] py-[10px] text-gray-700 bg-gray-50"
          onClick={toggleDropDown}
        >
          <span className="px-[10px]">
            <FontAwesomeIcon
              icon={solid('person-walking-luggage')}
              size="lg"
              className="text-gray-500 cursor-pointer text-left"
            />
          </span>
          {selectedOption.label}
        </div>
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
            className="options bg-white mt-[10px] rounded-[3px] shadow p-4 absolute w-[170px] z-10 border-[5px]"
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
  )
}

export default Travellers
