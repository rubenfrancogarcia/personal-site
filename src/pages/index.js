import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home";
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" >
    </SEO>
      <Home/>
  </Layout>
)

export default IndexPage
