import { useState } from "react";
import "./App.css";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    //3.we can change object differently:

    setDrink({ ...drink, price: 6 });
    console.log(drink);
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
