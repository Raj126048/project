import React from 'react'
import './Card.css'

function Card({image,title,para,orderi}) {
  return (
    <div className="out" style={orderi}>
        <img src={image} alt="" />
        <div className="tex">
        <h1 className='gi'>
            {title}
        </h1>
        <p>
          {para}
        </p>
        </div>
    </div>
  )
}

export default Card