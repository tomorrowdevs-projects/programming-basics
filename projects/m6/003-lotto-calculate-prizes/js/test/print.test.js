const print = require('../lotto-game/print/print');
const Bill = require('../lotto-game/model/Bill');

const ticket = [new Bill.Bill(5,['Bari','Milano'],['Ambo', 'Terno'],[2,5]), 
                new Bill.Bill(10,['Firenze'],['Ambo', 'Terno', 'Cinquina'], [1,5,1]),
                new Bill.Bill(5,['Tutte'],['Ambo', 'Terno', 'Cinquina'], [5,5,1]) ];

describe('Check Input', () => {

    it('check', () => {
        expect(print.check(['1','3','x'], 'x')).toBe('x');
        expect(print.check(['1','3','x'], '1')).toBe('1');
        expect(print.check(['1','3','x'], '2')).toBeFalsy();
    })
});

describe('Print', () => {

    it('printList', () => {
        expect(print.printList(['next', 'other', 'never'])[0]).toEqual(['1', '2', '3']);
        expect(print.printList(['next', 'other', 'never'])[1]).toBe('1) next\n2) other\n3) never\n');
        expect(print.printList(['next', 'other', 'never'])).toHaveLength(2);
    })

    it('separator', () => {
        expect(print.separator(10)).toBe('==========');
    })

    it('ticketTitle', () => {
        expect(print.ticketTitle(20)).toBe('\n                      TICKET #20\n');
    })

    it('printInline', () => {
        expect(print.printInline([['next', 'other', 'never']])).toBe('================\nnext,other,never\n================\n');
    })

    it('showCompletedTicket', () => {
        expect(print.showCompletedTicket(ticket)).toBe('Ticket #1 : 5 numbers played on the Bari,Milano wheel with Ambo € 2 ,Terno € 5\nTicket #2 : 10 numbers played on the Firenze wheel with Ambo € 1 ,Terno € 5 ,Cinquina € 1\nTicket #3 : 5 numbers played on the Tutte wheel with Ambo € 5 ,Terno € 5 ,Cinquina € 1\n');
    })

    it('centerWord', () => {
        expect(print.centerWord(20, 'collisione')).toBe('     collisione     ');
        expect(print.centerWord(20, 'collision')).toBe('     collision      ');
    })

    it('printFakeExtraction', () => {
        const table = print.printFakeExtraction([[[2,'Estratto', 4], [1,'Ambo', 6],1], [[1,'Terno', 0], 2]]);
        const tableArr = table.split('\n');

        expect(table).toHaveLength(2002);
        expect(tableArr).toHaveLength(24);
        expect(tableArr[0]).toBe('');
        expect(tableArr[1]).toBe('                 FAKE EXTRACTIONS                          TICKET WIN                    ');
        expect(tableArr[23]).toBe('');

        tableArr.forEach((el, index) => {
            if (index % 2 === 0 && index !== 0) expect(el).toBe('+==========+==========================+==================================================+');
            if (index % 2 !== 0 && index > 1 && index < 22) {
                expect(el[0]).toBe('|');
                expect(el[11]).toBe('|');
                expect(el[38]).toBe('|');
                expect(el[89]).toBe('|');
                const citiesName = el.split('|')[1].trim();
                expect(Bill.cities.includes(citiesName)).toBeTruthy();

                const win = el.split('|')[3].trim();
                if (index === 3) expect(win).toBe('#2 1 Terno');
                else if (index === 11) expect(win).toBe('#1 2 Estratto');
                else if (index === 15) expect(win).toBe('#1 1 Ambo');
                else expect(win).toBe('')
            }
            
        })

    })
});
