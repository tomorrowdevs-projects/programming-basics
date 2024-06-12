const print = require('../view/print');
const Bill = require('../model/Bill');
const fs = require('fs');

const ticket = [[5,['Bari','Milano'],['Ambo', 'Terno'],[2,5]], 
                [10,['Firenze'],['Ambo', 'Terno', 'Cinquina'], [1,5,1]],
                [5,['Tutte'],['Ambo', 'Terno', 'Cinquina'], [5,5,1]] ];

const ticket1 = new Bill.Bill(...ticket[1]);
ticket1._generateNumber = [6,57,25,18,9,58,5,26,61,56];
const ticket2 = new Bill.Bill(...ticket[2]);
ticket2._generateNumber = [10,51,29,68,90];

const extractions = {
    numExtraction: 23,
    date: '05/10/2024',
    getAll: {
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
    }
};

describe('Print', () => {

    it('printList', () => {
        expect(print.printList(['next', 'other', 'never'])[0]).toEqual(['1', '2', '3']);
        expect(print.printList(['next', 'other', 'never'])[1]).toBe('1) next\n2) other\n3) never\n');
        expect(print.printList(['next', 'other', 'never'])).toHaveLength(2);
    })

    it('separator', () => {
        expect(print.separator(10,'=')).toBe('==========');
        expect(print.separator(0,'=')).toBe('');
    })

    it('ticketTitle', () => {
        expect(print.ticketTitle(20)).toBe('\n                      TICKET 20\n');
    })

    it('printInline', () => {
        expect(print.printInline([['next', 'other', 'never']])).toBe('================\nnext,other,never\n================\n');
    })

    it('showCompletedTicket', () => {
        expect(print.showCompletedTicket(ticket)).toBe('Ticket 1 : 5 numbers played on the Bari,Milano wheel with Ambo € 2 ,Terno € 5\nTicket 2 : 10 numbers played on the Firenze wheel with Ambo € 1 ,Terno € 5 ,Cinquina € 1\nTicket 3 : 5 numbers played on the Tutte wheel with Ambo € 5 ,Terno € 5 ,Cinquina € 1\n');
    })

    it('centerWord', () => {
        expect(print.centerWord(20, 'collisione')).toBe('     collisione     ');
        expect(print.centerWord(20, 'collision')).toBe('     collision      ');
    })

    it('printFakeExtraction', () => {
        expect(print.printFakeExtraction(extractions)).toBe(`
 FAKE EXTRACTIONS n° 23 del 05/10/2024 
+==========+==========================+
|   Bari   |  80 - 26 - 57 - 29 - 31  |
+==========+==========================+
| Cagliari |  10 - 43 - 49 - 32 - 50  |
+==========+==========================+
| Firenze  |  85 - 87 - 68 - 14 - 20  |
+==========+==========================+
|  Genova  |  21 - 46 - 42 - 51 - 82  |
+==========+==========================+
|  Milano  |  41 - 62 - 50 - 15 - 89  |
+==========+==========================+
|  Napoli  |  72 - 42 - 14 - 88 - 61  |
+==========+==========================+
| Palermo  |  12 - 77 - 54 - 1 - 69   |
+==========+==========================+
|   Roma   |   39 - 42 - 7 - 41 - 1   |
+==========+==========================+
|  Torino  |  30 - 3 - 84 - 90 - 31   |
+==========+==========================+
| Venezia  |   43 - 3 - 5 - 41 - 68   |
+==========+==========================+
`)
            
    })

    it('printTicket', () => {

        expect(print.printTicket(ticket1)).toBe(`+==============================================+
|        LOTTO GAME TICKET #101 **€ 7**        |
|                                              |
|                   Firenze                    |
|                                              |
|            Ambo  Terno  Cinquina             |
|                                              |
|             €1    €5       €1                |
|                                              |
| 6 - 57 - 25 - 18 - 9 - 58 - 5 - 26 - 61 - 56 |
|                                              |
|                Winning : NO !                |
|                                              |
+==============================================+

`);
        ticket1._winning = [ 2.15, '2 Estratto 1 Ambo ', 'Palermo', 101, [ 52, 44 ] ];
        expect(print.printTicket(ticket1)).toBe(`+======================================================+
|            LOTTO GAME TICKET #101 **€ 7**            |
|                                                      |
|                       Firenze                        |
|                                                      |
|                Ambo  Terno  Cinquina                 |
|                                                      |
|                 €1    €5       €1                    |
|                                                      |
|     6 - 57 - 25 - 18 - 9 - 58 - 5 - 26 - 61 - 56     |
|                                                      |
| Winning:(52,44) 2 Estratto 1 Ambo  on Palermo € 2.15 |
|                                                      |
+======================================================+

`);
    });

    it('printAllTicket', () => {
        expect(print.printAllTicket([ticket1, ticket2])).toBe(`+======================================================+
|            LOTTO GAME TICKET #101 **€ 7**            |
|                                                      |
|                       Firenze                        |
|                                                      |
|                Ambo  Terno  Cinquina                 |
|                                                      |
|                 €1    €5       €1                    |
|                                                      |
|     6 - 57 - 25 - 18 - 9 - 58 - 5 - 26 - 61 - 56     |
|                                                      |
| Winning:(52,44) 2 Estratto 1 Ambo  on Palermo € 2.15 |
|                                                      |
+======================================================+

+=================================+
| LOTTO GAME TICKET #102 **€ 11** |
|                                 |
|              Tutte              |
|                                 |
|      Ambo  Terno  Cinquina      |
|                                 |
|       €5    €5       €1         |
|                                 |
|     10 - 51 - 29 - 68 - 90      |
|                                 |
|         Winning : NO !          |
|                                 |
+=================================+

`);
    });

    it('createTicketFile', () => {
        fs.unlinkSync('tickets.txt');
        print.createTicketFile(print.printAllTicket([ticket2]), [40])
        expect(fs.existsSync('tickets.txt')).toBe(true);
        expect(fs.readFileSync('tickets.txt', 'utf8')).toBe(`+=================================+
| LOTTO GAME TICKET #102 **€ 11** |
|                                 |
|              Tutte              |
|                                 |
|      Ambo  Terno  Cinquina      |
|                                 |
|       €5    €5       €1         |
|                                 |
|     10 - 51 - 29 - 68 - 90      |
|                                 |
|         Winning : NO !          |
|                                 |
+=================================+

The total spent on all tickets is € 40`)
    });

    it('showAll', () => {
        const logSpy2 = jest.spyOn(console, 'log');
        print.showAll([ticket1, ticket2], extractions, [45,670]);

        expect(logSpy2).toHaveBeenNthCalledWith(1,`
 FAKE EXTRACTIONS n° 23 del 05/10/2024 
+==========+==========================+
|   Bari   |  80 - 26 - 57 - 29 - 31  |
+==========+==========================+
| Cagliari |  10 - 43 - 49 - 32 - 50  |
+==========+==========================+
| Firenze  |  85 - 87 - 68 - 14 - 20  |
+==========+==========================+
|  Genova  |  21 - 46 - 42 - 51 - 82  |
+==========+==========================+
|  Milano  |  41 - 62 - 50 - 15 - 89  |
+==========+==========================+
|  Napoli  |  72 - 42 - 14 - 88 - 61  |
+==========+==========================+
| Palermo  |  12 - 77 - 54 - 1 - 69   |
+==========+==========================+
|   Roma   |   39 - 42 - 7 - 41 - 1   |
+==========+==========================+
|  Torino  |  30 - 3 - 84 - 90 - 31   |
+==========+==========================+
| Venezia  |   43 - 3 - 5 - 41 - 68   |
+==========+==========================+
`); 
         expect(logSpy2).toHaveBeenNthCalledWith(2,`+======================================================+
|            LOTTO GAME TICKET #101 **€ 7**            |
|                                                      |
|                       Firenze                        |
|                                                      |
|                Ambo  Terno  Cinquina                 |
|                                                      |
|                 €1    €5       €1                    |
|                                                      |
|     6 - 57 - 25 - 18 - 9 - 58 - 5 - 26 - 61 - 56     |
|                                                      |
| Winning:(52,44) 2 Estratto 1 Ambo  on Palermo € 2.15 |
|                                                      |
+======================================================+

+=================================+
| LOTTO GAME TICKET #102 **€ 11** |
|                                 |
|              Tutte              |
|                                 |
|      Ambo  Terno  Cinquina      |
|                                 |
|       €5    €5       €1         |
|                                 |
|     10 - 51 - 29 - 68 - 90      |
|                                 |
|         Winning : NO !          |
|                                 |
+=================================+

`);
        expect(logSpy2).toHaveBeenNthCalledWith(3,'Total winnings already detaxed by 8%:\n');
        expect(logSpy2).toHaveBeenNthCalledWith(4,`Total winnings: € 670
Total invested: € 45`) 
    });
});
