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

export default OrderBy;
