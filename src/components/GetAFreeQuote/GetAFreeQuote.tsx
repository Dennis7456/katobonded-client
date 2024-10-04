import React from 'react'
import Header from 'src/stories/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Elephants from '../../assets/ElephantsImage.jpeg'
import EmptyImage from '../../assets/blank-profile.svg'
import { DateComponent } from 'src/stories/CreateYourTrip/DateComponent'
import Travellers from '../Travellers/Travellers'

const GetAFreeQuote: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="my-[100px] py-[35px] px-[105px] bg-gray-50">
        {/* Breadcrumb */}
        <div className="">
          <nav className="text-gray-900 mb-6 font-semibold flex justify-start items-center gap-[20px]">
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">Back to Tour</span>
          </nav>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-3 gap-[10px]">
          {/* Middle Section */}
          <div className="col-span-2 grid gap-[15px]">
            {/* Card */}
            <div className="shadow-md bg-white flex">
              <div>
                <img
                  src={Elephants}
                  alt="elephant photo"
                  className="h-full w-[300px] object-cover"
                />
              </div>
              <div className="px-[65px] py-[20px]">
                <h2 className="text-lg text-gray-900 tracking-wide">
                  3 Days Maasai Mara Camping Safari
                </h2>
                <div className="flex justify-start items-center">
                  <p className="text-lg font-semibold">$ 1,850 </p>
                  <p className="mx-[5px] text-sm text-gray-400">/</p>
                  <p className="text-sm text-gray-400">Person Sharing</p>
                </div>
                <div className="grid gap-[10px] mt-[20px]">
                  <p>By: Kunguru Safaris</p>
                  <div className="flex justify-start items-center gap-[10px]">
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                    <FontAwesomeIcon
                      icon={solid('star')}
                      className="text-orange-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <img src={EmptyImage} />
              </div>
              <div></div>
            </div>

            {/* Form */}
            <div className="shadow-md bg-white px-[55px] py-[45px]">
              <h1 className="uppercase tracking-wider text-gray-900 font-semibold">
                Get A Free Quote For This Tour
              </h1>

              <div className="grid gap-[10px] mt-[35px]">
                <label htmlFor="firstName text-center">
                  Name of Person Booking<span className="m-[5px]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-[20px]">
                  <input
                    placeholder="First name"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                  <input
                    placeholder="Middle name"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                  <input
                    placeholder="Surname"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">
                    Email<span className="m-[5px]">*</span>
                  </label>
                  <input
                    placeholder="Email"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Phone</label>
                  <input
                    placeholder="Phone"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">
                    Country of Residence<span className="m-[5px]">*</span>
                  </label>
                  <input
                    placeholder="Email"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                </div>
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Nationality</label>
                  <input
                    placeholder="Phone"
                    className="px-[15px] py-[15px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-[20px] mt-[35px]">
                <div className="grid gap-[10px]">
                  <label htmlFor="firstName text-center">Your Message</label>
                  <textarea
                    placeholder="Enter Message"
                    className="px-[15px] py-[15px] h-[250px] border-gray-400 border-[2px] rounded-[3px] text-gray-400 focus:border-gray-500 focus:outline-none"
                  ></textarea>
                </div>
              </div>
              {/* Checkbox */}
              <div className="flex justify-center items-center ml-[px] mt-[35px] ">
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
              focus:outline-none"
                />
                <label
                  className="
              w-full 
              cursor-pointer 
              font-medium 
              text-orange-500 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                >
                  {' '}
                  My dates are flexible{' '}
                </label>
              </div>
              <div className="mt-[35px]">
                <button className="bg-orange-500 px-[35px] py-[10px] text-white rounded-md">
                  Submit Request
                </button>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="col-span-1 shadow-md bg-white px-[20px] py-[20px] flex flex-col justify-start items-start gap-[20px] h-[350px]">
            <h2 className="text-lg tracking-wide">Your Trip Details</h2>
            <DateComponent />
            {/* Checkbox */}
            <div className="flex justify-center items-center ml-[10px] mt-[10px] ">
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
              focus:outline-none"
              />
              <label
                className="
              w-full 
              cursor-pointer 
              font-medium 
              text-orange-500 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
              >
                {' '}
                My dates are flexible{' '}
              </label>
            </div>
            <Travellers />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetAFreeQuote
