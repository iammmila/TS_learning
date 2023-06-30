import React from "react";

let count = 0;
const Message = () => {
  console.log("Message count: ", count);
  count++;
  console.log('Message after:',count);
  //in strict mode, there are 2 render, first render is used to primarly detecting and reporting potential issues with our code
  //while the secodn render is used to actually update user interface (UI). that is why we see 2 in console and screen.
  return <div>Message {count}</div>;
};

export default Message;
