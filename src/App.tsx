import Message from "./assets/Message";
import ListGroup from "./components/ListGroup";
import Properties from "./components/Properties";
import Alert from "./components/Alert";

function App() {
  //? passing data via props
  const items = ["tokyo", " franciso"];
  //? passing function via props
  const handleSelectItem = (group: string) => {
    console.log(group);
  };

  return (
    <div>
      <Alert>
        <div>myyyy girls</div>
        <button>hello</button>
      </Alert>

      <Properties items={items} heading={"it is heading which is props"} />
      <Message />
      <p>salalalalllalalm</p>
      <ListGroup onSelectGroup={handleSelectItem} />
    </div>
  );
}
export default App;
