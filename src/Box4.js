
import './Box4.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import b2s1 from './b2s1.png'
import b2s2 from './b2s2.jpeg'
import b2s3 from './b2s3.png'
import b2s4 from './b2s4.png'
import b3s5 from './b2s5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function Box4() {
    let [bluri ,setbluri]=useState(0);
    function toggle(num){
       

     
        setbluri(num);
    }
    return(
        <div className="container">
  
    <Swiper
   
      spaceBetween={30}
      effect={'fade'}
      grabCursor={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl:'.swiper-botton-next1',
        prevEl:'.swiper-botton-prev1'
    }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiperi"
    >
      <SwiperSlide>
      <div className="container1">
    <div className="spotlight"><h1>Spotlight</h1></div>
    <div className="con">
        <div className="boxes">
            <div className="heading">
                <h6>SPOTIFY: MIC CHECK PODCAST</h6>
                <h3>Western Swing, Willie Nelson, and Words of Wisdom</h3>
            </div>
            <div className="paragraph">
                <span>Performing to packed houses at the age of 11, mounting an audacious stunt that led Willie Nelson to invite him on stage, and later sleeping in his truck while chasing Nashville dreams, Corey Kent’s stories reveal the unflinching commitment of an artist who is driven to make music. </span>
    <span>When the Covid pandemic hit, he was left working at a pavement company to feed his family and playing a weekly slot in an eatery just to keep his love of music alive. </span>
    <span>But now Corey’s resilience, talent, and determination have brought him from the “Red Dirt” scene of Tulsa to a slot as the face of Spotify’s Hot Country playlist.</span>
            </div>
        </div>
        <div className="cover1">
            <img src={b2s1} />
          <a  onClick={()=>toggle(1)}> <svg className='play' width="50" height="145" viewBox="0 0 145 145" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="72.5" cy="72.5" r="72.5" fill="black"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.707 74.0104L57.3945 102.708V74.0104V45.3125L102.707 74.0104Z" fill="white"></path>
	
</svg></a> 
<h3 className='number'>1 / 5</h3>
        </div>
        <div className={bluri==1?"hid activeh":"hid"}>
            hi
        </div>
    </div>
</div>
      
      </SwiperSlide>
      <SwiperSlide>
      <div className="container1 c2">
    <div className="spotlight"><h1>SPOTLIGHT</h1></div>
    <div className="con">
        <div className="boxes" id="c1">
            <div className="heading">
                <h6>SPOTIFY: FOR THE RECORD PODCAST</h6>
                <h3>Q2 2023 Earnings</h3>
            </div>
            <div className="paragraph">
                <span >on a period of record-breaking user growth for the business. </span><span >Plus, Armajit Batra, Spotify’s Managing Director for India, and General Manager for South Asia, the Middle East and Africa shares deeper insights into the music trends, podcast engagement, and business strategies of one of the company’s fastest growing markets.</span>
            </div>
        </div>
        <div className="cover">
            <img src={b2s2} alt="" />
            <a href=""> <svg className='play' width="50" height="145" viewBox="0 0 145 145" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="72.5" cy="72.5" r="72.5" fill="black"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.707 74.0104L57.3945 102.708V74.0104V45.3125L102.707 74.0104Z" fill="white"></path>
	
</svg></a> 
<h3 className='number'>2 / 5</h3>
        </div>
    </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container1 c2 c3">
    <div className="spotlight"><h1>SPOTLIGHT</h1></div>
    <div className="con">
        <div className="boxes">
            <div className="heading">
                <h6>SPOTIFY: MIC CHECK PODCAST</h6>
                <h3>Bringing South African Sounds to a Global Stage</h3>
            </div>
            <div className="paragraph">
                
                <span>At a time when Amapiano and Afrobeats are among the world’s hottest music trends, South African artist Tyla has become one of her country’s most exciting musical exports. </span>
                <span>Her fusion of pop, classic R&B, and African beats has taken her to the studios of LA, the stages of Europe, and the catwalks of Milan. </span>
            <span>Check out her story of her and a preview of her forthcoming single from her, “Water.” </span>
            </div>


        </div>
        <div className="cover">
        <img src={b2s3} alt="" />
            <a href=""> <svg className='play' width="50" height="145" viewBox="0 0 145 145" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="72.5" cy="72.5" r="72.5" fill="black"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.707 74.0104L57.3945 102.708V74.0104V45.3125L102.707 74.0104Z" fill="white"></path>
	
</svg></a> 
<h3 className='number'>3 / 5</h3>
        </div>
    </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container1 c2 c4">
    <div className="spotlight"><h1>SPOTLIGHT</h1></div>
    <div className="con">
        <div className="boxes">
            <div className="heading">
                <h6>SPOTIFY: MIC CHECK</h6>
                <h3>Sycco Gets GLOW-ed Up</h3>
            </div>
            <div className="paragraph">
                <span>Emerging artist Sycco joins GLOW, Spotify’s global music program celebrating and amplifying LGBTQIA+ artists and creators both on and off our platform, and released two exclusive Spotify Singles. </span>
            <span>In this episode of  </span>
            <span> , we caught up with her de ella de ella de ella de ella from her de ella de ella de ella de ella home studio during Spotify’s Pride month celebration.</span>
            </div>
        </div>
        <div className="cover">
        <img src={b2s4} alt="" />
            <a href=""> <svg className='play' width="50" height="145" viewBox="0 0 145 145" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="72.5" cy="72.5" r="72.5" fill="black"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.707 74.0104L57.3945 102.708V74.0104V45.3125L102.707 74.0104Z" fill="white"></path>
	
</svg></a> 
<h3 className='number'>4 / 5</h3>
        </div>
    </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="container1 c2 c5">
    <div className="spotlight"><h1>SPOTLIGHT</h1></div>
    <div className="con">
        <div className="boxes">
            <div className="heading">
                <h6>SPOTIFY: FOR THE RECORD PODCAST</h6>
                <h3>Direct from Spotify Beach</h3>
            </div>
            <div className="paragraph">
            <span >We’ve squeezed together some of the best bits from our week on the Croisette during the Cannes Lions International Festival of Creativity. Tune in to our exclusive. four-part series to laugh, cry (maybe), learn a bit more about the art of advertising, the science of sound and the magic of marketing, and how to put together a dynamic DJ set and craft a set of killer questions for your next pod interview.</span>
            </div>
        </div>
        <div className="cover">
        <img src={b3s5} alt="" />
            <a href=""> <svg className='play' width="50" height="145" viewBox="0 0 145 145" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <circle cx="72.5" cy="72.5" r="72.5" fill="black"></circle>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M102.707 74.0104L57.3945 102.708V74.0104V45.3125L102.707 74.0104Z" fill="white"></path>
	
</svg></a> 
<h3 className='number'>5 / 5</h3>
        </div>
    </div>
</div>
      </SwiperSlide>
      <div className="slider-controler1">
                    <div className="swiper-botton-prev1 slider-arrow">
                    <svg id="lefti">
  <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="white"></path>
</svg>
                  </div>
                        <div className="swiper-botton-next1 slider-arrow">
                       <svg id="righti">
  <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="white"></path>
</svg></div></div>
                       
   
    </Swiper>
    </div>
  
  )
}

export default Box4