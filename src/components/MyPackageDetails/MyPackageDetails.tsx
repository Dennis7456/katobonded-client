import React from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const MyPackageDetails: React.FC = () => {
  return (
    <div>
      <Header />

      {/* Breadcrumb */}
      <div className="py-[20px] px-[75px] grid gap-[20px] mt-[80px]">
        <div className="">
          <nav className="text-gray-900 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-900">Safaris and Tours</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">3 days Samburu camping safari</span>
          </nav>
        </div>
      </div>

      {/* Top Section */}
      <div className="border-t-[3px] border-b-[3px]">
        <div className="px-[75px] gap-[20px] flex">
          <p className="text-orange-500 border-b-[3px] border-orange-500 text-lg tracking-wider py-[10px]">
            Overview
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start py-[20px] px-[75px] gap-[20px]">
        <div className="bg-red-500 px-[35px] py-[55px] shadow-sm">
          <h2 className="text-gray-700 text-xl tracking-wider font-semibold">
            7 Days Beach Holiday
          </h2>
          <h3>Day 1:</h3>
          <p>Arrive to the Tropical Island of Zanzibar</p>
          <p>
            Arrival at Zanzibar Airport Representative accompanies guests to
            Breezes Beach Club & Spa Settle down in your comfortable rooms to
            start planning your trip
          </p>
          <h3>Days 2-6</h3>
          <p>Let the Fun in the Sun Begin</p>
          <p>
            Breezes Beach Club & Spa, present on the picturesque stretch of
            powdered white sands overlooks the majestic cobalt blue sea. The
            beach is perfect for various different activities such as:
          </p>
          <ul>
            <li>Snorkeling</li>
            <li>Scuba Diving</li>
            <li>Pedal Boats</li>
            <li>Sailing</li>
            <li>Beach Volleyball</li>
          </ul>
          <p>
            When you feel like you have had enough of the sea and sand, you can
            relax besides the hotel pool. On day two, we arrange for our
            visitors a half day tour of the gorgeous Jozani Forest of Chwaka Bay
            National Park. Jozani Forest is one of the few remaining habitats of
            the red Colobus Monkeys, Sykes Monkeys and numerous species of birds
            and butterflies.
            <p>
              Cultural aficionados will be excited to know that on the third day
              we will take guests on a tour to the historic Stone Town,
              following which tourists will spend the evening looking at the
              orange and red hues of the setting sun on our exclusive cruise. Be
              sure to include spa treatments on your bucket list. Spas in
              Zanzibar have the best services to offer, which you cannot miss
              once there.
            </p>
            <h3>Day 7:</h3>
            <p>Depart For Home with Numerous Memories</p>
            <ul>
              <li>Pick Up From Breezes Beach Club & Spa</li>
              <li>Drop At Zanzibar Airport</li>
              <li>Fly Off Home</li>
            </ul>
          </p>
        </div>
        <div className="bg-blue-500">
          <div className="px-[20px] py-[20px] flex justify-start items-center gap-[15px]">
            <h2 className="text-orange-500 text-lg font-semibold tracking-wide">
              $3,890
            </h2>
            <h2 className="text-orange-500 text-lg font-semibold tracking-wide">
              USD
            </h2>
          </div>
          <div>
            <button>Accept Quote</button>
            <button>Reject Quote</button>
            <div>Have Questions?</div>
            <button>Reject Quote</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyPackageDetails
