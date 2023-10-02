const { capitalize, reverseString, calculator } = require('../src/index');

describe('capitalize', () => {
  test('Capitalizes the first character in a string', () => {
    expect(capitalize('urban fare')).toBe('Urban fare');
  })
  test('Capitalizes a single letter', () => {
    expect(capitalize('a')).toBe('A');
  })
  test('Capitalizes an empty string', () => {
    expect(capitalize('')).toBe('');
  })
  test('Capitalizing a capitalized word should do nothing', () => {
    expect(capitalize('Save-On-Foods')).toBe('Save-On-Foods');
  })
});

describe('reverseString', () => {
  test('Reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  })
  test('Reverses a palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  })
  test('empty string', () => {
    expect(reverseString('')).toBe('');
  })
});

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test('subtract', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test('multiply', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });
  test('divide', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
})