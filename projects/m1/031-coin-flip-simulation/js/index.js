let firstString ='';
let count = 0;
let mediaCount = 0;

while (count < 10) {
    const randomNumber = Math.floor(Math.random() * 2);
    firstString += randomNumber === 0 ? "H" : "T";
    let lastThree = firstString.slice(-3);
    
    if (lastThree === "HHH" || lastThree === "TTT") {
        let myNumber = firstString.length;
        console.log(`${firstString} (${myNumber})`);
        count++;
        firstString = '';
        mediaCount += myNumber;
    }
}

console.log(`On average, ${mediaCount / 10} flips were needed.`);


