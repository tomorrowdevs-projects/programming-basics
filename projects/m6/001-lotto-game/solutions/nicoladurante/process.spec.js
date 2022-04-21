import { Process } from "./process.js";
import { View } from "./view.js";

let process;

beforeEach(() => {
  process = new Process();
});

describe("StartGame method", () => {
  test("Init properties and call updateUI method", () => {
    const spy = jest.spyOn(process, "updateUI");

    process.startGame();
    expect(process.billsNumber).toBe(0);
    expect(process.currentStep).toBe(1);
    expect(process.bills).toBeInstanceOf(Array);
    expect(process.bills).toHaveLength(0);
    expect(spy).toHaveBeenCalled();
  });
});

describe("The setBillsNumber method", () => {
  describe("After a click on OK button", () => {
    let spy;
    beforeEach(() => {
      spy = jest.spyOn(process, "updateUI");

      document.body.innerHTML = `<form>
      <label>How many bills do you want to generate? (min 1 - max 5)</label>
      <input id="billsNumber" type="text"><button type="button">OK</button>
      <button type="button">OK</button>
   </form>`;
    });

    test("If the input value is between 1 and 5, should set the billsNumber variable, increment the currentStep and call the updateUI method with undefined", () => {
      //ARRANGE
      document.getElementById("billsNumber").value = 3;
      //ACT
      process.setBillsNumber();

      //ASSERT
      expect(process.billsNumber).toBe(3);
      expect(process.currentStep).toBe(2);
      expect(spy).toHaveBeenCalledWith(undefined);
    });

    test("If input value is empty, should call the updateUI method with an error object with message 'The value must be a number'", () => {
      const error = new Error("The value must be a number");

      process.setBillsNumber();

      expect(process.billsNumber).toBe(0);
      expect(process.currentStep).toBe(1);
      expect(spy).toHaveBeenCalledWith(error);
    });

    test("If input value is not a number, should call the updateUI method with an error object with message 'The value must be a number'", () => {
      const error = new Error("The value must be a number");

      document.getElementById("billsNumber").value = "not a number";

      process.setBillsNumber();

      expect(process.billsNumber).toBe(0);
      expect(process.currentStep).toBe(1);
      expect(spy).toHaveBeenCalledWith(error);
    });

    test("If input value is a number not in the range 1 to 5, should call the updateUI method with an error object with message 'Number must be in the range 1 - 5'", () => {
      const error = new Error("Number must be in the range 1 - 5");

      document.getElementById("billsNumber").value = "10";

      process.setBillsNumber();

      expect(process.billsNumber).toBe(0);
      expect(process.currentStep).toBe(1);
      expect(spy).toHaveBeenCalledWith(error);
    });
  });
});

describe("process.updateUI method", () => {
  /* I need this to reset the mock before every test and not in ES6 arrow function syntax. In ES6 returns errors*/
  beforeEach(function () {
    return function () {
      View.mockClear();
    };
  });
  test("should call getTemplate method and view.renderView passing the correct template", () => {
    /*  jest.mock("./view", () => {
      return function () {
        return { renderView: () => {} };
      };
    });*/

    const customTemplate = "<div>Custom template</div>";
    const getTemplateSpy = jest
      .spyOn(process, "getTemplate")
      .mockImplementation(() => customTemplate);

    const renderViewSpy = jest.spyOn(View.prototype, "renderView");

    process.updateUI();

    expect(getTemplateSpy).toHaveBeenCalled();
    expect(renderViewSpy).toHaveBeenCalledWith("<div>Custom template</div>");
  });

  test("if there are errors should call getErrorTemplate method and view.renderView passing the error template", () => {
    const errorTemplate = "<div>Error template</div>";
    const getTemplateSpy = jest
      .spyOn(process, "getErrorTemplate")
      .mockImplementation(() => errorTemplate);

    const renderViewSpy = jest.spyOn(View.prototype, "renderView");

    let error = new Error("Custom error");

    process.updateUI(error);

    expect(getTemplateSpy).toHaveBeenCalled();
    expect(renderViewSpy).toHaveBeenCalledWith("<div>Error template</div>");
  });
});
