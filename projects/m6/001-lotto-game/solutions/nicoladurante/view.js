/* Class that handle views of the application */
export class View {
  constructor() {
    this.container =
      document.getElementById("game-container") ??
      document.getElementsByTagName("body")[0];
  }

  getContainer = () => {
    return this.container;
  };

  renderView = (template, element) => {
    element.innerHTML = "";
    element.append(template);
  };

  lottoTemplate = (action) => {
    let element = document.createElement("form");
    let label = document.createElement("label");
    label.innerText = "How many bills do you want to generate? (min 1 - max 5)";
    element.append(label);
    let inputElement = document.createElement("input");
    inputElement.setAttribute("id", "billsNumber");
    inputElement.setAttribute("type", "text");
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

  askBetTypeAndAmountTemplate = () => {
    return "<h1>CIAO</h1>";
  };
}
