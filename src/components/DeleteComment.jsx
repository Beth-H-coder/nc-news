import { useState } from "react";
import { deleteCommentUrl } from "../api";
import axios from "axios";

const DeleteComment = ({ commentId, onDelete, username, commentAuthor }) => {
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    //optimistic
    onDelete(commentId);

    let url = deleteCommentUrl(commentId);
    // server
    axios
      .delete(url)
      .then(() => {
        setDeleteMessage("Your comment has been deleted!");
        setTimeout(() => {
          setDeleteMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setError("Error deleting the comment. Please try again.");
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  return (
    <div>
      {deleteMessage && <h4 className="comments-del">{deleteMessage}</h4>}
      {error && <h4 className="error">{error}</h4>}
      {username === commentAuthor && (
        <button
          className="bg-red-500 hover:bg-red-600 text-gray-100 font-semibold py-2 px-4 rounded-lg mt-6"
          onClick={handleDelete}
        >
          Delete Your Comment
        </button>
      )}
    </div>
  );
};

export default DeleteComment;
