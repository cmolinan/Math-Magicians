import React from 'react';

import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onepoint: false, empty: true, next: '', total: '', tmp: '', oper: '', reset: true, sign: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.getElementById('input').value = '0';
  }

  onClickHandler = (event) => {
    const inputDOM = document.getElementById('input');
    const val1 = event.target.innerText;
    console.log('tecla click: ', val1, '\n');

    const { onepoint } = this.state;
    const { empty } = this.state;
    const { next } = this.state;
    let { tmp } = this.state;
    const { total } = this.state;
    const { oper } = this.state;
    const { reset } = this.state;
    const { sign } = this.state;

    if ((val1 === '0') && (empty || reset)) return;
    if ((val1 === '.') && onepoint) return;
    if ((val1 === '.') && (empty || reset)) {
      document.getElementById('input').value = '';
    }
    if (val1 === '.') this.setState({ onepoint: true });
    if (val1 === 'AC') {
      this.setState(
        {
          onepoint: false, empty: true, next: '', total: '', tmp: '', oper: '', reset: true, sign: false,
        },
      );
      document.getElementById('input').value = '0';
      return;
    }
    let tmpSign = false;

    if ((val1 === '+/-') && (total !== '')) tmpSign = true;

    let tmpNext = '';
    let tmpTotal = '';
    this.setState({ reset: false });
    const regex = /^\d*\.?\d*$/;
    if (regex.test(val1)) {
      if (sign) return; // there is a sign change and waiting only for an operation
      this.setState({ empty: false });
      if ((inputDOM.value === '0') && val1 !== '.') inputDOM.value = '';
      inputDOM.value += val1;
      this.setState({ tmp: tmp += val1 });
    } else {
      if (empty && total === '') return;
      if ((sign) && ('+-x÷='.indexOf(val1) === -1)) return;
      this.setState({ sign: false });

      if (tmpSign) {
        this.setState({ tmp: '-'.concat(tmp) });
        this.setState({ sign: true });
        inputDOM.value += '(-)';
        return;
      }
      this.setState({ oper: val1 });
      inputDOM.value += val1;
      this.setState({ empty: true });
      this.setState({ onepoint: false });
      tmpNext = tmp;
      // tmpTmp = '';
      this.setState({ next: tmp });
      this.setState({ tmp: '' });

      if (total === '') {
        this.setState({ total: next });
        tmpTotal = tmpNext;

        this.setState({ next: '' });
        tmpNext = '';
      } else {
        tmpTotal = total;
      }

      const obj = [];
      this.setState({ next: tmp });
      // tmpNext = tmpTmp;
      obj.total = tmpTotal;
      obj.next = tmpNext;
      obj.operation = oper;

      console.log('SEND-> Total: ', obj.total, 'Next: ', obj.next, 'Operation: ', val1, '\n');
      const resp = calculate(obj, val1);
      console.log('RESPONSE -> next: ', resp.next, 'operation: ', resp.operation, 'total: ', resp.total);

      // if (resp.total === null) resp.total = '0';
      // if (resp.next !== null) resp.total = '0';
      document.getElementById('input').value = resp.total + ((resp.operation === null) ? '' : resp.operation);

      this.setState({ total: resp.total });
      this.setState({ next: resp.next });
      console.log('Total: ', resp.total);
    }
  }

  // handleKeyPress = (event) => {
  //   const keyP = event.key;
  //   console.log('Pressed:', keyP);
  //   // const val2 = '500';
  //   // {inp1]keyP;
  //   this.setState({ inp1: keyP });
  //   // document.getElementById('input').value = {this.state.inp1 };
  // }

  onChangeHandler = (event) => {
    const inputTxt = event.target.value;
    console.log(inputTxt, inputTxt.length);
  }

  /**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

  // onClickHandler = (event) => {
  //   const val1 = event.target.innerText;
  //   // console.log(event.target.innerText);
  //   console.log('target: ', val1, '\n');
  //   const obj = [];
  //   obj.total = '1000';
  //   obj.next = '2000';
  //   obj.operation = val1;

  //   console.log('SEND-> Total: ', obj.total, 'Next: ', obj.next, 'Operation: ', val1, '\n');
  //   const resp = calculate(obj, val1);
  //   console.log('RESPONSE -> next: ', resp.next, 'operation: ',
  //         resp.operation, 'total: ', resp.total);
  //   document.getElementById('input').value = resp.total;
  //   // this.setState({
  //   //   [event.target.name]: event.target.value,
  //   // });
  // }

  // handleKeyPress = (event) => {
  //   const keyP = event.key;
  //   console.log('Pressed:', keyP);
  //   // const val2 = '500';
  //   // {inp1]keyP;
  //   this.setState({ inp1: keyP });
  //   // document.getElementById('input').value = {this.state.inp1 };
  // }

  render() {
    return (
      <div className="AllCalculator">
        <input type="text" id="input" readOnly />
        <div className="allButtons">
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="AC">AC</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="sign">+/-</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="percent">%</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler} id="div">÷</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b7">7</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b8">8</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b9">9</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler} id="mult">x</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b4">4</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b5">5</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b6">6</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler} id="sub">-</button>
          </div>
          <div className="row">
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b1">1</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b2">2</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b3">3</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler} id="sum">+</button>
          </div>
          <div className="lastrow">
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="b0">0</button>
            <button type="button" className="btnWhite" onClick={this.onClickHandler} id="point">.</button>
            <button type="button" className="btnOrange" onClick={this.onClickHandler} id="equal">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
