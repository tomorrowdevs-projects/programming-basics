
alert("---- Days in a Month ---- \nEnter an year and a month to know how many days that month has!")
let year = parseInt(prompt('Please, enter a year: '));
let month = parseInt(prompt('Please, enter a month: '));


function getDays (year, month) {
    let getDays = new Date(year, month, 0).getDate();
    alert(getDays);


}

getDays (year, month);