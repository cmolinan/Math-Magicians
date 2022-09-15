import calculate from '../../logic/calculate';

test('pressing AC button', () => {
  const object = {
    total: '40',
    next: '20',
    operation: '+',
  };
  const button = 'AC';
  const expected = {
    total: null,
    next: null,
    operation: null,
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('pressing a number button in an operation', () => {
  const object = {
    total: '12',
    next: '0',
    operation: '/',
  };
  const button = '9';
  const expected = {
    total: '12',
    next: '9',
    operation: '/',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('Pressing another operation key when there is an existing operation', () => {
  const object = {
    total: '23',
    next: null,
    operation: '+',
  };
  const button = 'x';
  const expected = {
    total: '23',
    next: null,
    operation: 'x',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('Pressing an operation key after a number', () => {
  const object = {
    total: '91',
    next: null,
    operation: null,
  };
  const button = '-';
  const expected = {
    total: '91',
    next: null,
    operation: '-',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});
