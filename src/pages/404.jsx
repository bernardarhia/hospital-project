import { Link } from "gatsby"
import React from "react"
import Layout from "../Layout"
import Container from "../Container"
import Navbar from "../components/universal/Navbar"
import Footer from "../components/universal/Footer"
const ErrorPage = () => {
  return (
    <Layout>
      <Navbar />
      <Container>
        {/*  404 content*/}
        <div className="error__page">
          <div className="error__page-content">
            <div className="error__page-img">
              <img
                src="https://res.cloudinary.com/everich1/image/upload/v1602735744/hopital%20project/Img_de28su.png"
                alt=""
              />
            </div>
            <div className="error__page-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
            <div className="error__page-redirect">
              <Link to="/">Go home</Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}

export default ErrorPage
