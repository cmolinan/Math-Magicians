import React, { useState, useEffect } from 'react';

import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, SetState] = useState({});

  useEffect(() => {
    document.getElementById('input').value = '0';
  }, []);

  const onClickHandler = (e) => {
    // Calculate with state params
    const obj = calculate(state, e.target.textContent);

    // Set new values to State
    SetState(obj);
  };

  const inputDOM = document.getElementById('input');
  const { next, operation, total } = state;
  let n = true;
  let o = true;
  let t = true;

  if (next === undefined || next === null) n = false;
  if (operation === undefined || operation === null) o = false;
  if (total === undefined || total === null) t = false;

  // take values forDisplay
  const toDisplay = next || operation || total;
  if (toDisplay !== undefined) {
    if (toDisplay !== null) inputDOM.value = (t ? total : '') + (o ? operation : '') + (n ? next : '');
    try {
      if (typeof toDisplay === 'object') inputDOM.value = '0';
    } catch (error) {
      // TODO
    }
  }
  return (
    <div className="AllCalculator">
      <input type="text" id="input" readOnly />
      <div className="allButtons">
        <div className="row">
          <button type="button" className="btnWhite" onClick={onClickHandler}>AC</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>+/-</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>%</button>
          <button type="button" className="btnOrange" onClick={onClickHandler}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="btnWhite" onClick={onClickHandler}>7</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>8</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>9</button>
          <button type="button" className="btnOrange" onClick={onClickHandler}>x</button>
        </div>
        <div className="row">
          <button type="button" className="btnWhite" onClick={onClickHandler}>4</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>5</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>6</button>
          <button type="button" className="btnOrange" onClick={onClickHandler}>-</button>
        </div>
        <div className="row">
          <button type="button" className="btnWhite" onClick={onClickHandler}>1</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>2</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>3</button>
          <button type="button" className="btnOrange" onClick={onClickHandler}>+</button>
        </div>
        <div className="lastrow">
          <button type="button" className="btnWhite btn0" onClick={onClickHandler}>0</button>
          <button type="button" className="btnWhite" onClick={onClickHandler}>.</button>
          <button type="button" className="btnOrange" onClick={onClickHandler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
