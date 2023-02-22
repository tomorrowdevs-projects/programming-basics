const menage = require('../view/menageChoice');
const check = require('../view/check')
const Bill = require('../model/Bill');

describe('Menage choice', () => {
    const spy = jest.spyOn(check, 'inputAndCheck');

    it('howManyTicket', () => {
        spy.mockReturnValue(2);
        expect(menage.howManyTicket()).toBe(2);
    });

    it('chooseNumber', () => {
        spy.mockReturnValue(5);
        expect(menage.chooseNumber()).toBe(5);
    });

    it('menageWheel', () => {
        spy.mockReturnValue('n').mockReturnValueOnce(4);
        expect(menage.menageWheel(5,1)).toEqual(['Genova']);

        spy.mockReturnValue('11')
        expect(menage.menageWheel(3,1)).toEqual(['Tutte']);

        spy.mockReturnValue('n').mockReturnValueOnce(2).mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValueOnce(1);
        expect(menage.menageWheel(5,1)).toEqual(['Cagliari', 'Milano', 'Genova', 'Bari']);

        spy.mockReturnValue('n').mockReturnValueOnce(12).mockReturnValueOnce(4);
        expect(menage.menageWheel(5,1)).toEqual(['Genova']);
    });

    it('menageType', () => {
        spy.mockReturnValue('n').mockReturnValueOnce(3);
        expect(menage.menageType(5,1)).toEqual(['Terno']);

        spy.mockReturnValue('n').mockReturnValueOnce(1).mockReturnValueOnce(2);
        expect(menage.menageType(3,1)).toEqual(['Estratto','Terno']);
        
        expect(menage.menageType(1,1)).toEqual(['Estratto']);
        
        spy.mockReturnValue('n').mockReturnValueOnce('n').mockReturnValueOnce(1);
        expect(menage.menageType(3,1)).toEqual(['Estratto']);
    });

    it('prices', () => {
        spy.mockReturnValue(5);
        expect(menage.prices(['Estratto', 'Ambo'], 1)).toEqual([5,5])
        expect(menage.prices(['Estratto'], 1)).toEqual([5])
    });

    it('fillTickets', () => {
        menage.chooseNumber = jest.fn().mockReturnValue(3).mockReturnValueOnce(5);
        menage.menageWheel = jest.fn().mockReturnValue(['Genova', 'Milano', 'Firenze']).mockReturnValueOnce(['Tutte']);
        menage.menageType = jest.fn().mockReturnValue(['Ambo', 'Terno']).mockReturnValueOnce(['Estratto' ,'Quaterna']);
        menage.prices = jest.fn().mockReturnValue([5,12]).mockReturnValueOnce([9,10]);
        const fill = menage.fillTickets(2);

        expect(fill.length).toBe(2);

        fill.forEach((el, index) => {
            expect(el).toBeInstanceOf(Bill.Bill);

            if (index === 0) {
                expect(el.numbers).toBe(5);
                expect(el.city).toEqual(['Tutte']);
                expect(el.type).toEqual(['Estratto' ,'Quaterna']);
                expect(el.prices).toEqual([9,10]);
            }

            if (index === 1) {
                expect(el.numbers).toBe(3);
                expect(el.city).toEqual(['Genova', 'Milano', 'Firenze']);
                expect(el.type).toEqual(['Ambo', 'Terno']);
                expect(el.prices).toEqual([5,12]);
            }
        })
    });

    it('repeat', () => {
        spy.mockReturnValue('y');
        const cb = () => 5;
        expect(menage.repeat(cb)).toBe(5);
        spy.mockReturnValue('n');
        expect(menage.repeat(cb)).toBeUndefined();
    });
});
