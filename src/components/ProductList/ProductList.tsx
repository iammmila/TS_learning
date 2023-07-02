// import React from "react";
import { useState, useEffect } from "react";

interface Props {
  category: string;
}
const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching data:", category);
    setProducts(["clothing", "skjnkjs"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
