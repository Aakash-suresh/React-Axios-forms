import React, { Component } from 'react';
import '../calculatorComponent/calculatorComponent.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  handleNum1Change = (event) => {
    this.setState({ num1: parseInt(event.target.value) });
  }

  handleNum2Change = (event) => {
    this.setState({ num2: parseInt(event.target.value) });
  }

  handleAdd = () => {
    if (this.state.num1 === 0 && this.state.num2 === 0) {
      alert("Please enter valid input");
    } else {
      this.setState({ result: this.state.num1 + this.state.num2 });
    }
  }

  handleSubtract = () => {
    if (this.state.num1 === 0 && this.state.num2 === 0) {
      alert("Please enter valid input");
    } else {
      this.setState({ result: this.state.num1 - this.state.num2 });
    }
  }

  handleMultiply = () => {
    if (this.state.num1 === 0 && this.state.num2 === 0) {
      alert("Please enter valid input");
    } else {
      this.setState({ result: this.state.num1 * this.state.num2 });
    }
  }

  handleDivide = () => {
    if (this.state.num1 === 0 && this.state.num2 === 0) {
      alert("Please enter valid input");
    } else {
      this.setState({ result: this.state.num1 / this.state.num2 });
    }
  }

  handleClear = () => {
    this.setState({ num1: 0, num2: 0, result: 0 });
  }

  render() {
    return (
      <div className="calculator">
        <h2>Calculator</h2>
        <form>
          <div className="number-inputs">
            <label>
              Number 1:
              <input type="text" value={this.state.num1} onChange={this.handleNum1Change} />
            </label>
            <label>
              Number 2:
              <input type="text" value={this.state.num2} onChange={this.handleNum2Change} />
            </label>
          </div>
          <div className="operator-buttons">
            <button type="button" onClick={this.handleAdd}>+</button>
            <button type="button" onClick={this.handleSubtract}>-</button>
            <button type="button" onClick={this.handleMultiply}>*</button>
            <button type="button" onClick={this.handleDivide}>/</button>
            <button type="button" onClick={this.handleClear}>Clear</button>
          </div>
          <div className="result-input">
            <label>
              Result:
              <input type="number" value={this.state.result} disabled />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default CalculatorComponent;
