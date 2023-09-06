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
    <>
      <label htmlFor="sort-by-list"><h4>Sort list by:</h4></label>
      <select value={sort} id="sort-by-list" onChange={action}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortBy;
