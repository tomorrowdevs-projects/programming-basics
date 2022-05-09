import { Templates } from "../app/templates";
import { Ticket } from "../app/model/ticket";
import * as utils from "../app/utils";

describe("templates", () => {
  let templates;
  beforeAll(() => {
    templates = new Templates();
  });

  test("getErrorsWrapper should return an html div element", () => {
    const element = templates.getErrorsWrapper();
    expect(element).toBeInstanceOf(HTMLDivElement);
    expect(element.id).toBe("errors");
    expect(element.style.color).toBe("red");
  });

  test("errorTemplate should get errorsWrapper and append two errors to it as HTMLDivElements", () => {
    const spy = jest.spyOn(templates, "getErrorsWrapper");
    const errors = [new Error("error1"), new Error("error2")];
    document.body.innerHTML = `<div id="errors">content</div>`;

    const template = templates.errorTemplate(errors);

    expect(spy).not.toHaveBeenCalled();
    expect(template.id).toBe("errors");
    expect(template.children).toHaveLength(2);
    for (let i = 0; i < template.children.length; i++) {
      expect(template.children[i]).toBeInstanceOf(HTMLDivElement);
      expect(template.children[i].textContent).toBe("error" + (i + 1));
    }
  });

  test("errorTemplate should create errorsWrapper by calling getErrorsWrapper if document.body.innerHTML is null and append an error as HTMLDivElement", () => {
    const spy = jest.spyOn(templates, "getErrorsWrapper");
    const errors = [new Error("error1")];
    document.body.innerHTML = null;

    const template = templates.errorTemplate(errors);

    expect(spy).toHaveBeenCalled();
    expect(template.children).toHaveLength(1);
    for (let i = 0; i < template.children.length; i++) {
      expect(template.children[i]).toBeInstanceOf(HTMLDivElement);
      expect(template.children[i].textContent).toBe("error" + (i + 1));
    }
  });

  test("buttonTemplate should return a new HTML button with id=action-btn, type=button and text=Next step", () => {
    const button = templates.buttonTemplate();

    expect(button).toEqual(
      `<button id="action-btn" type="button">Next step</button>`
    );
  });

  test("setTicketsNumberTemplate should return a form with a div element and append the result of buttonTemplate call to it", () => {
    const buttonTemplate = `<button id="action-btn" type="button">Next step</button>`;
    const testTemplate = `
       <form>
          <div>
             <label>How many tickets do you want to generate? (min 1 - max 5)&nbsp;</label>
             <input id="ticketsNumber" type="text">
          </div>
          <br>
          ${buttonTemplate}
        </form>`;

    const spy = jest
      .spyOn(templates, "buttonTemplate")
      .mockReturnValue(buttonTemplate);

    const template = templates.setTicketsNumberTemplate();
    expect(spy).toHaveBeenCalled();
    expect(template.replace(/\s/g, "")).toEqual(
      testTemplate.replace(/\s/g, "")
    );
  });

  test("askBetTypeAndAmountTemplate should return a form and append the result of buttonTemplate call to it", () => {
    const option = `<option value="Bari">Bari</option>`;

    const renderSelectOptions = jest
      .spyOn(templates, "renderSelectOptions")
      .mockReturnValue(option);

    const buttonTemplate = `<button id="action-btn" type="button">Next step</button>`;

    const buttonSpy = jest
      .spyOn(templates, "buttonTemplate")
      .mockReturnValue(buttonTemplate);

    const numberOfBills = 1;

    let testTemplate = `<form>`;

    const fn = jest.fn((i) => {
      return `
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
                 ${renderSelectOptions()}
              </select>
           </div>`;
    });

    for (let i = 1; i <= numberOfBills; i++) {
      testTemplate += fn(i);
    }

    testTemplate += `<br>${buttonSpy()}`;

    const template = templates.askBetTypeAndAmountTemplate(numberOfBills);
    expect(template.replace(/\s/g, "")).toEqual(
      testTemplate.replace(/\s/g, "")
    );
    expect(buttonSpy).toHaveBeenCalled();
    expect(renderSelectOptions).toHaveBeenCalled();
  });

  test("given two tickets, ticketsTemplate should return a template containing the two generated tickets", () => {
    const ticketsNumber = 2;

    const printSpacesSpy = jest
      .spyOn(utils, "printSpaces")
      .mockReturnValue("&nbsp;&nbsp;");

    const tickets = [
      new Ticket(2, "ambo", "venezia"),
      new Ticket(3, "quaterna", "tutte"),
    ];

    tickets[0].numbers = [20, 11];
    tickets[1].numbers = [90, 2, 10];

    //construct template to test
    let testTemplate = `<div class="tickets-container" style="display: flex">`;

    const fn = jest.fn((ticket, index) => {
      return `
      <div style='margin-right: 10px; border: 4px solid black; border-style: dashed'>
         <div class='header' style='padding-top: 10px;padding-bottom: 10px;border-bottom: 2px solid black; border-bottom-style: dashed'>
            &nbsp;&nbsp; Ticket-${index + 1}&nbsp;&nbsp;
         </div>
         <div class='body' style='padding: 10px;'>
         &nbsp;<strong>Numbers:</strong> ${ticket.numbers.join(" ")}
         <br>
         &nbsp;<strong>Wheel:</strong> ${ticket.wheel.city}
         <br>
         &nbsp;<strong>Bet: </strong> ${ticket.bet.type}
         </div>
        </div>
         `;
    });

    for (let i = 0; i < ticketsNumber; i++) {
      testTemplate += fn(tickets[i], i);
    }

    testTemplate += "</div>";

    let template = templates.ticketsTemplate(tickets);

    expect(printSpacesSpy).toHaveBeenCalledTimes(4);

    expect(template.replace(/\s/g, "")).toEqual(
      testTemplate.replace(/\s/g, "")
    );
  });
});
