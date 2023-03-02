const { show } = require('../view/terminal');

describe('terminal', () => {

    it('show', () => {
        const logSpy = jest.spyOn(console, 'log');
        const logSpy2 = jest.spyOn(console, 'clear');

        show('', 'error');
        expect(logSpy).toHaveBeenNthCalledWith(1,'Input error, try again !\n');
        show('', 'test prova test');
        expect(logSpy).toHaveBeenNthCalledWith(2,'test prova test');
        show('clear', 'test prova test');
        expect(logSpy2).toHaveBeenNthCalledWith(1);
        show('', 'test', 'next');
        expect(logSpy).toHaveBeenNthCalledWith(4,'test');
        expect(logSpy).toHaveBeenNthCalledWith(5,'\nn) Next\n\n');
    });
});