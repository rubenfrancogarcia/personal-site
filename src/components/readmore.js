import React from "react"
import "./readmore.css"
import { Link } from "gatsby"


const ReadMore = () => {
    return (
        <div className='btn-read-more'>
            <button>  <Link to="/blogpage/"> Read More</Link>  </button>
           
        </div>
    )
}

export default ReadMore