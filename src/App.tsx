import { useState } from "react";
import "./App.css";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    //2.we can change object differently:
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);
    console.log(newDrink);
  };

  return (
    <>
      <hr />
      {drink.price}
      <hr />
      <button onClick={handleClick}>Click Please!</button>
    </>
  );
}
export default App;
