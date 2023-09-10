import React from 'react'
import b1 from './b1.jpg'
import b2 from './b2.png'
import b3 from './b3.png'
import b4 from './swiper2.png'
import b5 from './swipper1.jpg'
import Card from './Card'
import "./Box2.css"

function Box2() {
  let pro=[{id:1,image:b1,title:"Inside spotify",para:"See if You’ve Got What It Takes To Be a Spotify Star",orderi:1},
{id:2,image:b2,title:"Inside spotify",para:"Take Action Against Harassment at Concerts With Spotify and Calling All Crows",orderi:2},
{id:3,image:b3,title:"For Artists",para:"Introducing New Audience Segmentation on Spotify for Artists",orderi:3},
{id:4,image:b4,title:"Whats New",para:"The Giants of Africa Festival Inspires African Youth to ‘Dream Big’ Through Basketball, Culture, and Music",orderi:5},
{id:5,image:b5,title:"Whats New",para:"Mexican LGBTQIA+ Musicians Come Together for the First Latin American Spotify Single Made Entirely by Women",orderi:6}]
 
  return (

    <div className='card'>
      { pro.map((item)=> (<Card className="ci" image={item.image} title={item.title} para={item.para} orderi={{order:item.orderi}}></Card>))}
      <div className="c b">
      <h1 className='bi'>More News</h1>
      <button>Get Spotify</button></div></div>
  )
}

export default Box2