import React, { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "bug1",
      fixed: false,
    },
    {
      id: 2,
      title: "bug2",
      fixed: true,
    },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    console.log(bugs);
  };

  return (
    <>
      <hr />
      <ul>
        {bugs.map((bug) => {
          return (
            <>
              <li>
                {bug.id}, {bug.title}, {bug.fixed}
              </li>
            </>
          );
        })}
      </ul>
      <hr />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Bugs;
