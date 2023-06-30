import { useState } from "react";
import "./Like.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [empty, setEmpty] = useState(true);
  const toggle = () => {
    setEmpty(!empty);
    onClick();
  };

  if (empty)
    return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
};

export default Like;
