import React from 'react'

export const TopTours: React.FC = () => {
  const getaways = [
    {
      title: 'Safari Getaways',
      offers: [
        {
          background: './assets/offers/image0.svg',
          title: '3 Days Amboseli Camping Safari',
          liked: true,
          by: 'Twiga Safaris',
          rating: 4,
          reviewCount: 200,
          price: 2170,
          details: [
            'Meals on full board basis',
            'Children below 2 years stay free of charge',
          ],
        },
        {
          background: './assets/offers/image1.svg',
          title: '3 Days Samburu Camping Safari',
          liked: true,
          by: 'Twiga Safaris',
          rating: 4,
          reviewCount: 800,
          price: 2170,
          details: [
            'Meals on full board basis',
            'Children below 2 years stay free of charge',
          ],
        },
        {
          background: './assets/offers/image2.svg',
          title: '3 Days Maasai Mara Camping Safari',
          liked: true,
          by: 'Twiga Safaris',
          rating: 4,
          reviewCount: 800,
          price: 2170,
          details: [
            'Meals on full board basis',
            'Children below 2 years stay free of charge',
          ],
        },
      ],
      active: true,
    },
    {
      title: 'Honeymoon Getaways',
      offers: [],
      active: false,
    },
    {
      title: 'Beach Getaways',
      offers: [],
      active: false,
    },
    {
      title: 'Adventure Getaways',
      offers: [],
      active: false,
    },
  ]
  return (
    <div className="">
      <div className="text-[25px] text-gray-400 text-center">Top Tours</div>
      <div className="flex items-center justify-center gap-[20px] pt-[35px]">
        {getaways.map((getaway, index) => (
          <div key={index}>{getaway.title}</div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-[20px]">
        {getaways.map((getaway, index) => (
          <div key={index}>
            {getaway.active
              ? getaway.offers.map((offer, index) => (
                  <div key={index}>{offer.title}</div>
                ))
              : ''}
          </div>
        ))}
        <div>Offer 1</div>
        <div>Offer 1</div>
        <div>Offer 1</div>
        <div>Offer 1</div>
      </div>
      {/* <div className='flex items-center justify-center gap-[30px]'>
                { getaways.map((getaway, index) => (
                <div key={index}>
                    <div key={index} className={`${getaway.active ? 'text-white inline-block bg-gray-700 p-[2px] px-[10px] rounded-[20px]' : 'text-gray-400'}`}>
                    {getaway.title}
                </div>
                </div>
            ))}
            </div> */}
      {/* <div className='flex items-start gap-[50px] relative pt-[20px]'>
                text
                </div> */}
    </div>
  )
}
