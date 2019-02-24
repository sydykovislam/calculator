import React from "react";
import "./Clear.css";

function Clear(props) {
  return (
    <div className="Clear" onClick={() => props.clear()}>
      Clear
    </div>
  );
}

export default Clear;
