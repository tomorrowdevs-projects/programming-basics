//user insert first size
const size1 = parseInt(prompt("first size in meters"));

//user insert second size
const size2 = parseInt(prompt("second size in meters"));

//calculate the area
const area = parseInt(size1 * size2);

//check if the input is correctly inserted and show the area if it is
function calculateArea () {
    if (isNaN(area)) {
        alert("insert sizes in number");
    } else {
        alert("room area is " + area + " m");
        }}
calculateArea();