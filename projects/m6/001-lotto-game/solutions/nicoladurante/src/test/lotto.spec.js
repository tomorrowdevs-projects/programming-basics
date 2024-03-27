import { Lotto } from "../app/lotto";
import { View } from "../app/view";
import { Ticket } from "../app/model/ticket";
import { Bet } from "../app/model/bet";
import { Wheel } from "../app/model/wheel";

let lotto, view;
let updateUI, renderViewSpy, renderErrorsSpy, assignActionToButton;

describe("lotto tests", () => {
  beforeAll(() => {
    lotto = new Lotto();

    //init spies
    renderViewSpy = jest
      .spyOn(View.prototype, "renderView")
      .mockImplementation(() => {});

    renderErrorsSpy = jest
      .spyOn(View.prototype, "renderErrors")
      .mockImplementation(() => {});

    assignActionToButton = jest
      .spyOn(View.prototype, "assignActionToButton")
      .mockImplementation(() => {});

    updateUI = jest.spyOn(lotto, "updateUI");
  });

  test("loadGame() should be init variables and call updateUI method passing setTicketsNumber function", () => {
    const setTicketsSpy = jest.spyOn(lotto, "setTicketsNumber");

    lotto.loadGame();

    expect(lotto.ticketsNumber).toBe(0);
    expect(lotto.currentStep).toBe(1);
    expect(lotto.tickets).toBeInstanceOf(Array);
    expect(lotto.tickets).toHaveLength(0);

    expect(updateUI).toHaveBeenCalledWith(setTicketsSpy);
  });

  describe("UpdateUI", () => {
    test("should call renderView with currentStep and data parameters and, if execAction is true and action is a valid function , executes the action", () => {
      const mockFunction = jest.fn(() => {
        console.log("Action has been executed!");
      });

      let data = null;
      lotto.updateUI(mockFunction, null, true);

      expect(renderViewSpy).toHaveBeenCalledWith(lotto.currentStep, data);
      expect(mockFunction).toHaveBeenCalled();
    });

    test("should call renderView with currentStep and data parameters and, if execAction is true and action is null , call assignActionToButton", () => {
      let mockFunction = null;
      let data = null;

      lotto.updateUI(mockFunction, null, true);

      expect(renderViewSpy).toHaveBeenCalledWith(lotto.currentStep, data);

      expect(assignActionToButton).toHaveBeenCalledWith(
        "action-btn",
        mockFunction
      );
    });

    test("should call renderView with currentStep and data parameters and, if execAction is false , call assignActionToButton", () => {
      const mockFunction = jest.fn(() => {
        console.log("Action assigned to a button!");
      });

      lotto.updateUI(mockFunction);

      expect(renderViewSpy).toHaveBeenCalledWith(lotto.currentStep, null);

      expect(assignActionToButton).toHaveBeenCalledWith(
        "action-btn",
        mockFunction
      );
    });
  });

  test("handleErrors should call view.renderErrors with errors parameter", () => {
    let error = new Error("Custom error!");

    lotto.handleErrors(error);

    expect(renderErrorsSpy).toHaveBeenCalledWith(error);
  });

  describe("The setTicketsNumber method", () => {
    let handleErrorsSpy;
    beforeAll(() => {
      handleErrorsSpy = jest
        .spyOn(lotto, "handleErrors")
        .mockImplementation(() => {});
    });
    describe("After a click on 'Next Step' button", () => {
      beforeEach(() => {
        lotto.loadGame();

        document.body.innerHTML = `<form>
        <label>How many tickets do you want to generate? (min 1 - max 5)</label>
        <input id="ticketsNumber" type="text"><button type="button">OK</button>
        <button type="button">OK</button>
     </form>`;
      });

      test("If the input value is between 1 and 5, should set the ticketsNumber variable, increment the currentStep and call the handleStep method passing askBetTypeAndAmount and ticketsNumber", () => {
        //ARRANGE
        document.getElementById("ticketsNumber").value = 3;
        const askBetTypeAndAmountSpy = jest.spyOn(lotto, "askBetTypeAndAmount");

        //ACT
        lotto.setTicketsNumber();

        //ASSERT
        expect(lotto.ticketsNumber).toBe(3);
        expect(lotto.currentStep).toBe(2);
        expect(updateUI).toHaveBeenCalledWith(
          askBetTypeAndAmountSpy,
          lotto.ticketsNumber
        );
      });

      test("If input value is not a number should not update variables and call the handleErrors method with an error object with message 'The value must be an integer number'", () => {
        const error = new Error("The value must be an integer number");

        document.getElementById("ticketsNumber").value = "not-a-number";

        lotto.setTicketsNumber();

        expect(lotto.ticketsNumber).toBe(0);
        expect(lotto.currentStep).toBe(1);
        expect(handleErrorsSpy).toHaveBeenCalledWith(error);
      });

      test("If input value is a not integer number should not update variables and call the handleErrors method with an error object with message 'The value must be an integer number'", () => {
        const error = new Error("The value must be an integer number");

        document.getElementById("ticketsNumber").value = 2.56;

        lotto.setTicketsNumber();

        expect(lotto.ticketsNumber).toBe(0);
        expect(lotto.currentStep).toBe(1);
        expect(handleErrorsSpy).toHaveBeenCalledWith(error);
      });

      test("If input value is of integer type and it is not between 1 to 5, should not update variables and call the handleErrors method with an error object with message 'Number must be in the range 1 - 5'", () => {
        const error = new Error("Number must be in the range 1 - 5");

        //ARRANGE
        document.getElementById("ticketsNumber").value = 6;

        lotto.setTicketsNumber();

        expect(lotto.ticketsNumber).toBe(0);
        expect(lotto.currentStep).toBe(1);
        expect(handleErrorsSpy).toHaveBeenCalledWith(error);
      });
    });
  });

  describe("askBetTypeAndAmount", () => {
    describe("after a click on 'Next Step' button", () => {
      describe("assuming ticketsNumber is equal to 1", () => {
        let constructTicket, handleErrors;
        let generateNumbers;
        beforeAll(() => {
          lotto.ticketsNumber = 1;

          // replace with spy on getFieldsValues
          document.body.innerHTML = `
          <form>
          <h2>Bill 1</h2>
            <div>
               <label>Type of bill (ambata - ambo - terno - quaterna - cinquina):</label>
               <input id="bill-1-type" class="bills-types" type="text">
            </div>
            <br>
            <div>
               <label>Amount of numbers: </label>
               <input id="bill-1-amount" class="bills-number-amounts" type="text">
            </div>
            <br>
            <div>
               <label>Select the wheel: </label>
               <select id="wheel-1">
                  <option value="Bari">Bari</option><option value="Cagliari">Cagliari</option><option value="Firenze">Firenze</option><option value="Genova">Genova</option><option value="Milano">Milano</option><option value="Napoli">Napoli</option><option value="Palermo">Palermo</option><option value="Roma">Roma</option><option value="Torino">Torino</option><option value="Venezia">Venezia</option><option value="Tutte">Tutte</option>
               </select>
            </div>
           <br>
              <button id="action-btn" type="button">Next step</button>
          </form>`;
        });

        beforeEach(() => {
          lotto.tickets = [];
          lotto.currentStep = 2;
          constructTicket = jest.fn();

          Ticket.constructTicket = constructTicket;
          handleErrors = jest
            .spyOn(lotto, "handleErrors")
            .mockImplementation(() => {});

          generateNumbers = jest.spyOn(lotto, "generateNumbers");
        });

        test("if the ticket is valid should call Ticket.constructTicket, push the ticket in tickets array, increment step and call updateUI(generateNumbers, null, true)", () => {
          constructTicket.mockReturnValue(
            () => new Ticket(5, new Bet("ambo"), new Wheel("bari"))
          );

          lotto.askBetTypeAndAmount();

          expect(constructTicket).toHaveBeenCalledTimes(1);
          expect(lotto.tickets).toHaveLength(1);
          expect(lotto.tickets[0]).toEqual(constructTicket());

          expect(updateUI).toHaveBeenCalledWith(generateNumbers, null, true);
        });

        test("if the ticket is not valid should call Ticket.constructTicket, clear tickets array, concatenate errors in errors array and call handleErrors method", () => {
          let error = new Error("Custom error");
          constructTicket.mockImplementation(() => {
            throw error;
          });

          lotto.askBetTypeAndAmount();

          expect(constructTicket).toHaveBeenCalledTimes(1);
          expect(lotto.tickets).toHaveLength(0);
          expect(handleErrors).toHaveBeenCalledWith([error]);
          expect(lotto.currentStep).toBe(2);
        });
      });
    });
  });

  describe("generateNumbers", () => {
    beforeEach(() => {
      const generateNumbers = jest.spyOn(lotto, "generateNumbers");
    });
    test("assuming the length of lotto.tickets is equal to 2, should generate ticket.numbers random arrays with length equal to Ticket.amountOfNumbers", () => {
      lotto.tickets = [];
      lotto.tickets.push(new Ticket(3, "ambo", "Venezia"));
      lotto.tickets.push(new Ticket(10, "cinquina", "Tutte"));

      lotto.generateNumbers();

      expect(lotto.tickets[0].numbers).toHaveLength(3);
      expect(lotto.tickets[1].numbers).toHaveLength(10);
    });
  });
});
