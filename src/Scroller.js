import React from 'react'
import './Scroller.css'

function Scroller() {
  return (
    <div> <div class="bar">
   <div className="bar_content">
    <div className="tickets">
        <span className='title'>Liner Notes   </span><span className='col'>   Collaboration</span>
    </div> <div className="tickets">
        <span className='title'>Liner Notes</span><span className='col'>Collaboration</span>
    </div>
    <div className="tickets">
        <span className='title'>Liner Notes</span><span className='col'>Collaboration</span>
    </div>
   
   </div>
   <div className="bar_content1">
   
    <div className="tickets">
        <span className='title'>Liner Notes</span><span className='col'>Collaboration</span>
    </div>
    <div className="tickets">
        <span className='title'>Liner Notes</span><span className='col'>Collaboration</span>
    </div>
    <div className="tickets">
        <span className='title'>Liner Notes</span><span className='col'>Collaboration</span>
    </div>
   </div>
   
  </div></div>
  )
}

export default Scroller