function decompress(list) {
    if (list.length === 0) {
        return [];
    }

    return new Array(list[1]).fill(list[0]).concat(decompress(list.slice(2)));
}

let compressedList = ["A", 12, "B", 4, "A", 6, "B", 1];
console.log("Elenco compresso:", compressedList);
let decompressedList = decompress(compressedList);
console.log("Elenco decompresso:", decompressedList);