/* Class that handle views of the application */
import { cities } from "./model/wheel.js";

export class View {
  constructor() {
    this.templateWrapper = document.getElementById("game-container");
  }

  /**
   * Update UI with a new template.
   * The function receives step parameter (for selecting the right template)
   * and data useful for template generation
   * @param {number} step
   * @param {any} data
   */
  renderView(step, data) {
    this.templateWrapper.innerHTML = this.getTemplate(step, data);
  }

  /**
   * Display errorTemplate passing errors as array.
   * If errors is not of Array type, converts to array
   * @param {any} errors
   */
  renderErrors(errors) {
    if (!Array.isArray(errors)) {
      errors = [errors];
    }
    this.templateWrapper.prepend(this.errorTemplate(errors));
  }

  /**
   * Assign custom action to a button that has id equals to btnId parameter.
   * The action is executed on button click
   * @param {function} action
   */
  assignActionToButton(btnId, action) {
    if (this.templateWrapper) {
      let btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener("click", action);
      }
    }
  }

  /**
   * Returns the correct template in relation of the
   * step number and using data parameter for generate it (optionally)
   * @param {number} step
   * @param {any} data
   * @returns {string} template
   */
  getTemplate(step, data) {
    let template;

    switch (step) {
      case 1:
        template = this.setTicketsNumberTemplate();
        break;
      case 2:
        template = this.askBetTypeAndAmountTemplate(data);
        break;
      case 3:
        template = this.generatingTicketTemplate();
        break;
      case 4:
        template = this.ticketsTemplate(data);
        break;
    }

    return template;
  }

  /**
   * Template for step1
   * @returns template
   */
  setTicketsNumberTemplate() {
    return `
       <form>
          <div>
             <label>How many tickets do you want to generate? (min 1 - max 5)&nbsp;</label>
             <input id="ticketsNumber" type="text">
          </div>
          <br>
          ${this.buttonTemplate()}
        </form>`;
  }

  /**
   * Template for step2
   * @param {number} numberOfBills
   * @returns
   */
  askBetTypeAndAmountTemplate(numberOfBills) {
    let template = "<form>";

    for (let i = 1; i <= numberOfBills; i++) {
      template += `
         <h2>Bill ${i}</h2>
           <div>
              <label>Type of bill (ambata - ambo - terno - quaterna - cinquina):</label>
              <input id="bill-${i}-type" class="bills-types" type="text">
           </div>
           <br>
           <div>
              <label>Amount of numbers: </label>
              <input id="bill-${i}-amount" class="bills-number-amounts" type="text">
           </div>
           <br>
           <div>
              <label>Select the wheel: </label>
              <select id="wheel-${i}">
                 ${this.renderSelectOptions()}
              </select>
           </div>
          <br>
      `;
    }

    template += this.buttonTemplate();
    return template;
  }

  /**
   * Template for generation phase
   * @returns
   */
  generatingTicketTemplate() {
    return "<div>Generating tickets....</div>";
  }

  /**
   * Template for tickets
   * @param {any} data
   * @returns
   */
  ticketsTemplate(data) {
    let template = '<div class="tickets-container" style="display: flex">';

    data.forEach((bill, index) => {
      let ticket =
        "<div class='header' style='padding-top: 10px;padding-bottom: 10px;border-bottom: 2px solid black; border-bottom-style: dashed'>";
      let number = index + 1;
      ticket += `${this.printSpaces(32)} Ticket-${number} ${this.printSpaces(
        32
      )}`;
      ticket += "</div>";
      ticket += "<div class='body' style='padding: 10px;'>";
      ticket += `&nbsp;<strong>Numbers:</strong> ${bill.numbers.join(" ")}`;
      ticket += "<br>";
      ticket += `&nbsp;<strong>Wheel:</strong> ${bill.wheel.city}`;
      ticket += "<br>";
      ticket += `&nbsp;<strong>Bet: </strong> ${bill.bet.type}`;
      ticket += "</div>";
      template +=
        "<div style='margin-right: 10px; border: 4px solid black; border-style: dashed'>" +
        ticket +
        "</div>";
    });

    template += "</div>";

    return template;
  }

  printSpaces(num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += "&nbsp";
    }
    return str;
  }

  /**
   * Render options for html select type
   * @returns {string} options
   */
  renderSelectOptions() {
    let options = "";
    cities.forEach((city) => {
      options += `<option value="${city}">${city}</option>`;
    });
    return options;
  }

  /**
   * Return a template representing a html button
   * @returns {HtmlElement} btnElement
   */

  buttonTemplate() {
    return `<button id="action-btn" type="button">Next step</button>`;
  }

  /**
   * Returns a template representing the errors list
   * @param {Array<Error>} errors
   * @returns {HtmlElement} - errorsContainer
   */
  errorTemplate(errors) {
    let template = document.getElementById("errors") ?? this.getErrorsWrapper();

    template.innerHTML = null;

    errors.forEach((err) => {
      let el = document.createElement("div");
      el.textContent = err.message;
      template.append(el);
    });

    return template;
  }

  /**
   * Create and returns new error wrapper
   * @returns HtmlElement
   */

  getErrorsWrapper() {
    let wrapper = document.createElement("div");
    wrapper.id = "errors";
    wrapper.style.color = "red";
    return wrapper;
  }
}
