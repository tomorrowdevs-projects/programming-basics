/* Class that handles the application UI */

import { Templates } from "./templates.js";

export class View {
  templates;
  constructor() {
    this.templateWrapper = document.getElementById("game-container");
    this.templates = new Templates();
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
    this.templateWrapper.prepend(this.getTemplate(null, errors));
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
   * Assign custom action to a button that has id equals to btnId parameter.
   * The action is executed on button click
   * @param {string} btnId
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
   * If step is out of the range, should return errorTemplate
   * @param {number} step
   * @param {any} data
   * @returns {string} - the current step template
   */
  getTemplate(step, data) {
    let template;

    switch (step) {
      case 1:
        template = this.templates.setTicketsNumberTemplate();
        break;
      case 2:
        template = this.templates.askBetTypeAndAmountTemplate(data);
        break;
      case 3:
        template = this.templates.generatingTicketTemplate();
        break;
      case 4:
        template = this.templates.ticketsTemplate(data);
        break;

      default:
        template = this.templates.errorTemplate(data);
        break;
    }

    return template;
  }
}
