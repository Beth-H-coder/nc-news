import { useState, useEffect, useContext } from "react";
import { getCommentsUrl, postCommentUrl, deleteCommentUrl } from "../api";
import axios from "axios";
import Comment from "./Comment";
import Modal from "./Modal";
import AddCommentForm from "./AddCommentForm";
import UserProfileContext from "../userProfile/UserProfileContext";

function Comments(props) {
  const { articleId } = props;
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const userProfile = useContext(UserProfileContext);
  const [successPostMessage, setSuccessPostMessage] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //refactor later to custom hook
  useEffect(() => {
    let url = getCommentsUrl(articleId);
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
  }, [articleId]);

  //add new comment
  let handleNewComment = (comment) => {
    let url = postCommentUrl(articleId);
    axios
      .post(url, {
        username: userProfile.username,
        body: comment,
      })
      .then((result) => {
        let newComment = result.data.comment[0];
        setLoaded(true);
        setComments((prev) => [newComment, ...prev]);
        setSuccessPostMessage(
          "Thanks for your comments - your post has been added!"
        );
        setTimeout(() => {
          setSuccessPostMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  //deleting a comment
  const handleDelete = (event, comment_id) => {
    setComments((prev) => {
      return prev.filter((comment) => comment.comment_id !== comment_id);
    });
    let url = deleteCommentUrl(comment_id);
    axios
      .delete(url)
      .then((result) => {
        setLoaded(true);
        setDeleteMessage("Your comment has been deleted!");
        setTimeout(() => {
          setDeleteMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return (
      <h4 className="error">
        Sorry - there has been a problem fetching the comments.
      </h4>
    );
  } else if (!loaded) {
    return <h4 className="loading">Loading data...</h4>;
  } else if (deleteMessage) {
    return <h4 className="comments-del">Your comments have been deleted!</h4>;
  } else {
    return (
      <section>
        <div className="comments">
          {successPostMessage && (
            <strong>
              <p className="success-message">{successPostMessage}</p>
            </strong>
          )}
          {<AddCommentForm action={handleNewComment} />}
          {comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              data={comment}
              action={handleDelete}
            />
          ))}
          
        
        </div>
      </section>
    );
  }
}

export default Comments;
