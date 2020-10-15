import React from "react"
const Reason = () => {
  const cardDatas = [
    {
      img:
        "https://res.cloudinary.com/everich1/image/upload/v1602582909/hopital%20project/Rectangle_e0t38f.png",
      heading: "Team of leading medical professionals",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. consectetur",
    },
    {
      img:
        "https://res.cloudinary.com/everich1/image/upload/v1602582909/hopital%20project/Rectangle_Copy_rvruuq.png",
      heading: "Professional service- International standards",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. consectetur",
    },
    {
      img:
        "https://res.cloudinary.com/everich1/image/upload/v1602582909/hopital%20project/Rectangle_Copy_2_vwj2wk.png",
      heading: "The most modern equipment in the world",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. consectetur",
    },
  ]
  return (
    <div className="choose__us">
      <div className="heading">
        <p>Why choose us</p>
      </div>

      <div className="cards">
        {cardDatas.map((data, index) => {
          return (
            <div className="card" key={index}>
              <div className="img">
                <img src={data.img} alt="" />
              </div>
              <div className="card__content">
                <div className="card_heading">
                  <p>{data.heading}</p>
                </div>
                <div className="content">
                  <p>{data.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reason
