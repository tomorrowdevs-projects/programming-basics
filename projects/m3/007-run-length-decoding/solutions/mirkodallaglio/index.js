function decompression (arrCompressed) {
    const result = [];
    if(arrCompressed.length === 0) return result

    else{
       const single = arrCompressed.splice(0,2)
       for(let i=0; i<single[1]; i++) result.push(single[0])
       return result.concat(decompression(arrCompressed)) 
    }
};

const compress = ["A",12,"B",4,"C",6,"D",1];
const compress1 = ["A",4,"B",4,"C",6,"D",1,"E",3,"F",9];
const compress2 = ["AC",12,"BDX",4,"CS",6,"D",1];

console.log(decompression(compress))
console.log(decompression(compress1))
console.log(decompression(compress2))