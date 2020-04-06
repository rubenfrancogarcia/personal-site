import { Link } from "gatsby"
import React from "react"
import './header.css'


const Header = ({ siteTitle }) => (
  <header>
      <nav>
          <div className='website-name'>
              <h1> My Simple Blog</h1>
          </div>

          <div className="link-box">
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/aboutme/">About</Link>
              </li>
          </div>
      </nav>
  </header>
)



export default Header
