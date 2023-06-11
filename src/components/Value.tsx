import React, { FC } from "react";
import "../styles/value.css";

interface IValueProps {
  numberValue: number;
}

const Value: FC<IValueProps> = (props) => {
  return (
    <div className="container">
      <p className="container__value">{props.numberValue}</p>
    </div>
  );
};

export default Value;
