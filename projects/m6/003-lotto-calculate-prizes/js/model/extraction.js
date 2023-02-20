const ClassUtils = require('../controller/ClassUtils');

///////////////////////////////////////////////////
//////////////// Fake Extraction //////////////////
///////////////////////////////////////////////////

class Extraction {
    static counter = 0;
    _cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia'];
    _number = 5;
    _date;

    constructor () {
        Extraction.counter += 1;
        this.numExtraction = Extraction.counter;

        this._date = new Date().toLocaleDateString('it-IT', {   //Extraction creation date
            day:"numeric",
            month: "short",
            year: "numeric",
        });

        this.getAll = this.#generate();
    };

    getWheel (wheel) { if (wheel in this.getAll) return this.getAll[wheel] }

    //creates an array of 10 arrays with all numbers drawn for each wheel
    // # return = array of array
    #generate () {
        const result = {};

        this._cities.forEach(el => {
            result[el] = ClassUtils.genNumber(this._number)
        })
        return result
    };
};

module.exports = { Extraction }