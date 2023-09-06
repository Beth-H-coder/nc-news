import { useState } from "react";
//useRef - not rendering each time key pressed
function AddCommentForm(props) {
  const { id, action } = props;
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        value={comment}
        required
        cols="50"
        rows="15"
        placeholder="What's on your mind?"
      >
      </textarea>
      <div>
        <button type="submit">Post Comment</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
//I would remove comments from the dependency array here - it reverses your work of spreading the new comment to the TOP of the list as it then re-fetches all of them anyway.
// This means that the new comment is now at the bottom and not clear that it has worked to the user
