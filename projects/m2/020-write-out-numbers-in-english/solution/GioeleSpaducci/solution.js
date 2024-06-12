let str = "110";

let numbers = {
  "0": ["zero","and"],
  "1": ["one", {
     "0": "ten",
     "1": "eleven",
     "2": "twelve",
     "3": "thirteen",
     "4": "fourteen",
     "5": "fifteen",
     "6": "sixteen",
     "7": "seventeen",
     "8": "eighteen",
     "9": "nineteen",
  }, "one hundred"],
  "2": ["two","twenty","two-hundred"],
  "3": ["three","thirty","three-hundred"],
  "4": ["four","fourty","four-hundred"],
  "5": ["five","fifty","five-hundred"],
  "6": ["six","sixty","six-hundred"],
  "7": ["seven","seventy","seven-hundred"],
  "8": ["eight","eighty","eight-hundred"],
  "9": ["nine","ninety","nine-hundred"],
}

let stringNumber = "";
for (let i = str.length-1; i >= 0; i--) {
  if ( i == str.length-1){
     stringNumber += numbers[str[i]][0]
  }
  else if ( i == str.length-2) {
    if (str[str.length-2] == 1){
      stringNumber = numbers["1"][1][str[str.length-1]]
    }
    //else if ( str.length == 2 && str[1] == 0) stringNumber = numbers[str[i]][1]
    else stringNumber = numbers[str[i]][1] + stringNumber

  }
  else if ( i == str.length-3) {
    stringNumber = numbers[str[i]][2] + " " + stringNumber
  }
}
if ( str.length == 2 || str.length == 3 && str[str.length-1] == 0 && str[1] !== "1") stringNumber = stringNumber.slice(0,stringNumber.length-4);
if (str.length == 3 && str[str.length-1] == 0 && str[str.length-2] == 0 ) stringNumber = stringNumber.slice(0,stringNumber.length-4);

alert(stringNumber)