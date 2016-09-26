/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';

describe('Arithmetic', () => {
  it('should calculate 1 + 1 correctly', () => {
    const expectedResult = 2;
    expect(1 + 1).to.equal(expectedResult);
  });
  it('should calculate 100 / 10 correctly', () => {
    const expectedResult = 10;
    expect(100 / 10).to.equal(expectedResult);
  });
});
