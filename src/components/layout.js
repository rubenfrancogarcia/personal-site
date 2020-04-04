/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      
        <Header/>
        <div className="content-container">
        <main>{children}</main>
        </div>
        <Footer/>
        
        
    </>
  )
}


export default Layout
