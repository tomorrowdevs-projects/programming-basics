// MAIN PROGRAM
let item; 
let list = [];

// Ask the user to enter items until a blank line is entered 
while (item != " ") {
    item = prompt("Enter an item, blank line to stop");
    // Add each item in the "list" array 
    list.push(item);  
} // end While loop

// If user enters only one item, display the item without formatting
if (list.length == 2) {
    alert(list.join(""));
} else {
    // Delete the last item (blank line) from the array 
    list.pop();
    // Display the formatting string by calling the function
    alert(formattingList(list));
}    

function formattingList(list) {   
    
    let index = 1;
    // The loop stops before the last 2 items...
    while (index < list.length-1) { 
        // Add items from index, delete 0 items, "items to add"  
        list.splice(index, 0, ",", " "); 
        // The statement must continues after the next item of the list skipping the new items added
        index += 3; 
    } // end While loop
    // Different statement for the last item
    list.splice(-1, 0, " ", "and", " ");
    // Turn array into a string
    return list.join("");

} // end function