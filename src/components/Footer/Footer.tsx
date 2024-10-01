import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 h-[326px]">
      <div className="flex text-white justify-around items-center h-[250px] border-b-2">
        <div className="">
          <h3>Links</h3>
          <div className="flex flex-col underline py-[10px]">
            <a href="#" className="my-[5px]">
              Home
            </a>
            <a href="#" className="my-[5px]">
              Safaris & Tours
            </a>
            <a href="#" className="my-[5px]">
              Tour Operators
            </a>
            <a href="#" className="my-[5px]">
              KATO Main Website
            </a>
          </div>
        </div>
        <div className="">
          <h3>Contacts</h3>
          <div className="flex flex-col py-[10px]">
            <p className="my-[5px]">
              Tel: 2713386 / 2417864 / 2622961 / 2726517
            </p>
            <p className="my-[5px]">Fax: 020 2719226</p>
            <p className="my-[5px]">Cell: 0722 434845 / 0713 762076</p>
            <p className="my-[5px]">Email: info@kato.org</p>
          </div>
        </div>
        <div className="">
          <h3>Address</h3>
          <div className="flex flex-col py-[10px]">
            <p className="my-[5px]">Kenya Association of Tour Operators</p>
            <p className="my-[5px]">KATO Place,</p>
            <p className="my-[5px]">
              (Opposite Shelter Afrique Center) Upper Hill
            </p>
            <br></br>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-[65px] my-[25px]">
        <p className="text-gray-700">&copy; 2024 KATO. All rights reserved.</p>
        <p className="text-gray-700">
          Payments Powered by <a className="text-red-700 underline">Pesapal</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
