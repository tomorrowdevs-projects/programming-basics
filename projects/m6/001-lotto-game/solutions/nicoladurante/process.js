import { View } from "./view.js";
import { Bet } from "./model/bet.js";
import { Bill } from "./model/bill.js";
import { Wheel } from "./model/wheel.js";
import { Ticket } from "./model/ticket.js";

let view = new View();

export class Process {
  constructor() {
    this.startGame();
  }

  /**
   * Start a new game by init properties
   * and renders the starter view
   */
  startGame = () => {
    this.billsNumber = 0;
    this.currentStep = 1;
    this.bills = [];
    this.updateUI();
  };

  /**
   * Check if bills number is a number from 1 to 5.
   * If it is, store in class member, increment step and updateUI,
   * else render errors in template
   */
  setBillsNumber = () => {
    let value = parseInt(document.getElementById("billsNumber").value);
    let error;

    if (!value || isNaN(value)) {
      error = new Error("The value must be a number");
    }

    if (value && (value < 1 || value > 5)) {
      error = new Error("Number must be in the range 1 - 5");
    }

    if (value >= 1 && value <= 5) {
      this.billsNumber = value;
      this.currentStep++;
    }

    this.updateUI(error);
  };

  /**
   * Update UI by getting the correct template and
   * calling view.renderView
   * method
   */
  updateUI = (error) => {
    let template = error ? this.getErrorTemplate(error) : this.getTemplate();
    view.renderView(template);
  };

  createBill = (index) => {
    let amount = document.querySelector(`#bill-${index}-amount`).value;

    let amountOfNumbers = Bill.getAmountOfNumbers(amount);

    let betValue = Bet.getValue(
      document.querySelector(`#bill-${index}-type`).value
    );

    let wheel = Wheel.getWheel(document.querySelector(`#wheel-${index}`).value);

    let bill = new Bill(amountOfNumbers, betValue, wheel);

    return bill;
  };

  askBetTypeAndAmount = () => {
    for (let i = 1; i <= this.billsNumber; i++) {
      let bill = this.createBill(i);
      this.bills.push(bill);
    }

    this.currentStep++;
    this.updateUI();
  };

  getNumbersFrom1To90 = () => {
    let numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  generateTickets = (bills) => {
    bills.forEach((bill) => {
      let ticket = Object.assign(new Ticket(), bill);
      let range = this.getNumbersFrom1To90();
      ticket.numbers = [];
      let amount = bill.amountOfNumbers;
      for (let i = 1; i <= amount; i++) {
        let index = Math.floor(Math.random() * range.length);
        ticket.numbers.push(range[index]);
        ticket.numbers.splice(index, 1);
      }
      ticket.timestamp = Date.now();
      console.log(ticket);
    });

    this.currentStep++;
    this.printTickets();
  };

  printTickets = () => {};

  getTemplate = (errors) => {
    let template;

    if (this.currentStep == 1) {
      template = view.lottoTemplate(this.setBillsNumber);
    }

    if (this.currentStep == 2) {
      template =
        this.billsNumber >= 1 && this.billsNumber <= 5
          ? view.askBetTypeAndAmountTemplate(
              this.billsNumber,
              this.askBetTypeAndAmount
            )
          : view.errorTemplate("Number must be in the range 1 - 5");
    }

    if (this.currentStep == 3) {
      template = view.generatingTicketTemplate(
        this.generateTickets(this.bills)
      );
    }

    /* if (errors) {
      if (!Array.isArray(errors)) {
        errors = [errors];
      }
      template = view.errorTemplate(template, errors);
    }*/

    return template;
  };

  getErrorTemplate = (errors) => {
    let template = this.getTemplate();

    if (errors) {
      if (!Array.isArray(errors)) {
        errors = [errors];
      }
      template = view.errorTemplate(template, errors);
    }

    return template;
  };
}
