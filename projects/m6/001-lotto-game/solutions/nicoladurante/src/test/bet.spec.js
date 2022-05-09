import { Bet } from "../app/model/bet";

test("validate should return empty errors array if type is one of ambata, ambo, terno, quaterna, cinquina", () => {
  const errors = Bet.validate("ambo");
  expect(errors).toHaveLength(0);
});

test("validate should return an errors array with error TypeOfBill should be one of (ambata, ambo, terno, quaterna, cinquina)", () => {
  const errors = Bet.validate("invalid value");
  expect(errors).toHaveLength(1);
  expect(errors[0]).toBe(
    "TypeOfBill should be one of (ambata, ambo, terno, quaterna, cinquina)"
  );
});
