import { View } from "../app/view";

describe("View class", () => {
  let view;
  beforeEach(() => {
    document.body.innerHTML = `<div id="game-container">
    </div>
    `;
    view = new View();
  });

  test("renderView should call getTemplate method and manipulate DOM body with new template", () => {
    const getTemplate = jest
      .spyOn(view, "getTemplate")
      .mockReturnValue("<div>test</div>");
    const step = 1;
    const data = { custom: "custom value" };

    view.renderView(step, data);

    expect(getTemplate).toHaveBeenCalledWith(step, data);
    expect(view.templateWrapper.innerHTML).toEqual(`<div>test</div>`);
  });

  test("renderErrors should call getTemplate method and prepend the result on templateWrapper", () => {
    const error = new Error("Error");
    const getTemplate = jest
      .spyOn(view, "getTemplate")
      .mockReturnValue("<div id='errors'><div>Error</div></div>");

    view.renderErrors(error);

    expect(getTemplate).toHaveBeenCalledWith(null, [error]);
  });

  test("assignActionToButton should append action to a specific button", () => {
    view.templateWrapper.innerHTML = "<button id='action-btn'>button</button>";

    let testVariable = null;

    view.assignActionToButton(
      "action-btn",
      () => (testVariable = "buttonClicked")
    );

    document.getElementById("action-btn").click();

    expect(testVariable).toBe("buttonClicked");
  });

  test("getTemplate should return the result of setTicketsNumberTemplate invocation, if step equals to 1", () => {
    const step = 1;
    const step1Template = "<div>setTicketsTemplate</div>";
    const spy = jest
      .spyOn(view.templates, "setTicketsNumberTemplate")
      .mockReturnValue(step1Template);

    const template = view.getTemplate(step);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(template).toBe(step1Template);
  });

  test("getTemplate should return the result of askBetTypeAndAmountTemplate invocation, if step equals to 2", () => {
    const step = 2;
    const step2Template = "<div>askBetTypeAndAmountTemplate</div>";
    const spy = jest
      .spyOn(view.templates, "askBetTypeAndAmountTemplate")
      .mockReturnValue(step2Template);

    const template = view.getTemplate(step, null);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(template).toBe(step2Template);
  });

  test("getTemplate should return the result of generatingTicketTemplate invocation, if step equals to 3", () => {
    const step = 3;
    const step3Template = "<div>Generating tickets....</div>";
    const spy = jest
      .spyOn(view.templates, "generatingTicketTemplate")
      .mockReturnValue(step3Template);

    const template = view.getTemplate(step, null);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(template).toBe(step3Template);
  });

  test("getTemplate should return the result of ticketsTemplate invocation, if step equals to 4", () => {
    const step = 4;
    const step4Template = "<div>Tickets Template</div>";
    const spy = jest
      .spyOn(view.templates, "ticketsTemplate")
      .mockReturnValue(step4Template);

    const template = view.getTemplate(step, "data");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("data");
    expect(template).toBe(step4Template);
  });

  test("getTemplate should return the result of errorTemplate invocation, if step is not in the range 1-4", () => {
    const step = null;
    const errorTemplate = "<div>Error Template</div>";
    const spy = jest
      .spyOn(view.templates, "errorTemplate")
      .mockReturnValue(errorTemplate);

    const template = view.getTemplate(step, "data");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("data");
    expect(template).toBe(errorTemplate);
  });
});
