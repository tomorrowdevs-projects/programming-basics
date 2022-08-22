const depositSmallContainer = 0.10;
const depositLargeContainer = 0.25;
const totalSmallContainerDep = prompt('How many small containers (one liter or less) do you return?');
const totalLargeContainerDep = prompt ('How many large containers (over one liter) do you return?');

const totDepositSmall = (depositSmallContainer) * (totalSmallContainerDep);
const totDepositLarge = (depositLargeContainer) * (totalLargeContainerDep);

alert(`your refund for returning the containers is ${(totDepositSmall + totDepositLarge).toFixed(2)}$`);