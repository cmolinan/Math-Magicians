import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/HomePage';
import CalculatorPage from '../../pages/CalculatorPage';
import Quotes from '../../pages/QuotePage';

describe('Testing the Home, Quote and Calculator pages render correctly', () => {
  it('Home page renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Quote page renders correctly', () => {
    const { asFragment } = render(<Quotes />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Calculator page renders correctly', () => {
    const { asFragment } = render(<CalculatorPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
