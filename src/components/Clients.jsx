import React from "react"
import matrix from '../images/matrix.png'
import midwestern from '../images/midwestern.png'
import highpoint from '../images/highpoint.png'
import moorgate from '../images/moorgate.png'
const Clients = () => {
  return (
    <div className="clients">
      <div className="heading">
        <p>
          Trusted by <span>hundreds</span> of the world best medical{" "}
          <span>organizations</span>{" "}
        </p>
      </div>

      <div className="clients__icons">
          <div className="icons">
                <img src={moorgate} alt=""/>
          </div>
          <div className="icons">
                <img src={midwestern} alt=""/>
          </div>
          <div className="icons">
                <img src={highpoint} alt=""/>
          </div>
          <div className="icons">
                <img src={matrix} alt=""/>
          </div>
      </div>
    </div>
  )
}

export default Clients
