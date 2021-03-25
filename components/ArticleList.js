import React from "react";
import ArticleItem from './ArticleItem';
import articleStyle from "../styles/Articles.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article) => (
        <ArticleItem article={article}/>
      ))}
    </div>
  );
};

export default ArticleList;
