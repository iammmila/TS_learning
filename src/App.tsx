// import Message from "./assets/Message";
// import ListGroup from "./components/ListGroup";
// import Properties from "./components/Properties";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const handleOpen = () => {
    setAlertVisible(true);
    console.log("alert is visible");
  };
  const handleClose = () => {
    setAlertVisible(false);
    console.log("alert is unvisible");
  };
  return (
    <>
      {alertVisible && <Alert onClose={handleClose}>My Alert</Alert>}
      <Button onClick={handleOpen}>My Button</Button>
    </>
  );
}
export default App;
