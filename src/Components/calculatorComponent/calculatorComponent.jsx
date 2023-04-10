import React, { Component } from 'react';
// import 'react-exp-1/src/Components/calculatorComponent/calculatorComponent.css';
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
        this.setState({ result: this.state.num1 + this.state.num2 });
      }
    
      handleSubtract = () => {
        this.setState({ result: this.state.num1 - this.state.num2 });
      }
    
      handleMultiply = () => {
        this.setState({ result: this.state.num1 * this.state.num2 });
      }
    
      handleDivide = () => {
        this.setState({ result: this.state.num1 / this.state.num2 });
      }
    
      render() {
        return (
          <div className="calculator">
            <h2>Calculator</h2>
            <form>
              <div className="number-inputs">
                <label>
                  Number 1:
                  <input type="number" value={this.state.num1} onChange={this.handleNum1Change} />
                </label>
                <label>
                  Number 2:
                  <input type="number" value={this.state.num2} onChange={this.handleNum2Change} />
                </label>
              </div>
              <div className="operator-buttons">
                <button type="button" onClick={this.handleAdd}>+</button>
                <button type="button" onClick={this.handleSubtract}>-</button>
                <button type="button" onClick={this.handleMultiply}>*</button>
                <button type="button" onClick={this.handleDivide}>/</button>
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