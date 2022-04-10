import React from "react";

const Article = ({article, onArticleClick}) => {

    const handleClick = function (){
        onArticleClick(article)
    }


    return (
    <li onClick={handleClick}>{article.response.results[0].webTitle}</li>    
        
    )
    
}

export default Article;