/* Class that handle views of the application */

import { cities } from "./model/wheel.js";

export class View {
  constructor() {
    this.container =
      document.getElementById("game-container") ??
      document.getElementsByTagName("body")[0];
  }

  renderView = (template, clearContainer = true) => {
    if (clearContainer) {
      this.container.innerHTML = "";
    }
    this.container.append(template);
  };

  lottoTemplate = (action) => {
    let element = document.createElement("form");
    let label = document.createElement("label");
    label.innerText = "How many bills do you want to generate? (min 1 - max 5)";
    element.append(label);
    let inputElement = document.createElement("input");
    inputElement.setAttribute("id", "billsNumber");
    inputElement.setAttribute("type", "number");
    element.append(inputElement);
    let btnElement = document.createElement("button");
    btnElement.setAttribute("type", "button");

    btnElement.innerText = "OK";
    if (action) {
      btnElement.addEventListener("click", action);
    }
    element.append(btnElement);

    return element;
  };

  askBetTypeAndAmountTemplate = (numberOfBills, action) => {
    let element = document.createElement("form");

    for (let i = 1; i <= numberOfBills; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = `Bill ${i}`;
      element.append(h2);
      let label = document.createElement("label");
      let brElement = document.createElement("br");
      label.innerText = `Insert the type of bill: `;
      element.append(label);
      let inputElement = document.createElement("input");
      inputElement.setAttribute("id", `bill-${i}-type`);
      inputElement.setAttribute("class", "bills-types");
      inputElement.setAttribute("type", "text");
      element.append(inputElement);

      label = document.createElement("label");
      label.innerHTML = `&nbsp;&nbsp;Insert the amount of numbers: `;
      element.append(label);
      inputElement = document.createElement("input");
      inputElement.setAttribute("id", `bill-${i}-amount`);
      inputElement.setAttribute("class", "bills-number-amounts");
      inputElement.setAttribute("type", "number");
      element.append(inputElement);

      element.append(brElement);

      let wheelContainer = document.createElement("div");
      label = document.createElement("label");
      label.innerHTML = `Select the wheel: `;
      wheelContainer.append(label);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("id", `wheel-${i}`);

      cities.forEach((city) => {
        let option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        selectElement.append(option);
      });

      wheelContainer.append(selectElement);
      element.append(wheelContainer);
    }

    let btnElement = document.createElement("button");
    btnElement.setAttribute("type", "button");

    btnElement.innerText = "OK";
    if (action) {
      btnElement.addEventListener("click", action);
    }
    element.append(btnElement);

    return element;
  };

  generatingTicketTemplate = (action) => {
    let element = document.createElement("div");
    element.textContent = "Generating tickets....";
    setTimeout(() => action, 3000);
  };

  errorTemplate = (error) => {
    return `<div class='error'>${error}</div>`;
  };
}
