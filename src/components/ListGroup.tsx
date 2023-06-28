import React, { useState } from "react";

function ListGroup() {
  const groups = ["slm", "slm1", "slm2"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ul className="list-group">
      {groups.map((group, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={group}
          onClick={() =>{ setSelectedIndex(index), console.log(group, index)}}
        >
          {group}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
