import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  //if it is optional we wwrite '?'
  color?: string;
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      className={[styles.button, styles.container].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
