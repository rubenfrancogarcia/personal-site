import { Link } from "gatsby"
import React from "react"
import './header.css'


const Header = ({ siteTitle }) => (
  <header>
      <nav>
          <div className="link-box">
            <li>
              <Link to="/">Home</Link>
            </li>

          </div>
         <div className="link-box">
          <li> <Link to="/blogpage/">Blog</Link>
            </li>
           </div> 
      </nav>
  </header>
)



export default Header
