const utils = require('../lotto-game/controller/utils')
const Bill = require('../lotto-game/model/Bill')


const ticket = [new Bill.Bill(5,['Bari','Milano'],['Ambo', 'Terno'],[2,5]), 
                new Bill.Bill(10,['Firenze'],['Ambo', 'Terno', 'Cinquina'], [1,5,1]),
                new Bill.Bill(5,['Tutte'],['Ambo', 'Terno', 'Cinquina'], [5,5,1]) ];


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