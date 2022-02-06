function isSublist(smallList, largeList) {
	if (largeList.join("").indexOf(smallList.join("")) !== -1) {
		return true;
	} else {
		return false;
	}
}

const s = [1, 2];
const l = [1, 2, 3, 4];
console.log(isSublist(s, l));
