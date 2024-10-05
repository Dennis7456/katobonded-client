import React, { useState } from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import EmptyPhoto from '../../assets/blank-profile.svg'

const MyPackageDetails: React.FC = () => {
  const [isAcceptQuoteModalOpen, setIsAcceptQuoteModalOpen] = useState(false)
  const [isRejectQuoteModalOpen, setIsRejectQuoteModalOpen] = useState(false)
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)
  const [isMessageSentModalOpen, setIsMessageSentModalOpen] = useState(true)

  return (
    <div>
      {/* Quote Modal */}
      {isAcceptQuoteModalOpen ? (
        <div className="z-40 modal-bg">
          <div className="bg-white absolute top-[25%] left-[27.5%] border-[2px] border-green-500">
            <div className="flex justify-start items-center gap-[10px] px-[25px] py-[25px] bg-green-100 border-b-[2px] border-green-500">
              <FontAwesomeIcon
                icon={solid('circle-check')}
                size="xl"
                className="text-green-500"
              />
              <h2 className="text-xl text-green-500 uppercase tracking-wider">
                Success
              </h2>
            </div>
            <div className="flex flex-col gap-[30px] px-[30px] py-[20px]">
              <div className="max-w-[500px]">
                <p className="text-center">
                  You’ve accepted Kunguru Safaris quote for ‘3 days Samburu
                  camping safari’ at $ 3,890 USD
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <button className="bg-orange-500 text-white py-[10px] rounded-md">
                  Proceed to Pay
                </button>
                <button className="bg-gray-200 text-gray-900 py-[10px] rounded-md">
                  Pay Later
                </button>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-center">Didn’t mean to accept quote?</p>
                <button
                  className="bg-white text-gray-900 py-[10px] rounded-md border-[2px]"
                  onClick={() => {
                    setIsAcceptQuoteModalOpen(false)
                  }}
                >
                  Undo Action
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Reject Modal */}
      {isRejectQuoteModalOpen ? (
        <div className="z-40 modal-bg">
          <div className="bg-white absolute top-[5%] left-[27.5%] border-[2px] border-yello-500 overflow-hidden">
            <div className="flex justify-start items-center gap-[10px] px-[25px] py-[25px] bg-yellow-100 border-b-[2px] border-yellow-500">
              {/* <FontAwesomeIcon icon={solid("circle-check")} size='xl' className='text-green-500'/> */}
              <h2 className="text-xl text-yellow-500 uppercase tracking-wider">
                Confirm Action
              </h2>
            </div>
            <div className="flex flex-col gap-[30px] px-[30px] py-[10px]">
              <div className="max-w-[500px]">
                <p className="text-left">
                  You’ve rejected Kunguru Safaris quote for ‘3 days Samburu
                  camping safari’
                </p>
              </div>
              {/* Radio buttons */}
              <div className="flex flex-col">
                <div className="flex flex-col gap-[10px]">
                  <label
                    className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through"
                  >
                    <input
                      type="radio"
                      name="option"
                      value="Option 1"
                      className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-500
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
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                    />
                    The quote exceeds my budget
                  </label>
                  <label
                    className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through"
                  >
                    <input
                      type="radio"
                      name="option"
                      value="Option 1"
                      className="
                peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px]
                border-orange-500
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
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                    />
                    I do not want to receive qoutations from Kunguru Safaris
                  </label>
                  <label
                    className="
                    flex 
                    justify-start 
                    items-center 
                    gap-[5px] 
                    cursor-pointer 
                    font-medium 
                    text-orange-500 
                    peer-checked:text-orange-500 
                    peer-checked:line-through
                    "
                  >
                    <input
                      type="radio"
                      name="option"
                      value="Option 2"
                      className="
                        peer 
                relative 
                h-5 
                w-5 
                shrink-0 
                appearance-none 
                rounded-sm 
                border-[2px] 
                border-orange-500
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
               ring-transparent
              hover:ring 
               hover:ring-[#F3533D]
              focus:outline-none"
                    />
                    Other reason
                  </label>
                </div>
              </div>
              <textarea
                placeholder="Enter Message"
                className="
                    px-[15px] 
                    py-[15px] 
                    h-[100px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
              ></textarea>

              <div className="flex flex-col gap-[10px]">
                <button className="bg-orange-500 text-white py-[10px] rounded-md">
                  Proceed to Pay
                </button>
                {/* <button className='bg-gray-200 text-gray-900 py-[10px] rounded-md'>Pay Later</button> */}
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-center">Didn’t mean to accept quote?</p>
                <button
                  className="bg-white text-gray-900 py-[10px] rounded-md border-[2px]"
                  onClick={() => {
                    setIsRejectQuoteModalOpen(false)
                  }}
                >
                  Undo Action
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Question Modal */}
      {isQuestionModalOpen ? (
        <div className="z-40 modal-bg">
          <div className="bg-white absolute top-[5%] left-[27.5%] border-[2px] border-gray-500">
            <div className="flex justify-between items-center gap-[10px] px-[25px] py-[25px] bg-gray-100 border-b-[2px] border-gray-500">
              <h2 className="text-xl text-gray-500 uppercase tracking-wider">
                Send message to Operator
              </h2>
              <FontAwesomeIcon
                icon={solid('xmark')}
                size="lg"
                className="text-gray-400 cursor-pointer"
                onClick={() => {
                  setIsQuestionModalOpen(false)
                }}
              />
            </div>
            <div className="flex flex-col gap-[10px] px-[30px] py-[20px]">
              <div className="max-w-[500px]">
                <p className="text-center">
                  Leave your details and message below so that Ndovu Safaris can
                  contact you with a response.
                </p>
              </div>
              <div className="grid gap-[10px] mt-[5px]">
                <label htmlFor="firstName text-center">
                  Name of Person Booking<span className="m-[5px]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-[20px]">
                  <input
                    placeholder="First name"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none
                    cols-span-1"
                  />
                  <input
                    placeholder="Surname"
                    className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none
                    col-span-1"
                  />
                </div>
              </div>

              <div className="grid gap-[10px] mt-[5px]">
                <div className="grid grid-cols-2 gap-[20px]">
                  <div className="col-span-1 flex flex-col gap-[10px]">
                    <label htmlFor="firstName text-center">
                      Email<span className="m-[5px]">*</span>
                    </label>
                    <input
                      placeholder="Email"
                      className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none
                    cols-span-1"
                    />
                  </div>
                  <div className="col-span-1 flex flex-col gap-[10px]">
                    <label htmlFor="firstName text-center">Phone</label>
                    <input
                      placeholder="Phone"
                      className="
                    px-[15px] 
                    py-[15px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none
                    cols-span-1"
                    />
                  </div>
                </div>
              </div>
              <textarea
                placeholder="Enter Message"
                className="
                    mt-[20px]
                    px-[15px] 
                    py-[15px] 
                    h-[100px] 
                    border-gray-400 
                    border-[1px] 
                    rounded-[3px] 
                    text-gray-400 
                    focus:border-gray-500 
                    focus:outline-none"
              ></textarea>
              <div className="flex flex-col gap-[10px] mt-[10px]">
                <button className="bg-orange-500 text-white py-[10px] rounded-md">
                  Send Message
                </button>
              </div>
              {/* <div className='flex flex-col gap-[10px]'>
              <p className='text-center'>Didn’t mean to accept quote?</p>
              <button className='bg-white text-gray-900 py-[10px] rounded-md border-[2px]' onClick={() => {setIsAcceptQuoteModalOpen(false)}}>Undo Action</button>
            </div> */}
            </div>
          </div>
        </div>
      ) : null}

      {/* Message Sent Modal */}
      {isMessageSentModalOpen ? (
        <div className="z-40 modal-bg">
          <div className="bg-white absolute top-[25%] left-[27.5%] border-[2px] border-green-500">
            <div className="flex justify-start items-center gap-[10px] px-[25px] py-[25px] bg-green-100 border-b-[2px] border-green-500">
              <FontAwesomeIcon
                icon={solid('circle-check')}
                size="xl"
                className="text-green-500"
              />
              <h2 className="text-xl text-green-500 uppercase tracking-wider">
                Success: Message Sent
              </h2>
            </div>
            <div className="flex flex-col gap-[30px] px-[30px] py-[20px]">
              <div className="max-w-[500px]">
                <p className="text-center">
                  Ndovu Safaris will review your comments and send a response to
                  your email.
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <button className="bg-orange-500 text-white py-[10px] rounded-md">
                  Close and Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Header />

      {/* Breadcrumb */}
      <div className="py-[20px] px-[75px] grid gap-[20px] mt-[80px] bg-gray-50">
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
      <div className="border-t-[3px] border-b-[3px] bg-white">
        <div className="px-[75px] gap-[20px] flex">
          <p className="text-orange-500 border-b-[3px] border-orange-500 text-lg tracking-wider py-[10px]">
            Overview
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start py-[20px] px-[75px] gap-[20px] bg-gray-50">
        <div className="bg-white px-[35px] py-[55px] shadow-sm w-[900px]">
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
        <div className="flex flex-col gap-[40px]">
          <div className="bg-white shadow-sm">
            <div className="px-[20px] py-[20px] flex justify-start items-center gap-[15px]">
              <h2 className="text-orange-500 text-2xl font-semibold tracking-wide">
                $3,890
              </h2>
              <h2 className="text-orange-500 text-2xl font-semibold tracking-wide">
                USD
              </h2>
            </div>
            <div className="px-[20px] py-[20px] flex flex-col gap-[15px] justify-center items-center">
              <button
                className="bg-orange-500 px-[100px] py-[12px] rounded-sm text-white hover:opacity-80"
                onClick={() => {
                  setIsAcceptQuoteModalOpen(true)
                }}
              >
                Accept Quote
              </button>
              <button
                className="bg-gray-300 px-[100px] py-[12px] rounded-sm text-gray-900 hover:opacity-80"
                onClick={() => {
                  setIsRejectQuoteModalOpen(true)
                }}
              >
                Reject Quote
              </button>
              <p className="tracking-wider">Have Questions?</p>
              <button
                className="bg-white border-gray-300 border-[2px] px-[100px] py-[12px] rounded-sm text-gray-900 hover:opacity-80"
                onClick={() => {
                  setIsQuestionModalOpen(true)
                }}
              >
                Reject Quote
              </button>
            </div>
          </div>

          <div className=" shadow-sm bg-white ">
            <div className="flex justify-center items-center py-[25px]">
              <img src={EmptyPhoto} />
            </div>
            <div className="flex justify-start items-start border-t-2 px-[20px] py-[25px] gap-[25px]">
              <div className="text-gray-400 tracking-wide">Offered By:</div>
              <div className="grid gap-3">
                <div className="text-gray-400 tracking-wider">
                  Kunguru Safaris
                </div>
                <div className="flex gap-2">
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400"
                    />
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={solid('star')}
                      size="lg"
                      className="text-orange-400"
                    />
                  </span>
                  <p className="text-gray-400 font-light">(800 Reviews)</p>
                </div>
                <div className="text-[#F3533D] underline underline-offset-4">
                  View Profile
                </div>
              </div>
            </div>

            {/* Customer Review */}
            <div className="border-t-2 px-2">
              <h2 className="mx-[5px] my-[20px] text-gray-400 tracking-wider">
                Customer Reviews:
              </h2>
              <div className="border px-[35px] py-[30px] mx-[20px] bg-gray-50 mb-[20px]">
                <div className="flex justify-start items-center gap-4">
                  <div>
                    <img src={EmptyPhoto} alt="profile image"></img>
                  </div>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-gray-400">Reviewed: 12 Aug, 2020</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-[20px]">
                  <div className="text-lg tracking-wider font-light text-gray-400">
                    &quot;Amazing!&quot;
                  </div>
                  <div className="flex gap-2 opacity-70">
                    <span>
                      <FontAwesomeIcon
                        icon={solid('star')}
                        size="lg"
                        className="text-orange-400"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={solid('star')}
                        size="lg"
                        className="text-orange-400"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={solid('star')}
                        size="lg"
                        className="text-orange-400"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={solid('star')}
                        size="lg"
                        className="text-orange-400"
                      />
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={solid('star')}
                        size="lg"
                        className="text-orange-400"
                      />
                    </span>
                  </div>
                  <p className="text-lg tracking font-light text-gray-400 max-w-[450px]">
                    Elit in aliquet porttitor sed lectus turpis aliquet eu
                    viverra. Metus bibendum netus velit elit porta pharetra et
                    egestas! ...
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mx-[5px] my-[35px]">
                <div className="cursor-pointer">
                  <FontAwesomeIcon icon={solid('chevron-left')} size="lg" />
                </div>
                <p className="text-gray-400 tracking-wide">1/5</p>
                <div className="cursor-pointer">
                  <FontAwesomeIcon icon={solid('chevron-right')} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyPackageDetails
