let n;
function sum() {
    n = prompt("Enter a number");
    if (n === " ") {
        return 0.0;
    } else {
        return +n + +sum();
    }
}// end function  

alert(`The sum is ${sum()}`);

// I call: n = "2" ---> return 2 + +sum()II;
// II call: n = "3" ---> return 3 + +sum()III;
// III call: n = "4" ---> return 4 + +sum()IV;
// IV call: n = " " ---> return 0.0;

// III call ---> return 4 + 0.0 = 4;
// II call ---> return 3 + 4 = 7;
// I call ---> return 2 + 7 = 9;