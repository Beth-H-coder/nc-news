function OrderBy(props) {
  const { action, order } = props;
  const label = order ? "DESC" : "ASC";

  return (
    <div>
      <h4>
        Order list:{" "}
        <button className="button" onClick={action}>
          {label}
        </button>
      </h4>
    </div>
  );
}

export default OrderBy;
