import ListGroup from "./components/ListGroup";

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
