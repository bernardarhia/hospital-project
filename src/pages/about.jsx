import { Link } from "gatsby"
import React from "react"
import Footer from "../components/universal/Footer"
import Hero from "../components/universal/Hero"
import Navbar from "../components/universal/Navbar"
import Container from "../Container"
import Layout from "../Layout"
import Reason from "../components/Reason"
const About = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Hero />
        {/* <section className="about">
          <div className="about__content">
            <div className="text__content">
              <div className="heading">
                <p>We have more than 10 years experience</p>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>

            <div className="cta">
                <Link className="appointment" to="/">Make an appointment</Link>
                <Link className="doctor" to="/">Find a doctor</Link>
                <Link className="appointment" to="/">Get directions</Link>
            </div>
          </div>



        </section> */}
        <Reason />
      </Container>
      <Footer />
    </Layout>
  )
}

export default About
