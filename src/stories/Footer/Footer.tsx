import React from 'react'
import './styles.css'

export const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <h3>Links</h3>
          <br />
          <div className="frame">
            <div className="text-wrapper">
              <a href="#">Home</a>
            </div>
            <br />
            <div className="text-wrapper">
              <a href="#">Safaris &amp; Tours</a>
            </div>
            <br />
            <div className="text-wrapper">
              <a href="#">Tour Operators</a>
            </div>
            <br />
            <div className="text-wrapper">
              <a href="#">KATO Main Website</a>
            </div>
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <br />
          <div className="frame2">
            <p className="text-wrapper">
              Tel : 2713386 / 2417864 / 2622961 / 2726517
              <br />
              <br />
              Fax : 020 2719226
              <br />
              <br />
              Cell : 0722 434845 / 0713 762076
              <br />
              <br />
              Email : info@katokenya.com
            </p>
          </div>
        </div>
        <div>
          <h3>Address</h3>
          <br />
          <div className="frame3">
            <p className="text-wrapper">
              Kenya Association of Tour Operators
              <br />
              <br />
              KATO Place,
              <br />
              <br />
              (Opposite Shelter Afrique Centre) Upper Hill Kenya
            </p>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div>© 2020 KATO. All rights reserved.</div>
        <br />
        <br />
        <div>
          Payments Powered by <a href="#">Pesapal</a>
        </div>
      </div>
    </div>
  )
}
