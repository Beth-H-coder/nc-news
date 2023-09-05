import { useState, useEffect } from "react";
import { get_comments } from "../api";
import axios from "axios";
import Comment from "./Comment";

function Comments(props) {
  const { id } = props;
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  //refactor later to custom hook
  useEffect(() => {
    let url = get_comments(id);

    axios
      .get(url)
      .then((response) => {
        setLoaded(true);
        let data = response.data.comments;
        setComments(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id, comments]);

  if (error) {
    return (
      <div className="error">
        Sorry - there has been a problem fetching the comments.
      </div>
    );
  } else if (!loaded) {
    return <div className="loading">Loading data...</div>;
  } else {
    return (
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.comment_id} data={comment} />
        ))}
      </div>
    );
  }
}

export default Comments;
