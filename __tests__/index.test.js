const factorize = require('../index');

describe('factorize ... ', () => {
  test('returns a factorized number ... ', () => {
    const actual = factorize(9);
    const expected = 81;
    expect(actual).toEqual(expected);
  });
});
