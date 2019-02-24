import React from "react";
import "./ActiveBar.css";
import Button from "./Button.jsx";

function ActiveBar(props) {
  return (
    <div className="ActiveBar">
      <div className="row">
        <Button addValue={props.addValue}>7</Button>
        <Button addValue={props.addValue}>8</Button>
        <Button addValue={props.addValue}>9</Button>
        <Button addValue={props.addValue}>/</Button>
      </div>
      <div className="row">
        <Button addValue={props.addValue}>4</Button>
        <Button addValue={props.addValue}>5</Button>
        <Button addValue={props.addValue}>6</Button>
        <Button addValue={props.addValue}>*</Button>
      </div>
      <div className="row">
        <Button addValue={props.addValue}>1</Button>
        <Button addValue={props.addValue}>2</Button>
        <Button addValue={props.addValue}>3</Button>
        <Button addValue={props.addValue}>-</Button>
      </div>
      <div className="row">
        <Button addValue={props.addValue}>.</Button>
        <Button addValue={props.addValue}>0</Button>
        <Button addValue={props.calc}>=</Button>
        <Button addValue={props.addValue}>+</Button>
      </div>
    </div>
  );
}

export default ActiveBar;
