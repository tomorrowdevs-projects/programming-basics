const menage = require('../lotto-game/controller/menageChoice');
const Bill = require('../lotto-game/model/Bill');
const utils = require('../lotto-game/controller/utils')

describe('Menage choice', () => {

    it('arrayNumber', () => {
        expect(utils.arrayNumber(1,10)).toEqual(['1','2','3','4','5','6','7','8','9','10']);
        expect(utils.arrayNumber(5,8)).toEqual(['5','6','7','8']);
    })

    it('menageWheel', () => {
        function test (numbersPlayed, whellOrType, num, selected, cities) {
            return [numbersPlayed, whellOrType, num, selected, cities]
        }
        expect(menage.menageWheel('4',5,'wheel',1,[],[...Bill.cities],test)).toEqual([5,'wheel',1,['Genova'],['Bari','Cagliari','Firenze','Milano','Napoli','Palermo','Roma','Torino','Venezia']]);
        expect(menage.menageWheel('11',3,'wheel',1,[],[...Bill.cities],test)).toEqual(['Tutte']);
        expect(menage.menageWheel('n',3,'wheel',1,[],[...Bill.cities],test)).toEqual([3,'wheel',1,[],['Bari','Cagliari','Firenze','Genova','Milano','Napoli','Palermo','Roma','Torino','Venezia','Tutte']]);
        expect(menage.menageWheel('n',3,'wheel',1,['Milano'],[...Bill.cities],test)).toEqual(['Milano']);
    })

    it('menageType', () => {
        function test (numbersPlayed, whellOrType, num, selected, cities, type) {
            return [numbersPlayed, whellOrType, num, selected, cities, type]
        }
        expect(menage.menageType('3',5,'type',1,[],['Test'],[...Bill.types],test)).toEqual([5,'type',1,['Terno'],['Test'],['Estratto','Ambo','Quaterna','Cinquina']]);
        expect(menage.menageType('n',3,'type',1,[],['Test'],[...Bill.types],test)).toEqual([3,'type',1,[],['Test'],['Estratto','Ambo','Terno','Quaterna','Cinquina']]);
        expect(menage.menageType('n',3,'type',1,['Terno'],['Test'],[...Bill.types],test)).toEqual(['Terno']);

    })
});
