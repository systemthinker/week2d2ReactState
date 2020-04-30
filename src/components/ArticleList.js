import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import Timeout from 'await-timeout'

// useEffect => fetch the data
const apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

const ArticleList = () => {
  const [articles, setArticles] = useState();
  const [hidden, setHidden] = useState(false);

  

  useEffect(() => {
    console.log("Use Effect!");
    // define an async function that does an axios call
    async function doSomeDataFetching() {
        Timeout.set(2000)
      
        // Getting back data from the net, through the wire, air, and the ocean:
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      
        console.log("Got back:", res.data);
        setArticles(res.data);
      }

      doSomeDataFetching()
  }, []); // its gonna fire depending on what we pass as second param

  // Second argument
  // [] -> Fire only when component is mounted
  // null => Fire in every re render
  // [something] => when "something" is changed.

  const toggleHide = () => {
    setHidden(!hidden);
  };

  if(articles){

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  const articleCards = articles.map((article, index) => (
    <ArticleCard key={index} title={article.title} content={article.body} />
  ));

  const buttonText = hidden ? "Show articles" : "Hide articles";

  return (
    <div>
      <button onClick={toggleHide}>{buttonText}</button>
      {!hidden && articleCards}
    </div>
  );
  } else {
      return <div>{"Loading..."}</div>
  }
};

export default ArticleList;