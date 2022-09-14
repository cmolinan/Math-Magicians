import operate from '../../logic/operate';

test('Sum values', () => {
  const result = operate(7, 14, '+');
  expect(result).toEqual('21');
});

test('Substract values', () => {
  const result = operate(-10, 2, '-');
  expect(result).toEqual('-12');
});

test('Multiply values', () => {
  const result = operate(-16, 0.3, 'x');
  expect(result).toEqual('-4.8');
});

test('Divide two values', () => {
  const result = operate(93, 3, '÷');
  expect(result).toEqual('31');
});

test('Divide a value by 0', () => {
  const result = operate(47, 0, '÷');
  expect(result).toEqual("Can't divide by 0.");
});

test('Modulo with two values', () => {
  const result = operate(41, -4, '%');
  expect(result).toEqual('1');
});
