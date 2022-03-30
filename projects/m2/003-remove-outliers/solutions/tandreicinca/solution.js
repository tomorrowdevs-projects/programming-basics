let  numbers = prompt ('Insert the values of the experiment separated by a comma');    //asking input
const expValues = numbers.split(',');    //converting into array
let len = expValues.length;
let condition = expValues.every(function(element,index) {
    console.log(element);
    if (element < 0)
        return true;
    else
        return false;

})
while (len < 4 && condition == false) {
    numbers = prompt ('Insert at least 4 whole numbers!');
}

function myFunction (object) {                          //creating a function that remove the largest and the smallest values
    object.sort (function(a,b){return a - b});
    object.pop();
    object.shift();
    return object;
}

document.getElementById('demo').innerHTML = myFunction(expValues);   //displaying the array after the removing