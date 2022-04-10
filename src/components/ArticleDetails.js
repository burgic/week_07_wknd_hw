import React from "react";

const ArticleDetails = ({article}) => {
    return (
        <div>
            <h2>Article</h2>
            <h3>Title: {article.response.results[0].webTitle}</h3>
            <p>Category{article.response.results[0].sectionName}</p>
        </div>
    )
}


export default ArticleDetails;