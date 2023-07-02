import "./App.css";
import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  //afteRender
  useEffect(() => {
    //side effect
  });

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}
export default App;
