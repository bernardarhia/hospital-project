import React from "react"
import "../style/main.scss";
import Container from "../Container";
import Layout from "../Layout";
import Navbar from "../components/universal/Navbar";
import Hero from "../components/universal/Hero";
export default function Home() {
  return (
    <>
    <Layout>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </Layout>
    </>
  )
}
