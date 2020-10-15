import React from "react"
import img from "../images/img.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
const Slider = () => {
  
  return (
    <div className="slider">
    
        <div className="slider__lists"><img src={img} alt=""/></div>
        <div className="slider__lists"><img src={img1} alt=""/></div>
        <div className="slider__lists"><img src={img2} alt=""/></div>
    </div>
  )
}

export default Slider
