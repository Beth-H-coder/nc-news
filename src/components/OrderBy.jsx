function OrderBy({ action, order }) {
  const label = order ? "DESC" : "ASC";

  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2 flex items-center">
        <span className="mr-2">Order list by:</span>
        <button
          className="text-gray-100 bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold transition-transform transform hover:scale-105 focus:outline-none"
          onClick={action}
        >
          {label}
        </button>
      </h4>
    </div>
  );
}

// function OrderBy({ action, order }) {
//   const label = order ? "DESC" : "ASC";

//   return (
//     <div className="mt-4">
//       <h4 className="text-lg font-semibold mb-2">Order list:</h4>
//       <div className="flex items-center space-x-2">
//         <span className="text-sm">Sort:</span>
//         <button
//           className="text-white bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold transition-transform transform hover:scale-105 focus:outline-none"
//           onClick={action}
//         >
//           {label}
//         </button>
//       </div>
//     </div>
//   );
// }

// function OrderBy({ action, order }) {
//   const label = order ? "DESC" : "ASC";

//   return (
//     <div>
//       <h4>
//         Order list:{" "}
//         <button className="button" onClick={action}>
//           {label}
//         </button>
//       </h4>
//     </div>
//   );
// }

export default OrderBy;
