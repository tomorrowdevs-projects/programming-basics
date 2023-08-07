
function magicDate(){

    let startDate = new Date("1900, 1, 1");
    let endDate = new Date("1999, 12, 31");
    let years = [];

    for (d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {

            month = parseInt(d.getMonth() + 1);
            day =  parseInt(d.getDate());
            year = parseInt(d.getFullYear() - 1900);


                if (month * day === year) {
                years.push(d.getDate() + "/" + (d.getMonth() + 1) +  "/" + d.getFullYear());
                }


    }

    alert(years.join(" is a Magic Date!\n" ));
}


alert("--- Magic Dates ---\nA magic date is a date where the day multiplied by the month is equal to the two digit year. For example, June 10, 1960 is a magic date because June is the sixth month, and 6 times 10 is 60, which is equal to the two digit year. Press enter to see all of the magic dates in the 20th century!")
magicDate();