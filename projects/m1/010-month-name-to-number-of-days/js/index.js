//Month name to Number of days-m1-010

const digit=prompt('insert month').toLowerCase();

if ((digit==('january')) || (digit==('march')) || (digit==('may')) || (digit==('july')) || (digit==('august')) ||(digit==('october')) ||(digit==('december'))) {
    alert('this month has got 31 days');
} else if ((digit==('april')) ||(digit==('june'))||(digit==('september')) ||(digit==('november'))) {
    alert('this month has got 30 days');
} else if (digit==='february') {
    alert('february has got 28-29 days becouse years are addressed');
} else {
  alert('this is not a month');
}