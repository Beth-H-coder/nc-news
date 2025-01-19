import { formatDate } from "../utils";
import { Link } from "react-router-dom";

function Article({ data }) {
  return (
    <article className="border border-gray-200 m-5 text-center p-3 rounded-xl shadow-lg">
      <h3 className="font-bold text-gray-600 text-4xl m-2 mb-6 tracking-wider leading-10">
        {data.title}
      </h3>
      <h5 className="font-bold text-lg text-gray-900 text-center pb-5">
        By {data.author}
      </h5>
      <div className="flex justify-center items-center">
        <img
          className="rounded-lg"
          src={data.article_img_url}
          alt={data.title}
        />
      </div>

      <section className="p-4">
        <div className="text-gray-600 text-center tracking-2 leading-8 font-semibold text-lg">
          <h5>Date published: {formatDate(data.created_at)}</h5>
          <h5>Comments: {data.comment_count}</h5>
        </div>
        <div className="text-gray-500 text-left mt-6 px-14 tracking-wide leading-8 text-lg">
          <p>{data.body}</p>
        </div>

        <div className="font-semibold mt-10 text-decoration-line: underline">
          <Link to={`/articles/`}>View All Articles</Link>
        </div>
      </section>
    </article>
  );
}

export default Article;
