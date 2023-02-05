const ClassUtils = require('../controller/ClassUtils');

///////////////////////////////////////////////////
//////////////// Fake Extraction //////////////////
///////////////////////////////////////////////////

class Extraction {
    static counter = 0;
    _date;
    _wheel;
    _howManyNumber;

    constructor (wheel, howManyNumber) {
        Extraction.counter += 1;
        this.numExtraction = Extraction.counter;

        this._date = new Date().toLocaleDateString('it-IT', {   //Extraction creation date
            day:"numeric",
            month: "short",
            year: "numeric",
        });
        this.wheel = wheel;
        this.howManyNumber = howManyNumber;

        this.getAll = this.#generate();
    };

    //getter for date
    get date () { return this._date }
    
    //getter and setter for wheel
    //Verify that it is a string array with at least 1 element
    //otherwise an exception is raised
    get wheel () { return this._wheel };
    set wheel (arr) {
        
        if (ClassUtils.checkInputArray(arr) && arr.every(el => typeof el === 'string')) this._wheel = arr;
        else throw new Error (`${arr} is a invalid Wheels, Extraction instance not created\nAccept an array of strings`);
    };

    //getter and setter for numbers
    //Check that it is a positive integer, otherwise an exception is raised
    get howManyNumber () { return this._howManyNumber };
    set howManyNumber (number) { 
        if (typeof number === 'number' && number > 0 && Number.isInteger(number)) this._howManyNumber = number
        else throw new Error (`${number} is a invalid numbers, Extraction instance not created\nAccepted parameters : positive integer number`)
    };

    getWheel (wheel) { if (wheel in this.getAll) return this.getAll[wheel] }

    //creates an array of 10 arrays with all numbers drawn for each wheel
    // # return = array of array
    #generate () {
        const result = {};

        this._wheel.forEach(el => {
            result[el] = ClassUtils.genNumber(this._howManyNumber)
        })
        return result
    };
};

module.exports = { Extraction }