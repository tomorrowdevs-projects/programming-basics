function generateRandomNum() {

    let list = [];
    // Initialize the control variable for doubles with value = false
    let isDouble = false;
    // Repeat until the list contains 6 different numbers
    while (list.length < 6) {
        // Generate a random number from 1 to 49
        let num = Math.floor((Math.random() * 49) + 1);
        // For each number of the list...
        for (let i = 0; i < list.length; i++) {
            // ...check if the new generated number is equal to one of the list
            if (num == list[i]) {
                isDouble = true;
            }  
        
        } // end For loop
        // If the number is not double add it to the list...
        if (!isDouble) {
            list.push(num);
        //...else reset the value of the control variable to false
        } else {
            isDouble = false;
        }

    } // end While loop
    // Sort the numbers in the list in ascending order
    return list.sort(function(a, b) { return a - b });

}// end Function

console.log(generateRandomNum());