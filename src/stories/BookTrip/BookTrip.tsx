import React, { useState } from 'react'
import { Header } from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export const BookTrip: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('form1')

  const showForm = (tabId: string): void => {
    setActiveTab(tabId)
  }
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-start py-[25px] px-[170px]">
        <ul className="flex items-center gap-[55px] border-b-[3px] border-b-gray-300">
          <li
            className={`${
              activeTab === 'form1' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form1')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('compass')} size="lg" />
            </span>
            <h2 className="text-sm">1. DESTINATION</h2>
          </li>
          <li
            className={`${
              activeTab === 'form2' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form2')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('suitcase')} size="lg" />
            </span>
            <h2 className="text-sm">2. TRANSPORT</h2>
          </li>
          <li
            className={`${
              activeTab === 'form3' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form3')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('bed')} size="lg" />
            </span>
            <h2 className="text-sm">3. ACCOMMODATION</h2>
          </li>
          <li
            className={`${
              activeTab === 'form4' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form4')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('person-swimming')} size="lg" />
            </span>
            <h2 className="text-sm">4. ACTIVITIES</h2>
          </li>
          <li
            className={`${
              activeTab === 'form5' &&
              'border-b-[5px] border-b-[#F3533D] text-[#F3533D]'
            } text-gray-700 flex flex-col items-center justify-center p-[10px] px-[20px] cursor-pointer`}
            onClick={() => {
              showForm('form5')
            }}
          >
            <span className="pb-[5px]">
              <FontAwesomeIcon icon={solid('check')} size="lg" />
            </span>
            <h2 className="text-sm">5. COMPLETE</h2>
          </li>
        </ul>
        <br />
        <div className="flex items-start justify-center gap-[35px]">
          <div className="shadow-xl border flex flex-col px-[40px] py-[25px] max-w-xxl items-start justify-start">
            {activeTab === 'form1' && (
              <div>
                <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                  WHERE WOULD YOU LIKE TO GO?
                </div>
                <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                  <div className="border-b-[3px] border-gray-500 ">
                    <label className="text-xs">SELECT DESTINATION</label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[150px]"></input>
                      <div>icon</div>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs">DEPARTING</label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <div>icon</div>
                      <input className="w-[100px]"></input>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs">RETURNING</label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[100px]"></input>
                      <div>icon</div>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs">TRAVELLERS</label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[150px]"></input>
                      <div>icon</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <div></div>
            </div>
          </div>
          <div className="shadow-xl">summary</div>
        </div>
      </div>
      {/* Tabs navigation */}
      {/* <ul className='flex items-center justify-center gap-[55px] border-b-[3px] border-b-gray-300'>
            
        </ul>
        {/* <div className='flex items-start justify-start'>
            <div>Form</div>
            <div>Side bar</div>
        </div> */}
    </div>
  )
}
