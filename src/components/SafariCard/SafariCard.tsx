import React from 'react'
import './SafariCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import emptyProfile from '../../assets/blank-profile.svg'

interface SafariCardProps {
  title: string
  tourType: string
  price: string
  reviews: number
  image: string
  tags: string[]
  operator: string
  specialOffer?: string | null
}

const SafariCard: React.FC<SafariCardProps> = ({
  title,
  tourType,
  price,
  reviews,
  image,
  tags,
  operator,
  specialOffer,
}) => {
  return (
    <div className="rounded-sm p-[20px] z-0">
      <div className="relative rounded-sm over shadow-md">
        <img className="w-full h-48 object-cover " src={image} alt="Tour"></img>
        <div className="bg-yellow-500 absolute top-3 -right-2 text-xs px-[10px] py-[3px] font-semibold rounded-sm">
          {specialOffer}
        </div>
        {/* Slanted bottom div */}
        <div className="absolute bottom-0 left-0 w-full h-50 bg-white slanted text-black"></div>
        <div className="flex items-center justify-center absolute top-3/4 left-2 text-xs text-white gap-2 text-center opacity-80">
          {tags.map((tag, index) => (
            <div key={index} className="bg-gray-800 px-[5px] py-[1px] pb-[3px]">
              {tag}
            </div>
          ))}
        </div>
        <div className="absolute right-4 top-3/4 bg-white rounded-full p-2 shadow-md">
          <FontAwesomeIcon
            icon={solid('heart')}
            size="xl"
            className="like-style"
          />
        </div>
      </div>
      <div className="shadow-md text-[#F3533D] font-semibold text-left relative bg-white px-5 py-[5px] text-lg border-b-[2px]">
        {title}
      </div>
      <div className="flex justify-between px-3 py-4 text-[#F3533D] font-semibold text-left relative bg-white border-b-[2px] shadow-md">
        <div className="text-gray-900 px-3 max-w-[10px]">
          <div className="semi-bold">By: {operator}</div>
          <div className="font-light flex gap-3">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={solid('star')}
                size="sm"
                className="star-color text-[#F3533D]"
              />
              <FontAwesomeIcon
                icon={solid('star')}
                size="sm"
                className="star-color text-[#F3533D]"
              />
              <FontAwesomeIcon
                icon={solid('star')}
                size="sm"
                className="star-color text-[#F3533D]"
              />
              <FontAwesomeIcon
                icon={solid('star')}
                size="sm"
                className="star-color text-[#F3533D]"
              />
              <FontAwesomeIcon
                icon={solid('star')}
                size="sm"
                className="star-color text-[#F3533D]"
              />
            </div>
            <div className="text-sm">({reviews} Reviews)</div>
          </div>
        </div>
        <img
          src={emptyProfile}
          alt="empty image"
          className="max-w-[30px]"
        ></img>
      </div>
      <div className="text-left relative bg-white px-3 py-3 text-xs shadow-md">
        <div className="flex gap-1">
          <div className="text-green-500">✓</div>
          <div>Meals on full board basis</div>
        </div>
        <div className="flex gap-1">
          <div className="text-green-500">✓</div>
          <div>Children below 2 years stay free of charge</div>
        </div>
      </div>
      <div className="font-bold relative bg-white text-right px-3 py-3 shadow-md">
        <div className="text-lg">$ 2,170</div>
        <div className="text-xs font-light">per person sharing</div>
      </div>
    </div>

    //             {tags.map((tag, index) => (
    //                 <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
    //                     { tag }
    //                 </span>
    //             ))}
    //         </div>
    //         <div className="text-lg font-bold mb-2">${price}</div>
    //         <p className="text-sm text-green-500">✓ Meals on full board basis</p>
    //         <p className="text-sm text-green-500">✓ Children below 2 years stay free of charge</p>
    //     </div>
    // </div>
  )
}

export default SafariCard
