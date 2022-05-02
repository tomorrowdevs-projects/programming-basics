import { View } from "./view";

describe("View class", () => {
  let view;
  beforeEach(() => {
    document.body.innerHTML = `<div id="game-container">
    </div>
    `;
    view = new View();
  });

  test("renderView should call getTemplate method and manipulate DOM body with new template", () => {
    let getTemplate = jest
      .spyOn(view, "getTemplate")
      .mockReturnValue("<div>test</div>");
    let step = 1;
    let data = { custom: "custom value" };

    view.renderView(step, data);

    expect(getTemplate).toHaveBeenCalledWith(step, data);
    expect(view.templateWrapper.innerHTML).toEqual(`<div>test</div>`);
  });

  test("renderErrors should call errorTemplate method and prepend it on templateWrapper", () => {
    let error = new Error("Error");
    let errorTemplate = jest
      .spyOn(view, "errorTemplate")
      .mockReturnValue("<div id='errors'><div>Error</div></div>");

    view.renderErrors(error);

    expect(errorTemplate).toHaveBeenCalledWith([error]);

    /*let getTemplate = jest
      .spyOn(view, "getTemplate")
      .mockReturnValue("<div>test</div>");
    let step = 1;
    let data = { custom: "custom value" };

    view.renderView(step, data);

    expect(getTemplate).toHaveBeenCalledWith(step, data);
    expect(view.templateWrapper.innerHTML).toEqual(`<div>test</div>`);*/
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
});
