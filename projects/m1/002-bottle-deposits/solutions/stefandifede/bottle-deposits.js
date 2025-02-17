//cashback for less than one liter containers
const smallContainersCashback = 0.10;
//cashback for more than one liter containers
const largeContainersCashback = 0.25;
//user submits how many small containers he recycle
const smallContainersQuantity = prompt("Numbers of drink containers holding one liter or less:");
//user submits how many large containers he recycles
const largeContainersQuantity = prompt("Numbers of drink containers holding more than one liter:");
//calculate and show the total
const cashback = (smallContainersQuantity * smallContainersCashback) + (largeContainersQuantity * largeContainersCashback)

function calculateCashback () {
    if (isNaN(cashback)) {
        alert("insert quantity in number");
    } else {
        alert("Your total cashback is: " + cashback + " $");
        }}
calculateCashback();