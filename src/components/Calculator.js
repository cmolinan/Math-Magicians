import React from 'react';

import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    document.getElementById('input').value = '0';
  }

  //   SEND to Calculator like this:
  //   const obj = [];
  //   obj.total = '1000';
  //   obj.next = '2000';
  //   obj.operation = a sign;
  //   const resp = calculate(obj, val1);

  //    RESPONDS THIS:
  //    resp.next, resp.operation, resp.total -> LIKE states definition

  onClickHandler(e) {
    // Calculate with state params
    const obj = calculate(this.state, e.target.textContent);

    // Set new values to State
    this.setState(obj);

    // Then, goto render
  }

  render() {
    const inputDOM = document.getElementById('input');
    const { next, operation, total } = this.state;

    // take the better value to Display
    const toDisplay = next || operation || total;
    if (toDisplay !== null) inputDOM.value = toDisplay;
    try {
      if (typeof toDisplay === 'object') inputDOM.value = '0';
    } catch (error) {
      // TODO
    }
    return (
      <div className="AllCalculator">
        <input type="text" id="input" readOnly />
        <div className="allButtons">
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>AC</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>+/-</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>%</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler}>÷</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>7</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>8</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>9</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler}>x</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>4</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>5</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>6</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler}>-</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>1</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>2</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>3</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler}>+</button>
          </div>
          <div className="lastrow">
            <button type="button" className="btnWhite btn0" onClick={this.onClickHandler}>0</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler}>.</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
