let userInput = parseInt(prompt('Insert a positive number'));


if (userInput <0){

    document.write("<h1>please insert a positive value</h1>");

} else if( userInput == 0 || userInput == 1){

    document.write("Value is " + userInput );

} else if ( userInput > 0){
    
    let result = (Math.floor(userInput / 2));
    
    result = userInput.toString(2);
    
    document.write("Result is: " + result);

}
