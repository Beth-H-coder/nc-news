import { useState } from "react";
//useRef - not rendering each time key pressed
function AddCommentForm(props) {
  const { action } = props;
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setNewComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(newComment);
    setNewComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        value={newComment}
        required
        cols="50"
        rows="15"
        placeholder="What's on your mind?"
      ></textarea>
      <div>
        <button className="button" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}

export default AddCommentForm;
