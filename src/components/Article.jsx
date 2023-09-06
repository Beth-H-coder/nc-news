import { formatDate } from "../utils";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import Vote from "./Vote";

function Article(props) {
  const { data, summary } = props;

  return (
    <div className="article-card">
      <h3>{data.title}</h3>
      <h4>{data.author}</h4>
      <h5>{formatDate(data.created_at)}</h5>
      <h5>Comments: {data.comment_count}</h5>
      {!summary && <p>{data.body}</p>}
      {!summary && <Vote voteCount={data.votes} id={data.article_id} />}
      {summary && (
        <Link to={`/article/${data.article_id}`}>View full article</Link>
      )}
      {!summary && <Comments id={data.article_id} />}
    </div>
  );
}

export default Article;
