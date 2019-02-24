import React from "react";
import "./Calculator.css";
import Result from "./Result/Result";
import ActiveBar from "./ActiveBar/ActiveBar";
import Clear from "./ActiveBar/Clear";

function Calculator(props) {
  return (
    <div className="Calculator">
      <Result result={props.result} />
      <ActiveBar
        className="ActiveBar"
        addValue={props.addValue}
        calc={props.calc}
      />
      <Clear clear={props.clear} />
    </div>
  );
}

export default Calculator;
