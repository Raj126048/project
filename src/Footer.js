import React from 'react'
import spoti from'./spoti.png'
import './Footer.css'
import f from './facebook.png'
import tw from './twitter.png'
import ins from './instagram.png'

function Footer() {
  return (
    <footer>
    <div class="lo">
        <img src={spoti} alt=""/>
    </div>
    <div class="col1">
        <h5>TOPIC</h5>
        <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>record</li>
        </ul>
    </div>
    <div class="col2">
        <h5>COMMUNITY</h5>
        <ul>
            <li>Article</li>
            <li>Develepors</li>
            <li>Investors</li>
            <li>Vendors</li>
        </ul>
    </div>
    <div class="col3">
        <h5>USEFULL LINES</h5>
        <ul>
            <li>Help center</li>
            <li>web player</li>
        </ul>
    </div>
    <div class="col4">
        <img src={f} alt=""/>
        <img src={ins} alt="/"/>
        <img src={tw} alt=""/>
    </div>
</footer>
  )
}

export default Footer