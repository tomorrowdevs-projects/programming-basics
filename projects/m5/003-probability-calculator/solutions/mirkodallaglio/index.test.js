const index = require ('./index')

describe('class Hat', () => {
    const hat = new index.Hat('black=1, blue=0, pink=2, striped=4');

    it('check contents', () => {
        expect(hat.contents).toEqual(['black', 'pink', 'pink', 'striped', 'striped', 'striped', 'striped',]);
    })

    it('draw method with number > contents.length', () => {
        expect(hat.draw(8)).toEqual(['black', 'pink', 'pink', 'striped', 'striped', 'striped', 'striped',]);
        expect(hat.draw(10)).toHaveLength(7);
    })

    it('draw method check number elements in result', () => {
        expect(hat.draw(4)).toHaveLength(4);
    })

    it('draw method array is a subset of the received array', () => {
        expect(hat.contents).toEqual(expect.arrayContaining(hat.draw(4)));
    })
})

