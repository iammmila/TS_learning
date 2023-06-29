import React from "react";

interface Props {
  children: string;
  //if it is optional we wwrite '?'
  color?: string;
  onClick: () => void;
}
const Button = ({ children, color='primary', onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
