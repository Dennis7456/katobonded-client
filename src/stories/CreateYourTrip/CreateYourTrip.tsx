import React, { useRef, useState, useEffect } from 'react'
import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api'
import background from './assets/background.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { DateComponent } from './DateComponent'
import { AnimatePresence, motion } from 'framer-motion'

interface Option {
  label: string
  value: number
}

export const CreateYourTrip: React.FC = () => {
  const options: Option[] = [
    { label: '2 Travellers', value: 2 },
    { label: '3 Travellers', value: 3 },
    { label: '4 Travellers', value: 4 },
    { label: 'Group', value: 5 },
  ]

  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<google.maps.places.SearchBox>()
  const clickRef = useRef<HTMLDivElement>(null)

  const handlePlaceChanged = (): void => {
    const places =
      inputRef.current?.getPlaces() as google.maps.places.PlaceResult[]
    if (places !== undefined && places.length > 0) {
      const place = places[0]
      console.log(place.formatted_address)
      console.log(place.geometry?.location?.lat())
      console.log(place.geometry?.location?.lng())
    }
  }

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

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''

  return (
    <div>
      <div
        className="h-[420px] w-full relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form className="h-[340px] bg-[#ffffff] rounded-[5px] py-[35px] px-[70px]">
          <div className="flex flex-col items-start gap-[35px]">
            <div className="text-[25px] text-gray-600">Create Your Trip</div>
            <div className="flex items-center justify-center gap-[50px]">
              <div className="flex flex-col items-start gap-[10px]">
                <label className="text-[15px] text-gray-600">
                  Select Destination
                </label>
                {/* <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required></input> */}
                <LoadScript
                  googleMapsApiKey={googleMapsApiKey}
                  libraries={['places']}
                >
                  <StandaloneSearchBox
                    onLoad={(ref) => (inputRef.current = ref)}
                    onPlacesChanged={handlePlaceChanged}
                  >
                    <input
                      className="-translate-y-[4px] left-[100px] w-[348px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] text-gray-600 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Where to?"
                      type="text"
                      required
                    ></input>
                  </StandaloneSearchBox>
                </LoadScript>
                <FontAwesomeIcon
                  icon={solid('location-dot')}
                  size="lg"
                  className="text-gray-500 pointer-events-none absolute top-1/2 transform -translate-y-[4px] left-[430px]"
                />
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <DateComponent />
              </div>
              <div
                className="flex flex-col items-start gap-[10px]"
                ref={clickRef}
              >
                <label className="text-[15px] text-gray-600">Travellers</label>
                {/* <input
                  className="w-[170px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] pl-[45px]"
                  type="text"
                  placeholder="2 Travellers"
                ></input> */}
                <div
                  className="w-[170px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] pl-[45px] text-gray-400"
                  onClick={toggleDropDown}
                >
                  {selectedOption.label}
                  <FontAwesomeIcon
                    icon={solid('person-walking-luggage')}
                    size="lg"
                    className="text-gray-500 pointer-events-none absolute top-1/2 transform -translate-y-[4px] right-[465px]"
                  />
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
                      className="options bg-white mt-10 rounded-[3px] shadow p-4 absolute top-[210px] right-[330px] w-[170px] "
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
            <div className="flex items-start justify-center gap-[330px]">
              <div>Checkbox</div>
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
