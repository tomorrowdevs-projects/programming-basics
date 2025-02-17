import { Wheel } from "../app/model/wheel";

test("validate should return empty errors array if city is valid", () => {
  const errors = Wheel.validate("Venezia");
  expect(errors).toHaveLength(0);
});

test("validate should return an errors array with error Wheel is invalid", () => {
  const errors = Wheel.validate("invalid value");
  expect(errors).toHaveLength(1);
  expect(errors[0]).toBe("Wheel is invalid");
});
