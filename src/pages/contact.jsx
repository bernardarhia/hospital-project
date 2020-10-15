import React from "react"
import Layout from "../Layout"
import Container from "../Container"
import Hero from "../components/universal/Hero"
import Footer from "../components/universal/Footer"
import Navbar from "../components/universal/Navbar"
// import { Link } from "gatsby"
const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Hero />
        <div className="contact__info">
          <div className="contact__content">
              {/* text section with contact and location info */}
            <div className="contact__content-text">
              <div className="address__first">
                <div className="location">
                  <p>LONDON</p>
                  <span>54 Portland Place</span>
                  <span>London, W1B 1DY</span>
                  <span>United Kingdom</span>
                </div>
                <div className="time">
                  8:00 <span>am</span> - 5:00 <span> pm (GMT -3)</span>
                </div>
                <div className="phone">
                  <a href="tel:+233543814868">+233543814868</a>
                </div>
              </div>
              <div className="address__second">
                <div className="location">
                  <p>San Francisco</p>
                  <span>548 Market Street, #88872</span>
                  <span>San Francisco, CA 94104-5401</span>
                  <span>United States</span>
                </div>
                <div className="time">
                  8:30 <span>am</span> - 5:00 <span> pm (GMT -7)</span>
                </div>
                <div className="phone">
                  <a href="tel:+233543814868">+233543814868</a>
                </div>
              </div>
            </div>
            <div className="contact__content-form">
              <div className="form__content">
                <p className="heading">Feel free to contact us</p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
                {/* form section */}
              <form action="">
                  <div className="inputs">
                      <div className="name">
                          <input type="text" placeholder="Your name" />
                      </div>
                      <div className="email">
                          <input type="email" placeholder="Your email" />
                      </div>
                      <div className="subject">
                          <input type="text" placeholder="Subject" />
                      </div>
                      <div className="message">
                          <textarea name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                      </div>
                      <div className="btn">
                          <button>Send us a message</button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Contact
