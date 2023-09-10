import React from 'react'
import logo from './spoti.png'
import {FaSistrix} from 'react-icons/fa'
import './Header.css'
import {FaBars} from 'react-icons/fa'


function Header() {
  return (
    <div className='head'> 
    <div className='image'><img src={logo} alt="logo" id='image'/></div>
    <nav className='nav'>
        <ul className='headtitles'>
            <li>streams of 2023</li>
            <li>News</li>
            <li>Podcasts</li>
            <li>company info</li>
            <li>Communities</li>
            <li><FaSistrix></FaSistrix></li>
            <li><div className="button">Get spootify</div></li>
        </ul>
        <FaBars id='iv'></FaBars>
    </nav>
    </div>
  )
}

export default Header