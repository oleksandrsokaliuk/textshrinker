import React, { FC } from "react";
import "../styles/button.css";

interface IButtonProps {
  text: string;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <div className="container">
      <button className="container__button">{props.text}</button>
    </div>
  );
};

export default Button;
