import React from "react"
import Layout from "../Layout"
import Container from "../Container"
import Navbar from "../components/universal/Navbar"
import Hero from "../components/universal/Hero"
import Footer from "../components/universal/Footer"
const Gallery = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Hero />
        <div className="blog">
          <div className="blog__content">
            <div className="blog__content-text">
              <div className="heading">
                <p>Our lastest news</p>
              </div>
              <div className="paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="blog__tags">
              <span>Medicine</span>
              <span>Health</span>
              <span>Beauty</span>
              <span>Eye</span>
            </div>
            <div className="blog__cards">
              <div className="cards">
                {['','','','','',''].map(element => {
                  return (
                    <div className="card">
                      <div className="img"></div>
                      <div className="date">
                        <span>Medicine</span><li>Aug 6, 2019</li>
                      </div>
                      <div className="title">
                          <p>Medicine for headache</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Gallery
