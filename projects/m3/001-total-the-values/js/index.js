
// i declare my function "totalInput".
function totalInput() {

//i declare "value" as the value the user will enter and "result" as "value" to have a fast return for the function.
    let value = prompt("Please, enter a sequence of values to see their sum (enter a blank line to stop): ");
    let result = Number(value);

//then i use in if statement to check if value is a blank line. otherwise result is added to a recursion of the function itself.
    if (value !== ""){
        return result += totalInput();
    } else {
        return result;
    }


}


alert(totalInput());