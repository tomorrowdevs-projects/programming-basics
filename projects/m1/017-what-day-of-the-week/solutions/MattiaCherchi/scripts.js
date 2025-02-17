let year = +prompt('Enter the year');
let correctYear = /^[0-9]{4}$/.test(year);

let dayOfWeek = (year + Math.floor((year-1)/4) - Math.floor((year-1)/100) + Math.floor((year-1)/400))% 7 ;



if(correctYear){
    if(dayOfWeek == 0){
        dayOfWeek = 'Sunday';
    
    }else if (dayOfWeek == 1){
        dayOfWeek = 'Monday';
    
    }else if (dayOfWeek == 2){
        dayOfWeek = 'Tuesday';
    
    }else if (dayOfWeek == 3){
        dayOfWeek = 'Wednesday';
    
    }else if (dayOfWeek == 4){
        dayOfWeek = 'Thursday';
    
    }else if (dayOfWeek == 5){
        dayOfWeek = 'Friday';

    }else if ( dayOfWeek == 6){
        dayOfWeek = 'Saturday';
    }
    
    alert(`January 1st of the year ${year} is ${dayOfWeek}`);

}else{
    
    alert('Error! Enter the year correctly');
}
