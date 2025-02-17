const {
    generateBingoCard, 
    generateBingoCalls, 
    shuffle, 
    checkBingoCard, 
    markNumber, 
} = require('./functions.js');

const mainModule = require('./index.js');
const { main, simulateGame } = mainModule;
let simulateGameCallCount = mainModule.simulateGameCallCount;


test('generateBingoCard should return a valid Bingo card', () => {
    const card = generateBingoCard();
    const headers = ['B', 'I', 'N', 'G', 'O'];
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

    headers.forEach((header, i) => {
        // Verifica che la carta abbia l'intestazione corretta
        expect(card).toHaveProperty(header);
        // Verifica che l'intestazione abbia esattamente 5 numeri
        expect(card[header]).toHaveLength(5);
        // Verifica che ogni numero sia nel range corretto
        card[header].forEach(num => {
            expect(num).toBeGreaterThanOrEqual(ranges[i][0]);
            expect(num).toBeLessThanOrEqual(ranges[i][1]);
        });
    });
});

test('generateBingoCalls should generate all possible Bingo calls', () => {
    const calls = generateBingoCalls();
    const letters = ['B', 'I', 'N', 'G', 'O'];
    const ranges = [[1, 15], [16, 30], [31, 45], [46, 60], [61, 75]];

    // Il numero totale di chiamate dovrebbe essere la somma delle lunghezze di tutti i range
    const totalCalls = ranges.reduce((sum, range) => sum + (range[1] - range[0] + 1), 0);
    expect(calls).toHaveLength(totalCalls);

    // Verifica che ogni possibile chiamata sia presente
    letters.forEach((letter, i) => {
        for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
            expect(calls).toContain(letter + j);
        }
    });
});

test('shuffle should return array with same length and elements', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);

    // L'array mescolato dovrebbe avere la stessa lunghezza dell'array originale
    expect(shuffledArray).toHaveLength(originalArray.length);

    // L'array mescolato dovrebbe contenere gli stessi elementi dell'array originale
    originalArray.forEach(element => {
        expect(shuffledArray).toContain(element);
    });
});

test('shuffle should return array with elements in a different order', () => {
    const originalArray = [1, 2, 3, 4, 5];

    let equal = true;
    for (let i = 0; i < 1000; i++) {
        const shuffledArray = shuffle([...originalArray]);
        if (JSON.stringify(shuffledArray) !== JSON.stringify(originalArray)) {
            equal = false;
            break;
        }
    }

    // Verifichiamo se l'array è stato effettivamente mischiato
    expect(equal).toBe(false);
});

test('should return true for a bingo card with a horizontal line', () => {
    const card = {
        B: [0, 2, 3, 4, 5],
        I: [0, 7, 8, 9, 10],
        N: [0, 12, 13, 14, 15],
        G: [0, 17, 18, 19, 20],
        O: [0, 22, 23, 24, 25]
    };
    expect(checkBingoCard(card)).toBe(true);
});

test('should return true for a bingo card with a vertical line', () => {
    const card = {
        B: [1, 0, 3, 4, 5],
        I: [6, 0, 8, 9, 10],
        N: [11, 0, 13, 14, 15],
        G: [16, 0, 18, 19, 20],
        O: [21, 0, 23, 24, 25]
    };
    expect(checkBingoCard(card)).toBe(true);
});


test('should return false for a bingo card with no lines', () => {
    const card = {
        B: [1, 2, 3, 4, 5],
        I: [1, 7, 8, 9, 10],
        N: [1, 12, 13, 14, 15],
        G: [1, 17, 18, 19, 20],
        O: [1, 22, 23, 24, 25]
    };
    expect(checkBingoCard(card)).toBe(false);
});

test('should correctly mark a number on the bingo card', () => {
    const card = {
        B: [1, 2, 3, 4, 5],
        I: [16, 17, 18, 19, 20],
        N: [31, 32, 33, 34, 35],
        G: [46, 47, 48, 49, 50],
        O: [61, 62, 63, 64, 65]
    };
    markNumber(card, 'B1');
    expect(card.B[0]).toBe(0);
});

test('should not change anything if the call does not match a number on the card', () => {
    const card = {
        B: [1, 2, 3, 4, 5],
        I: [16, 17, 18, 19, 20],
        N: [31, 32, 33, 34, 35],
        G: [46, 47, 48, 49, 50],
        O: [61, 62, 63, 64, 65]
    };
    const cardCopy = { ...card };  // Creiamo una copia della scheda per il confronto
    markNumber(card, 'B6');
    expect(card).toEqual(cardCopy);
});

test('simulateGame should return a count greater than 0', () => {
    const result = simulateGame();
    expect(result).toBeGreaterThanOrEqual(0);
});

test('simulateGame should return a count less than or equal to the total number of bingo calls', () => {
    const totalCalls = generateBingoCalls().length;
    const result = simulateGame();
    expect(result).toBeLessThanOrEqual(totalCalls);
});

describe('simulateGame function', () => {
  it('should return a count greater than 0', () => {
    const result = simulateGame();
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should return a count less than or equal to the total number of bingo calls', () => {
    const totalCalls = generateBingoCalls().length;
    const result = simulateGame();
    expect(result).toBeLessThanOrEqual(totalCalls);
  });
});

// Altri test

describe('simulateGame function', () => {
    it('should return a count greater than 0', () => {
        const count = simulateGame();
        expect(count).toBeGreaterThan(0);
    });

    it('should return a count less than or equal to the total number of bingo calls', () => {
        const count = simulateGame();
        expect(count).toBeLessThanOrEqual(90); // assumendo che ci siano 90 chiamate di bingo
    });
});

// Altri test

describe('main function', () => {
    let consoleSpy;
    let simulateGameSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
        simulateGameSpy = jest.spyOn(mainModule, 'simulateGame');
        simulateGameSpy.mockImplementation(() => Math.floor(Math.random() * 50) + 1); // simulazione di un risultato di gioco randomico
        consoleSpy.mockImplementation(() => {});

        // Reimposta il valore di simulateGameCallCount a 0 prima di eseguire il test
        mainModule.simulateGameCallCount = 0;
    });


    afterEach(() => {
        consoleSpy.mockRestore();
        simulateGameSpy.mockRestore();
    });

    it('should calculate and print the correct statistics', () => {
        // Chiamiamo la funzione main dopo aver definito lo spy
        main();

        expect(simulateGameCallCount).toBe(1000);
        expect(simulateGameSpy).toHaveBeenCalledTimes(1000);
        expect(consoleSpy).toHaveBeenCalledTimes(3);
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Minimum calls to win:/));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Maximum calls to win:/));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Average calls to win:/));
    });
});

