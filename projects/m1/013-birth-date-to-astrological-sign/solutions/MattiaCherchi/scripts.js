let userMonth = prompt('enter your month of birth').toLowerCase();
let userDay = +prompt('enter your day of birth')


if(
  (userMonth == 'december' && userDay >= 22)||
  (userMonth == 'january' && userDay <= 19)
  ){
  alert('your zodiac sign is Capricorn');
}else if (
  (userMonth == 'january' && userDay >= 20)||
  (userMonth == 'february' && userDay <= 18)
){
  alert('your zodiac sign is Aquarius');
}else if (
  (userMonth == 'february' && userDay >= 19)||
  (userMonth == 'march' && userDay <= 20)
){
  alert('your zodiac sign is Pisces');
}else if(
  (userMonth == 'march' && userDay >= 21)||
  (userMonth == 'april' && userDay <= 19)
){
  alert('your zodiac sign is Aries');
}else if(
  (userMonth == 'april' && userDay >= 20)||
  (userMonth == 'may' && userDay <= 20)
){
  alert('your zodiac sign is Taurus');
}else if(
  (userMonth == 'may' && userDay >= 21)||
  (userMonth == 'june' && userDay <= 20)
){
  alert('your zodiac sign is Gemini');
}else if(
  (userMonth == 'june' && userDay >= 21)||
  (userMonth == 'july' && userDay <= 22)
){
  alert('your zodiac sign is Cancer');
}else if(
  (userMonth == 'july' && userDay >= 23)||
  (userMonth == 'august' && userDay <= 22)
){
  alert('your zodiac sign is Leo');
}else if(
  (userMonth == 'august' && userDay >= 23)||
  (userMonth == 'september' && userDay <= 22)
){
  alert('your zodiac sign is Virgo');
}else if(
  (userMonth == 'september' && userDay >= 23)||
  (userMonth == 'october' && userDay <= 22)
){
  alert('your zodiac sign is Libra');
}else if(
  (userMonth == 'october' && userDay >= 23)||
  (userMonth == 'november' && userDay <= 21)
){
  alert('your zodiac sign is Scorpio');
}else if(
  (userMonth == 'november' && userDay >= 22)||
  (userMonth == 'december' && userDay <= 21)
){
  alert('your zodiac sign is Sagittarius');
}else{
  alert('Error! Enter the correct date')
}