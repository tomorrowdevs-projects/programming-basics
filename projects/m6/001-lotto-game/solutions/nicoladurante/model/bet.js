const possibleValues = ["ambata", "ambo", "terno", "quaterna", "cinquina"];

export class Bet {
  type; //one from Ambata, Ambo.... extends with class for now strings

  constructor(type) {
    this.type = type;
  }

  isValid() {
    return possibleValues.find((val) => val === this.type.toLowerCase());
  }

  static validate(betType) {
    let errors = [];

    if (!possibleValues.find((val) => val === betType.toLowerCase())) {
      errors.push(
        "TypeOfBill should be one of (ambata, ambo, terno, quaterna, cinquina"
      );
    }

    return errors;
  }
}
