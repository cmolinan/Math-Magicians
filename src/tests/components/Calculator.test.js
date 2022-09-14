import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../components/Calculator';

const DomContainer = () => {
  <BrowserRouter>
    <Calculator />
  </BrowserRouter>;
};

it('Check if renders', () => {
  const tree = renderer.create(<DomContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if a value is displayed', () => {
  render(<Calculator />);
  const buttonPressed = screen.getByText(/9/i);
  fireEvent.click(buttonPressed);

  const displayElement = document.getElementById('input');

  expect(displayElement.value).toBe('9');
});

it('Check if it is displayed the result of an operation', () => {
  render(<Calculator />);
  const firstNum = screen.getByText(/4/i);
  const opKey = screen.getByText('x');
  const secondNum = screen.getByText(/9/i);
  const eqKey = screen.getByText('=');

  const displayElement = document.getElementById('input');

  fireEvent.click(firstNum);
  fireEvent.click(opKey);
  fireEvent.click(secondNum);
  fireEvent.click(eqKey);
  expect(displayElement.value).toBe('36');
});
