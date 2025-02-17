const Bill = require('../Bill')

describe('Bill Class', () => {

    describe('Getter & Setter', () => {
        const ticket = new Bill.Bill(8,['Bari'],['Ambo', 'Quaterna']);

        it('get numbers', () => {
            expect(ticket.numbers).toBe(8)
        })
        it('get type', () => {
            expect(ticket.type).toEqual(['Ambo', 'Quaterna'])
        })
        it('get city', () => {
            expect(ticket.city).toEqual(['Bari'])
        })

        it('set numbers > 10', () => {
            try{
                ticket2 = new Bill.Bill(14,['Bari'],['Ambo', 'Quaterna']);
            } catch (err) {
                expect(err.message).toBe('14 is a invalid numbers, Bill instance not created\nAccepted parameters : Number from 1 to 10')
            }
        })

        it('set city incorrectly named', () => {
            try{
                ticket3 = new Bill.Bill(5,['Baris'],['Ambo', 'Quaterna']);
            } catch (err) {
                expect(err.message).toBe('Baris is a invalid city, Bill instance not created\nAccepted parameters : Bari-Cagliari-Firenze-Genova-Milano-Napoli-Palermo-Roma-Torino-Venezia-Tutte')
            }
        })

        it('set city input not array', () => {
            try{
                ticket4 = new Bill.Bill(5,'Bari',['Ambo']);
            } catch (err) {
                expect(err.message).toBe(`Input "Bari" isn't an array or it is empty, Bill instance not created`);
            }
        })

        it('set city with 10 city', () => {
            ticket5 = new Bill.Bill(5,['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia'],['Ambo', 'Quaterna']);
            expect(ticket5.city).toEqual(['Tutte']) 
        })

        it('set type incorrectly named', () => {
            try{
                ticket6 = new Bill.Bill(5,['Bari'],['Ambos', 'Quaterna']);
            } catch (err) {
                expect(err.message).toBe('Ambos,Quaterna is a invalid type, Bill instance not created\nAccepted parameters : Estratto-Ambetto-Ambo-Terno-Quaterna-Cinquina');
            }
        })

        it('set type input not array', () => {
            try{
                ticket7 = new Bill.Bill(5,['Bari'],'Ambo');
            } catch (err) {
                expect(err.message).toBe(`Input "Ambo" isn't an array or it is empty, Bill instance not created`);
            }
        })

        it('set type with drawn numbers less than 5', () => {
            try{
                ticket8 = new Bill.Bill(3,['Bari'],['Quaterna', 'Cinquina']);
            } catch (err) {
                expect(err.message).toBe('Quaterna,Cinquina is a invalid type: you cannot choose Quaterna,Cinquina because you are playing only 3 numbers, Bill instance not created\nAccepted parameters : Estratto-Ambetto-Ambo-Terno')
            }
        })

        it('set type with drawn numbers equal 1', () => {
            try{
                ticket9 = new Bill.Bill(1,['Bari'],['Ambo']);
            } catch (err) {
                expect(err.message).toBe('Ambo is a invalid type: you cannot choose Ambetto,Ambo,Terno,Quaterna,Cinquina because you are playing only 1 numbers, Bill instance not created\nAccepted parameters : Estratto')
            }
        })
    })

    describe('Print Method', () => {
        it('Check table before and after rnd numbers', () => {
            ticket10 = new Bill.Bill(3,['Bari'],['Ambo']);
            const printBefore = ticket10.print(6).slice(0,451);
            const printAfter = ticket10.print(6).slice(464);
            console.log(printAfter)
            expect(printBefore).toBe(`+==========================================================+
|                   LOTTO GAME TICKET #6                   |
+==========================================================+
|                           Bari                           |
+==========================================================+
|                           Ambo                           |
+==========================================================+
|                       `);
            expect(printAfter).toBe(`                      |
+==========================================================+

`)

        })
    })
})