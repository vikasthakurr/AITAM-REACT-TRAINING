import React from 'react'
import demoimage from "../assets/demoimage.jpg";
import "./intro.css"

const Intro = () => {
  return (
    <div>
      <img className='image' src={demoimage}></img>
    </div>
  )
}

export default Intro