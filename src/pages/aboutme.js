import React from "react"
import Layout from "../components/layout"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import "./aboutme.css"


const AboutMe = () => {
    return (
      <Layout>
        <div className="about-me-layout">
          <div className="about-me-container">
            <div className='about-me-title'>
              <h2>Justo Iaculis</h2>
            </div>

            <div className="about-me-content">
              <h3> Hello</h3>
              <p> Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
              <p> Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
              <p> Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>                    <p> Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
              <p>Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
              <p> Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
              <p>Litora tellus rutrum semper condimentum neque pharetra egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan, magna egestas potenti. Dapibus ut porta malesuada hendrerit litora.</p>
            </div>
            <div className="social-div">
              <div className="social-info">
                <h3> Let's Connect</h3>
              </div>
              <div className='about-me-social-media'>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/rubengarcia12/">  <LinkedInIcon /></a>

                </div>
                <div className="github">
                  <a href="https://github.com/rubenfrancogarcia">  <GitHubIcon /></a>
                </div>
                <div className="twitter">
                  <a href="https://twitter.com/ruben_garcia_f"> <TwitterIcon /></a>
                </div>
                <div className="portfolio">
                  <a href="https://rubenfgarcia.me/"><WorkOutlineIcon /></a>
                </div>
              </div>
            </div>
          </div> 

        </div>
          
      </Layout>
    )
}

export default AboutMe