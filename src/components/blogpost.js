import React from "react"
import "./blogpost.css"
import { Link } from "gatsby"
import ReadMore from '../components/readmore'
import cat from '../cat.jpg'


const BlogPost = () => {
    return(
        <div className='blog-snippet-container'>
                <div className="title-blog-content"> 
                    <h2> Magnus Dictum</h2>
                </div>
                <div className="author">
                    <p> author name</p>
                    <p> 01/11/2012</p>
                </div>
                
                <div className="snippet-image-container">
                    <img src={cat} />
                </div>
               
                
                <div className="snippet_content">
                    <p>    Litora tellus rutrum semper condimentum neque pharetra 
                    egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan. Litora tellus rutrum semper condimentum neque pharetra 
                    egestas imperdiet justo iaculis magnis dictum aenean. Mus integer nisi diam a donec accumsan.  </p> 
                    
                 </div>
                <div className='button-div'>
                        <ReadMore/>
                 </div>
            </div>
    )
}

export default BlogPost