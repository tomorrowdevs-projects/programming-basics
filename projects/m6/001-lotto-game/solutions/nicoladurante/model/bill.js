export class Bill {
  numbers = [];

  constructor(numbers) {
    this.numbers = numbers;
  }

  getNumbers = () => {
    return this.numbers;
  };
}
