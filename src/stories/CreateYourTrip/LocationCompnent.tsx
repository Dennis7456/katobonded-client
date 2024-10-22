import React, { useEffect, useRef, useState } from 'react'
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { AnimatePresence, motion } from 'framer-motion'

// interface LocationCompnentProps {
//   isLocationOpen:boolean;
//   toggleAddLocation: () => void;
// }

export const LocationCompnent: React.FC = () => {
  const inputRef = useRef<google.maps.places.SearchBox>()
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [location, setLocation] = useState<google.maps.places.PlaceResult>({})
  const [locations, setLocations] = useState<google.maps.places.PlaceResult[]>(
    [],
  )
  const clickRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (locations.length === 0) {
      setIsLocationOpen(false)
    }
  }, [locations])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handlePlaceChanged = (): void => {
    const places =
      inputRef.current?.getPlaces() as google.maps.places.PlaceResult[]
    if (places !== undefined && places.length > 0) {
      setLocation(places[0])
      // console.log(place.formatted_address)
      // console.log(place.geometry?.location?.lat())
      // console.log(place.geometry?.location?.lng())
    }
  }

  const handleLocations = (): void => {
    if (Object.keys(location).length === 0 || location === undefined) {
      return
    }

    setLocations((prevlocations) => [...prevlocations, location])

    if (!isLocationOpen) {
      setIsLocationOpen(!isLocationOpen)
    }
  }

  const removeLocation = (index: number): void => {
    setLocations((prevlocations) =>
      prevlocations.filter((location, i) => i !== index),
    )
    console.log(locations.length)
  }

  const handleOutsideClick = (e: MouseEvent): void => {
    if (
      clickRef.current !== null &&
      !clickRef.current.contains(e.target as Node)
    ) {
      setIsLocationOpen((prevIsLocationOpen) => false)
    }
  }

  return (
    <div className="flex flex-col items-start gap-[10px] ">
      <label className="text-[15px] text-gray-600">Select Destination</label>
      <div className="relative" ref={clickRef}>
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['places']}>
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input
              className="-translate-y-[0px] left-[100px] w-[310px] lg:w-[348px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] text-gray-700 focus:outline-none focus:border-gray-500 truncate ..."
              placeholder="Where to?"
              type="text"
              required
            ></input>
          </StandaloneSearchBox>
        </LoadScript>
        <span
          className="absolute top-[13px] left-[270px] lg:left-[300px] flex items-center pl-2 text-gray-500 hover:text-gray-900 rounded-sm cursor-pointer"
          onClick={() => {
            setIsLocationOpen(true)
          }}
        >
          <FontAwesomeIcon
            icon={solid('location-dot')}
            size="lg"
            className=" pointer-events-none relative bg-white hover:bg-slate-500"
          />
        </span>
        <div
          className="absolute text-gray-500 flex items-center gap-[10px] hover:bg-[#F3533D] hover:text-white rounded-[3px] px-[10px] cursor-pointer mt-[10px]"
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
              className="rounded-[3px] shadow p-4 absolute w-full mt-[35px] bg-white z-10 border-[5px]"
            >
              <div className="text-gray-600 text-right">
                <span className="text-red-300 hover:text-red-500 ">
                  <FontAwesomeIcon
                    icon={solid('circle-xmark')}
                    size="sm"
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
                {locations.map((location, index) => (
                  <div key={index} className="text-left">
                    <div className="flex items-center justify-between">
                      <p>
                        {index + 1} . {location.name}
                      </p>
                      <span
                        onClick={() => {
                          removeLocation(index)
                        }}
                      >
                        <FontAwesomeIcon
                          icon={solid('circle-minus')}
                          size="lg"
                          className="text-red-300 cursor-pointer hover:text-red-500"
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
    </div>
  )
}
