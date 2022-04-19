import { View } from "./view.js";
import { Bet } from "./model/bet.js";
import { Bill } from "./model/bill.js";
import { Wheel } from "./model/wheel.js";
import { Ticket } from "./model/ticket.js";

let view;

export class Process {
  billsNumber = 0;
  currentStep = 1;
  bills = [];
  constructor() {
    view = new View();
    this.processOperation();
  }

  processOperation = () => {
    view.renderView(this.getTemplate());
  };

  setBillsNumber = () => {
    let value = document.getElementById("billsNumber").value;

    if (value >= 1 && value <= 5) {
      this.billsNumber = value;
      this.currentStep++;
    }

    if (this.currentStep == 2) {
      this.goToNextStep();
    } else {
      view.renderView(
        view.errorTemplate("Number must be in the range 1 - 5"),
        false
      );
    }
  };

  /**
   * Initialize step2 with new template
   */
  goToNextStep() {
    let template = this.getTemplate();
    view.renderView(template);
  }

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
    this.goToNextStep();
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

  getTemplate = () => {
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

    return template;
  };
}
