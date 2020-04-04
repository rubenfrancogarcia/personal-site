import React from "react"
import Layout from "../components/layout";
import Bigblogpost from "../components/bigblogpost"
import "./blogpage.css"

const BlogPage = () => {
    return (
        <Layout>
            <div className="big-post-page-container">
                <div className="big-blog-post-container">

                    <Bigblogpost /> 
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage