const capitalize = require('./capitalize');

test('returns Hello for hello', () => {
  expect(capitalize('hello')).toBe('Hello');
})