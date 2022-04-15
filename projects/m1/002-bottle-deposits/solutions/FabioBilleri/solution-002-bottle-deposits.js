let qntSmallContainer;
let qntBigContainer;
let totSmallContainer;
let totBigContainer;

qntSmallContainer= +prompt("How many 1 liter or less containers did you put in?");
qntBigContainer= +prompt("How many containers over 1 liter did you put in?");
totSmallContainer= (0.10*qntSmallContainer);
totBigContainer= (0.25*qntBigContainer);

alert("For returning containers you are qualified to receive " + "$" + (totBigContainer+totSmallContainer));
