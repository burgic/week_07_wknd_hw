import React from "react";
import Article from "./Article";

const ArticleList = ({articles}) => {
    console.log(articles)
    const articleItems = articles.map((article, index ) => {
        return <Article index={index} article={article} />
    })
    
    return (
    <div>
        {articleItems}
    </div>
    )
}


export default ArticleList;