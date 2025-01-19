function SortBy(props) {
  const { action, sort } = props;

  const options = [
    {
      label: "Published Date",
      value: "created_at",
    },
    {
      label: "Number of Comments",
      value: "comment_count",
    },
    {
      label: "Popularity",
      value: "votes",
    },
  ];

  return (
    <div className="mt-4 flex items-center">
      <label htmlFor="sort-by-list" className="text-lg font-semibold mr-2">
        Sort list by:
      </label>
      <select
        value={sort}
        id="sort-by-list"
        onChange={action}
        className="block px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-gray-100 shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// function SortBy(props) {
//   const { action, sort } = props;

//   const options = [
//     {
//       label: "Published Date",
//       value: "created_at",
//     },
//     {
//       label: "Number of Comments",
//       value: "comment_count",
//     },
//     {
//       label: "Popularity",
//       value: "votes",
//     },
//   ];

//   return (
//     <>
//       <label htmlFor="sort-by-list"><h4>Sort list by:</h4></label>
//       <select value={sort} id="sort-by-list" onChange={action}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// }

export default SortBy;
