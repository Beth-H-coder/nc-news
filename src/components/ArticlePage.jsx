import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import Article from "./Article";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";

function ArticlePage() {
  const { article_id } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState();

  //TODO - below: refactoring for custom fetch hook
  
  // let url = get_article(article_id);
  // const { data, error, loading } = useFetch(url)

  //   if (error) {
  //     return <p>Sorry - there has been a problem.</p>;
  //   }
  //   if (loading) {
  //     return <p>Loading data...</p>;
  //   }
  //   if (data) {
  //     return (
  //       <div>
  //         <ul>
  //           {data.items.map((item) => {
  //             return <ItemsCard key={item.item_id} item={item} />;
  //           })}
  //         </ul>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  useEffect(() => {
    let url = getArticle(article_id);
    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        setArticle(result.data.article);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <p className="error">Sorry - there has been a problem.</p>;
  } else if (!loaded) {
    return <p className="loading">Loading data...</p>;
  } else {
    return (
      <section>
        <h1>ArticlePage Component</h1>
        <Article data={article} />
      </section>
    );
  }
}

export default ArticlePage;
