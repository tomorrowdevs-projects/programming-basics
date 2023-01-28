const BillUtils = require('../controller/BillUtils');
const BillPrint = require('../view/BillPrint');

//All wheels
const cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Tutte'];
//All type of bet
const types = ['Estratto', 'Ambo', 'Terno', 'Quaterna', 'Cinquina'];

//Bill Class
class Bill {
    static counter = 100;   //ticket id
    _numbers;
    _city;
    _type;
    _prices;
    _generateNumber;

    constructor (numbers, city, type, prices) {
        Bill.counter += 1;
        this.id = Bill.counter;
        this.numbers = numbers;
        this.city = city;
        this.type = type;
        this.prices = prices;

        this._generateNumber = this.#genNumber();
    };

    //getter for generateNumber
    get generateNumber () { return this._generateNumber };

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
        
        if (BillUtils.checkInputArray(arr)) this._city = arr.filter(city => cities.includes(city));

        if (!BillUtils.compareArray(this._city, arr)) throw new Error (`${arr} is a invalid city, Bill instance not created\nAccepted parameters : ${cities.join('-')}`)
        
        if (BillUtils.compareArray(cities.slice(0,-1), arr)) this._city = ['Tutte'];
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

        if (this._numbers < 5) { removed = typesCopy.splice(this._numbers) };

        if (BillUtils.checkInputArray(arr)) this._type = arr.filter(type => {
            if (removed.includes(type)) message = `: you cannot choose ${removed} because you are playing only ${this._numbers} numbers`;
            if (typesCopy.includes(type)) return true
        });

        if (!BillUtils.compareArray(this._type, arr)) throw new Error (`${arr} is a invalid type${message}, Bill instance not created\nAccepted parameters : ${typesCopy.join('-')}`)

    };

    //getter and setter for prices
    //check if there are bets from 1 to 200 euros and if the number of elements of prices are equal to those of types
    get prices () { return this._prices };
    set prices (price) {
        const [ priceMin, priceMax ] = [ 1, 200 ];

        if (BillUtils.checkInputArray(price) && price.length === this._type.length) {

            if(price.every(el => typeof el === 'number' && el >= priceMin && el <= priceMax)) this._prices = price.map(el => Math.round(el));
            else throw new Error (`${price} is a invalid price, Bill instance not created\nAccepted parameters : from €${priceMin} to €${priceMax}`)

        } else throw new Error (`${price} is a invalid price, Bill instance not created\nInput doesn't contain the right number of elements`)
    }

    //private function to generate random numbers between 1 and 90 that are never the same
    // - number = number, how many numbers you want to generate
    // # return = an array of numbers
    #genNumber () {
        const result = [];

        while (result.length < this._numbers) {
            const rndNum = Math.floor(Math.random() * 90) + 1;
            if (!result.includes(rndNum)) result.push(rndNum)
        };
        return result;
    };

    //Invokes BillPrint.print passing it the ticket data to print it
    print () {
        return BillPrint.print(this.id, this._prices, this._type, this._city, this._generateNumber.join(' - '))
    };

};
 
module.exports = { Bill, cities, types }