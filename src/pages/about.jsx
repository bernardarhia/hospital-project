import React from "react"
import Layout from "../Layout"
import Container from "../Container"
import Hero from "../components/universal/Hero"
import Navbar from "../components/universal/Navbar"
import { cardContents } from "../content/aboutCard"
const about = ({ uri }) => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Hero />

        <section className="about">
          {/* Section text */}
          <div className="section__text">
            <div className="heading">
              <p>We are providing the top services</p>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          {/* Section cards */}

          <div className="section__cards">
              {cardContents.map((cardContent, index) => {
               return <div className="card">
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
        </section>
      </Container>
    </Layout>
  )
}

export default about
