import React, { useState, useEffect } from 'react'
import './RangeSlider.css'

interface RangeSliderProps {
  title: string
  min: number
  max: number
}

const RangeSlider: React.FC<RangeSliderProps> = ({ title, min, max }) => {
  const [minPrice, setMinPrice] = useState<number>(min)
  const [maxPrice, setMaxPrice] = useState<number>(max)
  const [minThumb, setMinThumb] = useState<number>(0)
  const [maxThumb, setMaxThumb] = useState<number>(100)

  const validateValues = (): void => {
    if (minPrice > max) setMinPrice(max - 500)
    if (minPrice < min) setMinPrice(min)

    if (maxPrice > max) setMaxPrice(max)
    if (maxPrice < min) setMaxPrice(min + 200)
  }

  const handleMinTrigger = (): void => {
    validateValues()
    setMinPrice((prev) => Math.min(prev, maxPrice - 500))
    setMinThumb(((minPrice - min) / (max - min)) * 100)
  }

  const handleMaxTrigger = (): void => {
    validateValues()
    setMaxPrice((prev) => Math.max(prev, minPrice + 200))
    setMaxThumb(100 - ((maxPrice - min) / (max - min)) * 100)
  }

  const getStep = (max: number): number => {
    if (max > 1000) {
      return 100
    } else if (max > 100) {
      return 10
    } else if (max > 20) {
      return 2
    } else {
      return 1
    }
  }

  const step = getStep(max)

  useEffect(() => {
    handleMinTrigger()
    handleMaxTrigger()
  }, [minPrice, maxPrice])

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="block text-sm text-gray-900 mb-6 font-semibold">
        {title}
      </label>
      <div className="relative max-w-xl w-full">
        <input
          type="range"
          step="100"
          min={min}
          max={max}
          value={minPrice}
          onChange={(e) => {
            setMinPrice(parseInt(e.target.value))
          }}
          className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          step={step}
          min={min}
          max={max}
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(parseInt(e.target.value))
          }}
          className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        />
        <div className="relative z-10 h-1 w-[350px]">
          <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
          <div
            className="absolute z-20 top-0 bottom-0 rounded-md bg-[#F3533D]"
            style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
          ></div>
          <div
            className="absolute z-30 w-6 h-6 top-0 left-0 bg-gray-300 p-2 shadow-xl rounded-full -mt-[10px]"
            style={{ left: `${minThumb}%` }}
          ></div>
          <div
            className="absolute z-30 w-6 h-6 top-0 right-0 bg-gray-300 p-2 shadow-xl rounded-full -mt-[10px]"
            style={{ right: `${maxThumb}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
          <input
            type="text"
            value={minPrice}
            maxLength={5}
            onChange={(e) => {
              setMinPrice(Number(e.target.value))
            }}
            className="w-24 px-3 py-2 text-center border border-none rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
          />
          <input
            type="text"
            value={maxPrice}
            maxLength={5}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value))
            }}
            className="w-24 px-3 py-2 text-center border border-none rounded-lg bg-white focus:border-yellow-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
