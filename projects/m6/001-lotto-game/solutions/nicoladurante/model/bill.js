export class Bill {
  amountOfNumbers;
  bet;
  wheel;

  constructor(amount, bet, wheel) {
    this.amountOfNumbers = amount;
    this.bet = bet;
    this.wheel = wheel;
  }

  static getAmountOfNumbers = (amount) => {
    return amount >= 1 && amount <= 10 ? Number(amount) : null;
  };
}
