const calculator = require('./calculator');

describe('add()', () => {
  it('returns 4 for add(2,2)', () => {
    expect(calculator.add(2,2)).toBe(4);
  });

  it('returns 5 for add(2,3)', () => {
    expect(calculator.add(2,3)).toBe(5);
  });

  it('returns 6 for add(2,4)', () => {
    expect(calculator.add(2,4)).toBe(6);
  });
});

describe('subtract()', () => {
  it('returns 3 for subtract(4,1)', () => {
    expect(calculator.subtract(4,1)).toBe(3);
  });

  it('returns 2 for subtract(4,2)', () => {
    expect(calculator.subtract(4,2)).toBe(2);
  });

  it('returns 1 for subtract(4,3)', () => {
    expect(calculator.subtract(4,3)).toBe(1);
  });
});

describe('divide()', () => {
  it('returns 5 for divide(10,2)', () => {
    expect(calculator.divide(10,2)).toBe(5);
  });

  it('returns 4 for divide(8,2)', () => {
    expect(calculator.divide(8,2)).toBe(4);
  });

  it('returns 3 for divide(6,2)', () => {
    expect(calculator.divide(6,2)).toBe(3);
  });
});

describe('multiply()', () => {
  it('returns 4 for multiply(2,2)', () => {
    expect(calculator.multiply(2,2)).toBe(4);
  });

  it('returns 6 for multiply(2,3)', () => {
    expect(calculator.multiply(2,3)).toBe(6);
  });

  it('returns 8 for add(2,4)', () => {
    expect(calculator.multiply(2,4)).toBe(8);
  });
});