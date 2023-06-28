import { MouseEvent } from "react";
function Message() {
  //event handler
  // eger biz type'i belirlemesek ve  import etmesek onda biz event. yazdiqda propertyleri cagira bilmiyeceyik
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <button onClick={handleClick}>Hello</button>
    </>
  );
}
export default Message;
