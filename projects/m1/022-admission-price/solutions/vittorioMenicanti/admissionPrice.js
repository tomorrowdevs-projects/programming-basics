// admission price 

/* A particular zoo determines the price of admission based on the age of the guest. Guests 2 years of age and less are admitted without charge. Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00. Admission for all other guests is $23.00. Create a program that begins by reading the ages of all of the guests in a group from the user, with one age entered on each line. The user will enter a blank line to indicate that there are no more guests in the group. Then your program should display the admission cost for the group with an appropriate message. The cost should be displayed using two decimal places. */

/*   
    <=2 free

    >=3 || <=12 cost 14$

    >=12 <65 cost 23$

    >=65 cost 18$       
    
    */

    
    let people = 0;
    let cost = 0;
    let ageGroup = prompt('Please Enter the age or enter blank to stop');
    
    while(ageGroup !== ''){
        
        ageGroup = parseInt(ageGroup);
        
        if (ageGroup >2 && ageGroup <= 12) { 
            cost+= 14;
        } else if (ageGroup > 12 && ageGroup < 65) {
            cost+= 23;//23
        } else if (ageGroup > 65) {
            cost+= 18;
        } 

        people+=1;
        ageGroup = prompt('Please Enter the age or enter blank to stop');
      
    }

    alert(`The number of group is ${people}  and total price is ${cost} $`);