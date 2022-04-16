import { View } from "./view.js";

let view;

export class Process {
  billsNumber;
  constructor() {
    view = new View();
    view.renderView(
      view.lottoTemplate(this.setBillsNumber),
      view.getContainer()
    );
  }

  setBillsNumber = () => {
    let value = document.getElementById("billsNumber").value;
    console.log(value);
    //setBillsNumber
    this.billsNumber = value;
    view.renderView(view.askBetTypeAndAmountTemplate(), view.getContainer());
  };
}
