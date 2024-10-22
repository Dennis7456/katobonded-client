import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

export const DateComponent: React.FC = () => {
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
  const clickRef = useRef<HTMLDivElement>(null)

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
      setShowDatePicker((prevShowDatePicker) => false)
    }
  }

  useEffect(() => {
    // console.log(`Month changed to: ${month}`)
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

  const getDateValue = (date: number): void => {
    const selectedDate = new Date(year, month, date)
    setFirstDate(() => selectedDate)
    setDatePickerValue(() => selectedDate.toDateString())
    setShowDatePicker(() => false)
  }

  // Calculates the number of days in the given month
  const getNoOfDays = (): void => {
    // console.log(`Month: ${month}`)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    // console.log(`${daysInMonth} days in ${MONTH_NAMES[month]}`)
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

    setShowDatePicker(() => false)
    if (firstDate !== null && selectedDate > firstDate) {
      setSecondDate(selectedDate)
      const difference =
        (selectedDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
      console.log(`Difference in days: ${difference}`)
    }
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

  return (
    <div ref={clickRef}>
      <div className="flex items-center justify-center lg:gap-[35px] gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <label className="text-[15px] text-gray-600">Departing</label>
          <div
            className="flex items-start justify-start cursor-pointer w-[130px] lg:w-[162px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] py-[10px] bg-gray-50"
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
                ? `${firstDate.toDateString().slice(0, 10)}, ${firstDate
                    .toDateString()
                    .slice(13, 15)}`
                : new Date().toDateString().slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className="text-[15px] text-gray-600">Returning</label>
          <div
            className="flex items-start justify-start cursor-pointer w-[130px] lg:w-[162px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] py-[10px] bg-gray-50"
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
                ? `${secondDate.toDateString().slice(0, 10)}, ${secondDate
                    .toDateString()
                    .slice(13, 15)}`
                : new Date().toDateString().slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* Calendar */}
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
                <div>
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
    </div>
  )
}
