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
            <h2 className="text-sm"> 1. DESTINATION </h2>
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
            <h2 className="text-sm"> 2. TRANSPORT </h2>
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
            <h2 className="text-sm"> 3. ACCOMMODATION </h2>
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
            <h2 className="text-sm"> 4. ACTIVITIES </h2>
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
            <h2 className="text-sm"> 5. COMPLETE </h2>
          </li>
        </ul>
        <br />
        <div className="flex items-start justify-center gap-[35px]">
          <div className="shadow-xl border flex flex-col  py-[] max-w-xxl items-start justify-center h-[300px] px-5 bg-red-500">
            {activeTab === 'form1' && (
              <div>
                <div className="border-b-[2px] border-gray-300 py-[10px] text-sm font-semibold w-full pb-[20px]">
                  WHERE WOULD YOU LIKE TO GO ?
                </div>
                <div className="flex items-center justify-center gap-[10px] pt-[35px]">
                  <div className="border-b-[3px] border-gray-500 ">
                    <label className="text-xs"> SELECT DESTINATION </label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[150px]"> </input>
                      <div> icon </div>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs"> DEPARTING </label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <div>icon </div>
                      <input className="w-[100px]"> </input>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs"> RETURNING </label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[100px]"> </input>
                      <div> icon </div>
                    </div>
                  </div>
                  <div className="border-b-[3px] border-gray-500">
                    <label className="text-xs"> TRAVELLERS </label>
                    <div className="flex items-center justify-center gap-[10px]">
                      <input className="w-[150px]"> </input>
                      <div> icon </div>
                    </div>
                  </div>
                </div>
                <div className="pt-[35px] flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    className="
peer
relative
h - 5
w - 5
shrink - 0
appearance - none
rounded - sm border
after: absolute
after: left - 0
after: top - 0
after: h - full
after: w - full
after: bg - [url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]
after: bg - [length: 40px]
after: bg - center
after: bg - no - repeat after: content - ['']
checked: bg - [#F3533D]
ring - gray - 300
hover: ring
hover: ring - [#F3533D]
focus: outline - none
"
                  />
                  <label
                    className="
w - full
cursor - pointer
font - medium text - gray - 700
peer - checked: text - gray - 500
peer - checked: line - through
pl - [10px]"
                  >
                    {' '}
                    View destination suggestions to extend your safari{' '}
                  </label>
                  <div className="absolute top-[100px]">
                    <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white">
                      {' '}
                      Continue{' '}
                    </button>
                  </div>

                  <div className="relative top-[150px] right-[30px]">
                    <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white">
                      {' '}
                      Continue{' '}
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div></div>
          </div>
          <div className="shadow-xl"> summary </div>
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
