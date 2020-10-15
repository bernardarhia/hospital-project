import React from "react"

const ComingSoon = () => {
  return (
    <div className="comingsoon">
      <div className="comingsoon__content">
        <div className="comingsoon-text">
          <div className="heading">
            <p>Coming soon</p>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email"/>
            <button>Send</button>
        </div>

        <div className="img">
            <img src="https://res.cloudinary.com/everich1/image/upload/v1602759302/hopital%20project/530_jszdsm.png" alt=""/>
        </div>
      <div className="social">
            
      </div>
      </div>
    </div>
  )
}

export default ComingSoon
