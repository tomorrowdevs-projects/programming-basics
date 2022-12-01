
// i declare my lists to be tested;
let listOne = "one, two, three, four, five, seven";
let listTwo = "one, three";


// then i create my first function "cleanList" to clean all the strings and push their items into arrays;
    function cleanList (string) {

        let cleanString = string.replace(/\W+/g, " ");
        let array = cleanString.split(" ");

        return array;
    }

let cleanListOne = cleanList(listOne);
let cleanListTwo = cleanList(listTwo);


// so i check if the second list is a sublist with two counters, to begin i find the index where the first element of the sublist match the main list, thein i use an if statement to check if two sequential items are identical in both of lists. if so, two counter are triggered "j" and "counter". if counter and the length of the array of the sublist are equal means that every item in the sublist is in the main list.   
    function isSublist (arrayOne, arrayTwo) {

        let startIndex = arrayOne.indexOf(arrayTwo[0]);

        j = 0;
        counter = 0;

        for (i = startIndex; i < arrayOne.length; i++) {

            if (arrayOne[i] === arrayTwo[j]){

                    if (arrayOne[i + 1] === arrayTwo[j + 1]){
                        counter ++;
                        j ++;
                    } else if (arrayTwo[j] === arrayTwo[arrayTwo.length - 1]){
                        counter ++;
                        j ++;
                    }

            }
        }

        let testOne = arrayOne.some(r=> arrayTwo.includes(r));

        if (counter === arrayTwo.length){
            result = "It's a sublist!";
        } else if (arrayTwo.length === 1 && testOne === true) {
            result = "It's a sublist!";
        } else {
            result = "It's not a sublist!";
        }

        return result;

    }


alert(isSublist(cleanListOne, cleanListTwo));