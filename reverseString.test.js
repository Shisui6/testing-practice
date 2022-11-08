const reverseString = require('./reverseString');

test('returns olleh for hello', () => {
  expect(reverseString('hello')).toBe('olleh');
})