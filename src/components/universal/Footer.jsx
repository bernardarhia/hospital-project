import React from "react"
import Container from "../../Container"
import { SiPinboard, SiAdobephonegap, SiClockify } from "react-icons/si"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          {/* Footer contact section */}

          <div className="footer__content-left">
            <div className="address">
              <address>
                <span className="icon">
                  <SiPinboard />
                </span>

                <span className="address__text">59 Street, 1200 Techpark</span>
              </address>

              <div className="phone__number">
                <span className="icon">
                  <SiAdobephonegap />
                </span>
                <span className="contact__text">0543814868</span>
              </div>

              <div className="date_time">
                <span className="icon">
                  <SiClockify />
                </span>
                <span className="date__text">
                  8:00 am - 17:00 pm, Monday - Friday
                </span>
              </div>
            </div>

            {/* social icons */}

            <div className="social__icons">
              <div className="social"></div>
            </div>
          </div>

          <div className="footer__content-right">
            <div className="quick__link">
              <div className="head">
                <p>Quick link</p>
              </div>
              <ul className="lists">
                {["Who We Are", "Our Mission", "Awards", "Experience"].map(
                  (list, index) => {
                    return (
                      <li>
                        <Link to="/">{list}</Link>
                      </li>
                    )
                  }
                )}
              </ul>
            </div>

            <div className="department">
              <div className="head">
                <p>Department</p>
              </div>
              <ul className="lists">
                {["Who We Are", "Our Mission", "Awards", "Experience"].map(
                  (list, index) => {
                    return (
                      <li>
                        <Link to="/">{list}</Link>
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
            <div className="other">
              <div className="head">
                <p>Other</p>
              </div>
              <ul className="lists">
                {["Who We Are", "Our Mission", "Awards", "Experience"].map(
                  (list, index) => {
                    return (
                      <li>
                        <Link to="/">{list}</Link>
                      </li>
                    )
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

      

        <div className="footer__info">
          <div className="footer__info-left">
            <div className="logo">
              <img src="https://res.cloudinary.com/everich1/image/upload/v1602521393/hopital%20project/Logo_g37st5.png" alt="" />
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="footer__info-right">
            <form action="">
              <div className="heading">
                <p>Stay up to date on the latest Le-Beauty news.</p>
              </div>
              <div className="inputs">
                <input type="email" placeholder="Your Email" />
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className="footer__end">
        <p>© Copyright Le-Beauty 2019. All Right Reserved. Designed and Developed by <a href="">Bernard Arhia</a></p>
      </div>
    </footer>
  )
}

export default Footer
