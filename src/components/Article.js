import React from "react";

const Article = ({article, onArticleClick}) => {

    if(!article) {
        return
    }

    const handleClick = function (){
        onArticleClick(article)
    }


    return (
    <li onClick={handleClick}>{article.webTitle}</li>    
        
    )
    
}

export default Article;