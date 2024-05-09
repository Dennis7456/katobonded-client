import React, { useRef, useEffect, useState } from 'react'
import { Header } from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import diani from './assets/Diani.svg'
import lamu from './assets/Lamu.svg'
import mombasa from './assets/Mombasa.svg'
import { number } from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

// Destination
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'

interface Option {
  label: string
  value: number
}

export const BookTrip: React.FC = () => {
  // Selected
  const options: Option[] = [
    { label: '2 Travellers', value: 2 },
    { label: '3 Travellers', value: 3 },
    { label: '4 Travellers', value: 4 },
    { label: 'Group travel', value: 5 },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (option: Option): void => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen)
  }

  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  // Date
  const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [numOfDays, setNumDays] = useState<number[]>([])
  const [blankDays, setBlankDays] = useState<number[]>([])
  const [showDatepicker, setShowDatePicker] = useState(false)
  const [datePickerValue, setDatePickerValue] = useState('')
  const [firstDate, setFirstDate] = useState<Date | null>(null)
  const [secondDate, setSecondDate] = useState<Date | null>(null)
  const dateClickRef = useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] = useState<string>('form1')
  const [viewSuggestions, setViewSuggestions] = useState(false)
  const [showDestinations, setShowDestinations] = useState(false)
  const [departing, setDeparting] = useState(Date)
  const [returning, setReturning] = useState(Date)
  const [travellers, setTravellers] = useState<number>()
  const [addedSuggestions, setAddedSuggestions] = useState([])
  const [rotate, setRotate] = useState(false)

  //   Destination
  const inputRef = useRef<google.maps.places.SearchBox>()
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [destination, setDestination] =
    useState<google.maps.places.PlaceResult>({})
  const [destinations, setDestinations] = useState<
    google.maps.places.PlaceResult[]
  >([])
  const [errorMessage, setErrorMessage] = useState('')

  // Destination
  const clickRef = useRef<HTMLDivElement>(null)
  const selectionClickRef = useRef<HTMLDivElement>(null)

  const handleDestinationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // setDestination(e.target.value)
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

    // Form validation
    if (destinations.length <= 0) {
      const errorMessage = 'Please add a destination to continue'
      setErrorMessage(errorMessage)
    } else if (firstDate === secondDate) {
      const errorMessage = 'Please set travel and return date'
      setErrorMessage(errorMessage)
    } else {
      const tab = parseInt(activeTab.slice(4, 5)) + 1
      setActiveTab(`form${tab}`)
      console.log(`form${tab}`)
    }
  }

  const clearError = (): void => {
    setErrorMessage('')
  }

  const toggleShowDestinations = (): void => {
    if (destinations.length > 0) {
      setRotate(!rotate)
      setShowDestinations(!showDestinations)
    }
  }

  // Destination
  useEffect(() => {
    if (destinations.length === 0) {
      setIsLocationOpen(false)
    }
  }, [destinations])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  // Date
  useEffect(() => {
    console.log(`Month changed to: ${month}`)
    getNoOfDays()
  }, [month])

  const initDate = (): void => {
    const today = new Date()

    setDatePickerValue(() =>
      new Date(year, month, today.getDate()).toDateString(),
    )
  }

  const isToday = (date: number): boolean => {
    const today: Date = new Date()
    const d = new Date(year, month, date)

    return today.toDateString() === d.toDateString()
  }

  //   const getDateValue = (date: number): void => {
  //     const selectedDate = new Date(year, month, date)
  //     setFirstDate(() => selectedDate)
  //     setDatePickerValue(() => selectedDate.toDateString())
  //     setShowDatePicker(() => false)
  //   }

  // Calculates the number of days in the given month
  const getNoOfDays = (): void => {
    console.log(`Month: ${month}`)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    console.log(`${daysInMonth} days in ${MONTH_NAMES[month]}`)
    const dayOfWeek = new Date(year, month).getDay()

    const blankdaysArray: number[] = []
    for (var i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    const daysArray: number[] = []
    for (var j = 1; j <= daysInMonth; j++) {
      daysArray.push(j)
    }

    setBlankDays(() => blankdaysArray)
    setNumDays(() => daysArray)
  }

  // Calculates the range in days between the first and second date
  const evalRange = (date: number): void => {
    const selectedDate = new Date(year, month, date)

    if (firstDate === null) {
      setFirstDate(selectedDate)
      return
    }

    // setShowDatePicker(() => false)
    if (firstDate !== null && selectedDate > firstDate) {
      setSecondDate(selectedDate)
      const difference =
        (selectedDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
      console.log(`Difference in days: ${difference}`)
    }
  }

  const clearDate = (): void => {
    const date = new Date().getDay()
    const selectedDate = new Date(year, month, date)
    setFirstDate(null)
    setSecondDate(null)
  }

  // Checking to see if the date has been selected or not
  const dateFromDay = (date: number): boolean => {
    const newDate = new Date(year, month, date)

    if (firstDate !== null && secondDate !== null) {
      return (
        newDate.toDateString() === firstDate.toDateString() ||
        newDate.toDateString() === secondDate.toDateString()
      )
    }

    if (firstDate !== null) {
      return newDate.toDateString() === firstDate.toDateString()
    }
    return false
  }

  // Checking to see which days are between the first and second date
  const betweenDays = (date: number): boolean => {
    const newDate = new Date(year, month, date)

    if (firstDate !== null && secondDate !== null) {
      return newDate <= secondDate && newDate >= firstDate
    }
    return false
  }

  useEffect(() => {
    // This function can be used to do computations when the date is changed
    if (firstDate !== null && secondDate !== null) {
      setDatePickerValue(() => {
        return firstDate.toDateString() + ' - ' + secondDate.toDateString()
      })
    }

    // if(firstDate !== null && !range) {
    //   console.log('First date set not on range')
    // }
  }, [firstDate, secondDate])

  useEffect(() => {
    initDate()
    getNoOfDays()
  }, [])

  // Destination

  const handlePlaceChanged = (): void => {
    const places =
      inputRef.current?.getPlaces() as google.maps.places.PlaceResult[]
    if (places !== undefined && places.length > 0) {
      setDestination(places[0])
      // console.log(place.formatted_address)
      // console.log(place.geometry?.location?.lat())
      // console.log(place.geometry?.location?.lng())
    }
  }

  const handleLocations = (): void => {
    if (Object.keys(destination).length === 0 || destination === undefined) {
      return
    }

    setDestinations((prevDestinations) => [...prevDestinations, destination])

    if (!isLocationOpen) {
      setIsLocationOpen(!isLocationOpen)
    }
  }

  const removeLocation = (index: number): void => {
    setDestinations((prevDestinations) =>
      prevDestinations.filter((destination, i) => i !== index),
    )
    console.log(destinations.length)
  }

  const handleOutsideClick = (e: MouseEvent): void => {
    if (
      clickRef.current !== null &&
      !clickRef.current.contains(e.target as Node)
    ) {
      setIsLocationOpen((prevIsLocationOpen) => false)
    } else if (
      dateClickRef.current !== null &&
      !dateClickRef.current.contains(e.target as Node)
    ) {
      setShowDatePicker((prevShowDatePicker) => false)
    } else if (
      selectionClickRef.current !== null &&
      !selectionClickRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false)
    }
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
          <li>
            {errorMessage !== '' && (
              <div className="flex justify-center text-white bg-red-500 h-[70px] w-[150px] absolute text-xs p-[10px] ml-[35px]">
                <p>{errorMessage}</p>
                <span
                  className="flex items-center hover:text-gray-900 rounded-sm bg-red-500 pr-[10px] text-white"
                  onClick={() => {
                    clearError()
                  }}
                >
                  <FontAwesomeIcon
                    icon={solid('close')}
                    size="lg"
                    className="cursor-pointer"
                  />
                </span>
              </div>
            )}
          </li>
        </ul>

        {/* Forms */}
        {activeTab === 'form1' && (
          <div className="flex items-start justify-center gap-[35px] mt-[25px]">
            <form
              className="shadow-xl border flex flex-col  max-w-xxl items-start justify-center h-[650px] px-[55px]"
              onSubmit={handleSubmitTab}
            >
              <div className="border-b-[2px] border-gray-300 py-[35px] text-sm font-semibold w-full pb-[20px]">
                WHERE WOULD YOU LIKE TO GO ?
              </div>
              <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                <div className="border-b-[3px] border-gray-500 ">
                  <label className="text-xs"> SELECT DESTINATION </label>
                  <div className="flex items-center justify-center gap-[10px] bg-gray-50">
                    <LoadScript
                      googleMapsApiKey={googleMapsApiKey}
                      libraries={['places']}
                    >
                      <StandaloneSearchBox
                        onLoad={(ref) => (inputRef.current = ref)}
                        onPlacesChanged={handlePlaceChanged}
                      >
                        <input
                          className="-translate-y-[0px] left-[100px] w-[150px] h-[49px] focus:outline-none rounded-[3px] p-[10px] text-gray-700 focus:ring-gray-500 bg-gray-50 focus:border-gray-500 truncate ..."
                          placeholder="Where to?"
                          type="text"
                        ></input>
                      </StandaloneSearchBox>
                    </LoadScript>
                    {/* <div className=''> */}
                    <span
                      className="flex items-center text-gray-500 hover:text-gray-900 rounded-sm bg-gray-50 pr-[10px]"
                      onClick={() => {
                        setIsLocationOpen(true)
                      }}
                    >
                      <FontAwesomeIcon
                        icon={solid('location-dot')}
                        size="lg"
                        className="cursor-pointer"
                      />
                    </span>
                    {/* </div> */}
                  </div>
                  <div
                    className="absolute text-gray-500 flex items-center gap-[10px] hover:bg-[#F3533D] hover:text-white rounded-[3px] px-[10px] cursor-pointer mt-[20px]"
                    onClick={handleLocations}
                  >
                    <FontAwesomeIcon icon={solid('plus')} size="lg" />
                    <p>Add Destination</p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isLocationOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1 },
                          collapsed: { opacity: 0 },
                        }}
                        transition={{ duration: 0.5, ease: 'easeIn' }}
                        className="rounded-[3px] shadow p-4 absolute w-[350px] mt-[15px] bg-white z-10 border-[5px]"
                      >
                        <div className="text-gray-600 text-right">
                          <span className="text-red-300 hover:text-red-500 ">
                            <FontAwesomeIcon
                              icon={solid('circle-xmark')}
                              size="xl"
                              title="Close"
                              onClick={() => {
                                setIsLocationOpen(false)
                              }}
                            />
                          </span>
                          <div className="flex items-center justify-between">
                            <h3 className="pb-[10px] font-semibold">
                              Selected destinations:
                            </h3>
                          </div>
                          {destinations.map((destination, index) => (
                            <div key={index} className="text-left">
                              <div className="flex items-center justify-between">
                                <p>
                                  {index + 1} . {destination.name}
                                </p>
                                <span
                                  onClick={() => {
                                    removeLocation(index)
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={solid('circle-minus')}
                                    size="lg"
                                    className="text-gray-300 cursor-pointer hover:text-gray-500"
                                    title="Remove destination"
                                  />
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> DEPARTING </label>
                  <div
                    className="flex items-center justify-center gap-[10px] bg-gray-50 w-[150px] h-[49px] cursor-pointer"
                    onClick={() => {
                      setShowDatePicker(!showDatepicker)
                    }}
                  >
                    <span className="px-[10px]">
                      <FontAwesomeIcon
                        icon={regular('calendar')}
                        size="lg"
                        className="text-gray-500 cursor-pointer text-left"
                      />
                    </span>
                    <p className="text-left text-gray-700 text-md">
                      {firstDate !== null && firstDate !== undefined
                        ? firstDate.toDateString().slice(0, 10)
                        : new Date().toDateString().slice(0, 10)}
                    </p>
                  </div>
                  <AnimatePresence initial={false}>
                    {showDatepicker && (
                      <motion.div
                        className="bg-white mt-[10px] rounded-[3px] shadow p-4 absolute w-[300px] z-10 border-[5px]"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1 },
                          collapsed: { opacity: 0 },
                        }}
                        transition={{ duration: 0.5, ease: 'easeIn' }}
                      >
                        <motion.div
                          className="flex justify-between items-center"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1 },
                            collapsed: { opacity: 0 },
                          }}
                          transition={{ duration: 0.5, ease: 'easeIn' }}
                        >
                          <div>
                            <span className="text-lg font-semibold text-gray-800">
                              {' '}
                              {MONTH_NAMES[month]}
                            </span>
                            <span className="ml-1 text-lg text-gray-600 font-normal">
                              {' '}
                              {year}
                            </span>
                          </div>{' '}
                          <div className="flex items-start justify-between gap-[10px]">
                            <button
                              type="button"
                              className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-[3px]"
                              onClick={() => {
                                console.log(`Left button`)
                                if (month === 0) {
                                  setYear((prev) => prev - 1)
                                  setMonth(12)
                                }
                                setMonth((prev) => prev - 1)
                              }}
                            >
                              <svg
                                className="h-6 w-6 text-gray-500 inline-flex"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-[3px]"
                              onClick={() => {
                                console.log(`Right button`)
                                if (month === 11) {
                                  // const year = new Date().getFullYear() + 1;
                                  setYear((prev) => prev + 1)
                                  setMonth(0)
                                } else {
                                  setMonth((prev) => prev + 1)
                                }
                              }}
                            >
                              <svg
                                className="h-6 w-6 text-gray-500 inline-flex"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            <span
                              className="text-gray-300 hover:text-gray-500 cursor-pointer"
                              onClick={() => {
                                clearDate()
                              }}
                            >
                              <FontAwesomeIcon
                                icon={solid('circle-minus')}
                                size="xl"
                                title="Clear"
                              />
                            </span>
                            <span className="text-red-300 hover:text-red-500 cursor-pointer">
                              <FontAwesomeIcon
                                icon={solid('circle-xmark')}
                                size="xl"
                                title="Close"
                                onClick={() => {
                                  setShowDatePicker(false)
                                }}
                              />
                            </span>
                          </div>
                        </motion.div>{' '}
                        <motion.div
                          className="flex flex-wrap mb-3 -mx-1"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.5, ease: 'easeIn' }}
                        >
                          {DAYS.map((day, index) => {
                            return (
                              <div className="px-1" key={index}>
                                <div
                                  key={index}
                                  className="text-gray-800 font-medium text-center text-xs w-7 "
                                >
                                  {day}
                                </div>
                              </div>
                            )
                          })}
                        </motion.div>
                        <motion.div
                          className="flex flex-wrap -mx-1"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.5, ease: 'easeIn' }}
                        >
                          {blankDays.map((day, index) => {
                            return (
                              <div className="px-1 mb-1" key={index}>
                                <div
                                  key={index}
                                  className="cursor-pointer text-center text-sm rounded-[3px] leading-loose w-7 text-gray-700"
                                >
                                  {}
                                </div>
                              </div>
                            )
                          })}
                          {numOfDays.map((day, index) => {
                            const currentDate = new Date(year, month, day)
                            const isDisabled = currentDate <= new Date()

                            return (
                              <div className="px-1 mb-1" key={index}>
                                <div
                                  key={index}
                                  onClick={() => {
                                    if (!isDisabled) {
                                      evalRange(day)
                                    }
                                  }}
                                  className={`cursor-pointer text-center text-sm rounded-[3px] leading-loose w-7 ${
                                    isDisabled
                                      ? 'text-gray-400 cursor-not-allowed line-through'
                                      : 'hover:bg-blue-400'
                                  }`}
                                  style={{
                                    backgroundColor: isToday(day)
                                      ? '#f3533d'
                                      : dateFromDay(day) || betweenDays(day)
                                        ? '#1181d7'
                                        : 'white',
                                    color: isToday(day)
                                      ? '#fff'
                                      : dateFromDay(day) || betweenDays(day)
                                        ? '#fff'
                                        : 'black',
                                  }}
                                >
                                  {' '}
                                  {day}
                                </div>
                              </div>
                            )
                          })}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> RETURNING </label>
                  <div
                    className="flex items-center justify-center gap-[10px] bg-gray-50 w-[150px] h-[49px] cursor-pointer"
                    onClick={() => {
                      setShowDatePicker(!showDatepicker)
                    }}
                  >
                    <span className="px-[10px]">
                      <FontAwesomeIcon
                        icon={regular('calendar')}
                        size="lg"
                        className="text-gray-500 cursor-pointer text-left"
                      />
                    </span>
                    <p className="text-left text-gray-700 text-md">
                      {secondDate !== null && secondDate !== undefined
                        ? secondDate.toDateString().slice(0, 10)
                        : new Date().toDateString().slice(0, 10)}
                    </p>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs"> TRAVELLERS </label>
                  <div
                    className="flex items-center justify-center gap-[10px] bg-gray-50 w-[150px] h-[49px] cursor-pointer "
                    onClick={toggleDropDown}
                    ref={selectionClickRef}
                  >
                    {/* <input className="w-[150px]" /> */}
                    <span className="px-[10px]">
                      <FontAwesomeIcon
                        icon={solid('person-walking-luggage')}
                        size="lg"
                        className="text-gray-500 cursor-pointer text-left"
                      />
                    </span>
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
              </div>
              <div className="pt-[55px] flex items-center justify-center">
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
              <div className="relative left-[500px] top-[20px] bg-[#F3533D] my-[35px]">
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white hover:bg-[#F3533D] hover:text-white -[35px]">
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
                <h3 className="text-xs text-gray-600">Destinations</h3>
                <motion.div animate={{ rotate: rotate ? 180 : 0 }}>
                  <span className={`${showDestinations && ''}`}>
                    <FontAwesomeIcon icon={solid('chevron-up')} size="sm" />
                  </span>
                </motion.div>
              </div>
              {showDestinations && destinations.length > 0 && (
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
                  {destinations.map((destination, index) => (
                    <div key={index}>
                      <div className="flex items-start justify-normal gap-[10px]">
                        <span>
                          <FontAwesomeIcon
                            icon={regular('circle-dot')}
                            size="xs"
                          />
                        </span>
                        <div>{destination.name}</div>
                      </div>
                      <div
                        className="text-[#F3533D] text-decoration-line: underline hover:cursor-pointer"
                        onClick={() => {
                          setIsLocationOpen(true)
                        }}
                      >
                        Edit
                      </div>
                    </div>
                  ))}
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
                  <label className="text-xs text-gray-600">
                    {' '}
                    SELECT DESTINATION{' '}
                  </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[150px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs text-gray-600"> DEPARTING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <div>icon </div>
                    <input className="w-[100px]" />
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs text-gray-600"> RETURNING </label>
                  <div className="flex items-center justify-center gap-[10px]">
                    <input className="w-[100px]" />
                    <div> icon </div>
                  </div>
                </div>
                <div className="border-b-[3px] border-gray-500">
                  <label className="text-xs text-gray-600"> TRAVELLERS </label>
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
