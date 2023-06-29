import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const handleSelectItem = (group: string) => {
    console.log(group);
  };

  return (
    <>
      <ListGroup onSelectGroup={handleSelectItem} />
    </>
  );
}
export default App;
