import {sum, screamify, quietfy} from '../practice.js';

describe('Simple testing', () => {
  test("Sum testing", () => {
    expect(sum(5,2)).toEqual(7);
  })

  test("Screamify testing", () => {
    expect(screamify("hello")).toEqual("HELLO");
  })

  test("Quietfy testing", () => {
    expect(quietfy("HELLO")).toEqual("hello");
  })
})
