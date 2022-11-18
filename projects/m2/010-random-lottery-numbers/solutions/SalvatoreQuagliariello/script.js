
// i declare my first global variable, the ticket i'll use to store the extracted numbers.
let ticket = [];


// here i create a functuion to randomly generate 6 numbers from 1 to 49, passing the push into the array through an if to be sure there are no duplicates.
    function getNumbers (array) {

        while (ticket.length < 6){

        let number = Math.floor(Math.random() * (49 - 1 + 1) + 1);

            if(array.indexOf(number) === -1){
                array.push(number)
            }    
        }

    }


    getNumbers(ticket);

let sortedTicket = ticket.sort(function (a, b) {  return a - b;  })
    alert("The extracted numbers are: \n" + sortedTicket.join("\n"));