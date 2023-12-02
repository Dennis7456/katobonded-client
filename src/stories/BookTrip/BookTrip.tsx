import React, { FormEvent, useState } from 'react'
import { Header } from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import diani from './assets/Diani.svg'
import lamu from './assets/Lamu.svg'
import mombasa from './assets/Mombasa.svg'
import { number } from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

export const BookTrip: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('form1')
  const [viewSuggestions, setViewSuggestions] = useState(false)
  const [showDestinations, setShowDestinations] = useState(false)
  const [destination, setDestination] = useState({})
  const [departing, setDeparting] = useState(Date)
  const [returning, setReturning] = useState(Date)
  const [travellers, setTravellers] = useState<number>()
  const [addedSuggestions, setAddedSuggestions] = useState([])
  const [rotate, setRotate] = useState(false)

  const handleDestinationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setDestination(e.target.value)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setDestination(e.target.value);
  }

  const hanldeTravellerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // setDestination(e.target.value);
  }

  const showForm = (tabId: string): void => {
    setActiveTab(tabId)
  }

  const toggleViewSuggestions = (): void => {
    setViewSuggestions(!viewSuggestions)
    console.log(viewSuggestions)
  }

  const validateDate = (): string => {
    return 'Returning date cannot be after depature date'
  }

  const dateError = validateDate()

  const handleSubmitTab = (e: { preventDefault: () => void }): void => {
    e.preventDefault()
    const tab = parseInt(activeTab.slice(4, 5)) + 1
    setActiveTab(`form${tab}`)
    console.log(`form${tab}`)
  }

  const toggleShowDestinations = (): void => {
    setRotate(!rotate)
    setShowDestinations(!showDestinations)
  }

  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center justify-center py-[35px]">
        <ul className="flex items-center gap-[55px] border-b-[3px] border-b-gray-300">
          <li
            className={`${
              activeTab === 'form1' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form1')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('compass')} size="lg" />
            </span>
            <h2 className="text-sm"> 1. DESTINATION </h2>
          </li>
          <li
            className={`${
              activeTab === 'form2' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form2')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('suitcase')} size="lg" />
            </span>
            <h2 className="text-sm"> 2. TRANSPORT </h2>
          </li>
          <li
            className={`${
              activeTab === 'form3' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form3')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('bed')} size="lg" />
            </span>
            <h2 className="text-sm"> 3. ACCOMMODATION </h2>
          </li>
          <li
            className={`${
              activeTab === 'form4' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form4')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('person-swimming')} size="lg" />
            </span>
            <h2 className="text-sm"> 4. ACTIVITIES </h2>
          </li>
          <li
            className={`${
              activeTab === 'form5' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form5')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('check')} size="lg" />
            </span>
            <h2 className="text-sm"> 5. COMPLETE </h2>
          </li>
        </ul>
        {activeTab === 'form1' && (
          <div className="flex items-start justify-center gap-[35px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[550px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px] flex items-center justify-center">
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
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none
              "
                  onChange={toggleViewSuggestions}
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]"
                >
                  {' '}
                  View destination suggestions to extend your safari{' '}
                </label>
              </div>
              <br />
              {viewSuggestions && (
                <div className="flex items-center justify-around gap-[35px]">
                  <div className="flex flex-col items-center bg-white">
                    <img src={diani} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Diani (+1day)
                    </div>
                    <div className="">
                      <button
                        className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white"
                        type="submit"
                      >
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={lamu} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Lamu (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={mombasa} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Mombasa (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative left-[500px] top-[20px] bg-[#F3533D]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white">
                  Continue
                </button>
              </div>
            </form>
            <div className="shadow-xl bg-white flex flex-col w-[150px]">
              <div className="flex items-center justify-between px-[30px] gap-[20px] py-[15px] border-b-[2px] border-gray-300">
                <h3 className="text-xs">SUMMARY</h3>
                <span>
                  <FontAwesomeIcon icon={solid('chevron-up')} size="sm" />
                </span>
              </div>
              <div
                className="flex items-center justify-between px-[30px] gap-[20px] py-[15px] border-b-[2px] border-gray-300 hover:cursor-pointer"
                onClick={toggleShowDestinations}
              >
                <h3 className="text-xs">Destinations</h3>
                {/* {showDestinations ? (
                    <AnimatePresence initial={false}>
                    <span className={`${showDestinations && ''}`}>
                    <FontAwesomeIcon icon={solid("chevron-up")} size="sm" />
                </span>
                </AnimatePresence>
                ) : (
                <span className={`${showDestinations && ''}`}>
                <FontAwesomeIcon icon={solid("chevron-down")} size="sm" />
                </span>)} */}
                <motion.div animate={{ rotate: rotate ? 180 : 0 }}>
                  <span className={`${showDestinations && ''}`}>
                    <FontAwesomeIcon icon={solid('chevron-down')} size="sm" />
                  </span>
                </motion.div>
              </div>
              {showDestinations && (
                <motion.div
                  className="p-[20px] text-xs"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1 },
                    collapsed: { opacity: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeIn' }}
                >
                  <div>Malindi</div>
                  <div className="text-[#F3533D] text-decoration-line: underline hover:cursor-pointer">
                    Add/Change
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'form2' && (
          <div className="flex items-start justify-center gap-[35px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[550px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px] flex items-center justify-center">
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
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none
              "
                  onChange={toggleViewSuggestions}
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]"
                >
                  {' '}
                  View destination suggestions to extend your safari{' '}
                </label>
              </div>
              <br />
              {viewSuggestions && (
                <div className="flex items-center justify-around gap-[35px]">
                  <div className="flex flex-col items-center bg-white">
                    <img src={diani} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Diani (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={lamu} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Lamu (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={mombasa} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Mombasa (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative left-[500px] top-[20px] bg-[#F3533D]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white">
                  Continue
                </button>
              </div>
            </form>
            <div></div>

            <div className="shadow-xl"> summary </div>
          </div>
        )}
        {activeTab === 'form3' && (
          <div className="flex items-start justify-center gap-[35px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[550px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px] flex items-center justify-center">
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
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none
              "
                  onChange={toggleViewSuggestions}
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]"
                >
                  {' '}
                  View destination suggestions to extend your safari{' '}
                </label>
              </div>
              <br />
              {viewSuggestions && (
                <div className="flex items-center justify-around gap-[35px]">
                  <div className="flex flex-col items-center bg-white">
                    <img src={diani} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Diani (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={lamu} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Lamu (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={mombasa} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Mombasa (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative left-[500px] top-[20px] bg-[#F3533D]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white">
                  Continue
                </button>
              </div>
            </form>
            <div></div>

            <div className="shadow-xl"> summary </div>
          </div>
        )}
        {activeTab === 'form4' && (
          <div className="flex items-start justify-center gap-[35px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[550px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px] flex items-center justify-center">
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
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none
              "
                  onChange={toggleViewSuggestions}
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]"
                >
                  {' '}
                  View destination suggestions to extend your safari{' '}
                </label>
              </div>
              <br />
              {viewSuggestions && (
                <div className="flex items-center justify-around gap-[35px]">
                  <div className="flex flex-col items-center bg-white">
                    <img src={diani} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Diani (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={lamu} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Lamu (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={mombasa} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Mombasa (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative left-[500px] top-[20px] bg-[#F3533D]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white">
                  Continue
                </button>
              </div>
            </form>
            <div></div>

            <div className="shadow-xl"> summary </div>
          </div>
        )}
        {activeTab === 'form5' && (
          <div className="flex items-start justify-center gap-[35px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[550px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
              </div>
              <div className="pt-[35px] flex items-center justify-center">
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
              ring-gray-300
              hover:ring 
               hover:ring-[#F3533D] 
              focus:outline-none
              "
                  onChange={toggleViewSuggestions}
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]"
                >
                  {' '}
                  View destination suggestions to extend your safari{' '}
                </label>
              </div>
              <br />
              {viewSuggestions && (
                <div className="flex items-center justify-around gap-[35px]">
                  <div className="flex flex-col items-center bg-white">
                    <img src={diani} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Diani (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={lamu} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Lamu (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center bg-white">
                    <img src={mombasa} />
                    <div className="py-[10px] border-b-[1px] border-gray-300 text-center text-xs">
                      Mombasa (+1day)
                    </div>
                    <div className="">
                      <button className="flex items-center justify-center mt-[10px] text-[#F3533D] rounded-[20px] border-[2px] px-[20px] border-[#F3533D] py-[5px] group hover:bg-[#F3533D] hover:text-white">
                        <p className="text-sm">Add</p>
                        <span className="px-[10px] text-[#F3533D] group-hover:text-white">
                          <FontAwesomeIcon
                            icon={solid('add')}
                            size="sm"
                            className="cursor-pointer text-left"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="relative left-[500px] top-[20px] bg-[#F3533D]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white">
                  Continue
                </button>
              </div>
            </form>
            <div className="shadow-xl bg-white flex flex-col">
              <div className="flex items-start justify-between">
                <h3>SUMMARY</h3>
                <FontAwesomeIcon icon={solid('chevron-up')} size="lg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
