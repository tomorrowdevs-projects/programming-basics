/*A sublist is a list that is part of a larger list. 
A sublist may be a list containing a single element, multiple elements, or even no elements at all. 
For example, [1], [2], [3] and [4] are all sublists of [1, 2, 3, 4]. 
The list [2, 3] is also a sublist of [1, 2, 3, 4], but [2, 4] is not a sublist [1, 2, 3, 4] because the elements 2 and 4 are not adjacent in the longer list. 
The empty list is a sublist of any list. As a result, [] is a sublist of [1, 2, 3, 4]. 
A list is a sublist of itself, meaning that [1, 2, 3, 4] is also a sublist of [1, 2, 3, 4].

In this exercise you will create a function, isSublist, that determines whether or not one list is a sublist of another. Your function should take two lists, larger and smaller, as its only parameters. It should return True if and only if smaller is a sublist of larger. Write a main program that demonstrates your function.*/

function isSublist(lagerList, smallList) {
    // create a regex for take only character alphanumeric
      const newListRegex = /\w+/g;
      
      const principaList = lagerList.match(newListRegex);
      const check = smallList.match(newListRegex);
      let subList;
      // if null = blank space or empty;
        if (check === null) {
        subList = true;
    
        } else {
          check.forEach((element, index) => {
          
              if (check.length === 1 && principaList.includes(element)) {
          subList = true;
              
            } else if (element === principaList[index + 1]) {
             subList = true; 
           
            } else {
              subList = false;
            }
          })
        }  
      return subList;
    }
    
    /* main program
    test string:
    Lager: dog, cat, fly, eagles
    small: cat, fly
    */
    const lagerList = prompt("Insert your list")
    const smallList = prompt("Insert yor list fot check Sublist")
    alert(isSublist(lagerList, smallList))