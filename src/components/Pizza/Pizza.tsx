import React, { useState } from "react";
//exercise 2
const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "barbecue",
    toppings: ["Mushroom"],
  });

  const handleCLick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "tomato"] });
  };
  return (
    <>
      Pizza: {pizza.name},{" "}
      {pizza.toppings.map((topping) => (
        <div>{topping}</div>
      ))}
      <button onClick={handleCLick}>click</button>
    </>
  );
};

export default Pizza;
