import React from "react";
import productData from "./productsData";
import ProductDetails from "./ProductDetails";

function Products() {
  const products = productData.map(product => (
    <ProductDetails
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  // console.log(products);
  return <div className="todo-list2">{products}</div>;
}

export default Products;
