import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts)
    const renderPosts = posts.map(post => <Article key={post.id} {...post} />) 
    return (
        <main>
            { renderPosts }
        </main>
    )
}

export default ArticleList