import "./App.css";
import Like from "./components/Like";

function App() {

  const onClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Like onClick={onClick} />
    </>
  );
}
export default App;
