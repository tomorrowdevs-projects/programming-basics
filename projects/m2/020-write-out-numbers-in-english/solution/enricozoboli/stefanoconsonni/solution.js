function numToWords(num) {
	const underTwenty = {
		0: "zero",
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourteen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
	};

	const overTwenty = {
		20: "twenty",
		30: "thirty",
		40: "forty",
		50: "fifty",
		60: "sixty",
		70: "seventy",
		80: "eighty",
		90: "ninety",
	};

	if (num < 20) {
		return underTwenty[num];
	} else if (num < 100) {
		return overTwenty[num[0] * 10] + " " + underTwenty[num[1]];
	} else if (num < 1000) {
		if (num[1] == 0) {
			return underTwenty[num[0]] + " " + "hundred" + " " + underTwenty[num[2]];
		} else if (num[1] == 1) {
			return underTwenty[num[0]] + " " + "hundred" + " " + underTwenty[num.slice(1)];
		} else {
			return underTwenty[num[0]] + " " + "hundred" + " " + overTwenty[num[1] * 10] + " " + underTwenty[num[2]];
		}
	}
}

const inputNum = prompt("Please enter a number between 0 and 999:");
alert(numToWords(inputNum));
