import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}
const sliderContents = [
  {
    img: "",
    name: "Frank Gallaghers",
    position: "Parent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: "",
    name: "Frank Gallaghers",
    position: "Parent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: "",
    name: "Frank Gallaghers",
    position: "Parent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    img: "",
    name: "Frank Gallaghers",
    position: "Parent",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
]
const NiceSlider = () => {
  return (
    <div className="nice__slider">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
        arrows={false}

      >
        {sliderContents.map((sliderContent, index) => {
          return (
            <div className="nice__slider-slide" key={index}>
              <div className="cards">
                <div className="img__section">
                  <div className="img"> 
                  </div>
                  <div className="names">
                    <p className="name">{sliderContent.name}</p>
                    <p className="position">{sliderContent.position}</p>
                  </div>
                </div>
                <div className="content">
                  <p>{sliderContent.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
export default NiceSlider
