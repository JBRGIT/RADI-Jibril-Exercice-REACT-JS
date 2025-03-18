import ListLine from "./ListLine";

function List({ products }) {
  return (
    <div className="container">
      <ul className="list-group">
        {products.map((product, index) => (
          <ListLine product={product} key={index} isDarker={index % 2 === 0} />
        ))}
      </ul>
    </div>
  );
}

export default List;
