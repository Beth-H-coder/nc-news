import { capitaliseString, formatDate } from "../utils";
import { Link } from "react-router-dom";

function ArticleCard({ data }) {
  return (
    <div className="border border-gray-200 m-2 rounded-lg shadow-lg">
      <img
        src={data.article_img_url}
        alt={data.title}
        className="rounded-t-lg h-auto max-w-full"
      />
      <div className="p-4">
        <h3 className="font-semibold text-md p-1 mb-2 text-center">
          {data.title}
        </h3>
        <div className="text-gray-600 text-left text-sm m-2">
          <h5>Author: {data.author}</h5>
          <h5>Topic: {capitaliseString(data.topic)}</h5>
          <h5>Date: {formatDate(data.created_at)}</h5>
          <h5>Comments: {data.comment_count}</h5>
        </div>
        <div className="text-center text-decoration-line: underline p-4">
          <Link to={`/article/${data.article_id}`}>View full article</Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
