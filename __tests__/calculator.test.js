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
    expect(age.mars()).toEqual(21);
  });

  test('return Jupiter age', () => {
    expect(age.jupiter()).toEqual(3);
  });

  test('return Mercury years of expectancy', () => {
    expect(age.mercuryExpectancy()).toEqual(250);
  });

  test('return Mercury years living past expectancy', () => {
    age.expectancy = 15;
    expect(age.mercuryExpectancy()).toEqual(100);
  });

  test('return Venus years of expectancy', () => {
    expect(age.venusExpectancy()).toEqual(97);
  });

  test('return Venus years living past expectancy', () => {
    age.expectancy = 15;
    expect(age.mercuryExpectancy()).toEqual(39);
  });
});