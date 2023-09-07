// function DeleteComment() {
//   const handleDelete = (event, comment_id) => {
//     let url = deleteCommentUrl(comment_id);
//     axios
//       .delete(url)
//       .then((result) => {
//         setLoaded(true);
//         setComments((prev) => {
//           return prev.filter((comment) => comment.comment_id !== comment_id);
//         });

//         setDeleteMessage("Your comment has been deleted!");
//         setTimeout(() => {
//           setDeleteMessage(null);
//         }, 3000);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   };
// }
// export default DeleteComment;
