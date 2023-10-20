import React from 'react'
import './createyourtrip.css'
import locationicon from './location-icon.svg'
import calendaricon from './calendar-icon.svg'
// import usericon from './user-icon.svg'
// import arrowdropdown from './arrow-drop-down.svg'

export const CreateYourTrip: React.FC = () => {
  return (
    <div className="form">
      <div className="title">Create Your Trip</div>
      <div className="input-fields">
        <div>
          <h3>Select Destination(s)</h3>
          <div className="input-container">
            <input type="text" id="location" placeholder="Where to?" />
            <img src={locationicon} className="location-icon"></img>
          </div>
        </div>
        <h3>Departing</h3>
        <div className="input-container">
          <input type="text" id="date" placeholder="Fri, June 04" />
          <img src={calendaricon} className="calendar-icon"></img>
        </div>
        <h3>Returning</h3>
        <div className="input-container">
          <input type="text" id="date" placeholder="Mon, June 07" />
          <img src={calendaricon} className="calendar-icon"></img>
        </div>
        <h3>Travellers</h3>
        <div className="custom-select">
          <div className="select-wrapper">
            <select id="mySelect">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        {/* <div className='input-container'>
            
            <select id="date" value='none'>
                <option value="option1">2 Travellers</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <img src={usericon} className='user-icon'></img>
            <img src={arrowdropdown} className='arrow-drop-down'></img>
            </div> */}
      </div>
      <div className="checkboxes">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </div>
    </div>
  )
}
