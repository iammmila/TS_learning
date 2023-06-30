import React, { useState } from "react";
//exercise 3
const CartExercise = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 0", quantity: 1 },
      { id: 2, title: "product 1", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      {cart.items.map((item) => {
        return (
          <>
            <div key={item.title}> {item.quantity}</div>
          </>
        );
      })}
      CartExercise
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default CartExercise;
