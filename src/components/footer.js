import React from "react"
import { Link } from "gatsby"
import "./footer.css"
import HomeIcon from '@material-ui/icons/Home';


const Footer = () => {
    return(
        <footer>

            
                  
                <div className="home"> 
                <Link to="/"><HomeIcon fontSize="large"/></Link>
                    {/* how to make media queries with size, make default small for mobile*/}                        
                </div>

                
        </footer>
    )
}

export default Footer; 