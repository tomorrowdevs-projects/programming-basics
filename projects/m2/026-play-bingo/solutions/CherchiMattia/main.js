const createCarde = require('./card');
const checkWin = require('./check');

let arrNumbCall = [];
const playBingo = () => {
    let numbPlay = 0;
    while (numbPlay < 1000) {

        let numbCall = 0;
        const bingoCard = createCarde();
        const arrExtraction = []

        while (!checkWin(bingoCard)) {

           let extraction = Math.floor(Math.random() * 75 + 1);

            if (!arrExtraction.includes(extraction)) {
                arrExtraction.push(extraction);
                Object.values(bingoCard).forEach((value) => {
                    if (value.includes(extraction)) {
                        value[value.indexOf(extraction)] = 0;
                        numbCall++
                    }
                });
            }
        }

        console.log(bingoCard);
        arrNumbCall.push(numbCall);

        numbPlay++
    }

}

playBingo();

const minExtraction = Math.min(...arrNumbCall);
const maxExtraction = Math.max(...arrNumbCall);
let average = arrNumbCall.reduce((a, b) => (a + b));
average = Math.round(average / arrNumbCall.length);


console.log(`Minimun extractions: ${minExtraction}\nMaximum extraction: ${maxExtraction}\naverage of calls: ${average}`);