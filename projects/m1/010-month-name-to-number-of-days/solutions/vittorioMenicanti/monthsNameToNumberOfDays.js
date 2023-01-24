//monthDaysToANumberOfDays

const userMonth = prompt('Please type the month to display the total days:').toLowerCase();



if(userMonth == 'january'){

   alert('January has 31 days')

}else if(userMonth === 'february'){

   alert('February has 28/29 days depending on the leap year');

}else if(userMonth === 'march'){

   alert('March has 31 days');

}else if(userMonth === 'april'){

   alert('April has 30 days ');

}else if(userMonth === 'may'){

   alert('May has 31 days ');

}else if(userMonth === 'june'){

   alert('June has 30 days ');

}else if(userMonth === 'july'){

   alert('July has 31 days ');

}else if(userMonth === 'august'){

   alert('August has 31 days ');

}else if(userMonth === 'september'){

   alert('September has 30 days ');

}else if(userMonth === 'october'){

   alert('October has 31 days ');

}else if(userMonth === 'november'){

   alert('November has 30 days ');

}else if(userMonth === 'december'){

   alert('December has 31 days ');

}else {

   alert('Error: Please type the correct month');

}