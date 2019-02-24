import React from "react";
import "./Button.css";

let isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

function Button(props) {
  return (
    <div
      className={`Button ${isOperator(props.children) ? null : "operator"} `}
      onClick={() => props.addValue(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
