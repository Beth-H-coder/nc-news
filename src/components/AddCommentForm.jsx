import { useState } from "react";
//useRef - not rendering each time key pressed
function AddCommentForm({ action }) {
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
    <form onSubmit={handleSubmit} className=" p-4">
      <textarea
        onChange={handleChange}
        value={newComment}
        required
        className="w-6/12 h-56 border rounded-lg p-2 mt-0 m-5 focus:outline-none focus:ring focus:border-gray-700"
        placeholder="What's on your mind...?"
      ></textarea>
      <div className="mt-2">
        <button
          className="bg-gray-800 hover:bg-gray-400 text-gray-100 mx-6 py-2 px-4 rounded-lg"
          type="submit"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
}

export default AddCommentForm;
