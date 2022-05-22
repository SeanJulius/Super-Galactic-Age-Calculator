import Age from './../src/js/calculator.js';

//beforeEach will confer with all tests and make age of use.
describe('Age', () => {
  let age;
  beforeEach( () => {
    age = new Age(39, 99);
  });

  Test(' should instantiate a new Age constructor properties', () => {
    expect(age.earth).toEqual(39);
    expect(age.expectancy).toEqual(99);
  });
});