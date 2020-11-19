import React from "react"
import Layout from "../Layout"
import Container from "../Container"
import Navbar from "../components/universal/Navbar"
import Hero from "../components/universal/Hero"
import Footer from "../components/universal/Footer"
import { blogContents } from "../content/blogContent"
const Blog = () => {
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
                {blogContents.map((blogContent, index) => {
                  return (
                    <div className="card" key={index}>
                      <div className="img">
                        <img src="https://www.pexels.com/photo/3985163/download/?search_query=doctor&tracking_id=9c5h6odcgud" alt=""/>
                      </div>
                      <div className="date">
                        <span>{blogContent.tag}</span>
                        <li>{blogContent.date}</li>
                      </div>
                      <div className="title">
                        <p>{blogContent.title}</p>
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

export default Blog
