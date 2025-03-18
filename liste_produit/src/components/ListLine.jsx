function ListLine({ product, isDarker }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-evenly ${
        isDarker ? "bg-white" : "bg-light"
      }`}
    >
      <span style={product.stocked ? {} : { color: "red" }}>
        {product.name}
      </span>
      <span className="text-blue-400">{product.price}</span>
    </li>
  );
}

export default ListLine;
