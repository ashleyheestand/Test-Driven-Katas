const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the string if the string length is less than the maxLen', () => {
    expect(wrap('hello', 10)).to.equal('hello');
  });
  it('Does not return a single line if the string is longer than the maxLen', () => {
    expect(wrap('this is a test', 5)).to.equal('this \nis a \ntest');
  });
});
