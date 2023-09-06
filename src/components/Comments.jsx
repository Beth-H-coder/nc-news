import { useState, useEffect, useContext } from "react";
import { getComments, postComment } from "../api";
import axios from "axios";
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";
import UserProfileContext from "../userProfile/UserProfileContext";

function Comments(props) {
  const { id } = props;
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const userProfile = useContext(UserProfileContext);
  const [successMessage, setSuccessMessage] = useState(null);

  //refactor later to custom hook
  //get comments
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

  //add new comment
  const handleNewComment = (event, target) => {
    const message = target.current.value;
    event.preventDefault();
    let url = postComment(id);
    axios
      .post(url, {
        username: userProfile.username,
        body: message,
      })
      .then((result) => {
        let newComment = result.data.comment[0].body;
        setLoaded(true);
        setComments((prev) => [newComment, ...prev]);
        target.current.value = "";
        setSuccessMessage("Thanks for your comments - your post has been added!");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

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
        {successMessage && (
          <strong>
            <p className="success-message">{successMessage}</p>
          </strong>
        )}
        {<AddCommentForm action={handleNewComment} id={id} />}
        {comments.map((comment, i) => (
          <Comment key={`${comment} - ${i}`} data={comment} />
        ))}
      </div>
    );
  }
}

export default Comments;
