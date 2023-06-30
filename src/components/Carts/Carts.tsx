interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Carts = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <span>Carts</span>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Carts;
