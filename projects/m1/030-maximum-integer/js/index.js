// variable type number in which the initial random value is stored 
let number_Random_Starting;
// variable type number in which the random value to be compared is stored
let number_Random;
// variable type number in which the maximum value to be compared is stored
let number_Max;
// String variable in which the result of random values is stored
let message_Result = "";
// string variable storing the times an update of the maximum value was found and its value
let message_Update = "";
// function for randomising integer values
function random_Integer(min_Integer, max_Integer) {
    let namber_Integer = min_Integer + Math.random() * (max_Integer + 1 - min_Integer);
    return Math.round(namber_Integer);
}
// call to function " number_Random_Starting " for generating initial integer random values
number_Random_Starting = random_Integer(1, 100);
// storage of randomly generated value as maximum value. 
number_Max = number_Random_Starting;
// initialisation of variable " counter_update " for counting how many times a maximum value has been generated
let counter_update = 0;
// initialisation of variable " counter " for the " while " loop
let counter = 0;
/* loop " while " to scroll through the 100 integer values generated
    1) call to function " random_Integer " to generate integer random values from 1 to 99
    2) condition " if " to check when the generated random value " number_Random " is > the initial random value " number_Random_Starting ".
        - storage of the random value " number_Random " in the maximum value for the update
        - variable " counter_update " for counting how many times a maximum value has been generated
        - variable " message_Result " for displaying the result with a " console.log() " */
while (counter < 100) {
    number_Random = random_Integer(1, 99);
    if (number_Random > number_Max) {
        number_Max = number_Random;
        counter_update++;
        message_Result = ` ${number_Max} <== Update Maximum Value`;
    } else {
        // variable " message_Result " for displaying the result with a console.log()
        message_Result = ` ${number_Random}`;
    }
    // variable " counter " for incrementing the while loop
    counter++
    // displaying the result with a console.log()
    console.log(message_Result);
}
// variable " message_Update " for displaying the number of times an update was found and its value
message_Update = `
The maximum value found is         --> ${number_Max}
The maximum value has been updated --> ${counter_update}`;
// display of the variable " message_Update ".
console.log(message_Update);