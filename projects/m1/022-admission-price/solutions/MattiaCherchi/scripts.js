let prices = [14.00, 18.00, 23.00];
let ageRange0_2 = prompt('how many guests under or equal to 2 years must enter (blank to skip)');
let ageRange3_12 = prompt('how many guests aged between 3 and 12 must enter (blank to skip)');
let age65_over = prompt('how many guests aged 65 or over must enter (blank to skip)');
let otherAge = prompt('how many guests aged between 13 and 64 must enter (blank to skip)');

let freeTicket;
let reducedTicket;
let seniorsTicket;
let fullTicket;

if(ageRange0_2 == ''){
 ageRange0_2 = 0;
 freeTicket = 0;
}else{
  freeTicket = 'free ticket'
}

if(ageRange3_12 == ''){
  ageRange3_12 = 0;
  reducedTicket = 0;
}else{
  reducedTicket = (+ageRange3_12 * prices[0]).toFixed(2);
}

if(age65_over == ''){
  age65_over = 0
  seniorsTicket = 0;
}else{
  seniorsTicket = (+age65_over * prices[1]).toFixed(2);
}

if(otherAge == ''){
  otherAge = 0;
  fullTicket = 0;
}else{
  fullTicket = (+otherAge * prices[2]).toFixed(2);
}

let total = (+reducedTicket + +seniorsTicket + +fullTicket).toFixed(2);

alert(`number of free tickets(Age under or equal to 2 years): N°${ageRange0_2} = ${freeTicket};
\nnumber of reduced tickets(Age between 3 and 12 years): N°${ageRange3_12} X $ ${prices[0]} = $ ${reducedTicket}
\nnumber of seniors tickets(Age 65 or older): N°${age65_over} X $ ${prices[1]} = $ ${seniorsTicket}
\nnumber of full tickets(Age between 13 and 64 years): N°${otherAge}X $ ${prices[2]} = $ ${fullTicket}
\ntotal admission price: $ ${total}`);