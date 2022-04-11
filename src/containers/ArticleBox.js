import React, {useEffect, useState} from "react";
import ArticleDetails from "../components/ArticleDetails";
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";

const ArticleBox = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        getArticles();
    }, [])

    const getArticles = function() {
        fetch('https://content.guardianapis.com/search?format=json&api-key=test')
        .then(res => res.json())
        .then(articles => {
            setArticles(articles.response.results)
        })
        .catch(err => console.error);
    }

    const onArticleSelected = function(article) {
        setSelectedArticle(article);
    }

    return (
        <div className="main-container">
            <h2>Selected Articles</h2>
            <ArticleList articles={articles} />
        </div>
    )

}


export default ArticleBox;