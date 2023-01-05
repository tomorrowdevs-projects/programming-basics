const ROMAN_LETTER_VALUE = {
	i: 1,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000,
};

function recursiveRomanNumberConversion(
	romanNumber,
	totalValue = 0,
	letterCounter = {}
) {
	// Controllo che abbia un valore, se no ritorno 0
	if (!romanNumber) {
		return totalValue;
	}
	// Prendo la l'ultima lettera del numero romano
	let lastPosition = --romanNumber.length;
	const lastValue = romanNumber[lastPosition].toLowerCase();
	const lastLetterValue = ROMAN_LETTER_VALUE[lastValue];

	// Controllo che l'ultima lettera esiste
	if (!lastLetterValue) {
		return `[Invalid roman number] Letter "${lastValue.toUpperCase()}" not allowed!`;
	}

	// Se la lettera esiste e la lunghezza è 1 ritorno il valore
	if (romanNumber.length === 1) {
		totalValue += lastLetterValue;
		return totalValue;
	}

	// Se ho più di una lettera nel numero prendo la penultima lettera del numero romano
	let penultimatePosition = --lastPosition;
	const penultimateValue = romanNumber[penultimatePosition].toLowerCase();
	const penultimateLetterValue = ROMAN_LETTER_VALUE[penultimateValue];
	// Controllo se la seconda lettera esiste
	if (!penultimateLetterValue) {
		return `[Invalid roman number] Letter "${penultimateValue.toUpperCase()}" not allowed!`;
	}
	// Verifico se le due lettere sono uguali
	if (lastValue === penultimateValue) {
		// Imposto il numero massimo di ripetizione per la lettera
		let maxIdenticalLetter = 0;
		switch (lastValue) {
			case "i":
			case "x":
			case "c":
			case "m":
				maxIdenticalLetter = 2;
				break;
			case "v":
			case "l":
			case "d":
				maxIdenticalLetter = 0;
				break;
		}
		// Verifico che il valore del contatore esista, se non esiste lo imposto a 0
		if (!letterCounter[lastValue]) {
			letterCounter[lastValue] = 0;
		}
		// Verifico che il valore del contatore per quella lettera non sia già al massimo (saremmo nel caso in cui ho troppe lettere uguali consecutive)
		// Nel caso contrario ritorno errore
		if (letterCounter[lastValue] !== maxIdenticalLetter) {
			// Incremento il contatore della lettera
			letterCounter = {
				[lastValue]: letterCounter[lastValue]++,
				...letterCounter,
			};
		} else {
			return "[Invalid roman number] Too many consecutive identical letters!";
		}
	}

	let subtraction = 0;
	let subtractionVal1 = 0,
		subtractionVal2 = 0;
	// Controllo se il valore della penultima lettera è minore dell'ultima (per eventuale sottrazione)
	if (penultimateLetterValue < lastLetterValue) {
        // Se si, devo eseguire una sottrazione tra la penultima e l'ultima lettera
		subtraction = 1;
		subtractionVal1 = penultimateLetterValue;
		subtractionVal2 = lastLetterValue;
	}
	// Verifico presenza terzultimo valore
	if (romanNumber.length > 2) {
		const thirdLastPosition = --penultimatePosition;
		const thirdLastValue = romanNumber[thirdLastPosition].toLowerCase();
		const thirdLastLetterValue = ROMAN_LETTER_VALUE[thirdLastValue];
		// Se il valore del'ultima lettera è maggiore o uguale alla terzultima, ritorno errore
		if (lastLetterValue > thirdLastLetterValue) {
			return "[Invalid roman number] Wrong letter order!";
		}
		// Verifico che la terzultima non sia più piccola della penultima
		if (thirdLastLetterValue < penultimateLetterValue) {
            // Se si, devo eseguire una sottrazione tra la terzultima e la penultima lettera
			subtraction = 2;
			subtractionVal1 = thirdLastLetterValue;
			subtractionVal2 = penultimateLetterValue;
		}
	}
	if (subtraction > 0) {
		// Controllo che il simbolo rientri tra quelli previsti per la sottrazione
		switch (subtractionVal1) {
			case 1: // i
			case 10: // x
			case 100: // c
				// Controllo che il simbolo che si sottrae non sia minore di 1/10 del valore a cui è sottratto
				if (subtractionVal1 < subtractionVal2 / 10) {
					return "[Invalid roman number] Wrong letter order!";
				}
				switch (subtraction) {
					case 1:
						// Eseguo la sottrazione e sommo il risultato al totale
						totalValue += subtractionVal2 - subtractionVal1;
						// Elimino le ultime 2 lettere dalla stringa in base al tipo di sottrazione
						romanNumber = romanNumber.slice(0, -2);
						break;
					case 2:
						// Eseguo la sottrazione e la somma e sommo il risultato al totale
						totalValue +=
							subtractionVal2 - subtractionVal1 + lastLetterValue;
						// Elimino le ultime 3 lettere dalla stringa in base al tipo di sottrazione
						romanNumber = romanNumber.slice(0, -3);
						break;
				}
				// Proseguo con le lettere rimaste
				// Richiamo la funzione con la stringa ridotta, l'accumulatore e il contatore delle ripetizioni
				return recursiveRomanNumberConversion(
					romanNumber,
					totalValue,
					letterCounter
				);
				break;
			default:
				return "[Invalid roman number] Wrong letter order!";
		}
	}

	// Se non ho eccezioni
	// Elimino le ultime 2 lettere dalla stringa
	romanNumber = romanNumber.slice(0, -2);
	// Eseguo la somma e sommo il risultato al totale
	totalValue += penultimateLetterValue + lastLetterValue;
    // Richiamo la funzione con la stringa ridotta, l'accumulatore e il contatore delle ripetizioni
	return recursiveRomanNumberConversion(
		romanNumber,
		totalValue,
		letterCounter
	);
}

const romanNumber = prompt("Insert roman number:");
alert(recursiveRomanNumberConversion(romanNumber));

// Tests
const rm = [
{ rom: "I", val: 1 },
{ rom: "II", val: 2 },
{ rom: "III", val: 3 },
{ rom: "IV", val: 4 },
{ rom: "V", val: 5 },
{ rom: "VI", val: 6 },
{ rom: "VII", val: 7 },
{ rom: "VIII", val: 8 },
{ rom: "IX", val: 9 },
{ rom: "X", val: 10 },
{ rom: "XI", val: 11 },
{ rom: "XII", val: 12 },
{ rom: "XIII", val: 13 },
{ rom: "XIV", val: 14 },
{ rom: "XV", val: 15 },
{ rom: "XVI", val: 16 },
{ rom: "XVII", val: 17 },
{ rom: "XVIII", val: 18 },
{ rom: "XIX", val: 19 },
{ rom: "XX", val: 20 },
{ rom: "XXI", val: 21 },
{ rom: "XXII", val: 22 },
{ rom: "XXIII", val: 23 },
{ rom: "XXIV", val: 24 },
{ rom: "XXV", val: 25 },
{ rom: "XXVI", val: 26 },
{ rom: "XXVII", val: 27 },
{ rom: "XXVIII", val: 28 },
{ rom: "XXIX", val: 29 },
{ rom: "XXX", val: 30 },
{ rom: "XXXI", val: 31 },
{ rom: "XXXII", val: 32 },
{ rom: "XXXIII", val: 33 },
{ rom: "XXXIV", val: 34 },
{ rom: "XXXV", val: 35 },
{ rom: "XXXVI", val: 36 },
{ rom: "XXXVII", val: 37 },
{ rom: "XXXVIII", val: 38 },
{ rom: "XXXIX", val: 39 },
{ rom: "XL", val: 40 },
{ rom: "XLI", val: 41 },
{ rom: "XLII", val: 42 },
{ rom: "XLIII", val: 43 },
{ rom: "XLIV", val: 44 },
{ rom: "XLV", val: 45 },
{ rom: "XLVI", val: 46 },
{ rom: "XLVII", val: 47 },
{ rom: "XLVIII", val: 48 },
{ rom: "XLIX", val: 49 },
{ rom: "L", val: 50 },
{ rom: "LI", val: 51 },
{ rom: "LII", val: 52 },
{ rom: "LIII", val: 53 },
{ rom: "LIV", val: 54 },
{ rom: "LV", val: 55 },
{ rom: "LVI", val: 56 },
{ rom: "LVII", val: 57 },
{ rom: "LVIII", val: 58 },
{ rom: "LIX", val: 59 },
{ rom: "LX", val: 60 },
{ rom: "LXI", val: 61 },
{ rom: "LXII", val: 62 },
{ rom: "LXIII", val: 63 },
{ rom: "LXIV", val: 64 },
{ rom: "LXV", val: 65 },
{ rom: "LXVI", val: 66 },
{ rom: "LXVII", val: 67 },
{ rom: "LXVIII", val: 68 },
{ rom: "LXIX", val: 69 },
{ rom: "LXX", val: 70 },
{ rom: "LXXI", val: 71 },
{ rom: "LXXII", val: 72 },
{ rom: "LXXIII", val: 73 },
{ rom: "LXXIV", val: 74 },
{ rom: "LXXV", val: 75 },
{ rom: "LXXVI", val: 76 },
{ rom: "LXXVII", val: 77 },
{ rom: "LXXVIII", val: 78 },
{ rom: "LXXIX", val: 79 },
{ rom: "LXXX", val: 80 },
{ rom: "LXXXI", val: 81 },
{ rom: "LXXXII", val: 82 },
{ rom: "LXXXIII", val: 83 },
{ rom: "LXXXIV", val: 84 },
{ rom: "LXXXV", val: 85 },
{ rom: "LXXXVI", val: 86 },
{ rom: "LXXXVII", val: 87 },
{ rom: "LXXXVIII", val: 88 },
{ rom: "LXXXIX", val: 89 },
{ rom: "XC", val: 90 },
{ rom: "XCI", val: 91 },
{ rom: "XCII", val: 92 },
{ rom: "XCIII", val: 93 },
{ rom: "XCIV", val: 94 },
{ rom: "XCV", val: 95 },
{ rom: "XCVI", val: 96 },
{ rom: "XCVII", val: 97 },
{ rom: "XCVIII", val: 98 },
{ rom: "XCIX", val: 99 },
{ rom: "C", val: 100 },
{ rom: "CC", val: 200 },
{ rom: "CCC", val: 300 },
{ rom: "CD", val: 400 },
{ rom: "D", val: 500 },
{ rom: "DC", val: 600 },
{ rom: "DCC", val: 700 },
{ rom: "DCCC", val: 800 },
{ rom: "CM", val: 900 },
{ rom: "M", val: 1000 },
{ rom: "MIX", val: 1009 },
{ rom: "MCIX", val: 1109 },
{ rom: "MVIXX", val: "[Invalid roman number] Wrong letter order!" },
];

rm.forEach((num) => {
    const calcVal = recursiveRomanNumberConversion(num.rom);
    if (calcVal !== num.val) {
        console.log(
        `Numero romano: ${num.rom}`,
        `Valore calcolato: ${calcVal}`,
        `Valore corretto: ${num.val}`
        );
    }
});