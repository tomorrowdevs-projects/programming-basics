// ask the month and the day of the user birth
const userAstrologicalSing = prompt('Please, enter the month and day of your birth', 'month and day')
// divide the month of the day
const date = userAstrologicalSing.split(' ')
const userMonth = date[0].toLocaleLowerCase();
const userDay = date[1];
// control the atrological sing
let astrologicalSing;
switch(userMonth){
  case 'december':
    if(userDay >= 22){
      astrologicalSing = "Capricorn"
    } else {
      astrologicalSing = "Sagittarius"
    }
    break;
  case 'january':
    if(userDay <= 19){
      astrologicalSing = "Capricorn"
    } else {
      astrologicalSing = "Aquarius"
    }
    break;
  case 'february':
    if(userDay <= 18){
      astrologicalSing = 'Aquarius'
    } else {
      astrologicalSing = 'Pisces'
    }
    break;
  case 'march':
    if(userDay <= 20){
      astrologicalSing = 'Pisces'
    } else {
      astrologicalSing = 'Aries'
    }
    break;
  case 'april':
    if(userDay <=  19){
      astrologicalSing = 'Aries'
    } else {
      astrologicalSing = 'Taurus'
    }
    break;
  case 'may':
    if(userDay <= 20){
      astrologicalSing = 'Taurus'
    } else {
      astrologicalSing = 'Gemini'
    }
    break;
  case 'june':
    if(userDay <= 20){
       astrologicalSing = 'Gemini'
    } else {
       astrologicalSing = 'Cancer'
    }
    break;
  case 'july':
    if(userDay <= 22){
       astrologicalSing = 'Cancer'
    } else {
       astrologicalSing = 'Leo'
    }
    break;
  case 'august':
    if(userDay <= 22){
      astrologicalSing = 'Leo'
    } else {
      astrologicalSing = 'Virgo'
    }
    break;
  case 'september':
    if(userDay <= 22){
      astrologicalSing = 'Virgo'
    } else {
      astrologicalSing = 'Libra'
    }
    break;
  case 'october':
    if(userDay <= 22){
      astrologicalSing = 'Libra'
    } else {
       astrologicalSing = 'Scorpio'
    }
    break;
  case 'november':
    if(userDay <= 21){
      astrologicalSing = 'Scorpio'
    } else {
       astrologicalSing = "Sagittarius"
    }
    break;
}
alert(`Your astrological sing is ${astrologicalSing}`);
// control the atrological sing
// if(userMonth === "december" && userDay >= 22 || userMonth === "january" && userDay <= 19){
//   alert('Your astrological sing is Capricorn');
// }else if(userMonth === "january" && userDay >= 20 || userMonth === "february" && userDay <= 18){
//   alert('Your astrological sing is Aquarius');
// }else if(userMonth === "february" && userDay >= 19 || userMonth === "march" && userDay <= 20){
//     alert('Your astrological sing is Pisces');
// }else if(userMonth === "march" && userDay >= 21 || userMonth === "april" && userDay <= 19){
//     alert('Your astrological sing is Aries');
// }else if(userMonth === "april" && userDay >= 20 || userMonth === "may" && userDay <= 20){
//     alert('Your astrological sing is Taurus');
// }else if(userMonth === "may" && userDay >= 21 || userMonth === "june" && userDay <= 20){
//     alert('Your astrological sing is Geminis');
// }else if(userMonth === "june" && userDay >= 21 || userMonth === "july" && userDay <= 22){
//     alert('Your astrological sing is Cancer');
// }else if(userMonth === "july" && userDay >= 23 || userMonth === "august" && userDay <= 22){
//     alert('Your astrological sing is Leo');
// }else if(userMonth === "august" && userDay >= 23 || userMonth === "september" && userDay <= 22){
//     alert('Your astrological sing is Virgo');
// }else if(userMonth === "september" && userDay >= 23 || userMonth === "october" && userDay <= 22){
//     alert('Your astrological sing is Libra');
// }else if(userMonth === "october" && userDay >= 23 || userMonth === "november" && userDay <= 21){
//     alert('Your astrological sing is Scorpio');
// }else if(userMonth === "november" && userDay >= 22 || userMonth === "december" && userDay <= 21){
//     alert('Your astrological sing is Scorpio');
// }