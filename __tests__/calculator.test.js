import Age from './../src/js/calculator.js';

//beforeEach will confer with all tests and make age of use.
describe('Age', () => {
  let age;
  beforeEach( () => {
    age = new Age(39, 99);
  });

  test('should instantiate a new Age constructor properties', () => {
    expect(age.earth).toEqual(39);
    expect(age.expectancy).toEqual(99);
  });

  test('return Mercury age', () => {
    expect(age.mercury()).toEqual(163);
  });

  test('return Venus age', () => {
    expect(age.venus()).toEqual(63);
  });

  test('return Mars age', () => {
    expect(age.venus()).toEqual(63);
  });
});