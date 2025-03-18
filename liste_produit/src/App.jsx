import { useState } from "react";
import List from "./components/List";
import Search from "./components/search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [products, setProducts] = useState(PRODUCTS);

  const majSearchValue = (e) => {
    filterList(e.target.value);
  };

  const filterList = (searchValue) => {
    console.log(searchValue);
    setProducts(
      PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Search onChange={majSearchValue} />
      <List products={products} />
    </div>
  );
}

export default App;

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];
