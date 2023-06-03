function onlyWords(s) {
    const array = s.split(" ");
    const modifiedArray = array.map(word => {
        const modifiedWord = word.replace(/[^\w\s]|_/g, "");
        return modifiedWord;
    });
    return modifiedArray;
}

console.log(onlyWords("Contractions include: don’t, isn’t, and wouldn’t."))