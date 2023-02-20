const ClassUtils = require('../controller/ClassUtils');

//Bill Class
class Bill {
    static counter = 100;   //ticket id
    //All wheels
    static cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Tutte'];
    //All type of bet
    static types = ['Estratto', 'Ambo', 'Terno', 'Quaterna', 'Cinquina'];
    _id;
    _numbers;
    _city;
    _type;
    _prices;
    _generateNumber;
    _total;

    constructor (numbers, city, type, prices) {
        Bill.counter += 1;
        this._id = Bill.counter; //ticket id
        this.numbers = numbers; //numbers to generate
        this.city = city;       //Array - wheels played
        this.type = type;       //Array - type of play, e.g. Ambo or Terno
        this.prices = prices;   //Array - amount played
        this._winning = false;
        this._generateNumber = ClassUtils.genNumber(this._numbers); //generated numbers
    };

    //getter for id
    get id () { return this._id }

    //getter for total
    get total () { return this._total }

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
        
        if (ClassUtils.checkInputArray(arr)) this._city = arr.filter(city => Bill.cities.includes(city));

        if (!ClassUtils.compareArray(this._city, arr)) throw new Error (`${arr} is a invalid city, Bill instance not created\nAccepted parameters : ${Bill.cities.join('-')}`)
        
        if (ClassUtils.compareArray(Bill.cities.slice(0,-1), arr)) this._city = ['Tutte'];
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
        const typesCopy = [...Bill.types];

        if (this._numbers < 5) { removed = typesCopy.splice(this._numbers) };

        if (ClassUtils.checkInputArray(arr)) this._type = arr.filter(type => {
            if (removed.includes(type)) message = `: you cannot choose ${removed} because you are playing only ${this._numbers} numbers`;
            if (typesCopy.includes(type)) return true
        });

        if (!ClassUtils.compareArray(this._type, arr)) throw new Error (`${arr} is a invalid type${message}, Bill instance not created\nAccepted parameters : ${typesCopy.join('-')}`)

    };

    //getter and setter for prices
    //check if there are bets from 1 to 200 euros and if the number of elements of prices are equal to those of types
    get prices () { return this._prices };
    set prices (price) {
        const [ priceMin, priceMax ] = [ 0.5, 200 ];

        if (ClassUtils.checkInputArray(price) && price.length === this._type.length) {

            if(price.every(el => typeof el === 'number' && el >= priceMin && el <= priceMax)) {
                this._prices = price;
                const total = this._prices.reduce((acc, el) => acc + el);

                if(total >= 1 && total <= 200) this._total = total
                else throw new Error (`Invalid price sum, Bill instance not created\nThe total Ticket amount is ${total}, accepted from 1 to 200`)

            } else throw new Error (`${price} is a invalid price, Bill instance not created\nAccepted parameters : from €${priceMin} to €${priceMax}`)

        } else throw new Error (`${price} is a invalid price, Bill instance not created\nInput doesn't contain the right number of elements`)
    }

    //getter and setter for winning
    get winning () { return  this._winning !== false ? `(${this._winning[4]}) ${this._winning[1]} on ${this._winning[2]} € ${this._winning[0]}` : false}
    set winning (arr) { this._winning = arr[0] === 0 ? false : arr }

};
 
module.exports = { Bill }