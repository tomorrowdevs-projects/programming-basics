const utils = require('../controller/utils');
const Bill = require('../model/Bill');
const extraction = require('../model/extraction');

describe('Utils', () => {

    it('genTickets', () => {
        const ticketData =  [ [8,['Bari', 'Firenze'], ['Ambo', 'Terno'], [3,5]],
                            [8,['Bari', 'Firenze'], ['Ambo', 'Terno'], [3,5]],
                            [8,['Tutte'], ['Estratto', 'Ambo', 'Terno'], [3,5,9]],
                            [1,['Tutte'], ['Estratto'], [3]],
                            [7,['Tutte'], ['Estratto'], [3]] ];

        const tickets = utils.genTickets(ticketData);

        tickets.forEach(el => expect(el).toBeInstanceOf(Bill.Bill));
        expect(tickets).toHaveLength(5);
    });

    it('fakeExtraction', () => {
        expect(utils.fakeExtraction()).toBeInstanceOf(extraction.Extraction);
    });

})