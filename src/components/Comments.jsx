import { useState, useEffect } from "react";
import { getComments } from "../api";
import axios from "axios";
import Comment from "./Comment";

function Comments(props) {
  const { id } = props;
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  //refactor later to custom hook
  useEffect(() => {
    let url = getComments(id);

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
      <p className="error">
        Sorry - there has been a problem fetching the comments.
      </p>
    );
  } else if (!loaded) {
    return <p className="loading">Loading data...</p>;
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
