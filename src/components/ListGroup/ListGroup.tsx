import React, { useState } from "react";
import "./ListGroup.css";

interface Props {
  onSelectGroup: (group: string) => void;
}

function ListGroup({ onSelectGroup }: Props) {
  const groups = ["slm sifir", "slm bir", "slm iki"];
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
          onClick={() => {
            setSelectedIndex(index), onSelectGroup(group);
          }}
        >
          {group}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
