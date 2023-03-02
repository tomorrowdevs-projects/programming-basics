const chkw = require('../controller/checkWin');
const Bill = require('../model/Bill');

describe('checkWin', () => {

    const ticket1 = new Bill.Bill(8,['Bari', 'Firenze'], ['Ambo', 'Terno'], [3,5]);
    const ticket2 = new Bill.Bill(8,['Bari', 'Firenze'], ['Ambo', 'Terno'], [3,5]);
    const ticket3 = new Bill.Bill(8,['Tutte'], ['Estratto', 'Ambo', 'Terno'], [3,5,9]);
    const ticket4 = new Bill.Bill(1,['Tutte'], ['Estratto'], [3]);
    const ticket5 = new Bill.Bill(7,['Tutte'], ['Estratto'], [3]);

    ticket1._generateNumber = [31,44,46,57,66,79,81,90];
    ticket2._generateNumber = [31,29,46,57,66,14,81,20];
    ticket3._generateNumber = [31,29,46,57,66,14,81,20];
    ticket4._generateNumber = [86];
    ticket5._generateNumber = [80,87,41,62,12,3,90];

    const tickets = [ ticket1, ticket2, ticket3, ticket4, ticket5 ];

    const extractions = { getAll: {
                        Bari: [80,26,57,29,31],
                        Cagliari: [10,43,49,32,50],
                        Firenze: [85,87,68,14,20],
                        Genova: [21,46,42,51,82],
                        Milano: [41,62,50,15,89],
                        Napoli: [72,42,14,88,61],
                        Palermo: [12,77,54,1,69],
                        Roma: [39,42,7,41,1],
                        Torino: [30,3,84,90,31],
                        Venezia: [43,3,5,41,68] 
                        }};

    const winnerTicket = chkw.checkAllWin(tickets, extractions);
    
    it('combination', () => {
        expect(chkw.combinations(2,1)).toBe(2);
        expect(chkw.combinations(5,3)).toBe(10);
        expect(chkw.combinations(9,4)).toBe(126);
        expect(chkw.combinations(10,5)).toBe(252);

    });

    it('checkWin', () => {
        const result = chkw.checkWin(ticket1, extractions.getAll);
        const result2 = chkw.checkWin(ticket2, extractions.getAll);
        const result3 = chkw.checkWin(ticket3, extractions.getAll);
        const result4 = chkw.checkWin(ticket4, extractions.getAll);
        const result5 = chkw.checkWin(ticket5, extractions.getAll);

        expect(result).toEqual([[1,'Ambo','Bari',101,[31,57]]])
        expect(result2).toEqual([[3,'Ambo','Bari',102,[31,29,57]],[1,'Terno','Bari',102,[31,29,57]],[1,'Ambo','Firenze',102,[14,20]]])
        expect(result3).toEqual([[3,'Estratto','Bari',103,[31,29,57]],[3,'Ambo','Bari',103,[31,29,57]],[1,'Terno','Bari',103,[31,29,57]],[2,'Estratto','Firenze',103,[14,20]],[1,'Ambo','Firenze',103,[14,20]],[1,'Estratto','Genova',103,[46]],[1,'Estratto','Napoli',103,[14]],[1,'Estratto','Torino',103,[31]]])
        expect(result4).toEqual([])
        expect(result5).toEqual([[2,'Estratto','Milano', 105,[41,62]]])
    })

    it('checkAllWin', () => {
        expect(winnerTicket).toEqual([[[1,'Ambo','Bari',101,[31,57]]],[[3,'Ambo','Bari',102,[31,29,57]],[1,'Terno','Bari',102,[31,29,57]],[1,'Ambo','Firenze',102,[14,20]]],[[3,'Estratto','Bari',103,[31,29,57]],[3,'Ambo','Bari',103,[31,29,57]],[1,'Terno','Bari',103,[31,29,57]],[2,'Estratto','Firenze',103,[14,20]],[1,'Ambo','Firenze',103,[14,20]],[1,'Estratto','Genova',103,[46]],[1,'Estratto','Napoli',103,[14]],[1,'Estratto','Torino',103,[31]]],[],[[2,'Estratto','Milano', 105,[41,62]]]]);
    });

    it('moneyWom', () => {
        expect(chkw.moneyWon(winnerTicket, tickets)).toEqual([[12.32,'1 Ambo ','Bari',101,[31,57]],[221.78,'3 Ambo 1 Terno ','Bari',102,[31,29,57]],[80.02,'3 Estratto 3 Ambo 1 Terno ','Bari',103,[31,29,57]],[0],[0.89,'2 Estratto ','Milano',105,[41,62]]]);
    });

    it('cashWin', () => {
        expect(chkw.cashWin(winnerTicket, tickets)).toEqual([39, '315.01']);
    });
});
