const stringLength = require('./stringLength');

test('returns 5 for hello', () => {
  expect(stringLength('hello')).toBe(5);
})

test('throws error for string length < 1', () => {
  expect(() => stringLength('')).toThrow(Error);
})

test('throws error for string length > 10', () => {
  expect(() => stringLength('hellooooooo')).toThrow(Error);
})