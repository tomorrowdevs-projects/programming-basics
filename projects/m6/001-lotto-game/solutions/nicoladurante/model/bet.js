const possibleValues = ["ambata", "ambo", "terno", "quaterna", "cinquina"];

export class Bet {
  type; //one from Ambata, Ambo.... extends with class for now strings

  constructor(type) {
    this.type = type;
  }

  static getValue(value) {
    return possibleValues.find((val) => val === value.toLowerCase());
  }
}
