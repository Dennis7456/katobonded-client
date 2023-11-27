import React, { useRef } from 'react'
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export const LocationCompnent: React.FC = () => {
  const inputRef = useRef<google.maps.places.SearchBox>()
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? ''

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

  return (
    <div className="flex flex-col items-start gap-[10px]">
      <label className="text-[15px] text-gray-600">Select Destination</label>
      <div className="relative">
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['places']}>
          <StandaloneSearchBox
            onLoad={(ref) => (inputRef.current = ref)}
            onPlacesChanged={handlePlaceChanged}
          >
            <input
              className="-translate-y-[0px] left-[100px] w-[348px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px] bg-gray-50 p-[10px] text-gray-700 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Where to?"
              type="text"
              required
            ></input>
          </StandaloneSearchBox>
        </LoadScript>
        <span className="absolute top-[13px] left-[300px] flex items-center pl-2">
          <FontAwesomeIcon
            icon={solid('location-dot')}
            size="lg"
            className="text-gray-500 pointer-events-none relative"
          />
        </span>
      </div>
    </div>
  )
}
