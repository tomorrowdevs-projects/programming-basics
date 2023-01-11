const utils = require('../utils')
const Bill = require('../Bill')


const ticket = [new Bill.Bill(5,['Bari','Milano'],['Ambo', 'Terno'],[2,5]), 
                new Bill.Bill(10,['Firenze'],['Ambo', 'Terno', 'Cinquina'], [1,5,1]),
                new Bill.Bill(5,['Tutte'],['Ambo', 'Terno', 'Cinquina'], [5,5,1]) ];

describe('Check Input', () => {

    it('check', () => {
        expect(utils.check(['1','3','x'], 'x')).toBe('x');
        expect(utils.check(['1','3','x'], '1')).toBe('1');
        expect(utils.check(['1','3','x'], '2')).toBeFalsy();
    })
});

describe('Print', () => {

    it('printList', () => {
        expect(utils.printList(['next', 'other', 'never'])[0]).toEqual(['1', '2', '3']);
        expect(utils.printList(['next', 'other', 'never'])[1]).toBe('1) next\n2) other\n3) never\n');
        expect(utils.printList(['next', 'other', 'never'])).toHaveLength(2);
    })

    it('separator', () => {
        expect(utils.separator(10)).toBe('==========');
    })

    it('ticketTitle', () => {
        expect(utils.ticketTitle(20)).toBe('\n                      TICKET #20\n');
    })

    it('printInline', () => {
        expect(utils.printInline([['next', 'other', 'never']])).toBe('================\nnext,other,never\n================\n');
    })

    it('showCompletedTicket', () => {
        expect(utils.showCompletedTicket(ticket)).toBe('Ticket #1 : 5 numbers played on the Bari,Milano wheel with Ambo € 2 ,Terno € 5\nTicket #2 : 10 numbers played on the Firenze wheel with Ambo € 1 ,Terno € 5 ,Cinquina € 1\nTicket #3 : 5 numbers played on the Tutte wheel with Ambo € 5 ,Terno € 5 ,Cinquina € 1\n');
    })

    it('centerWord', () => {
        expect(utils.centerWord(20, 'collisione')).toBe('     collisione     ');
        expect(utils.centerWord(20, 'collision')).toBe('     collision      ');
    })

    it('printFakeExtraction', () => {
        const table = utils.printFakeExtraction([[[2,'Estratto', 4], [1,'Ambo', 6],1], [[1,'Terno', 0], 2]]);
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

describe('Menage choice', () => {

    it('arrayNumber', () => {
        expect(utils.arrayNumber(1,10)).toEqual(['1','2','3','4','5','6','7','8','9','10']);
        expect(utils.arrayNumber(5,8)).toEqual(['5','6','7','8']);
    })

    it('menageWheel', () => {
        function test (numbersPlayed, whellOrType, num, selected, cities) {
            return [numbersPlayed, whellOrType, num, selected, cities]
        }
        expect(utils.menageWheel('4',5,'wheel',1,[],[...Bill.cities],test)).toEqual([5,'wheel',1,['Genova'],['Bari','Cagliari','Firenze','Milano','Napoli','Palermo','Roma','Torino','Venezia']]);
        expect(utils.menageWheel('11',3,'wheel',1,[],[...Bill.cities],test)).toEqual(['Tutte']);
        expect(utils.menageWheel('n',3,'wheel',1,[],[...Bill.cities],test)).toEqual([3,'wheel',1,[],['Bari','Cagliari','Firenze','Genova','Milano','Napoli','Palermo','Roma','Torino','Venezia','Tutte']]);
        expect(utils.menageWheel('n',3,'wheel',1,['Milano'],[...Bill.cities],test)).toEqual(['Milano']);
    })

    it('menageType', () => {
        function test (numbersPlayed, whellOrType, num, selected, cities, type) {
            return [numbersPlayed, whellOrType, num, selected, cities, type]
        }
        expect(utils.menageType('3',5,'type',1,[],['Test'],[...Bill.types],test)).toEqual([5,'type',1,['Terno'],['Test'],['Estratto','Ambo','Quaterna','Cinquina']]);
        expect(utils.menageType('n',3,'type',1,[],['Test'],[...Bill.types],test)).toEqual([3,'type',1,[],['Test'],['Estratto','Ambo','Terno','Quaterna','Cinquina']]);
        expect(utils.menageType('n',3,'type',1,['Terno'],['Test'],[...Bill.types],test)).toEqual(['Terno']);

    })
});

describe('Fake Extraction', () => {

    it('genNumber', () => {
        const number = utils.genNumber();
        const numberSet = [...new Set(number)];

        expect(number).toHaveLength(5);
        expect(numberSet).toHaveLength(5);

        number.forEach(el => {
            expect(typeof el).toBe('number');
            expect(el > 0 && el < 91).toBeTruthy();
        })
    })

    it('numberExtraction', () => {
        const extraction = utils.numberExtraction();

        expect(extraction).toHaveLength(10);

        extraction.forEach(wheelNumber => {
            expect(wheelNumber).toHaveLength(5);
            expect(Array.isArray(wheelNumber)).toBeTruthy();

            const wheelSet = [...new Set(wheelNumber)];
            expect(wheelSet).toHaveLength(5);

            wheelNumber.forEach(num => {
                expect(typeof num).toBe('number');
                expect(num > 0 && num < 91).toBeTruthy();
            })
        })
    })

    it('combination', () => {
        expect(utils.combinations(2,1)).toBe(2);
        expect(utils.combinations(5,3)).toBe(10);
        expect(utils.combinations(9,4)).toBe(126);
        expect(utils.combinations(10,5)).toBe(252);

    });

    it('checkWin', () => {
        const extractions = [[80,26,57,29,31],[10,43,49,32,50],[85,87,68,14,20],[21,46,42,51,82],[41,62,50,15,89],[72,42,14,88,61],[12,77,54,1,69],[39,42,7,41,1],[30,3,84,90,31],[43,3,5,41,68]]
        const extraction = utils.checkWin([31,44,46,57,66,79,81,90], ['Bari', 'Firenze'], ['Ambo', 'Terno'], extractions);
        const extraction2 = utils.checkWin([31,29,46,57,66,14,81,20], ['Bari', 'Firenze'], ['Ambo', 'Terno'], extractions);
        const extraction3 = utils.checkWin([31,29,46,57,66,14,81,20], ['Tutte'], ['Estratto','Ambo', 'Terno'], extractions);
        const extraction4 = utils.checkWin([86], ['Tutte'], ['Estratto'], extractions);

        expect(extraction).toEqual([[1,'Ambo',0]])
        expect(extraction2).toEqual([[3,'Ambo',0],[1,'Terno',0],[1,'Ambo',2]])
        expect(extraction3).toEqual([[3,'Estratto',0],[3,'Ambo',0],[1,'Terno',0],[2,'Estratto',2],[1,'Ambo',2],[1,'Estratto',3],[1,'Estratto',5],[1,'Estratto',8]])
        expect(extraction4).toEqual([])
    })

    const allWin = [[[3,'Ambo',0],[1,'Terno',0],[1,'Ambo',2],1], [[1,'Estratto',6],[1,'Ambo',0],[1,'Terno',2],2], [[3,'Ambo',6],[1,'Terno',6],3]];

    it('allWinToString', () => {
        const allWin2 = [[1], [[1,'Estratto',6],[1,'Ambo',0],[1,'Terno',2],2]];

        expect(utils.allWinToString(allWin)).toEqual([' #1 3 Ambo-1 Terno #2 1 Ambo','',' #1 1 Ambo #2 1 Terno','','','',' #2 1 Estratto #3 3 Ambo-1 Terno','','',''])
        expect(utils.allWinToString(allWin2)).toEqual([' #2 1 Ambo','',' #2 1 Terno','','','',' #2 1 Estratto','','',''])
    })

    it('moneyWon', () => {
        expect(utils.moneyWon(allWin, ticket)).toEqual([[1104, '3 Ambo 1 Terno ', 'Bari'], [172.5, '1 Terno ', 'Firenze'], [241.5, '3 Ambo 1 Terno ', 'Palermo']])
    });

})