const prob_calculator = require ('./prob_calculator')

//Class Hat input balls = string example: 'yellow=3, blue=2, green=6'
class Hat {
    contents = [];

    constructor (balls) {
        const array = balls.replace(/\s/g,'').split(',');

        array.forEach(ballColor => {
            const splitted = ballColor.split('=');
            for (let i=0; i < splitted[1]; i++) { this.contents.push(splitted[0]) }
        })
    };
    //performs a random extraction of n balls (number) of contents, return array
    draw (number) {
        const contentsTemp = [...this.contents];
        const result = [];

        if (number < contentsTemp.length) {
            for (let i=0; i < number; i++) {
                const randomIndex = Math.floor(Math.random() * (contentsTemp.length - 0));
                result.push(contentsTemp.splice(randomIndex,1)[0])
            }
            return result 

        } else return this.contents
    }
};

module.exports = { Hat }

//instance creation
const hat1 = new Hat('yellow=3, blue=2, green=6')
const hat2 = new Hat('red = 5, orange = 4')
const hat3 = new Hat('red=5, orange=4, black=1, blue=0, pink=2, striped=9')

console.log(`Expect in hat1 3 green and 1 blue balls with 5 extractions => probability on 4000 cycles :${prob_calculator.experient(hat1, {'green':3, 'blue':1}, 5, 4000)}%\n`)
console.log(`Expect in hat2 4 orange and 5 red balls with 10 extractions => probability on 2000 cycles :${prob_calculator.experient(hat2, {'orange':4, 'red':5}, 10, 2000)}%\n`)
console.log(`Expect in hat3 1 blue balls with 10 extractions => probability on 4000 cycles :${prob_calculator.experient(hat3, {'blue':1}, 10, 4000)}%\n`)
console.log(`Expect in hat3 3 red, 2 striped and 1 orange balls with 14 extractions => probability on 3000 cycles :${prob_calculator.experient(hat3, {'red':3, 'striped':2, 'orange':1}, 14, 3000)}%\n`)