import { useState } from "react";

const Tags = () => {
  const [tags, setTags] = useState([" blue ", " red "]);

  const handleClick = () => {
    //Add new item
    setTags([...tags, "exciting"]);

    //remove an item
    setTags(tags.filter((tag) => tag !== " blue "));

    //update an array
    setTags(tags.map((tag) => (tag !== " blue " ? " white " : " yellow ")));
  };
  return (
    <>
      {tags}
      <hr />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Tags;
