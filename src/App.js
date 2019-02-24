import React, { Component } from "react";
import "./App.css";
import Calculator from "./Calculator/Calculator";

class App extends Component {
  state = {
    input: ""
  };

  addValue = val => {
    this.setState({ input: this.state.input + val });
  };

  calc = () => {
    this.setState({ input: eval(this.state.input) });
  };
  clear = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="App">
        <Calculator
          addValue={this.addValue}
          result={this.state.input}
          calc={this.calc}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
