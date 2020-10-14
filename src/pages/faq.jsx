import React from "react"
import Hero from "../components/universal/Hero"
import Navbar from "../components/universal/Navbar"
import Container from "../Container"
import Layout from "../Layout"
import Footer from "../components/universal/Footer"
import Accordion from "../components/Accordion"
import { Link } from "gatsby"
const Faq = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Container>
          <Hero />

          <div className="faq">
            <div className="faq__content">
              <div className="faq__heading">
                <p>We answer all questions</p>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <Accordion />

            <div className="cta">
              <div className="heading">
                <p>Do you have a question</p>
              </div>
              <div className="content">
                <p>Let us know about this</p>
              </div>

              <div className="cta__link">
                <Link to="/">Contact us</Link>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default Faq
