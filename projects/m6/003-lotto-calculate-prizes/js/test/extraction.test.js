const extraction = require('../model/extraction');

describe('Extraction Class', () => {

    const fakeExtraction = new extraction.Extraction();

    it('date', () => {
        const date = new Date().toLocaleDateString('it-IT', {
            day:"numeric",
            month: "short",
            year: "numeric",
        });
        expect(fakeExtraction._date).toBe(date);
    });

    it('extraction number', () => {
        expect(fakeExtraction.numExtraction).toBe(1);
        const fakeExtraction2 = new extraction.Extraction();
        const fakeExtraction3 = new extraction.Extraction();
        const fakeExtraction4 = new extraction.Extraction();
        const fakeExtraction5 = new extraction.Extraction();
        expect(fakeExtraction2.numExtraction).toBe(2);
        expect(fakeExtraction3.numExtraction).toBe(3);
        expect(fakeExtraction4.numExtraction).toBe(4);
        expect(fakeExtraction5.numExtraction).toBe(5);
    });

    it('getWheel', () => {
        const set = [...new Set(fakeExtraction.getWheel('Roma'))];
        expect(fakeExtraction.getWheel('Roma')).toHaveLength(5);
        expect(set).toHaveLength(5);
        expect(() => fakeExtraction.getWheel('Romaa')).toThrow();

        fakeExtraction.getWheel('Roma').forEach(el => {
            expect(el).toBeGreaterThanOrEqual(1);
            expect(el).toBeLessThanOrEqual(90);
        })
    })

    it('getAll', () => {
        const city = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia'];
        
        expect(Object.entries(fakeExtraction.getAll)).toHaveLength(city.length);

        city.forEach(el => {
            const set = [...new Set(fakeExtraction.getAll[el])];
            expect(fakeExtraction.getAll).toHaveProperty(el);
            expect(fakeExtraction.getAll[el]).toHaveLength(5);
            expect(set).toHaveLength(5);
            fakeExtraction.getAll[el].forEach(elem => {
                expect(elem).toBeGreaterThanOrEqual(1);
                expect(elem).toBeLessThanOrEqual(90);
            })
        })
    })
})