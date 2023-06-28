import Message from "./assets/Message";
import ListGroup from "./components/ListGroup";
import Properties from "./components/Properties";

function App() {
  //? passing data via props
  const items = ["tokyo", " franciso"];
  //? passing function via props
  const handleSelectItem = (group: string) => {
    console.log(group);
  };
  return (
    <div>
      <Properties items={items} heading={"it is heading which is props"} />
      <Message />
      <p>salalalalllalalm</p>
      <ListGroup onSelectGroup={handleSelectItem} />
    </div>
  );
}
export default App;
