import { useEffect, useState } from "react";
import { get_articles } from "../api";
import axios from "axios";
import Article from "./Article";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  //refactor later to use custom hook
  useEffect(() => {
    let url = get_articles();
    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        let data = result.data.articles;
        setArticles(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (!loaded) {
    return <div className="loading">Loading data...</div>;
  } else {
    return (
      <>
        <p>
          Showing {articles.length} article{articles.length === 1 ? "" : "s"}
        </p>
        {articles.map((article, i) => (
          <Article key={`${article} - ${i}`} data={article} />
        ))}
      </>
    );
  }
}
export default Articles;
