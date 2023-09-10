import React from 'react'
import './Sign.css'
import { FaArrowRight } from "react-icons/fa";

function Sign() {
  return (
    <div className='form'>
        <div className="lefti">
            <form action="">
                <div className="topi">
                    <input className='text' type="email" placeholder='Enter your email here for our Newsletter' />
                    <div className="submit">
                    <input type="submit" value={"Sign Up"} id='sub' />
                    <FaArrowRight/></div>
                    
                </div>
            </form>
            <p  className='p'>By clicking Subscribe you’ll receive occasional emails from Spotify. You always have the choice to adjust your interest settings or unsubscribe.</p>
        </div>
        <div className="check">
            <ul className='ul'>
                <li className='li'>
            <input className='bo'type="checkbox" value={"News Alerts"} id='te' defaultChecked/>
            <label htmlFor="te">News Alerts</label></li>
            <li className='li'>
            <input className='bo' type="checkbox" value={"News"} id='we' defaultChecked />
            <label htmlFor="we">Weekly Roundup</label></li>
            
            </ul>
        </div>
        <div className="righti"><div className="anime">
          <span>Newswsletter    Newsletter    Newslettter    Newsletter </span>
         
 <span>Newsletter    Newslettter   Newsletter   Newsletter  </span></div> <div className="animer">
           <span>Newsletter   Newslettter    Newsletter   Newsletter </span>
          <span className='no'>Newsletter    Newslettter    Newsletter    Newsletter   Newsletter</span>
        
           </div>
    </div></div>
  )
}

export default Sign