import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleUrl } from "../api";
import Article from "./Article";
import Vote from "./Vote";
import Comments from "./Comments";
import axios from "axios";
//import { useFetch } from "../hooks/useFetch";

function ArticleCommentsPage() {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = getArticleUrl(article_id);
    axios
      .get(url)
      .then((result) => {
        setLoaded(true);
        setArticle(result.data.article);
      })
      .catch((error) => {
        setError(error.response.data.msg);
      });
  }, [article_id]);

  return (
    <div>
      {error && (
        <h4 className="text-red-500 font-semibold text-lg text-center p-5">
          Sorry - there has been a problem. {error}.
        </h4>
      )}
      {!error && !loaded && (
        <h4 className="text-blue-500 font-semibold text-lg text-center">
          Loading data...
        </h4>
      )}
      {!error && loaded && (
        <main>
          <article>
            <Article data={article} />
          </article>
          <div>
            <Vote voteCount={article.votes} id={article.article_id} />
          </div>
          <section>
            <Comments articleId={article.article_id} />
          </section>
        </main>
      )}
    </div>
  );
}
export default ArticleCommentsPage;
