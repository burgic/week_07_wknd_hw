import React from "react";
import Article from "./Article";

const ArticleList = ({articles, onArticleClick}) => {
    if (!PaymentResponse.results) return 'no data';
    const articleItem = articles.map((article, index) => {
        return <Article article={article} key={index} onArticleClick={onArticleClick}/>
        
    })

    return (
        <div>
            {articleItem}
        </div>
    )
}

export default ArticleList;