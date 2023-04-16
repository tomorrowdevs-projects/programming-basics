/* 

When analysing data collected as part of a science experiment it may be desirable to remove the most extreme values before performing other calculations. Write a function that takes a list of values and an non-negative integer, n, as its parameters. The function should create a new copy of the list with the n largest elements and the n smallest elements removed. Then it should return the new copy of the list as the function’s only result. The order of the elements in the returned list does not have to match the order of the elements in the original list. Write a main program that demonstrates your function. It should read a list of numbers from the user and remove the two largest and two smallest values from it by calling the function described previously. Display the list with the outliers removed, followed by the original list. Your program should generate an appropriate error message if the user enters less than 4 values.

*/

let numberUser = prompt("The program needs at least 4 numbers to run.\n Enter the first number");
let numberInteger = parseInt(prompt("Enter a number integet not negative"));
let listNumberUser = [];
let newListNumber = [];

while (numberUser != "exit" || numberInteger < 0){

    if(numberInteger < 0){
        numberInteger = parseInt(prompt("Enter a number integet not negative"));
    }

    if(!isNaN(numberUser)){
        listNumberUser.push(parseInt(numberUser));
    }

    numberUser = prompt("Enter another number or type 'exit' to exit the program.\n Remember that at least 4 numbers are required.");

}

if(listNumberUser.length < 4){
    alert("Error... Please enter at least 4 numbers");
}

listNumberUser = listNumberUser.sort();
newListNumber = listNumberUser.slice(numberInteger, -numberInteger);

console.log("List number user: " + listNumberUser);
console.log("New list number: " + newListNumber);

