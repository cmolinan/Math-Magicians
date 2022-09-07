import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AllCalculator">
        <input type="text" id="input" />
        <div className="allButtons">
          <div className="row">
            <button type="button" className="btnWhite" id="AC">AC</button>
            <button type="button" className="btnWhite" id="sign">+/-</button>
            <button type="button" className="btnWhite" id="percent">%</button>
            <button type="button" className="btnOrange" id="div">/</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" id="b7">7</button>
            <button type="button" className="btnWhite" id="b8">8</button>
            <button type="button" className="btnWhite" id="b9">9</button>
            <button type="button" className="btnOrange" id="mult">x</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" id="b4">4</button>
            <button type="button" className="btnWhite" id="b5">5</button>
            <button type="button" className="btnWhite" id="b6">6</button>
            <button type="button" className="btnOrange" id="sub">-</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" id="b1">1</button>
            <button type="button" className="btnWhite" id="b2">2</button>
            <button type="button" className="btnWhite" id="b3">3</button>
            <button type="button" className="btnOrange" id="sum">+</button>
          </div>
          <div className="lastrow">
            <button type="button" className="btnWhite" id="b0">0</button>
            <button type="button" className="btnWhite" id="point">.</button>
            <button type="button" className="btnOrange" id="equal">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
