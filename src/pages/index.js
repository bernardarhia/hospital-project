import React from "react"
import "../style/main.scss"
import Container from "../Container"
import Layout from "../Layout"
import Navbar from "../components/universal/Navbar"
import NiceSlider from "../components/NiceSlider"
import Footer from "../components/universal/Footer"
import image from "../images/img.png"
import Clients from "../components/Clients"
import { cardContents } from "../content/aboutCard"
import { Testimonials } from "../components/Testimonials"
import Feature from '../components/Feature';
export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <Container>
          <div className="home__showcase">
            <div className="content">
              <div className="header">
                <p>Connecting patiens &amp; clinics</p>
              </div>
              <div className="para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed do eiusmod.{" "}
                </p>
              </div>

              <div className="cta__btn">
                <button>Book appointment</button>
              </div>
            </div>

            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>


          <Clients />
          <Feature />
            <p style={{textAlign:"center",fontSize:"1.6rem", margin:"4rem 0", color:"#0F1C49"}}>
        Our services
            </p>
          <div className="section__cards">
              {cardContents.map((cardContent, index) => {
               return <div className="card" key={index}>
                  <div className="card__icon">
                    <img src={cardContent.icon} alt="" />
                  </div>

                  <div className="card__heading">
                    <p>{cardContent.heading}</p>
                  </div>

                  <div className="card__content">
                    <p>{cardContent.content}</p>
                  </div>
                </div>
              })}
            </div>

              <Testimonials />
        </Container>
        <Footer />
      </Layout>
    </>
  )
}
