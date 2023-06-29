import React, { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  background-color: red;
  color: white;
`;

const ListItem = styled.li<ListItemProps>`
  margin: 10px;
  background-color: ${(props) => (props.active ? "blue" : "pink")};
`;

interface ListItemProps {
  active: boolean;
}

interface Props {
  onSelectGroup: (group: string) => void;
}

function ListGroup({ onSelectGroup }: Props) {
  const groups = ["slm sifir", "slm bir", "slm iki"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List>
      {groups.map((group, index) => (
        <ListItem
          active={index === selectedIndex}
          key={group}
          onClick={() => {
            setSelectedIndex(index), onSelectGroup(group);
          }}
        >
          {group}
        </ListItem>
      ))}
    </List>
  );
}

export default ListGroup;
