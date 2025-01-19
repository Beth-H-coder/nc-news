import { useContext } from "react";
import { formatDate } from "../utils";
import UserProfileContext from "../userProfile/UserProfileContext";
import DeleteComment from "./DeleteComment";

function Comment({ data, username, onDelete }) {
  const userProfile = useContext(UserProfileContext);

  return (
    <div className="p-12 mt-4 m-8 bg-gray-400 text-gray-200 text-left tracking-wide rounded-lg">
      <p className="font-style: italic mb-2">{data.body}</p>
      <p className="font-bold">{data.author}</p>
      <p>{formatDate(data.created_at)}</p>
      <DeleteComment
        onDelete={onDelete}
        username={username}
        commentId={data.comment_id}
        commentAuthor={data.author}
      />
    </div>
  );
}

export default Comment;
