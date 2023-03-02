const { Extraction } = require('../model/extraction');
const { Bill } = require('../model/Bill');

//generate Bill instances
// - ticketsData = Array, array of arrays with created ticket data
// # return = array with all instances
function genTickets (ticketsData) {
    const tickets = [];

    ticketsData.forEach(el => {
        tickets.push(new Bill(...el));
    });
    return tickets
};

//generate fake extractions
// # return = the sxtraction instances
function fakeExtraction () {
    return new Extraction()
};

module.exports = {
    fakeExtraction,
    genTickets
}