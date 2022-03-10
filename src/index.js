import React from 'react';
import ReactDOM from 'react-dom';

import TLogo from "./images/TurnersCarLogo.png"
import Phone from "./images/Phone.png"
import Login from './images/User.png'
import umbrella from './images/Umbrella.png'
import puzzled from './images/Puzzled.png'
import crashed from './images/Crashed Car.png'
import speech from './images/Communication.png'



import './grid.css'
import './style.css'

export default function App(){
  function chatlink(e) {
    console.log("hello world")
  }

  return (
    <>
      <div className = "main-grid">
        
        <div className='grid-item' id="header">
          <div className = "nav-container">
              <img src={TLogo} className="turners-logo"/>
              <img src={Login} className="nav-icon"/>
              <img src={Phone} className="nav-icon"/>
          </div>
        </div>
        <div className='grid-item' id = "main-section">

          <button className = "buy-button">BUY</button>
          <br></br>
          <button className = "quote-button">QUOTE GENERATOR</button>
        
        </div>
        <div className='grid-item'>
          <div className = "footer-grid" id="footer">
            <div className='footer-grid-item'> 
              <img src={umbrella} className="footer-grid-image"></img>
              <p className='footer-text'><u>Coverage we offer</u></p>  
            </div>
            <div className='footer-grid-item'>
                <img src = {puzzled} className="footer-grid-image"></img>
               <p className='footer-text'> <u>Common questions</u></p> 
            </div>
            <div className='footer-grid-item'> 
              <img src = {crashed} className="footer-grid-image"></img>
              <p className='footer-text'><u>Make a claim</u></p> 
            </div>
          </div>
      
        </div>

      </div>
      <div className='botButton' onClick={chatlink}>
         <p className='botButton-text'> ASK ME</p>
         <img src = {speech} className="botButton-image"/>
      </div>
    </>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
