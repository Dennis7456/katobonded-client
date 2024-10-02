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
        <div>
          {/* Middle Section */}
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
                tortor et nulla consectetur nec justo, felis. Feugiat imperdiet
                convallis integer elementum quisque. Diam volutpat tortor sed
                neque elementum integer ut tempus porta.{' '}
              </p>
            </div>
            <div className="shadow-md">
              <div className="text-white uppercase bg-orange-400 w-full text-center py-[25px]">
                Your adventure begins
              </div>
              <div className="relative">
                <img src={Elephants} className="h-[235px] w-full" />
                <span className="absolute left-[55px] top-[100px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                  <FontAwesomeIcon
                    icon={solid('chevron-left')}
                    size="lg"
                    className="text-gray-900"
                  />
                </span>
                <span className="absolute right-[55px] top-[100px] bg-gray-200 px-[8px] py-[3px] cursor-pointer">
                  <FontAwesomeIcon
                    icon={solid('chevron-right')}
                    size="lg"
                    className="text-gray-900"
                  />
                </span>
              </div>
              <div className="grid gap-[35px] px-[25px] py-[35px] ">
                <h2>1 Night in Location/Destination</h2>
                <p>
                  Description: Pretium, nunc, adipiscing pellentesque viverra
                  cursus at faucibus. Risus pellentesque montes, sit facilisis
                  lorem placerat ultricies donec dignissim. Praesent facilisi
                  iaculis gravida purus a, at eu risus nam. Lectus non eget
                  pharetra, eu, nibh condimentum. Dictumst lobortis nisl nunc,
                  ornare enim morbi pulvinar turpis. Eget elit est aliquet nunc
                  diam sollicitudin dis.
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

          {/* Side Section */}
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ViewCard
