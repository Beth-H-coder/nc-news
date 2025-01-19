// import { useContext } from "react";
// import { formatDate } from "../utils";
// import UserProfileContext from "../userProfile/UserProfileContext";

// function Comment({ data, action }) {
//   const userProfile = useContext(UserProfileContext);

//   // const isAuthor = (userName, currentUserName) => {
//   //   return userName === currentUserName;
//   // };

//   return (
//     <div className="p-12 mt-4 m-8 bg-gray-400 text-gray-200 text-left tracking-wide rounded-lg">
//       <p className="font-style: italic mb-2">{data.body}</p>
//       <p className="font-bold">{data.author}</p>
//       <p>{formatDate(data.created_at)}</p>
//       {data.author === userProfile.username && (
//         <button
//           className="bg-red-500 hover:bg-red-600 text-gray-100 font-semibold py-2 px-4 rounded-lg mt-6"
//           onClick={(event) => action(event, data.comment_id)}
//         >
//           Delete Your Comment
//         </button>
//       )}
//     </div>
//   );
// }

// export default Comment;

//5/1/24
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
