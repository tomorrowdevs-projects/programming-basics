function getNumOfDays(month, year) {
	let isLeapYear;
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
		isLeapYear = true;
	}

	if (month == 2) {
		if (isLeapYear) {
			return 29;
		} else {
			return 28;
		}
	} else if (month == 4 || month == 6 || month == 9 || month == 11) {
		return 30;
	} else {
		return 31;
	}
}

function isMagicDate(day, month, year) {
	let yearStr = String(year).slice(-2);
	if (day * month == yearStr) {
		return true;
	}
}

for (let y = 1900; y <= 2000; y++) {
	for (let m = 1; m <= 12; m++) {
		for (let d = 1; d <= getNumOfDays(m, y); d++) {
			if (isMagicDate(d, m, y)) {
				console.log(`${d}/${m}/${y}`);
			}
		}
	}
}
