import { useState, useEffect, useContext } from "react";
import { getCommentsUrl, postCommentUrl } from "../api";
import axios from "axios";
import Comment from "./Comment";
import Modal from "./Modal";
import AddCommentForm from "./AddCommentForm";
import UserProfileContext from "../userProfile/UserProfileContext";

function Comments({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const userProfile = useContext(UserProfileContext);
  const [successPostMessage, setSuccessPostMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //get comments data
  // const { data: comments, loading, error } = useFetch(getCommentsUrl(articleId));
  useEffect(() => {
    let url = getCommentsUrl(articleId);

    //server
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
        setSuccessPostMessage("Thanks! Your comments have been added!");
        setShowModal(true);
        setTimeout(() => {
          setSuccessPostMessage(null);
          setShowModal(false);
        }, 3000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  //deleting a comment
  const handleDelete = (comment_id) => {
    setComments((prev) => {
      return prev.filter((comment) => comment.comment_id !== comment_id);
    });
  };

  return (
    <section>
      <div className="text-gray-500 font-bold m-10">
        <h4>COMMENTS</h4>
        <h5 className="pt-2 text-gray-400">Join the conversation</h5>
      </div>
      {error && (
        <h4 className="error">
          Sorry - there has been a problem fetching the comments.
        </h4>
      )}
      {!loaded && <h4 className="loading">Loading data...</h4>}

      <div className="">
        <AddCommentForm action={handleNewComment} />
        {showModal && (
          <Modal>
            <h4 className="text-gray-700 font-semibold">
              {successPostMessage}
            </h4>
          </Modal>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-8 p-6 pt-0">
          {comments &&
            comments.map((comment) => (
              <div key={comment.comment_id}>
                <Comment
                  data={comment}
                  username={userProfile.username}
                  onDelete={handleDelete}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Comments;
