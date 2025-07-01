import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../product";

const Products = ({ category, sort, filters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const url = category
    ? `/products?category=${category}`
    : `/products`;

  const { data: products = [], isloading, error } = useFetch(url);

  useEffect(() => {
    let result = [...products];

    // Apply filters if category and filters exist
    if (category && filters) {
      result = result.filter(product =>
        Object.entries(filters).every(
          ([key, value]) => product[key]?.includes?.(value)
        )
      );
    }

    // Apply sorting
    const sortFunctions = {
      newest: (a, b) => b.createdAt - a.createdAt,
      asc: (a, b) => a.price - b.price,
      desc: (a, b) => b.price - a.price,
    };

    if (sort && sortFunctions[sort]) {
      result.sort(sortFunctions[sort]);
    }

    setFilteredProducts(result);
  }, [products, category, filters, sort]);

  if (isloading) return <div>Loading</div>;

  return (
    <div className="p-5 flex justify-between flex-wrap gap-5">
      {
        category ?
          filteredProducts.map(product => (
            <Product key={product._id} product={product} />
          ))
          :
          products.slice(0,8).map((product => (
            <Product key={product._id} product={product} />
          )))
      }
    </div>
  );
};

export default Products;
