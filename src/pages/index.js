import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" >
    </SEO>
    <Main/>
  </Layout>
)

export default IndexPage
