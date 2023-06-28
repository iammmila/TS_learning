// import React from "react";

interface Props {
  items: string[];
  heading: string;
}

function Properties(props: Props) {
  return (
    <>
      <h2>{props.heading}</h2>
      <div>{props.items}</div>
    </>
  );
}

export default Properties;
