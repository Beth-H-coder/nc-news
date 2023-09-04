import { formatDate } from "../utils";
import { Link } from "react-router-dom";

function Article(props) {
  const { data } = props;

  return (
    <div className="article-card">
      <h3>{data.title}</h3>
      <h4>{data.author}</h4>
      <h5>{formatDate(data.created_at)}</h5>
      <p>Comments: {data.comment_count}</p>
      <Link to={`/article/${data.article_id}`}>View full article</Link>
    </div>
  );
}

export default Article;
