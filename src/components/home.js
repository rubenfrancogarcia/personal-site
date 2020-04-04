import React from 'react'
import './home.css'
import BlogPost from "../components/blogpost"



const Home = () => {
    return (
            <div className="home-container">
                <div className="blog-posts-container">
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />

                </div>  
            </div>


        
        
        

    ) 

}

export default Home;