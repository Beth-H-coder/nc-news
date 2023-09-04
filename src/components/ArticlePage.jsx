import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get_article } from "../api";
import Article from "./Article";
import axios from "axios";

function ArticlePage() {
  const { article_id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState();

  //refactor later to use custom hook
  useEffect(() => {
    let url = get_article(article_id);
    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        console.log(result);
        setArticle(result.data.article);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div className="error">Sorry - there has been a problem.</div>;
  } else if (!loaded) {
    return <div className="loading">Loading data...</div>;
  } else {
    return (
      <section>
        <h1>ArticlePage Component</h1>
        <Article data={article} summary={false} />
      </section>
    );
  }
}

export default ArticlePage;
