import { useEffect, useState } from "react";
import { getArticles } from "../api";
import axios from "axios";
import Article from "./Article";

function Articles(props) {
  const { num } = props;
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  //refactor later to use custom hook
  useEffect(() => {
    let url = getArticles();
    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        let data = result.data.articles;
        if (num) {
          data = data.splice(0, num);
        }
        setArticles(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <p className="error">Sorry - there has been a problem.</p>;
  }
  if (!loaded) {
    return;
    <p className="loading">Loading data...</p>;
  } else {
    return (
      <>
        <p>
          Showing {articles.length} article{articles.length === 1 ? "" : "s"}
        </p>
        {articles.map((article, i) => (
          <Article key={`${article} - ${i}`} data={article} summary={true} />
        ))}
      </>
    );
  }
}
export default Articles;
