const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('../src/index');

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

describe('caesarCipher', () => {
  test('happy path', () => {
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  });
  test('wrapping from z to a', () => {
    expect(caesarCipher('zebra', 3)).toBe('cheud');
  });
  test('keeping the same case', () => {
    expect(caesarCipher('Attack at Dawn', 5)).toBe('Fyyfhp fy Ifbs');
  });
  test('punctuation marks do not change', () => {
    expect(caesarCipher('Hello World!!!', 3)).toBe('Khoor Zruog!!!');
  });
})

describe('analyzeArray', () => {
  test('happy path', () => {
    const nums = [1, 8, 3, 4, 2, 6];
    const obj = analyzeArray(nums);
    expect(obj).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test('empty array', () => {
    const nums = [];
    const obj = analyzeArray(nums);
    expect(obj).toEqual({});
  })
})