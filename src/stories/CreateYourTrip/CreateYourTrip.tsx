import React from 'react'
import background from './assets/background.svg'

export const CreateYourTrip: React.FC = () => {
  return (
    <div>
      <div
        className="h-[420px] w-full relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form className="h-[340px] bg-[#ffffff] rounded-[5px] py-[35px] px-[70px]">
          <div className="flex flex-col items-start gap-[35px]">
            <div className="text-[25px]">Create Your Trip</div>
            <div className="flex items-center justify-center gap-[50px]">
              <div className="flex flex-col items-start gap-[10px]">
                <label className="text-[15px]">Select Destination(s)</label>
                <input
                  className="w-[348px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px]"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <label className="text-[15px]">Departing</label>
                <input
                  className="w-[162px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px]"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <label className="text-[15px]">Returning</label>
                <input
                  className="w-[162px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px]"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <label className="text-[15px]">Travellers</label>
                <input
                  className="w-[170px] h-[49px] border-[#E8E8ED] border-[2px] rounded-[3px]"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col items-start gap-[10px]">
                <br />
                <button className="w-[170px] h-[49px] bg-[#F3533D] rounded-[3px] text-white">
                  Create Trip
                </button>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[330px]">
              <div>Checkbox</div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[120px]">
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center justify-between gap-[10px] text-[2px]">
                <input
                  type="checkbox"
                  className="px-[20px] border-[#F3533D] border-[3px]"
                ></input>
                <label className="text-[15px]">I have exact dates</label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Default checkbox
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateYourTrip
