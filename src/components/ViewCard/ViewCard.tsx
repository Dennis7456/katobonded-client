import React from 'react'
import Header from 'src/stories/Header/Header'
import Footer from '../Footer/Footer'
import Giraffe from '../../assets/ViewCardImages/Giraffe.jpeg'
import Ballon from '../../assets/ViewCardImages/Balloon.jpeg'
import GameDrive from '../../assets/ViewCardImages/GameDrive.jpeg'
import Savannah from '../../assets/ViewCardImages/Savannah.jpeg'
import Lions from '../../assets/ViewCardImages/Lions.jpeg'
import { DateComponent } from 'src/stories/CreateYourTrip/DateComponent'
import Travellers from '../Travellers/Travellers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Elephants from '../../assets/ElephantsImage.jpeg'
import LeopardImage from '../../assets/LeopardImage.jpeg'
import Girrafe from '../../assets/Giraffe.jpeg'
import EmpytPhoto from '../../assets/blank-profile.svg'

const ViewCard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="mt-[120px] ml-[100px] mb-[35px]">
        <h1 className="text-3xl ml-[55px]">
          3 Days Maasai Mara camping safari
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-[20px]">
        <div>
          <img src={Giraffe} alt="Giraffe" />
        </div>
        <div className="grid grid-cols-2 gap-1 relative">
          <img src={Ballon} alt="Ballon" className="h-full w-full" />
          <img src={GameDrive} alt="GameDrive" className="h-full w-full" />
          <img src={Savannah} alt="Savannah" className="h-full w-full" />
          <img src={Lions} alt="Lions" className="h-full w-full" />
          <span className="absolute bottom-6 right-6 text-white px-[15px] py-[2px] bg-gray-900 rounded-2xl cursor-pointer hover:opacity-80">
            View All Photos
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mb-[20px] border-b-2 pb-[15px]">
        <div>
          <DateComponent />
        </div>
        <div className="flex justify-center items-end relative w-[580px]">
          <div>
            <Travellers />
          </div>
          <div className="absolute top-8 right-0">
            <button className="bg-[#F3533D] px-[25px] py-[13px] rounded-sm text-white">
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-md">
        <ul className="flex justify-start items-center mx-[165px] gap-[90px]">
          <li className="border-b-[4px] border-orange-500 py-[10px] px-[20px]">
            Itinerary
          </li>
          <li>Inclusions</li>
          <li>Gallery</li>
          <li>Offered By</li>
        </ul>
      </div>
      <div className="px-[145px] py-[35px] border">
        <div>
          {/* Breadcrumb */}
          <nav className="text-gray-900 mb-6 font-semibold flex justify-start items-center gap-[20px]">
            <span>Home</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">Safaris and Tours</span>
            <FontAwesomeIcon icon={solid('caret-right')} />
            <span className="text-gray-400">3 days Samburu camping safari</span>
          </nav>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-12 gap-4">
          {/* Middle Section */}
          <div className="col-span-7 px-[25px] py-[35px]">
            {/* Destination */}
            <div className=" grid gap-[30px]">
              <div className="px-[25px] py-[35px] shadow-md">
                <h2 className="text-xl font-semibold mb-[35px]">
                  What To Expect
                </h2>
                <p>
                  Nulla turpis magna blandit diam nulla cras gravida. Sed
                  convallis ac eget egestas arcu sagittis, at. Semper facilisi
                  nibh vulputate posuere accumsan. Fringilla tristique cras eu
                  varius pellentesque lectus massa aliquet. Vitae ultrices id
                  volutpat tellus consectetur mauris imperdiet urna. Orci ipsum,
                  tortor et nulla consectetur nec justo, felis. Feugiat
                  imperdiet convallis integer elementum quisque. Diam volutpat
                  tortor sed neque elementum integer ut tempus porta.{' '}
                </p>
              </div>
              <div className="shadow-md">
                <div className="text-white uppercase bg-orange-400 w-full text-center py-[25px] tracking-wider">
                  Your adventure begins
                </div>
                <div className="relative">
                  <img src={Elephants} className="h-[435px] w-full" />
                  <span className="absolute left-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-left')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                  <span className="absolute right-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-right')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                </div>
                <div className="grid gap-[35px] px-[25px] py-[35px] ">
                  <h2 className="text-lg tracking-wider font-semibold">
                    1 Night in Location/Destination
                  </h2>
                  <p>
                    Description: Pretium, nunc, adipiscing pellentesque viverra
                    cursus at faucibus. Risus pellentesque montes, sit facilisis
                    lorem placerat ultricies donec dignissim. Praesent facilisi
                    iaculis gravida purus a, at eu risus nam. Lectus non eget
                    pharetra, eu, nibh condimentum. Dictumst lobortis nisl nunc,
                    ornare enim morbi pulvinar turpis. Eget elit est aliquet
                    nunc diam sollicitudin dis.
                  </p>
                  <div className="grid gap-[7px]">
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Accommodation: </span>
                      <p>Lorem ipsum</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Meals: </span>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid Section */}
            <div className="flex flex-col justify-center items-center">
              <div className="h-[35px] bg-orange-400 w-[2px]"></div>
              <p className="text-center uppercase tracking-wide text-sm my-[10px]">
                Day 2: Continue your journey to...
              </p>
              <div className="h-[35px] bg-orange-400 w-[2px]"></div>
            </div>

            {/* Destination */}
            <div className=" grid gap-[30px]">
              <div className="shadow-md">
                <div className="relative">
                  <img src={LeopardImage} className="h-[435px] w-full" />
                  <span className="absolute left-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-left')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                  <span className="absolute right-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-right')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                </div>
                <div className="grid gap-[35px] px-[25px] py-[35px] ">
                  <h2 className="text-lg tracking-wider font-semibold">
                    2 Night in Location/Destination
                  </h2>
                  <p>
                    Description: Pretium, nunc, adipiscing pellentesque viverra
                    cursus at faucibus. Risus pellentesque montes, sit facilisis
                    lorem placerat ultricies donec dignissim. Praesent facilisi
                    iaculis gravida purus a, at eu risus nam. Lectus non eget
                    pharetra, eu, nibh condimentum. Dictumst lobortis nisl nunc,
                    ornare enim morbi pulvinar turpis. Eget elit est aliquet
                    nunc diam sollicitudin dis.
                  </p>
                  <div className="grid gap-[7px]">
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Accommodation: </span>
                      <p>Lorem ipsum</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Meals: </span>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid Section */}
            <div className="flex flex-col justify-center items-center">
              <div className="h-[35px] bg-orange-400 w-[2px]"></div>
              <p className="text-center uppercase tracking-wide text-sm my-[10px]">
                Day 4: Continue your journey to...
              </p>
              <div className="h-[35px] bg-orange-400 w-[2px]"></div>
            </div>

            {/* Destination */}
            <div className=" grid gap-[30px]">
              <div className="shadow-md">
                <div className="relative">
                  <img src={Girrafe} className="h-[435px] w-full" />
                  <span className="absolute left-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-left')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                  <span className="absolute right-[55px] top-[200px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                    <FontAwesomeIcon
                      icon={solid('chevron-right')}
                      size="lg"
                      className="text-gray-900"
                    />
                  </span>
                </div>
                <div className="grid gap-[35px] px-[25px] py-[35px] ">
                  <h2 className="text-lg tracking-wider font-semibold">
                    2 Night in Location/Destination
                  </h2>
                  <p>
                    Description: Pretium, nunc, adipiscing pellentesque viverra
                    cursus at faucibus. Risus pellentesque montes, sit facilisis
                    lorem placerat ultricies donec dignissim. Praesent facilisi
                    iaculis gravida purus a, at eu risus nam. Lectus non eget
                    pharetra, eu, nibh condimentum. Dictumst lobortis nisl nunc,
                    ornare enim morbi pulvinar turpis. Eget elit est aliquet
                    nunc diam sollicitudin dis.
                  </p>
                  <div className="grid gap-[7px]">
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Accommodation: </span>
                      <p>Lorem ipsum</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <span className="font-semibold">Meals: </span>
                      <p>Lorem ipsum</p>
                    </div>
                  </div>
                </div>
                <div className="text-white uppercase bg-orange-400 w-full text-center py-[25px] tracking-wider">
                  You have reached the end of your adventure
                </div>
              </div>
            </div>
          </div>

          {/* Side Section */}
          <div className="col-span-5">
            {/* Price */}
            <div className="px-[35px] py-[20px] flex justify-start items-center gap-[10px] bg-gray-50">
              <h2 className="text-lg font-semibold">$ 3,890 USD</h2>
              <p className="text-gray-400">/</p>
              <p className="text-gray-400">Person Sharing</p>
            </div>

            {/* Request a Quote */}
            <div className="shadow-md px-[20px] py-[25px] grid gap-[20px]">
              <h2 className="text-lg tracking-wider pl-[35px]">
                Request A Quote
              </h2>
              <DateComponent />

              {/* Checkbox */}
              <div className="flex justify-center items-center ml-[40px] mt-[10px]">
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
              font-medium text-gray-700 
              peer-checked:text-gray-500 
              peer-checked:line-through
              pl-[10px]
              "
                >
                  {' '}
                  My dates are flexible{' '}
                </label>
              </div>

              {/* Travellers */}
              <div className="ml-[40px] mt-[10px]">
                <Travellers />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center items-center mt-[35px] bg-[#F3533D] text-white rounded-sm py-[15px] font-semibold hover:opacity-90 cursor-pointer">
                <button>Get A Free Quote</button>
              </div>
            </div>
            <div className="mt-[20px] shadow-md">
              <div className="flex justify-center items-center py-[25px]">
                <img src={EmpytPhoto} />
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
              <div className="border-t-2 pb-2">
                <h2 className="mx-[35px] my-[20px] text-gray-400 tracking-wider">
                  Customer Reviews:
                </h2>
                <div className="border px-[35px] py-[30px] mx-[20px] bg-gray-50 mb-[20px]">
                  <div className="flex justify-start items-center gap-4">
                    <div>
                      <img src={EmpytPhoto} alt="profile image"></img>
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
                    <p className="text-lg tracking-wider font-light text-gray-400">
                      Elit in aliquet porttitor sed lectus turpis aliquet eu
                      viverra. Metus bibendum netus velit elit porta pharetra et
                      egestas! ...
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mx-[55px] my-[35px]">
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
      </div>
      <Footer />
    </div>
  )
}

export default ViewCard
