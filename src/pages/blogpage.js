import React from "react"
import Layout from "../components/layout";
import Article from "../components/article"

const BlogPage = () => {
    return (
        <Layout>
            <div className="container grid"> 
            <h1> Blog Posts</h1>
                <main>
                    <Article>

                    </Article>
                    <Article>

                    </Article>
                    <Article>

                    </Article>
                </main>
            </div>
            
        </Layout>
    )
}

export default BlogPage