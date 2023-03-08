const shape_calculator = require('./shape_calculator');

describe('class Rectangle', () => {
    const rect = new shape_calculator.Rectangle(15,45);

    it('check value', () => {
        expect(rect.width).toBe(15);
        expect(rect.height).toBe(45);
    })

    it('set width', () => {
        rect.width = 30;
        expect(rect.width).toBe(30);
    })

    it('set heigth', () => {
        rect.height = 18;
        expect(rect.height).toBe(18);
    })

    it('set width and height with error (string or negative number)', () => {
        rect.height = 'ciao';
        expect(rect.height).toBe(18);
        rect.width = -30;
        expect(rect.width).toBe(30);
    })

    it('get_area', () => {
        expect(rect.get_area()).toBe(540);
    })

    it('get_perimeter', () => {
        expect(rect.get_perimeter()).toBe(96);
    })

    it('get_diagonal', () => {
        expect(rect.get_diagonal()).toBe(34.9857113690718);
    })

    describe('get_picture', () => {
        it('picture less than 50 in width or height', () => {
            expect(rect.get_picture()).toBe(`******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
******************************
`);
        })

        it('picture greater than 50 in width', () => {
            rect.width = 51;
            expect(rect.get_picture()).toBe('Too big for picture')
        })

        it('picture greater than 50 in height', () => {
            rect.width = 30;
            rect.height = 51;
            expect(rect.get_picture()).toBe('Too big for picture')
        })
    })

    describe('get_amount_inside', () => {
        const rect1 = new shape_calculator.Rectangle(30,18);

        const rect2 = new shape_calculator.Rectangle(15,19);
        const rect3 = new shape_calculator.Rectangle(30,18);
        const rect4 = new shape_calculator.Rectangle(15,9);
        const rect5 = new shape_calculator.Rectangle(23,8);
        it('larger shape', () => {
            expect(rect1.get_amount_inside(rect2)).toBe(0);
        })
        it('1:1', () => {
            expect(rect1.get_amount_inside(rect3)).toBe(1);
        })
        it('smaller shapes that fill the entire area', () => {
            expect(rect1.get_amount_inside(rect4)).toBe(4);
        })
        it("smaller shapes that don't fill the entire area", () => {
            expect(rect1.get_amount_inside(rect5)).toBe(2);
        })
    })

    it('view', () => {
        expect(rect.view()).toBe(`Rectangle(width=30, height=51)`)
    })

    it('show_all', () => {
        expect(rect.show_all()).toBe(`Rectangle(width=30, height=51)\nPerimeter=162\nArea=1530\nDiagonal=59.17\nPicture:\nToo big for picture`)
    })
});

describe('class Square', () => {
    const square = new shape_calculator.Square(10);

    it('check value', () => {
        expect(square.side).toBe(10);
        expect(square.width).toBe(10);
        expect(square.height).toBe(10);
    })

    it('set width', () => {
        square.width = 30;
        expect(square.width).toBe(30);
        expect(square.side).toBe(30);
        expect(square.height).toBe(30);
    })

    it('set heigth', () => {
        square.height = 18;
        expect(square.width).toBe(18);
        expect(square.side).toBe(18);
        expect(square.height).toBe(18);
    })

    it('set side', () => {
        square.side = 6;
        expect(square.width).toBe(6);
        expect(square.side).toBe(6);
        expect(square.height).toBe(6);
    })

    it('set side with error (string or negative number)', () => {
        square.side = 'ciao';
        expect(square.side).toBe(6);
        square.side = -30;
        expect(square.width).toBe(6);
        expect(square.height).toBe(6);
        expect(square.side).toBe(6);
    })

    it('view', () => {
        expect(square.view()).toBe(`Square(side=6)`)
    })
})