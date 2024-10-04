import React, { useState } from 'react'
import Header from 'src/stories/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Elephants from '../../assets/ElephantsImage.jpeg'
import EmptyImage from '../../assets/blank-profile.svg'
import { DateComponent } from 'src/stories/CreateYourTrip/DateComponent'
import Travellers from '../Travellers/Travellers'
import Footer from '../Footer/Footer'
import './GetAFreeQuote.css'

const GetAFreeQuote: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [inputValue, setInputValue] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('Select')

  const options = ['1 - 2 Weeks', '3 - 4 Weeks', '4+ Weeks', 'I’m Not Sure']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
    setSelectedOption('') // Clear the dropdown selection when typing
  }

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedOption(e.target.value)
    setInputValue('') // Clear the input field when selecting an option
  }

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleOnClick = (option: string): void => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div>
      <Header />
      <div className="my-[100px] py-[35px] px-[105px] bg-gray-50">
        {/* Breadcrumb */}
        <div className="cursor-pointer hover:opacity-80">
          <nav className="text-gray-900 mb-6 font-semibold flex justify-start items-center gap-[20px]">
            <FontAwesomeIcon icon={solid('caret-left')} />
            <span className="text-gray-400">Back to Tour</span>
          </nav>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-3 gap-[10px]">
          {/* Middle Section */}
          <div className="col-span-2 grid gap-[15px]">
            {/* Card */}
            <div className="shadow-md bg-white flex">
              <div>
                <img
                  src={Elephants}
                  alt="elephant photo"
                  className="h-full w-[300px] object-cover"
                />
              </div>
              <div className="px-[65px] py-[20px]">
                <h2 className="text-lg text-gray-900 tracking-wide">
                  3 Days Maasai Mara Camping Safari
                </h2>
                <div className="flex justify-start items-center">
                  <p className="text-lg font-semibold">$ 1,850 </p>
                  <p className="mx-[5px] text-sm text-gray-400">/</p>
                  <p className="text-sm text-gray-400">Person Sharing</p>
                </div>
                <div className="grid gap-[10px] mt-[20px]">
                  <p>By: Kunguru Safaris</p>
                  <div className="flex justify-start items-center gap-[10px]">
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <img src={EmptyImage} />
              </div>
              <div></div>
            </div>

            {/* Form */}
            <div className="shadow-md bg-white px-[55px] py-[45px]">
              <h1 className="uppercase tracking-wider text-gray-900 font-semibold">
                Get A Free Quote For This Tour
              </h1>

              <div className="grid gap-[10px] mt-[35px]">
                <label htmlFor="firstName text-center">
                  Name of Person Booking<span className="m-[5px]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-[20px]">
                  <input
                    placeholder="First name"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  />
                  <input
                    placeholder="Middle name"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  />
                  <input
                    placeholder="Surname"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">
                    Email<span className="m-[5px]">*</span>
                  </label>
                  <input
                    placeholder="Email"
                    className="
                    px-[15px] 
                    py-[15px]
                     border-gray-400 
                     border-[1px] 
                     rounded-[3px] 
                     text-gray-400 
                     focus:border-gray-500 
                     focus:outline-none"
                  />
                </div>
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Phone</label>
                  <input
                    placeholder="Phone"
                    className="
                    px-[15px]
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">
                    Country of Residence<span className="m-[5px]">*</span>
                  </label>
                  <input
                    placeholder="Email"
                    className="
                    px-[15px] 
                    py-[15px]
                     border-gray-400 
                     border-[1px] 
                     rounded-[3px]
                      text-gray-400 
                      focus:border-gray-500 
                      focus:outline-none"
                  />
                </div>
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Nationality</label>
                  <input
                    placeholder="Phone"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Your Message</label>
                  <textarea
                    placeholder="Enter Message"
                    className="
                    px-[15px] 
                    py-[15px] 
                    h-[250px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
                  ></textarea>
                </div>
              </div>
              {/* Checkbox */}
              <div className="flex justify-center items-center ml-[px] mt-[35px] ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-200 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium 
              text-orange-500 
              peer-checked:text-orange-500 
              peer-checked:line-through
              pl-[10px]
              "
                >
                  {' '}
                  Remember my message for future requests{' '}
                </label>
              </div>
              <div className="grid gap-[35px] mt-[75px]">
                {/* Title */}
                <div>
                  <h2 className="text-lg font-semibold">
                    Provide Trip Details
                  </h2>
                </div>

                {/* Select/Input Functionality */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-gray-400 font-semibold">
                    Tour Duration: How Much Time Are You Planning to go on
                    Holiday
                  </label>
                  <div>
                    <div className="flex justify-start items-center">
                      {/* Optional: Input for typing (to replace native select if needed) */}
                      <input
                        type="text"
                        className="
                select
                h-[56px]
                w-[350px]
                px-[15px] 
                text-gray-700
                py-[15px] 
                border-gray-400 
                border-t-[1px]
                border-l-[1px]
                border-b-[1px]
                rounded-[3px]
                rounded-l-sm
                rounded-r-none
                focus:border-gray-500 
                focus:outline-none"
                        placeholder="Type Number of Days"
                        value={selectedOption !== '' ? selectedOption : ''}
                        onChange={(e) => {
                          setSelectedOption(e.target.value)
                        }}
                        // disabled={selectedOption !== 'Select'}
                      ></input>
                      {/* Custom Input/Dropdown Button */}
                      <button
                        onClick={toggleDropDown}
                        className="
                flex
                justify-between
                items-center
                border-r-[1px]
                border-t-[1px]
                border-b-[1px]
                border-l-[1px]
                rounded-r-sm
                px-[15px]
                py-[15px]
                bg-white
                text-gray-700
                focus:outline-none
                focus:ring-gray-500
                w-[50px]
                z-0
                right-[306px]
                focus:right-[306px]
                focus:border-gray-500 
                border-gray-500 
                h-[56px]
                "
                      >
                        {/* {selectedOption !== '' ? selectedOption : 'Type Number of Days or Select Options'} */}
                        <FontAwesomeIcon
                          icon={solid('chevron-down')}
                          className="text-gray-700 ml-[0px]"
                        />
                      </button>
                    </div>

                    {/* Custom Dropdown Menu */}
                    {isOpen && (
                      <ul className="absolute z-20 w-[400px] bg-white border rounded-md mt-1 shadow-md">
                        {options.map((option, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              handleOnClick(option)
                            }}
                            className="
                        px-4
                        py-2
                        hover:bg-orange-500
                        hover:text-white
                        cursor-pointer
                        "
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Radio buttons */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-gray-400 font-semibold">
                    Type of tour
                  </label>
                  <div className="flex items-center space-x-6">
                    <label
                      className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through"
                    >
                      <input
                        type="radio"
                        name="option"
                        value="Option 1"
                        className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-500
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                      />
                      Private tour
                    </label>
                    <label
                      className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through
                    "
                    >
                      <input
                        type="radio"
                        name="option"
                        value="Option 2"
                        className="
                        peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px] 
                border-orange-500
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                      />
                      Shared tour
                    </label>
                  </div>
                </div>

                {/* Radio buttons */}
                <div className="flex flex-col gap-[10px]">
                  <label className="text-gray-400 font-semibold">
                    Comfort Level
                  </label>
                  <div className="flex items-center space-x-6">
                    <label
                      className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through"
                    >
                      <input
                        type="radio"
                        name="option"
                        value="Option 1"
                        className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-500
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                      />
                      Budget
                    </label>
                    <label
                      className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through
                    "
                    >
                      <input
                        type="radio"
                        name="option"
                        value="Option 2"
                        className="
                        peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-500 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                      />
                      Midrange
                    </label>

                    <label
                      className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through
                    "
                    >
                      <input
                        type="radio"
                        name="option"
                        value="Option 2"
                        className="
                        peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px] 
                border-orange-500
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-gray-300
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                      />
                      Luxury
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-[35px]">
                <button className="bg-orange-500 px-[35px] py-[10px] text-white rounded-md">
                  Submit Request
                </button>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="col-span-1 shadow-md bg-white px-[20px] py-[20px] flex flex-col justify-start items-start gap-[20px] h-[350px]">
            <h2 className="text-lg tracking-wide">Your Trip Details</h2>
            <DateComponent />
            {/* Checkbox */}
            <div className="flex justify-center items-center ml-[10px] mt-[10px] ">
              <input
                type="checkbox"
                id="checkbox1"
                className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm border 
                after:absolute 
                after:left-0 
                after:top-0 
                after:h-full 
                after:w-full 
                after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] 
                after:bg-[length:40px] 
                after:bg-center 
                after:bg-no-repeat after:content-['']
              checked:bg-[#F3533D] 
              ring
              ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
              />
              <label
                className="
              w-full 
              cursor-pointer 
              font-medium 
              text-orange-500 
              peer-checked:text-orange-500 
              peer-checked:line-through
              pl-[10px]
              "
              >
                {' '}
                My dates are flexible{' '}
              </label>
            </div>
            <Travellers />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GetAFreeQuote
