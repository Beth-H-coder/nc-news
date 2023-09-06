import { useContext } from "react";
import { formatDate } from "../utils";
import UserProfileContext from "../userProfile/UserProfileContext";

function Comment(props) {
  const { data } = props;
  const userProfile = useContext(UserProfileContext);

  return (
    <div className="comment-card">
    
      <p>{data.body}</p>
      <p>{data.author}</p>
      <p>{formatDate(data.created_at)}</p>
    </div>
  );
}

export default Comment;
