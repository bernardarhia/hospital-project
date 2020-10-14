import React from "react"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import img from "../images/img.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 980, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="slider">
      {/* <Carousel
        infinite={true}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        autoPlay={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        focusOnSelect={true}
        partialVisible={true}
        arrows={false}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      > */}
        <div className="slider__lists"><img src={img} alt=""/></div>
        <div className="slider__lists"><img src={img1} alt=""/></div>
        <div className="slider__lists"><img src={img2} alt=""/></div>
      {/* </Carousel> */}
    </div>
  )
}

export default Slider
