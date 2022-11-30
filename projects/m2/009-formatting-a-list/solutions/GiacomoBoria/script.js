/*When writing out a list of items in English, one normally separates the items with commas. In addition, the word “and” is normally included before the last item, unless the list only contains one item.

Consider the following four lists: apples apples and oranges apples, oranges and bananas apples, oranges, bananas and lemons

Write a function that takes a list of strings as its only parameter. 
Your function should return a string that contains all of the items in the list, formatted in the manner described previously, as its only result. 
While the examples shown previously only include lists containing four elements or less, your function should behave correctly for lists of any length. Include a main program that reads several items from the user, formats them by calling your function, and then displays the result returned by the function.*/

function getList(item) {
    // Create an array from the inputs
      const arrayItem = [];
      
      while(item != "") {
    
        arrayItem.push(item);
        item = prompt("Insert your item\nType blank line for exit the program");
        
      } 
      // if the array has a length greater than 1 it is a list
      if (arrayItem.length > 1) {
        const lastItem = arrayItem[arrayItem.length - 1]; // Search last item
        const listItem = arrayItem.slice(0,arrayItem.length - 1) //Creata new array (no last item)
        return listItem.join(", ") + " and " + lastItem;
      
      } else {
        return arrayItem.join("")
      }
      
    } 
    
    let userItem = prompt("Insert your item\nType blank line for exit the program");
    alert(getList(userItem))