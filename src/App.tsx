import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";

function App() {
  const [cartItems, setCartItems] = useState(["pro 1", "pro 2"]);

  const onClear = () => {
    setCartItems([]);
  };
  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <hr />
      <Carts cartItems={cartItems} onClear={onClear} />
    </>
  );
}
export default App;
