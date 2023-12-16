//All wheels
const cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Tutte'];
//All type of bet
const types = ['Estratto','Ambetto', 'Ambo', 'Terno', 'Quaterna', 'Cinquina'];

//Bill Class
class Bill {
    _numbers;
    _city;
    _type;

    constructor (numbers, city, type) {
        this.numbers = numbers;
        this.city = city;
        this.type = type;
    };

    //getter and setter for numbers
    //verify that a number between 1 and 10 is entered, otherwise an exception is raised
    get numbers () { return this._numbers };
    set numbers (number) { 
        if (typeof number === 'number' && number <11 && number > 0) this._numbers = number
        else throw new Error (`${number} is a invalid numbers, Bill instance not created\nAccepted parameters : Number from 1 to 10`)
    };

    //getter and setter for city
    //verify that an array of cities included in const cities is entered, if all are selected only 'Tutte' will be selected
    //otherwise an exception is raised
    get city () { return this._city };
    set city (arr) {
        
        if (this.#checkInputArray(arr)) this._city = arr.filter(city => cities.includes(city));

        if (!this.#compareArray(this._city, arr)) throw new Error (`${arr} is a invalid city, Bill instance not created\nAccepted parameters : ${cities.join('-')}`)
        
        if (this.#compareArray(cities.slice(0,-1), arr)) this._city = ['Tutte'];
    };

    //getter and setter fot type
    //verify that an array of types included in const types is entered,
    //if the numbers in play are less than five, the higher plays are discarded. 
    //example: if we have only 3 numbers we cannot play Quaterna or Cinquina
    //otherwise an exception is raised
    get type () { return this._type };
    set type (arr) { 

        let removed = [];
        let message = '';
        const typesCopy = [...types];

        if (this._numbers < 5) { removed = typesCopy.splice((this._numbers !== 1) ? this._numbers+1 : this._numbers) };

        if (this.#checkInputArray(arr)) this._type = arr.filter(type => {
            if (removed.includes(type)) message = `: you cannot choose ${removed} because you are playing only ${this._numbers} numbers`;
            if (typesCopy.includes(type)) return true
        });

        if (!this.#compareArray(this._type, arr)) throw new Error (`${arr} is a invalid type${message}, Bill instance not created\nAccepted parameters : ${typesCopy.join('-')}`)

    };

    //private function that checks if the input is an array and if it contains at least one element
    // # return = true or an exception is raised
    #checkInputArray (input) {
        if (Array.isArray(input) && input.length > 0) return true;
        else throw new Error (`Input "${input}" isn't an array or it is empty, Bill instance not created`);
    };

    //private function compare 2 arrays
    // - arr1, arr2 = the 2 arrays to compare
    // # return = true or false
    #compareArray (arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };

    //private function to generate random numbers between 1 and 90 that are never the same
    // # return = an array of numbers
    #genNumber () {
        const result = [];

        while (result.length < this._numbers) {
            const rndNum = Math.floor(Math.random() * 90) + 1;
            if (!result.includes(rndNum)) result.push(rndNum)
        };
        return result;
    };

    //private function to generates a horizontal line for the table
    // - lineWidth = number, how many characters the line should be long
    // - symbol = string, the character to use to form the line
    // # return = string
    #lineGenerator (lineWidth, symbol) {
        return `+${symbol.padStart(lineWidth-2, symbol)}+`
    };

    //private function to center a word in a space by adding spaces before and after
    // - lineWidth = number, how many characters is the space
    // - word = string, the word to write
    // # return = string
    #centerWord (lineWidth, word) {
        const wordLength = word.length;
        const space = (lineWidth - wordLength) /2;
        return word.padStart(wordLength+space, ' ').padEnd(lineWidth, ' ');
    };

    //print a ticket table with the numbers, wheels and type of bet
    // @ use #genNumber, #lineGenerator, #centerWord function
    // - ticketNumber = number, the ticket number to show in the title
    // # return = string
    print (ticketNumber) {
        const title = 'LOTTO GAME TICKET #' + ticketNumber;
        const wheel = this._city.join('  ');
        const type = this._type.join('  ');
        const rndNumber = this.#genNumber().join(' - ');
        const lineWidth = 60;

        return [title, wheel,type, rndNumber].map(el => {
            return `${this.#lineGenerator(lineWidth,'=')}\n|${this.#centerWord(lineWidth-2, el)}|`;

        }).join('\n') + '\n' + this.#lineGenerator(lineWidth,'=') + '\n\n'
        
    };

};
 
module.exports = { Bill, cities, types }