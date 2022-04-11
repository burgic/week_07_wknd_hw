import React from "react";

const ArticleDetails = ({article}) => {
    return (
        <div>
            <h2>Article</h2>
            <h3>Title: {article.webTitle}</h3>
            <p>Category{article.sectionName}</p>
        </div>
    )
}


export default ArticleDetails;