import React from 'react'
import './Box1.css'
import top from './box1top.jpg'
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
import b from './box1bottom.jpg'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules'
import slide1 from './swiper2.png'
import slide2 from './swipper1.jpg'
import slide3 from './swiper3.jpeg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import  { useState } from 'react';
import  { Controller } from 'swiper/modules';

import { useSwiper } from 'swiper/react';

//SwiperCore.use([Controller]);

function Box1() 



{
    const swipper=useSwiper();
    const list=[{id:'1',
    image:'slide1',
    clss:'slide1'

    },
    {id:'2',
    image:'slide2',
    clss:'slide2'

    },
    {id:'3',
    image:'slide3',
    clss:'slide3'

    }];
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <div className='box1'>
        <div className="left">
            <h1>New&Noteworthy</h1>
            <div className="swiper-container">
          
            <Swiper
            
           
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
         
            slidesPerView={'auto'}
            spaceBetween={80}
            centeredSlides={true}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            coverflowEffect={{
                rotate:0,
                stretch:20,
                depth:20,
                modifier:15.0
            }}
            pagination={{el:'.swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'.swiper-botton-next',
                prevEl:'.swiper-botton-prev'
            }}
            modules={[EffectCoverflow,Pagination,Navigation,Controller]}
            className='swiper_container'>
                <div className="q2">
          <SwiperSlide className='swiper-slide1' >
<img className='slide1'src={slide1} alt="hii" />

                </SwiperSlide></div>
               
      <div className="q2"> <SwiperSlide className='swiper-slide1'>
<img className='slide2'src={slide2} alt="hii" />

                </SwiperSlide></div> 
       <div className="q2">  <SwiperSlide className='swiper-slide1'>
<img className='slide3'src={slide3} alt="hii" />


                </SwiperSlide> </div>
                <div className="q2"> <SwiperSlide className='swiper-slide1'>
<img className='slide2'src={slide2} alt="hii" />

                </SwiperSlide></div> 
             
               
                
                <div className="slider-controler">
                    <div className="swiper-botton-prev slider-arrow">
                    <svg id="left">
  <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="#000"></path>
</svg>
                  </div>
                        <div className="swiper-botton-next slider-arrow"><p>NEXT</p>
                       <svg id="right">
  <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="#000"></path>
</svg></div>
                        <div className="swiper-pagination"></div></div> 
            </Swiper>
            <Swiper 
            
              modules={[Controller]}
                   onSwiper={setSecondSwiper}
                   controller={{ control: firstSwiper }}
            className='hi'
            grabCursor={true}
            loop={true}
           
             >
                  <SwiperSlide className='ho'>
              <h3>WHAT'S NEW</h3>
<p>RADAR Artist Renee Rapp Dives Headfirst Into Her Music Carrer With a New Single,Album, and tour</p>
              </SwiperSlide>
          
              <SwiperSlide className='ho'>
              <h3>WHAT'S NEW</h3>

<p>Mexican LGBTQIA+ Musicians Come Together for the First American Spotify Single Made Entirely by Women</p>
              </SwiperSlide>
              <SwiperSlide className='ho'>
              <h3>WHAT'S NEW</h3>
<p>Giants of Africa festival Inspires African Youth to 'Dream Big'Through Basketball, Culture, and Music.</p>
              </SwiperSlide>
            
              <SwiperSlide className='ho'>
              <h3>WHAT'S NEW</h3>

<p>Mexican LGBTQIA+ Musicians Come Together for the First American Spotify Single Made Entirely by Women</p>
              </SwiperSlide>
              </Swiper>
              </div>
        </div>
        <div className="ri">
            <div className="top" id='top'>
                <img src={top} alt="img" />
                <h3>WHAT'S NEW</h3>
                <p>Connect Patreon to Spotify and Stream Your Favorite Podcasts in One Place</p>
            </div>
            <div className="bottom" id='bottom'>
                <h1>Hip-Hop Turns 50</h1>
                <img src={b} alt="" />
                <div className="buttonn">Dive in</div>
            </div>
        </div>
    </div>
  )
}

export default Box1